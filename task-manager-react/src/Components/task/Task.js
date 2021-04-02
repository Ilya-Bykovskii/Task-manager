import React, {useEffect, useRef, useState} from 'react';
import {TrashSimple} from 'phosphor-react';

// Styles:
import './Styles/task.scss';

export default function Task({taskData, deleteTask}) {
    const title = taskData.title,
        dateCreated = taskData.date,
        taskID = taskData.id;

    const task = useRef();
    
    const [fullBody] = useState(taskData.body),
        [body, setBody] = useState(taskData.body),
        [previeBody] = useState(body.slice(0, 50) + '...');

    console.log(`render task, id - ${taskID}`);

    useEffect(() => {
        if (body.length < 50) return;
        setBody(previeBody);
        task.current.addEventListener('mouseover', mouseOverHandler);
        task.current.addEventListener('mouseout', mouseOutHandler);
        // taskData.bindThis = taskData;
    }, [])
        
    function mouseOverHandler() {
        setBody(fullBody);
    }

    function mouseOutHandler() {
        setBody(previeBody);
    }

    return (
        <li className={`task task-area__item`} key={taskID} ref={task}>
            <h3 className="task__title">{title}</h3>
            <div className="task__info-wrapper">
                <pre className="task__time">{dateCreated}</pre>
                <TrashSimple 
                    size={23}
                    className="task__delete-btn" 
                    onClick={() => deleteTask(taskID)}   
                />
            </div>
            <p className="task__body">{body}</p>
        </li>
    )
}