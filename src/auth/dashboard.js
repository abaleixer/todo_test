
import React, { Component } from 'react';
import Style from '../shared/styles';
import Todos from './todos';
import AddTodo from './addTodo';
import store from '../shared/store';
import { fAuth, fProvider } from '../service/firebase-config';
import { logoutSatate, loginState } from '../shared/actions';

class Dashboard extends Component {
 constructor() {
     super();
     this.state = {
        user: null,
        tasks:[],
    };
    this.bindingState();
 }
 componentWillMount() {
     /**
      * Retorna el estado como usuario
      */
     fAuth.onAuthStateChanged(user => {
           store.dispatch(loginState(user));
     });
 }

/**
 * AAB (Septiembre 22, 2018)
 * Se suscribe a los cambios del estado general para realizar la sincronización de los datos con la vista
 */
bindingState() {
        store.subscribe(() => {
            this.setState({
                user: store.getState().user,
                tasks: store.getState().tasks,
            });
        });
}

 login() {
    fAuth.signInWithPopup(fProvider).then().catch();
 }

 logout() {
    fAuth.signOut().then(
        response => store.dispatch(logoutSatate())
    ).catch();
 }

     render() {
         return (
             <div>
                 <nav style={Style.nav}>
                     <div style={Object.assign({}, Style.navHeader, Style.navStart)}>
                         <span style={Style.navSpan}>Todos
                           <span className="aab-count">
                             <div> <i className="fa fa-check"></i> <span> {this.state.tasks.reduce((total, task)  => {total[task.done] = (total[task.done] || 0) +1; return total; }, {}).false} </span> </div>
                             <div> <i className="fa fa-close"></i> <span> {this.state.tasks.reduce((total, task)  => {total[task.done] = (total[task.done] || 0) +1; return total; }, {}).true} </span></div>
                            </span>
                         </span>
                     </div>
                     <div style={Object.assign({}, Style.navHeader, Style.navEnd)} >
                         <span style={Style.navSpan}>
                         {
                             this.state.user?
                             <div className="aab-flex">
                                <img style={Style.avatar}  src={this.state.user.photoURL}/>
                                <span> {this.state.user.displayName}</span>
                                <button onClick={() => this.logout()} style={Style.button}>Logout</button>
                             </div>:
                             <button onClick={() => this.login()} style={Style.button}>Login</button>
                         }
                         </span>
                     </div>
                 </nav>
                 {
                  this.state.user?
                 <div style={Style.card}>
                      <AddTodo/>
                       <Todos/>
                 </div>
                 : <div className="aab-back">
                     <div>
                    <span>  <i className="fa fa-check-square-o aab-i"></i> Task Manager</span>
                    <br></br>
                    <br></br>
                     <span> <i className="fa fa-check-square-o aab-i"></i>  To start with your tasks; you can login with your google account</span>
                     </div>
                 </div>
                 }
             </div>
         );
     }
}
export default Dashboard;
