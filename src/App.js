import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Todo from './components/Todo';

import './global.css'

class App extends Component {
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
