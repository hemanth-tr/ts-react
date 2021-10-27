import React from 'react';
import { Container, Nav, NavLink } from 'react-bootstrap';
import './css/menu.css';

export default class Menu extends React.Component {

    render() {
        return (
            <Container className='mt-2'>
                <Nav>
                    <NavLink>Home</NavLink>
                    <NavLink>Pay Bills</NavLink>
                    <NavLink>Zelle</NavLink>
                    <NavLink>eStatements</NavLink>
                </Nav>
            </Container>
        )
    }
}