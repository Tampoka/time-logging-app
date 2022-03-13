import React from 'react';
import {TimerForm} from '../TimerForm/TimerForm';
import {BsPlusLg} from 'react-icons/bs';
import s from './ToggleableTimerForm.module.scss'


export const ToggleableTimerForm = (props) => {
    if (props.isOpen) {
        return (
            <TimerForm/>
        )
    } else {
        return (
            <div className={s.plusButton}>
                <button><i><BsPlusLg/></i></button>
            </div>
        )
    }
};

