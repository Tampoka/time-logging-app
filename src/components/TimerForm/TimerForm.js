import React from 'react';
import s from './TimerForm.module.scss'
import {useInput} from '../../customHooks/useInput';

export const TimerForm = (props) => {
    const [titleProps] = useInput(props.title || '')
    const [projectProps] = useInput(props.project || '')

    console.log(props)
    const handleSubmit = () => {
        props.onFormSubmit({
            id: props.id||null,
            title: titleProps.value,
            project: projectProps.value
        })
    }

    const submitText = props.id ? 'Update' : 'Create'
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
                        <button className={s.button}
                                onClick={handleSubmit}>{submitText}</button>
                        <button className={s.button} onClick={props.onFormClose}>Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

