import React, { Component } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

export class Header extends Component {

    render() {

        return (
            <div className="header anime-theme">
                
                <ul className="main-header-buttons">
                    <li><Link to="/" className="nav">Home</Link></li>
                    <li><Link to="/profile" className="nav">Profile</Link></li>
                    <li><Link to="/settings" className="nav">Settings</Link></li>
                    <li><Link to="/sign-out" className="nav">Sign Out</Link></li>
                </ul>

            </div>
        );
    }
}