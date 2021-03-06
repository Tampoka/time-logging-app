import React, {useState} from 'react';
import {TimerForm} from '../TimerForm/TimerForm';
import {Timer} from '../Timer/Timer';

export const EditableTimer = (props) => {
    const [editFormOpen, setEditFormOpen] = useState(false)

    const handleEditClick = () => {
        openForm()
    }

    const handleFormClose = () => {
        closeForm()
    }

    const handleSubmit = (timer) => {
        props.onFormSubmit(timer)
        closeForm()
    }

    const closeForm = () => {
        setEditFormOpen(false)
    }

    const openForm = () => {
        setEditFormOpen(true)
    }

    if (editFormOpen) {
        return (
            <TimerForm
                id={props.id}
                title={props.title}
                project={props.project}
                onFormSubmit={handleSubmit}
                onFormClose={handleFormClose}/>
        )
    } else {
        return (
            <Timer
                key={props.id}
                id={props.id}
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
                onEditClick={handleEditClick}
                onTrashClick={props.onTrashClick}
                onStartClick={props.onStartClick}
                onStopClick={props.onStopClick}
            />
        );
    }

};

