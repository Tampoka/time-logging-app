import React, {useEffect, useState} from 'react';
import {EditableTimersList} from '../EditableTimersList/EditableTimersList';
import {ToggleableTimerForm} from '../ToggleableTimerForm/ToggleableTimerForm';
import {newTimer} from '../../helpers/helpers';
import {
    getTimers,
    serverCreateTimer,
    serverDeleteTimer,
    serverStartTimer,
    serverStopTimer,
    serverUpdateTimer
} from '../../client/client';

export const TimersDashBoard = () => {
    /*      const timersArray = [
              {
                  title: 'Practice squat',
                  project: 'Gym Chores',
                  id: v4(),
                  elapsed: 5456099,
                  runningSince: Date.now(),
              },
              {
                  title: 'Bake squash',
                  project: 'Kitchen Chores',
                  id: v4(),
                  elapsed: 1273998,
                  runningSince: null,
              },
          ]*/

    const [timers, setTimers] = useState([])

    const loadTimersFromServer = () => {
        getTimers((serverTimers) => (
                setTimers(serverTimers)
            )
        )
    }

    const handleCreateFormSubmit = (timer) => {
        createTimer(timer)
    }

    const createTimer = (timer) => {
        const t = newTimer(timer)
        setTimers(timers.concat(t))
        serverCreateTimer(t)
    }

    const handleEditFormSubmit = (attrs) => {
        updateTimer(attrs);
    }

    const updateTimer = (attrs) => {
        const updatedTimersArray = timers.map((timer) => {
            if (timer.id === attrs.id) {
                return Object.assign({}, timer, {
                    title: attrs.title,
                    project: attrs.project,
                })
            } else {
                return timer
            }
        })
        setTimers(updatedTimersArray)
        serverUpdateTimer(attrs)
    }

    const handleTrashClick = (timerId) => {
        deleteTimer(timerId)
    }

    const deleteTimer = (timerId) => {
        const updatedTimersArray = timers.filter(timer => timer.id !== timerId)
        setTimers(updatedTimersArray)
        serverDeleteTimer({id: timerId})
    }

    const handleStartClick = (timerId) => {
        startTimer(timerId);
    }

    const handleStopClick = (timerId) => {
        stopTimer(timerId);
    }

    const startTimer = (timerId) => {
        const now = Date.now()
        const updatedTimersArray = timers.map((timer) => {
            if (timer.id === timerId) {
                return Object.assign({}, timer, {
                    runningSince: now,
                })
            } else {
                return timer
            }
        })
        //"optimistic updating" - updating the client locally before waiting to hear from the server
        setTimers(updatedTimersArray)
        serverStartTimer({id: timerId, start: now})
    }

    // instantaneous feedback vs noticeable delay between action and the response
    /*    const startTimer=(timerId)=>{
            const now=Date.now()
            serverStartTimer({id:timerId,start:now})
                .then(loadTimersFromServer)
        }*/

    const stopTimer = (timerId) => {
        const now = Date.now()
        const updatedTimersArray = timers.map((timer) => {
            if (timer.id === timerId) {
                const lastElapsed = now - timer.runningSince
                return Object.assign({}, timer, {
                    elapsed: timer.elapsed + lastElapsed,
                    runningSince: null,
                })
            } else {
                return timer
            }
        })
        setTimers(updatedTimersArray)
        serverStopTimer({id: timerId, stop: now})
    }

    useEffect(() => {
        loadTimersFromServer()
        setInterval(loadTimersFromServer, 5000)
    }, [])

    return (
        <div>
            <EditableTimersList
                timers={timers}
                onFormSubmit={handleEditFormSubmit}
                onTrashClick={handleTrashClick}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
        </div>
    );
};

