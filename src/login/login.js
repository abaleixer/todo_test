import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import Style from '../shared/styles'

/**
 * AAB (Septiembre 19, 2018)
 * Panel principal de autenticación
 * @class Login
 * @extends {Component}
 */
class Login extends Component {

    constructor() {
        super()
    }

    onInit() {
   
        fAuth.signInWithPopup(fProvider).then(
            response => console.log(response)
        ).catch()}
        render() {
        return (
          <Router>
             <div style={Object.assign({}, Style.card,Style.cardM)}>
             <ul>
               <Link  style={Style.button} to="/">Login</Link>
               <Link  style={Style.button}  to="/register">Register</Link>
             </ul>
             <Route exact path="/" component={LoginIn}/> 
             <Route path="/register" component={Register}/>
             <button  style={Style.button} >Ingresar</button>
            </div>
         </Router>
        );
    }
}

/**
 * AAB (Septiembre 19, 2018)
 * Formulario de Login
 * @class LoginIn
 * @extends {Component}
 */
class LoginIn extends Component {
    render() {
        return (
            <div id="loginSection">
            <h1 style={Style.titleM}>  Login </h1> 
           <label style={Style.label}>Email</label> <input style={Style.input} type="email"></input>
           <label style={Style.label}>Password</label><input style={Style.input} type="password"></input>
           </div>
        );
    }
} 

/**
 * AAB (Septiembre 19, 2018)
 * Formulario de registro
 * @class Register
 * @extends {Component}
 */
class Register extends Component {
    render() {
        return (
            <div id="registerSection">
            <h1 style={Style.titleM}>  Register </h1> 
           <label style={Style.label}>Email</label> <input style={Style.input} type="email"></input>
           <label style={Style.label}>Name</label> <input style={Style.input} type="text"></input>
           <label style={Style.label}>Password</label><input style={Style.input} type="password"></input>
           </div>
        );
    }
} 

export default Login;