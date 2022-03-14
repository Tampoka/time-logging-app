import React, {useState} from 'react';
import {TimerForm} from '../TimerForm/TimerForm';
import {BsPlusLg} from 'react-icons/bs';
import s from './ToggleableTimerForm.module.scss'


export const ToggleableTimerForm = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleFormOpen = () => {
        setIsOpen(true)
    }
    const handleFormClose = () => {
        setIsOpen(false)
    }

    if (isOpen) {
        return (
            <TimerForm onFormClose={handleFormClose}/>
        )
    } else {
        return (
            <div className={s.plusButton}>
                <button onClick={handleFormOpen}><i><BsPlusLg/></i></button>
            </div>
        )
    }
};

