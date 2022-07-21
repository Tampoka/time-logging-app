import React, {useState} from 'react';
import {TimerForm} from '../TimerForm/TimerForm';
import {BsPlusLg} from 'react-icons/bs';
import s from './ToggleableTimerForm.module.scss'


export const ToggleableTimerForm = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleFormOpen = () => {
        setIsOpen(true)
    }
    const handleFormClose = () => {
        setIsOpen(false)
    }

    const handleFormSubmit = (timer) => {
        props.onFormSubmit(timer)
        setIsOpen(false)
    }
    if (isOpen) {
        return (
            <TimerForm
                onFormClose={handleFormClose}
                onFormSubmit={handleFormSubmit}/>
        )
    } else {
        return (
            <div className={s.plusButton}>
                <button  onClick={handleFormOpen}><i><BsPlusLg/></i></button>
            </div>
        )
    }
};

