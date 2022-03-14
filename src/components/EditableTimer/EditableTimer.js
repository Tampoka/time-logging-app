import React, {useState} from 'react';
import {TimerForm} from '../TimerForm/TimerForm';
import {Timer} from '../Timer/Timer';

export const EditableTimer = (props) => {
    const [editFormOpen, setEditFormOpen] = useState(true)
    if (editFormOpen) {
        return (
            <TimerForm
                id={props.id}
                title={props.title}
                project={props.project}/>
        )
    } else {
        return (
            <Timer
                id={props.id}
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}/>
        );
    }

};

