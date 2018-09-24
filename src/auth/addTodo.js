
import React, { Component } from 'react';
import store from '../shared/store';
import Task from '../shared/task';
import Style from '../shared/styles';
import { addTaskAtn } from '../shared/actions';

/**
 * AAB (Septiembre 16, 2018)
 * Componente donde se generan las  nuevas tareas
 * @class AddTodo
 * @extends {Component}
 */
class AddTodo extends Component {
    constructor() {
        super();
        const task = new Task(0, '');
        this.state = {
              task:  task,
              isValidate:false,
        };
    }
    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                isValidate: store.getState().isValidate,
            });
        });
    }

    updateInput(event) {
        if(event) {
            this.state.task.task =  event.target.value;
           if(event.target.value.length > 5)
           {
               this.state.isValidate = true;
           } else {
               this.state.isValidate = false;
           }
        } else {
            this.state.task.task = '';
        }
        this.setState({
            task: Object.assign({},  this.state.task),
        });
    }

    addTask() {
        if(this.state.task.task.length > 0) {
            store.dispatch(addTaskAtn( this.state.task));
           this.updateInput(null);
        }
     }

    render () {
        return (
           <div>
              <label style={Style.label}>Add Todo</label> <input style={Style.input} type="text" value={this.state.task.task}  onChange={this.updateInput.bind(this)}></input>
             { this.state.isValidate?'': <label className="aab-invalid">** Enter task </label>}
              <button disabled={!this.state.isValidate} style={Style.button} onClick={() => this.addTask()}>Add Todo</button>
           </div>
        );
    }
}

export default AddTodo;
