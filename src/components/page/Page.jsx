import React, { Component } from 'react';
import SearchField from './SearchField';
import SearchResultField from './SearchResultField';
import ErrorBoundary from './ErrorBoundary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';

export class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: []
        };
    }
    render() {
        return(
            <div className = "main">
                <ErrorBoundary>
                    {this.props.children}
                    <SearchField/>
                    <SearchResultField/>
                </ErrorBoundary>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.app.getQuestions.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);