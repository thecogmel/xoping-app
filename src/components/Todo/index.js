import React from "react";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CloseIcon from '@material-ui/icons/Close';
import Banco from '../Banco'


import './styles.css';

const Todo = () =>

  <div className="Todo">
    <div className="Header">
      <h1>Sua lista de compras</h1>
    </div>
    <div className="cesta">
      <DragIndicatorIcon size='29px'/>
      <input type='checkbox'></input>
      <input type='text'></input>
      <CloseIcon size='29px'/>
    </div>
    <div>
      <Banco />
    </div>

  </div>;

export default Todo;
