import React from 'react';
import s from './TimerActionButton.module.scss'

export const TimerActionButton = ({onStartClick, onStopClick, timerIsRunning}) => {
    if (timerIsRunning) {
        return <button onClick={onStopClick}>Stop</button>
    } else {
        return <button onClick={onStartClick}>Start</button>
    }
}