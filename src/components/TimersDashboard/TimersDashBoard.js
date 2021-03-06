import React, {useEffect, useState} from 'react';
import {EditableTimersList} from '../EditableTimersList/EditableTimersList';
import {ToggleableTimerForm} from '../ToggleableTimerForm/ToggleableTimerForm';
import {newTimer} from '../../helpers/helpers';
import {
    getTimer,
    getTimers,
    serverCreateTimer,
    serverDeleteTimer,
    serverStartTimer,
    serverStopTimer,
    serverUpdateTimer
} from '../../client/client';

export const TimersDashBoard = () => {

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

    const createTimer = async (timer) => {
        const t = newTimer(timer)
        await serverCreateTimer(t)
        loadTimersFromServer()

    }

    const handleEditFormSubmit = (attrs) => {
        updateTimer(attrs);
    }

    const updateTimer = async (attrs) => {
        await serverUpdateTimer(attrs)
        loadTimersFromServer()
    }

    const handleTrashClick = (timerId) => {
        deleteTimer(timerId)
    }

    const deleteTimer = async (timerId) => {
        await serverDeleteTimer({id: timerId})
        loadTimersFromServer()
    }

    const handleStartClick = (timerId) => {
        startTimer(timerId);
    }

    const handleStopClick = (timerId) => {
        stopTimer(timerId);
    }

    const startTimer = async (timerId) => {
        const now = Date.now()
        await serverStartTimer({id: timerId, start: now})
        loadTimersFromServer()
    }

    const stopTimer = async (timerId) => {
        const now = Date.now()
        const timer = await getTimer(timerId)
        const lastElapsed = (now - timer.runningSince) + timer.elapsed

        await serverStopTimer({id: timerId, stop: lastElapsed})
        loadTimersFromServer()
    }

    useEffect(() => {
        loadTimersFromServer()
        // setInterval(loadTimersFromServer, 5000)
    }, [])

    return (
        <div>
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
            <EditableTimersList
                timers={timers}
                onFormSubmit={handleEditFormSubmit}
                onTrashClick={handleTrashClick}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            />
        </div>
    );
};

