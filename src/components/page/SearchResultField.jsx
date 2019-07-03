import React, { Component } from 'react';
import style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';

export class SearchResultField extends Component {
    constructor(props) {
        super(props);
    }

    getItems() {
        let questions = this.props.data;
        console.log(questions);
        let code = document.getElementById('myField');
        for (let key in questions) {
            if (key === 'items') {
                let span = document.createElement('span');
                let br = document.createElement('br');
                span.innerHTML = '{';
                code.appendChild(span);
                code.appendChild(br);
            }
            let span = document.createElement('span');
            span.innerHTML = '  ';
            code.appendChild(span);
            span = document.createElement('span');
            let br = document.createElement('br');
            span.innerHTML = key + ':';
            code.appendChild(span);
            code.appendChild(br);
            if (key === 'items') {
                span = document.createElement('span');
                span.innerHTML = '[';
                code.appendChild(span);
                code.appendChild(br);
                span = document.createElement('span');
                span.innerHTML = '   ';
                code.appendChild(span);
                span = document.createElement('span');
                br = document.createElement('br');
                span.innerHTML = '{';
                code.appendChild(span);
                code.appendChild(br);
            } else {
                span = document.createElement('span');
                span.innerHTML = questions[key];
                code.appendChild(span);
                code.appendChild(br);
            }
            for (let key2 in questions[key]) {
                for (let key3 in questions[key][key2]) {
                    span = document.createElement('span');
                    span.innerHTML = '     ';
                    code.appendChild(span);
                    if (key3 === 'tags') {
                        span = document.createElement('span');
                        br = document.createElement('br');
                        span.innerHTML = key3 + ':' + ' [';
                        code.appendChild(span);
                        code.appendChild(br);
                    }
                    if (key3 === 'owner') {
                        span = document.createElement('span');
                        br = document.createElement('br');
                        span.innerHTML = '],';
                        code.appendChild(span);
                        code.appendChild(br);
                        span = document.createElement('span');
                        span.innerHTML = '     ';
                        code.appendChild(span);
                        span = document.createElement('span');
                        br = document.createElement('br');
                        span.innerHTML = key3 + ':' + ' {';
                        code.appendChild(span);
                        code.appendChild(br);
                    }
                    if (questions[key][key2][key3] instanceof Object) {
                        for (let key4 in questions[key][key2][key3]) {
                            span = document.createElement('span');
                            span.innerHTML = '       ';
                            code.appendChild(span);
                            if (questions[key][key2][key3] instanceof Array) {
                                span = document.createElement('span');
                                br = document.createElement('br');
                                span.innerHTML = questions[key][key2][key3][key4];
                                code.appendChild(span);
                                code.appendChild(br);
                            } else {
                                if (key4 === ('user_id') || ('profile_image') || ('link')) {
                                    span = document.createElement('span');
                                    span.innerHTML = key4 + ':';
                                    code.appendChild(span);
                                    let a = document.createElement('a');
                                    a.title = questions[key][key2][key3][key4];
                                    if ( key4 === 'user_id') {
                                        a.href = 'https://stackoverflow.com/u/' + questions[key][key2][key3][key4];
                                    }
                                    if (key4 === 'profile_image') {
                                        a.href = questions[key][key2][key3][key4];
                                    }
                                    if (key4 === 'link') {
                                        a.href = questions[key][key2][key3][key4];
                                    }
                                    a.target = '_blank';
                                    span = document.createElement('span');
                                    br = document.createElement('br');
                                    span.innerHTML = questions[key][key2][key3][key4];
                                    a.appendChild(span);
                                    code.appendChild(a);
                                    code.appendChild(br);
                                    if (key4 === 'link') {
                                        span = document.createElement('span');
                                        span.innerHTML = '     ';
                                        code.appendChild(span);
                                        span = document.createElement('span');
                                        br = document.createElement('br');
                                        span.innerHTML = '},';
                                        code.appendChild(span);
                                        code.appendChild(br);
                                    }
                                } 
                            }
                        }
                    } else {
                        if (key3 === ('question_id') || ('link')) {
                            span = document.createElement('span');
                            span.innerHTML = key3 + ':';
                            code.appendChild(span);
                            let a = document.createElement('a');
                            a.title = questions[key][key2][key3];
                            if ( key3 === 'question_id') {
                                a.href = 'https://stackoverflow.com/q/' + questions[key][key2][key3];
                            }
                            if (key3 === 'link') {
                                a.href = questions[key][key2][key3];
                            }
                            a.target = '_blank';
                            span = document.createElement('span');
                            br = document.createElement('br');
                            span.innerHTML = questions[key][key2][key3];
                            a.appendChild(span);
                            code.appendChild(a);
                            code.appendChild(br);
                            if (key3 === 'title') {
                                span = document.createElement('span');
                                span.innerHTML = '   ';
                                code.appendChild(span);
                                span = document.createElement('span');
                                br = document.createElement('br');
                                span.innerHTML = '}';
                                code.appendChild(span);
                                code.appendChild(br);
                                span = document.createElement('span');
                                span.innerHTML = '  ';
                                code.appendChild(span);
                                span = document.createElement('span');
                                br = document.createElement('br');
                                span.innerHTML = '],';
                                code.appendChild(span);
                                code.appendChild(br);
                            }
                        }
                    }
                }
            }
            if (key === 'quota_remaining') {
                let span = document.createElement('span');
                let br = document.createElement('br');
                span.innerHTML = '}';
                code.appendChild(span);
                code.appendChild(br);
            }
        }
    }

    render() {
        return(
            <div id="resultField">
                <pre>
                    <code id="myField">
                        { this.getItems() }
                    </code>
                </pre>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.app.getQuestions.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultField);