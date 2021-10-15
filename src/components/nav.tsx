import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Navbar>{this.props.children}</Navbar>
        )
    }
}