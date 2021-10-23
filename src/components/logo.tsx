import React, { CSSProperties } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from './logo.png';

interface IProps {
    style?: CSSProperties;
}
interface IState { }

export default class Logo extends React.Component<IProps, IState> {
    style: CSSProperties;
    constructor(props: IProps) {
        super(props);
        this.style = props.style == undefined ? { maxHeight: 80 } : props.style;
    }

    render() {
        return (
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} style={this.style} />
                </Navbar.Brand>
            </Container>
        )
    }
}