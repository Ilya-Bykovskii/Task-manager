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

    function sendTaskOnServer(body, url) {
        const urlRequest = url || 'https://jsonplaceholder.typicode.com/posts',
            headers = {
                'Content-Type': 'application/json; charset=UTF-8'
            };
        return fetch(urlRequest, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers,
        }).then(response => {
            if (response.ok) {
                return response.json()
            }            
            return response.json().then(error => {
                const e = new Error('Что-то пошло не так')
                e.data = error
                throw e
            })
        })
    }

    function addTask(task) {
        let serverPost;

        sendTaskOnServer(task)
        .then(json => {task.id = json.id})
        .then(() => setTasks((prev) => {
            if (Array.isArray(prev)) {
                return [
                    ...prev,
                    task
                ]
            } else {
                return [
                    task,
                ]
            }
        }))
        .catch(err => console.error(err))
    }
    // console.log('render tasks-list')

    return (
        <section className="task-area">
            <div className="task-area__button-wrapper">
                <CreateTaskButtun
                    props={addTask}
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