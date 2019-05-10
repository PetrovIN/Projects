import React, { Component } from 'react';

export default class Inscription extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={this.props.className}>{this.props.inscription}</div>
        )
    }
}