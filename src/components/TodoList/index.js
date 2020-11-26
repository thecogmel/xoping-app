import React from "react";
import Header from "../Header"

import './styles.css';

const TodoList = () =>
  <div className="TodoList">
    <form>
      <Header />
      <input type="checkbox" name="name" />
      <input type="text" />
      <button className="delete">X</button>
    </form>
  </div>
  ;

export default TodoList;