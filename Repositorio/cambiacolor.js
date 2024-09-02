document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.querySelector('p');
    const boton = document.querySelector('button');
  
    boton.addEventListener('click', () => {
      parrafo.style.backgroundColor = 'green';
    });
  });
  