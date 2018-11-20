import React, { Component } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

export class Header extends Component {

    render() {

        return (
            <div className="header anime-theme">
                
                <ul className="main-header-buttons">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/sign-out">Sign Out</Link></li>
                </ul>

            </div>
        );
    }
}