import React from 'react';
import {TimerForm} from '../TimerForm/TimerForm';
import {BsPlusLg} from 'react-icons/bs'

export const ToggleableTimerForm = (props) => {
    if (props.isOpen) {
        return (
            <TimerForm/>
        )
    } else {
        return (
            <div>
                <button><i><BsPlusLg/></i></button>
            </div>
        )
    }
};

