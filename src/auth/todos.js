import React, {Component} from 'react';
import Style from '../shared/styles';
import Task from '../shared/task'
import store from '../shared/store'
import { deleteTaskA, deleteTaskAtn, toggleTaskAtn } from '../shared/actions';

/**
 * AAB (Septiembre 16, 2018)
 * 
 * @class Todos
 * @extends {Component}
 */
class Todos extends Component {
    constructor () {
        super();
       this.onInit();
       this.bindingState();
    }

    /**
     * AAB (Septiembre 17, 2018)
     * Declara las variables de inicio para la vista
     * @memberof Todos
     */
    onInit() {
        const task = new Task();
        this.state = {
            tasks:[task]
        }
        this.state.tasks = [];
    }

    /**
     * AAB (Septiembre 17, 2018)
     * Se suscribe a los cambios del estado general para realizar la sincronización de los datos con la vista
     * @memberof Todos
     */
    bindingState(){
        store.subscribe(() => {
            this.setState({               
                tasks: store.getState().tasks
            })
        })
    }
    
    /**
     * AAB (Septiembre 17, 2018)
     * Método de `JSX` encargado de renderizar la vista
     */
    render() {
        return(
            <div className="aab-list-item">
            { this.state.tasks.length>0 ? <h1 style={Style.titleM}>Task list</h1>:''}
                <ul>
                    {this.state.tasks.map(task =>
                       <li className="aab-list-item mdc-ripple-upgraded aab-table" key={task.id}>                      
                       <span className="aab-span-multi">
                           <span  className={!task.done? "aab-span-title": "aab-span-title aab-through"} >{task.task}</span>
                           <span className="aab-span-titleS">Generated date: {task.date.toLocaleDateString()}: { task.date.toLocaleTimeString('en-US')}</span>
                       </span>
                        <span className="aab-icon-right"  onClick={() => this.toggleTask(task.id)}>  {task.done ?   <span  className="aab-todo" style={Style.buttonIcon}><i className="fa fa-close"></i></span> :   <span className="aab-ok" style={Style.buttonIcon}><i className="fa fa-check"></i></span>}</span>
                       <span className="aab-delete" style={Style.buttonIcon} onClick={() => this.deleteTask(task.id)}><i className="fa fa-trash"></i></span>
                       </li>
                    )}
                </ul>
            </div>
        );
    }
    
    /**
     * AAB (Septiembre 17, 2018)
     * Cambia el estado de la tarea de pendiente a realizada
     * @memberof Todos
     */
    toggleTask (id) {        
        store.dispatch(toggleTaskAtn(id));
    }

    /**
     * AAB (Septiembre 17, 2018)
     * Elimina la tarea por el identificador
     * @param {*} id
     * @memberof Todos
     */
    deleteTask(id){
        store.dispatch(deleteTaskAtn(id));
    }
}

export default Todos;
