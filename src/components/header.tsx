import React from 'react';
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light" style={{ flexDirection: 'column' }}>
                <Logo />
                <Container>
                    <Nav>
                        <NavLink>Home</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}