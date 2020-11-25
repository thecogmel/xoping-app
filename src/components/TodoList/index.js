import React from "react";

import './styles.css';

const TodoList = () =>
  <div className="TodoList">
    <h1>Sua lista de compras</h1>
    <form>
      <input type="checkbox" name="name" />
      <input type="text" />
      <button className="delete">X</button>
    </form>
  </div>
  ;

export default TodoList;