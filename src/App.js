import React, { Component } from 'react';
import firebase from 'firebase'
import Sidebar from './components/Sidebar'
import Todo from './components/Todo';

import './global.css'

class App extends Component {

  componentWillMount() {
    var firebaseConfig = {
        apiKey: "AIzaSyCiypkteEAf5MGxaTHqh6M5AC2ZtRJx2TI",
        authDomain: "xoping-app.firebaseapp.com",
        databaseURL: "https://xoping-app.firebaseio.com",
        projectId: "xoping-app",
        storageBucket: "xoping-app.appspot.com",
        messagingSenderId: "372230552974",
        appId: "1:372230552974:web:4b003f7edbfc36352938df",
        measurementId: "G-18QSFFHXLR"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  render() {
    return (
      <div id="App">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Todo />
        </main>
      </div>
    );
  }
}

export default App;
