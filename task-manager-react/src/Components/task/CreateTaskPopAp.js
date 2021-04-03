import React, {useState, } from 'react';

// Components
import Button from './../../Base-Components/Button';
import {X} from "phosphor-react";

// Style:
import './Styles/pop-app.scss';

export default function TaskPopApp({props}) {
    const [taskTitle, setTaskTitle] = useState(''),
        [taskBody, setTaskBody] = useState(''),
        [titlePlaceholder, setTitlePlaceholder] = useState('enter task-name');

    const closeHandler = props.closeHandler,
        addHandler = props.addHandler;
    
    function setNewTask() {
        let spaceCount = 0;
        for (let i = 0; i < taskTitle.length; i++) {
            if (taskTitle[i] === ' ') spaceCount++;
        }
        if (spaceCount === taskTitle.length) {
            setTitlePlaceholder('area can`t be empty!!!');
            return;
        }

        closeHandler();
        
        addHandler({
            title: taskTitle,
            body: taskBody,
            date: new Date().toString(),
        });
    }

    return(
        <section className="create-task">
            <div className="create-task__wrapper">
                <X 
                    onClick={closeHandler}   
                    className='create-task_close-btn'
                />
                <h4 className="create-task__title-text">
                    Create new Task!
                </h4>
                <input
                    className="create-task__title-input create-task__input"
                    type="text"
                    onChange={(e) => setTaskTitle(e.target.value)}
                    value={taskTitle}
                    placeholder={titlePlaceholder}
                />    
                <textarea
                    className="create-task__body-input create-task__input"
                    type="text"
                    onChange={(e) => setTaskBody(e.target.value)}
                    value={taskBody}
                    placeholder="enter task-description"
                />   
                <Button props={{
                        className: 'create-task__create-btn',
                        text: 'create task',
                        handler: setNewTask,
                    }}
                /> 
            </div>
        </section>
    )
}
