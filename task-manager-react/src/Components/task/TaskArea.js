import React, {useState} from 'react';

// Styles
import './Styles/task-area.scss';

// Components:
import Task from './Task';
import CreateTaskButtun from './CreateTaskButtun';

export default function TaskArea() {

    const [tasks, setTasks] = useState([{
            id: 0,
            title: 'Hello Task Manager!',
            date: new Date().toString(),
            body: 'Some Task...',
        }]),
        [countID, setCountID] = useState(1);

    const emptyTaskList = <span>Create new task!</span>;
    
    function deleteTaskHandeler(id) {
        const deletedIndex = tasks.findIndex(elem => elem.id === id);
        let newTasks = tasks.slice(0, deletedIndex);
        newTasks.push(...tasks.slice(deletedIndex + 1));

        setTasks(newTasks);
    }  

    // console.log('render tasks-list')

    return (
        <section className="task-area">
            <div className="task-area__button-wrapper">
                <CreateTaskButtun
                    props={{setTasks, setCountID, countID}}
                />
            </div>
            <ul className="task-area__wrapper">
                {tasks.length ? 
                    tasks.map(element => {
                        return  <Task 
                                    taskData={element} 
                                    deleteTask={deleteTaskHandeler}
                                />}
                ) : emptyTaskList}
            </ul>
        </section>
    )
}