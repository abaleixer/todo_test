
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dashboard from './auth/dashboard';

class App extends Component {
   render() {
        return (
             <Dashboard/>
        );
   }
}

ReactDom.render( <App/>, document.getElementById('AAB'));
