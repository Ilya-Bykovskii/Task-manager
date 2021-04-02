import React from 'react';

// Components:
import Header from './../Components/header/Header';
import TaskArea from './../Components/task/TaskArea';

// styles:
import './Home.style/Home.scss';
import './Comon.style/style.scss';

export default function Home() {
    return (
        <React.Fragment>
            <Header/>
            <main className='main'>
                <TaskArea/>
            </main>
        </React.Fragment>
    )
}
