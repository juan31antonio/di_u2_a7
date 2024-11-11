import { useState } from 'react';

export default function Form() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
  
    function handleFirstNameChange(e) {
      setNombre(e.target.value);
    }
  
    function handleLastNameChange(e) {
      setApellido(e.target.value);
    }
  
    function handleReset() {
      setNombre('');
      setApellido('');
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Apellido"
          value={apellido}
          onChange={handleLastNameChange}
        />
        <h1>Hola, {nombre} {apellido}</h1>
        <button onClick={handleReset}>Reiniciar</button>
      </form>
    );
  }