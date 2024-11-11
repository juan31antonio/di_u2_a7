import { useState } from 'react';

export default function FeedbackForm() {
  let nombre;

  function handleClick() {
    nombre = prompt('¿Cuál es tu nombre?');
    alert(`Hola, ${nombre}!`);
  }
  //No funciona, ya que no se renderiza hasta que no termina la accion del oncLICK
  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
