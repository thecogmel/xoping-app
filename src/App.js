import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Sidebar />
        <TodoList />
      </div>
    );
  }
}

export default App;
