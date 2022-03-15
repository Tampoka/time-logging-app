import React from 'react';
import {EditableTimer} from '../EditableTimer/EditableTimer';

export const EditableTimersList = (props) => {
    const mappedTimers = props.timers.map(timer => (
        <EditableTimer
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
            onFormSubmit={props.onFormSubmit}
        />
    ))
    return (
        <div>{mappedTimers}</div>
    );
};

