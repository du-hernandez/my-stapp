import React, { useState } from 'react';
import './App.css'
import Header from './Header';

function Contador() {

  const [ contador, setContador ] = useState(0);

  function onClick(x) {
    setContador(x);
  }

  return (
    <div className='contenedor'>
      <Header contador={contador} />
      <div className='button-container'>
        <button
          style={{width:50}}
          className='btn btn-primary'
          onClick={() => onClick(contador + 1)}
        >
          +
        </button>
        <button
          style={{width:50}}
          className='btn btn-danger'
          onClick={() => onClick(contador - 1)}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Contador;