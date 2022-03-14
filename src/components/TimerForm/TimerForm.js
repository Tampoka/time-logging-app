import React from 'react';
import s from './TimerForm.module.scss'
import {useInput} from '../../customHooks/useInput';

export const TimerForm = (props) => {
    const [titleProps]=useInput(props.title)
    const [projectProps]=useInput(props.project)
    console.log(titleProps.value)

    const submitText = props.title ? 'Update' : 'Create'
    return (
        <div className={s.timerFormContainer}>
            <div className={s.content}>
                <div className={s.form}>
                    <div className={s.inputField}>
                        <label>Title</label>
                        <input type="text" {...titleProps}/>
                    </div>
                    <div className={s.inputField}>
                        <label>Project</label>
                        <input type="text" {...projectProps}/>
                    </div>
                    <div className={s.bottomButtons}>
                        <button className={s.button}>{submitText}</button>
                        <button className={s.button} onClick={props.closeForm}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

