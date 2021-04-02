import React, {useState, useReducer} from 'react';

// Styles
import './Styles/task-area.scss';

// Components:
import Task from './Task';
import Button from './../../Base-Components/Button';
import TaskPopApp from './CreateTaskPopAp';

export default function TaskArea() {

    const [tasks, setTasks] = useState([{
            id: 0,
            title: 'Hello Task Manager!',
            date: new Date().toString(),
            body: 'Some Task...'
        }]),
        [countID, setCountID] = useState(0),
        [check, setCheck] = useState(false);
    
    const propsPopApp = {
        closeHandler: createPop,
        addHandler: setTasks,
        idCount: setCountID,
        actualId: countID,
    }
    
    function createPop() {
        setCheck(!check);
    }

    return (
        <section className="task-area">
            <div className="task-area__button-wrapper">
                <Button props={{
                    className: 'button-pop-app',
                    text: 'Create new task',
                    handler: createPop,
                }}/>
            </div>
            <ul className="task-area__wrapper">
                {tasks.length && 
                    tasks.map(element => <Task taskData={element}/>
                )}
            </ul>
            {check ? <TaskPopApp props={propsPopApp}/> : console.log('some')}
        </section>
    )
}