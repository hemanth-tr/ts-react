import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from './logo';
import Utilities from './utilities';
import './css/utilitiesAndLogo.css'

export default class UtilitiesAndLogo extends React.Component {

    render() {
        return (
            <Container className='flex-direction-start'>
                <Logo />
                <Utilities />
            </Container>
        );
    }
}