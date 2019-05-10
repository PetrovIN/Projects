import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchResultField from './SearchResultField';
import ErrorBoundary from './ErrorBoundary';

export default class Page extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="mainPage">
                <ErrorBoundary>
                    {this.props.children}
                    <SearchField/>
                    <SearchResultField/>
                </ErrorBoundary>
            </div>
        )
    }
}