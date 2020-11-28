import React, { Component } from 'react';
import Header from './components/Header';
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
          <Header />
        </main>
      </div>
    );
  }
}

export default App;
