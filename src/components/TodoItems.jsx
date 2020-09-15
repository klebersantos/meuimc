import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/pt-br';


class TodoItems extends Component {
    constructor(props) {
        super();
        this.createTask = this.createTask.bind(this);
    }


    delete(key) {
        this.props.delete(key);

    }
    createTask(item) {
        Moment.globalFormat = 'D MMM YYYY';
        // localStorage.setItem('newItem', JSON.stringify(item));



        return (

            <li
                key={item.key}>
                {parseFloat(item.text).toFixed(2)}
                {item.msgIMC}
                <Moment format="DD/MM/YYYY"></Moment>
                <a onClick={() => this.delete(item.key)}>
                    <i className="far fa-times-circle"></i>
                </a>
                
            </li>
        );

    }


    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask)
        let data = localStorage.getItem('newItem');


        return (
            <ul className="theList">
                {listItems}  {data}
            </ul>
        );
    }
};

export default TodoItems;