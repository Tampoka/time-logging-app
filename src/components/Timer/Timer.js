import React, {useEffect, useReducer, useState} from 'react';
import s from './Timer.module.scss'
import {renderElapsedString} from '../../helpers/helpers';
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import {TimerActionButton} from '../TimerActionButton/TimerActionButton';

export const Timer = (props) => {
    //emulating forceUpdate for functional component
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [stopTime, setStopTime] = useState(false)
    let elapsedString = renderElapsedString(props.elapsed, props.runningSince)

    const handleTrashClick = () => {
        props.onTrashClick(props.id)
    }

    const handleStartClick = () => {
        setStopTime(false)
        props.onStartClick(props.id)
    }

    const handleStopClick = () => {
        setStopTime(true)
        props.onStopClick(props.id)
    }


    useEffect(() => {
        if (stopTime) return
        const forceUpdateInterval = setInterval(() => forceUpdate(), 50)
        return () => clearInterval(forceUpdateInterval)
    })

    return (
        <div className={s.timerContainer}>
            <div className={s.content}>
                <div className={s.header}>
                    <h3>{props.title}</h3>
                </div>
                <div className={s.meta}>{props.project}</div>
                <div className={s.timer}>
                    <h2>{elapsedString}</h2>
                </div>
                <div className={s.extraContent}>
                    <span onClick={props.onEditClick}><i><AiFillEdit/></i></span>
                    <span><i><BsFillTrashFill onClick={handleTrashClick}/></i></span>
                </div>
                <div className={s.bottomButton}>
                    <TimerActionButton
                        timerIsRunning={!!props.runningSince}
                        onStartClick={handleStartClick}
                        onStopClick={handleStopClick}
                    />
                </div>
            </div>
        </div>
    );
};

