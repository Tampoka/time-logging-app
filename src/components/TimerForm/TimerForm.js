import React from 'react';
import s from './TimerForm.module.scss'

export const TimerForm = (props) => {
    const submitText = props.title ? 'Update' : 'Create'
    return (
        <div className={s.timerFormContainer}>
            <div className={s.content}>
                <div className={s.form}>
                    <div className={s.inputField}>
                        <label>Title</label>
                        <input type="text" defaultValue={props.title}/>
                    </div>
                    <div className={s.inputField}>
                        <label>Project</label>
                        <input type="text" defaultValue={props.project}/>
                    </div>
                    <div className={s.bottomButtons}>
                        <button>{submitText}</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

