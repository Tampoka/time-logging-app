import React from 'react';
import {EditableTimersList} from '../EditableTimersList/EditableTimersList';
import {ToggleableTimerForm} from '../ToggleableTimerForm/ToggleableTimerForm';
import {v4} from 'uuid';

export const TimersDashBoard = () => {
    const timers = [
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
    return (
        <div>
            <EditableTimersList timers={timers}/>
            <ToggleableTimerForm/>
        </div>
    );
};

