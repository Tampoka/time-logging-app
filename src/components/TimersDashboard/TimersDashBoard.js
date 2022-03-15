import React, {useState} from 'react';
import {EditableTimersList} from '../EditableTimersList/EditableTimersList';
import {ToggleableTimerForm} from '../ToggleableTimerForm/ToggleableTimerForm';
import {v4} from 'uuid';
import {newTimer} from '../../helpers/helpers';

export const TimersDashBoard = () => {
    const timersArray = [
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
    ]

    const [timers, setTimers] = useState(timersArray)

    const handleCreateFormSubmit = (timer) => {
        createTimer(timer)
    }

    const createTimer = (timer) => {
        const t = newTimer(timer)
        setTimers(timers.concat(t))
    }

    return (
        <div>
            <EditableTimersList timers={timers}/>
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
        </div>
    );
};

