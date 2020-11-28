import React from "react";
import Header from "../Header"
import Add from "../Add"
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import TextField from '@material-ui/core/TextField';

import './styles.css';



const TodoList = () =>

  <div className="Todo">
    <Header />
    <div className="cesta">
      <DragIndicatorIcon />
      <input type="checkbox" className="container" />
      <input type="text" className="text" />
      <button className="delete">X</button>
      <CloseIcon />
    </div>
    <Add />
  </div>;

export default TodoList;
