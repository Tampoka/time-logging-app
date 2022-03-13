import React from 'react';
import s from './Timer.module.scss'
import {renderElapsedString} from '../../helpers/helpers';
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

export const Timer = (props) => {
    const elapsedString = renderElapsedString(props.elapsed)
    return (
        <div className={s.timerContainer}>
            <div className={s.content}>
                <div className={s.header}>
                    <h3>{props.title}</h3>
                </div>
                <div className={s.meta}>{props.project}</div>
                <div className={s.description}>
                    <h2>{elapsedString}</h2>
                </div>
                <div className={s.extraContent}>
                    <span><i><AiFillEdit/></i></span>
                    <span><i><BsFillTrashFill/></i></span>
                </div>
                <div className={s.bottomButton}>
                    <button>Start</button>
                </div>
            </div>
        </div>
    );
};

