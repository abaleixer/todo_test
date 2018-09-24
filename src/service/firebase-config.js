import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBX1P6gWl7IAsmnbBdBIy0km8kWX36APaE",
    authDomain: "alvarado.firebaseapp.com",
    databaseURL: "https://alvarado.firebaseio.com",
    projectId: "alvarado",
    storageBucket: "alvarado.appspot.com",
    messagingSenderId: "872036785859"
  };
  firebase.initializeApp(config);

  const fDb = firebase.database();
  const fAuth = firebase.auth();
  const fProvider = new firebase.auth.GoogleAuthProvider();

  export {fAuth, fDb, fProvider}