import React, { Component } from 'react';
import CreateButton from '../buttons/CreateButton';
import SearchResultField from './SearchResultField'
import calendar from '../page/calendar.png';
import style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions/action';


export class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    clear = () => {
        document.getElementById('resultField').innerHTML = '';
    }

    searchQuestions = () => {
        let page = document.getElementById('param-page').value ? document.getElementById('param-page').value : '';
        let pagesize = document.getElementById('param-pagesize').value ? document.getElementById('param-pagesize').value : '';
        let fromdate = document.getElementById('param-fromdate').value ? document.getElementById('param-fromdate').value : '';
        let todate = document.getElementById('param-todate').value ? document.getElementById('param-todate').value : '';
        let order = document.getElementById('param-order').value ? document.getElementById('param-order').value : 'desc';
        let min = document.getElementById('param-min').value ? document.getElementById('param-min').value : '';
        let max = document.getElementById('param-max').value ? document.getElementById('param-max').value : '';
        let sort = document.getElementById('param-sort').value ? document.getElementById('param-sort').value : 'activity';
        let tagged = document.getElementById('param-tagged').value ? document.getElementById('param-tagged').value : '';
        let nottagged = document.getElementById('param-nottagged').value ? document.getElementById('param-nottagged').value : '';
        let intitle = document.getElementById('param-intitle').value ? document.getElementById('param-intitle').value : '';
        this.props.actions.getData(this.request(page, pagesize, fromdate, todate, order, min, max, sort, tagged, nottagged, intitle));
    }

    request = (page, pagesize, fromdate, todate, order, min, max, sort, tagged, nottagged, intitle) => {
        return 'page=' + page + '&pagesize=' + pagesize + '&fromdate=' + fromdate + 
        '&todate=' + todate + '&order=' + order + '&min=' + min + '&max=' + 
        '&sort=' + sort + '&tagged=' + tagged + '&nottagged=' + nottagged + 
        '&intitle=' + intitle + '&site=stackoverflow';
    }

    render() {
        return (
            <div className="srcField">
                <input id="param-page" type="text" placeholder="Page"></input>
                <input id="param-pagesize" type="text" placeholder="Pagesize"></input>
                <input id="param-fromdate" type="date" placeholder="Fromdate"></input>
                <img src={calendar} alt="date picker" id="datepickericon"></img>
                <input id="param-todate" type="date" placeholder="Todate"></input>
                <img src={calendar} alt="date picker" id="datepickericon"></img>
                <select name="order" id="param-order">
                    <option>desc</option>
                    <option>asc</option>
                </select>
                <input id="param-min" type="date" placeholder="Min"></input>
                <img src={calendar} alt="date picker" id="datepickericon"></img>
                <input id="param-max" type="date" placeholder="Max"></input>
                <img src={calendar} alt="date picker" id="datepickericon"></img>
                <select name="sort" id="param-sort">
                    <option>activity</option>
                    <option>votes</option>
                    <option>creation</option>
                    <option>relevance</option>
                </select>
                <input id="param-tagged" type="text" placeholder="Tagged"></input>
                <input id="param-nottagged" type="text" placeholder="Nottagged"></input>
                <input id="param-intitle" type="text" placeholder="Intitle"></input>
                <br/>
                <CreateButton onClick = { () => { this.searchQuestions() } } className = "searchButton" /*{style.searchButton}*/ inscription = "Search"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.app.getQuestions.data,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);