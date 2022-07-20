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

    const createTimer = async(timer) => {
        const t = newTimer(timer)
        await serverCreateTimer(t)
            loadTimersFromServer()

    }

    const handleEditFormSubmit = (attrs) => {
        updateTimer(attrs);
    }

    const updateTimer = async(attrs) => {
        // const updatedTimersArray = timers.map((timer) => {
        //     if (timer.id === attrs.id) {
        //         return Object.assign({}, timer, {
        //             title: attrs.title,
        //             project: attrs.project,
        //         })
        //     } else {
        //         return timer
        //     }
        // })
        // setTimers(updatedTimersArray)
        await serverUpdateTimer(attrs)
        loadTimersFromServer()
    }

    const handleTrashClick =(timerId) => {
        deleteTimer(timerId)
    }

    const deleteTimer = async(timerId) => {
        const updatedTimersArray = timers.filter(timer => timer.id !== timerId)
        await serverDeleteTimer({id: timerId})
        loadTimersFromServer()
    }

    const handleStartClick = (timerId) => {
        startTimer(timerId);
    }

    const handleStopClick = (timerId) => {
        stopTimer(timerId);
    }

    const startTimer = async(timerId) => {
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
        await serverStartTimer({id: timerId, start: now})
        loadTimersFromServer()
    }

    // instantaneous feedback vs noticeable delay between action and the response
    /*    const startTimer=(timerId)=>{
            const now=Date.now()
            serverStartTimer({id:timerId,start:now})
                .then(loadTimersFromServer)
        }*/

    const stopTimer = async(timerId) => {
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
        await serverStopTimer({id: timerId, stop: now})
        loadTimersFromServer()
    }

    useEffect(() => {
        loadTimersFromServer()
        // setInterval(loadTimersFromServer, 5000)
    }, [])

    console.log(timers)

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

