import React from 'react';
import {Link} from 'react-router-dom';

// Styles:
import './style/nav-bar.scss';

export default function NavNar() {
    return(
        <nav className="header__nav-bar nav-bar">
            <ul className="nav-bar__wrapper">
                <li>
                    <Link 
                        to='/' 
                        className="nav-bar__item"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='/about'
                        className="nav-bar__item"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}