import React from 'react';

// Styles:
import './About.style/About.scss';
import './Comon.style/style.scss';

// Components: 
import Header from './../Components/header/Header';
import AboutContent from './../Components/About-info/AboutContent';

export default function About() {
    return (
        <React.Fragment>
            <Header/>
            <main className='main'>
                <AboutContent/>
            </main>
        </React.Fragment>
    )
}