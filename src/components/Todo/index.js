import React, { useEffect, useState } from "react";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import firebase from 'firebase'

import './styles.css';

function Todo() {

  const [item, setItem] = useState('');

  function handleChange(e) {
    firebase.database().ref('/').set(item)
  }

  useEffect(handleChange, [item])

  function handleDelete(ed) {
    firebase.database().ref(ed).remove(item)
  }

  useEffect(handleDelete, [])

  const [key, setKey] = useState(0);
  const [lista, setLista] = useState([]);

  function addLista() {
    setKey(key+1);
    setLista([
      ...lista,
      {
        id:key
      }
    ])
  }

  return (
    <div className="Todo">
      <div className="Header">
        <h1>Sua lista de compras</h1>
      </div>
      <div className="cesta" key='initial'>
            <DragIndicatorIcon size='29px' />
            <input type='checkbox'></input>
            <input type="text"
              placeholder="Digite um novo item aqui..."
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <button onClick={ed => setItem(ed.target.value)}>X</button>
          </div>
      {lista.map(number => {
        return (
          <div className="cesta" key={number.id}>
            <DragIndicatorIcon size='29px' />
            <input type='checkbox'></input>
            <input type="text"
              placeholder="Digite o nome do novo item..."
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <button onClick={ed => setItem(ed.target.value)}>X</button>
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