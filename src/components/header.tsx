import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './header-components/menu';
import UtilitiesAndLogo from './header-components/utilitiesAndLogo';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light" style={{ flexDirection: 'column' }}>
                <UtilitiesAndLogo />
                <Menu />
            </Navbar>
        )
    }
}