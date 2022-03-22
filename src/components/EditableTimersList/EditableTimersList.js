import React from 'react';
import {EditableTimer} from '../EditableTimer/EditableTimer';
import s from './EditableTimerList.module.scss'

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
            onTrashClick={props.onTrashClick}
            onStartClick={props.onStartClick}
            onStopClick={props.onStopClick}
        />
    ))
    return (
        <div className={s.timersList}>{mappedTimers}</div>
    );
};
