import React from 'react';

interface ICurrentDateState {
    date: Date;
}

interface IProps {

}

export default class CurrentDate extends React.Component<IProps, ICurrentDateState> {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        const date = this.state.date.toDateString();
        return (
            <span>
                {date}
            </span>
        )
    }
}