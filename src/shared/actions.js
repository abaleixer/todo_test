/**
 * AAB (Septiembre 20, 2018)
 * Acción: Agrega una nueva tarea
 * @param {Tarea nueva a crear} task
 */
const addTaskAtn = task => {
    return {
        type: 'ADD_TASK',
        task:  Object.assign({},  task),
    };
};

/**
 * AAB (Septiembre 22, 2018)
 * Acción: Obtiene los TODOS
 */
const getTodos = () => {
    return {
        type: 'GET_TODOS',
    };
};

/**
 * AAB (Septiembre 20, 2018)
 * Acción: elimina una tarea
 * @param {Id de la tarea a eliminar} id
 */
const deleteTaskAtn = id => {
    return {
        type: 'DELETE_TASK',
        id: id,
    };
};

/**
 * AAB (Septiembre 20, 2018)
 * Acción: Cambia de estado la tarea
 * @param {Id de la tarea a cambiar de estado} id
 */
const toggleTaskAtn = id => {
    return {
        type: 'TOGGLE_STATE',
        id: id,
    };
};

/**
 * AAB (Septiembre 22, 2018)
 * Acción: Permite la salida de un usuario
 */
const logoutSatate = () => {
    return {
        type: 'LOGOUT_STATE',
    };
};

/**
 * AAB (Septiembre 22, 2018)
 * Acción: Login del usuario
 * @param {Usuario registrado} user
 */
const loginState = (user) => {
    return {
        type: 'LOGIN',
        user,
    };
};

export { loginState, addTaskAtn, deleteTaskAtn, toggleTaskAtn, getTodos, logoutSatate };

// NOTA:
// export const addTodo = text => ({ type: 'ADD_TODO',    id: nextTodoId++,    text  })
// Ejemplo simplificando el codigo (fixBack)
