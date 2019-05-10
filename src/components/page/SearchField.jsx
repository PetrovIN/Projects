import React, { Component } from 'react';
import CreateButton from '../buttons/CreateButton';
import calendar from '../page/calendar.png';
import style from './style.css';

export default class SearchField extends Component {
    constructor(props) {
        super(props);
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
                <input id="param-nottagged" type="text" placeholder="Notagged"></input>
                <input id="param-intitle" type="text" placeholder="Intitle"></input>
                <br/>
                <CreateButton onClick = { () => { console.log(this.props); } } className = "searchButton" /*{style.searchButton}*/ inscription = "Search"/>
            </div>
        )
    }
}