import React from 'react';
import {EditableTimersList} from '../EditableTimersList/EditableTimersList';
import {ToggleableTimerForm} from '../ToggleableTimerForm/ToggleableTimerForm';

export const TimersDashBoard = () => {
    return (
        <div>
            <EditableTimersList/>
            <ToggleableTimerForm isOpen={false}/>
        </div>
    );
};

