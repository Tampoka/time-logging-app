import React from 'react';

export const TimerActionButton = ({onStartClick, onStopClick, timerIsRunning}) => {
    if (timerIsRunning) {
        return <button onClick={onStopClick}>Stop</button>
    } else {
        return <button onClick={onStartClick}>Start</button>
    }
}