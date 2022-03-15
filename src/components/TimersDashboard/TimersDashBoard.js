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
    }

    return (
        <div>
            <EditableTimersList timers={timers} onFormSubmit={handleEditFormSubmit}/>
            <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit}/>
        </div>
    );
};

