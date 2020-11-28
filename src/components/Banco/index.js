import React, { Component } from 'react';
import firebase from 'firebase';

class Banco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ['Carregando...']
        };
    }
    handleSubmit() {
        const newItem = this.refs.itemText.value;
        this.usersRef.push(newItem);
        this.refs.itemText.value = '';
    }
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
        this.usersRef = firebase.database().ref('/');
        this.usersRef.on('value', (data) => {
            data = data.val();
            if (data != null) {
                const usersArray = Object.keys(data).map(key => data[key])
                this.setState({ users: usersArray })
            }
        });
    }
    render() {
        const { users } = this.state;
        return (
            <div className="Firebase">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <input type="text" ref="itemText" placeholder="Digite um novo item aqui..." />
                <button type="button" onClick={() => this.handleSubmit()}>Adicionar</button>
                <ul>
                    {users.map((user, index) => (
                        <li style={{ listStyleType: 'none' }} key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Banco;