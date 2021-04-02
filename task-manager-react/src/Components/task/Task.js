import React, {useEffect, useRef, useState} from 'react';

import './Styles/task.scss';

export default function Task({taskData}) {
    const title = taskData.title,
        dateCreated = taskData.date,
        taskID = taskData.id;
    
    const task = useRef();
    
    const [fullBody, setFullBody] = useState(taskData.body),
        [body, setBody] = useState(taskData.body),
        [previeBody, setPrevieBody] = useState(body.slice(0, 50) + '...');

    useEffect(() => {
        if (body.length < 50) return;
        setBody(previeBody);
        task.current.addEventListener('mouseover', mouseOverHandler);
        task.current.addEventListener('mouseout', mouseOutHandler);
    }, [taskData])
        
    function mouseOverHandler() {
        setBody(fullBody);
    }

    function mouseOutHandler() {
        setBody(previeBody);
    }

    return (
        <li className={`task task-area__item`} key={taskID} ref={task}>
            <h3 className="task__title">{title}</h3>
            <pre className="task__time">{dateCreated}</pre>
            <p className="task__body">{body}</p>
        </li>
    )
}