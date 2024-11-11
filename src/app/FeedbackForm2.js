import { useState } from 'react';

export default function FeedbackForm() {
  let nombre;

  function handleClick() {
    nombre = prompt('¿Cuál es tu nombre?');
    alert(`Hola, ${nombre}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
