import React from 'react';

// Styles:
import './style/header.scss';
import './style/logo.scss'

// Components:
import NavBar from './NavBar';

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo">Task Manager</h1>
            <NavBar/>
        </header>
    )
}