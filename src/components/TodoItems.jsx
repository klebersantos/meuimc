import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/pt-br';


class TodoItems extends Component {
    constructor(props) {
        super();
        this.createTask = this.createTask.bind(this);
        this.gravar = this.gravar.bind(this);
    }

    
    gravar(key) {
        localStorage.getItem('items', key);
        console.log(localStorage)
    }


    delete(key) {
        this.props.delete(key);
    }
    createTask(item) {
        // const date = new Date();
        Moment.globalFormat = 'D MMM YYYY';
        
        
        return (
            <li
                key={item.key}>
                {parseFloat(item.text).toFixed(2)} 
                {item.msgIMC}
                <Moment format="DD/MM/YYYY"></Moment>
                <a onClick={() => this.delete(item.key)}>
                    <i className="far fa-times-circle"></i>
                </a>
                <a onClick={this.gravar}>gravarrrrrr</a>
            </li>
        )

    }


    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;