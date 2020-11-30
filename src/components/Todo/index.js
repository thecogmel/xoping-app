import React, { useEffect, useState } from "react";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Checkbox from '@material-ui/core/Checkbox';

import firebase from 'firebase'

import './styles.css';

function Todo() {

  const [lista, setLista] = useState([{ id: (Math.floor(Math.random() * 100)), value: '', isChecked: false }]);

  function handleChange(list) {
    firebase.database().ref('/').set(list);
  }

  function handleDelete(id) {
    // eslint-disable-next-line
    const newLista = lista.filter(number => {
      if (number.id !== id) {
        return number;
      }
    });
    setLista(newLista);
    handleChange(newLista);
  }

  function editListItem(value, id) {
    const newLista = lista.map(number => {
      if (number.id === id) {
        return ({...number, value})
      }

      return number;
    });
    setLista(newLista);
    handleChange(newLista);
  }

  function toggleChecked(id) {
    const newLista = lista.map(number => {
      if (number.id === id) {
        return ({...number, isChecked:!number.isChecked})
      }

      return number;
    });
    setLista(newLista);
    handleChange(newLista);
  }
  // eslint-disable-next-line
  useEffect(handleDelete, [])

  function addLista() {
    setLista([
      ...lista,
      { id: (Math.floor(Math.random() * 100)), value: '', isChecked: false }
    ])
  }

  return (
    <div className="Todo">
      <div className="Header">
        <h1>Sua lista de compras</h1>
      </div>
      {lista.map(number => {
        return (
          <div className="cesta" key={number.id}>
            <DragIndicatorIcon />
            <Checkbox color={'default'} checked={number.isChecked} onChange={() => toggleChecked(number.id)}/>
            <input type="text"
              placeholder="Digite o nome do item..."
              value={number.value}
              onChange={e => editListItem(e.target.value,number.id)}
            />
            <button onClick={ed => handleDelete(number.id)}>X</button>
          </div>
        );
      })}
      <div className="Add">
        <button onClick={addLista}>+</button>
        Adicione um novo item...
      </div>
    </div>
  );
}
export default Todo;