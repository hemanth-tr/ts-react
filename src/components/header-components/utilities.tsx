import React from 'react';
import './css/utilities.css';
export default class Utilities extends React.Component {

    render() {
        return (
            <nav>
                <ul className='utilities'>
                    <li><a href='#'>Settings</a></li>
                    <li><a href='#'>Mobile</a></li>
                    <li><a href='#'>Chat</a></li>
                    <li><a href='#'>Logout</a></li>
                </ul>
            </nav>
        );
    }
}