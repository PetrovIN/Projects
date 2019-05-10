import React, { Component } from 'react';

export default class CreateButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false
        };
    }

    render() {
        let inscription = !!this.props.inscription ? this.props.inscription : '';
        return (
            <button onClick = {this.props.onClick} className = {this.props.className} >
                {inscription}
            </button>
        )
    }
}