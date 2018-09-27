import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) => {
    if(action.type === 'ADD_TASK') {
        // BEGIN dar id de la tarea (NOTA:Esto soluciona el error de id cuando se eliminan alguna) (fixBack)
        const listId = [];
        state.tasks.map(task => {listId.push(task.id);} );
        const index = listId.length > 0? Math.max(...listId):0;
        action.task.id =  index+1;
        // END dar id de la tarea
        action.task.date = new Date();
        return {
            user: state.user,
            tasks: state.tasks.concat(action.task),
            isValidate: false,
        };
    } else if(action.type === 'DELETE_TASK') {
        return {
            user: state.user,
            tasks:  state.tasks.filter(task => task.id !== action.id),
        };
    } else if(action.type === 'TOGGLE_STATE') {
         state.tasks.map(task => {
                if(task.id === action.id) {
                    task.done = !task.done;
                }
             });
        return {
            user: state.user,
            tasks:  state.tasks.slice(),
        };
    } else if(action.type === 'LOGOUT_STATE') {
       return {
        user: null,
           tasks: [],
       };
   } else if(action.type === 'LOGIN') {
                return {
                    user: action.user,
                    tasks: [],
                };
            }
    return state;
};

/**
 * AAB (Septiembre 21, 2018)
 * Realiza el tracking de todas las peticiones de la aplicación
 * @param { Memoria } store
 */
const logger = store => next => action => {
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};

export default createStore(reducer, { tasks:[] }, applyMiddleware(logger));
