# Solución al reto de tarjeta interactiva de Frontend Mentor

Esta es mi solucion a el reto [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). 

## Contenido

- [Resumen](#resumen)
  - [El reto](#el-reto)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Proceso](#proceso)
  - [Hecho con](#hecho-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Continuaré](#continuaré)


## Resumen

### El reto:

Los usuarios deberían poder:

- Rellenar el formulario y ver los detalles de la tarjeta actualizados en tiempo real.
- Recibir mensajes de error cuando se envía el formulario si:
 - Cualquier campo de entrada está vacío.
 - Los campos del número de tarjeta, fecha de vencimiento o CVC están en el formato incorrecto.
- Ver la disposición óptima según el tamaño de pantalla de su dispositivo.
- Ver estados hover, activo y focus para elementos interactivos en la página.

### Screenshot

![demo](./screenshot.png)


### Links


- Live Site URL: [Tarjeta-Interactiva](https://interactive-card-frontmentor.netlify.app/)

## Proceso:

### Hecho con:

- HTML
- CSS
- Flexbox
- Mobile-first


### Lo que aprendí

Puse varias cosas en practica pero lo que mas destacó fue 
hacer las validaciones con regex y añadir espacios cada 4 caracteres en los numeros de la tarjeta:
```js
const isThereAnyLetter = /[A-z]/g;

  if (isThereAnyLetter.test(numberCardInput.value)) {
    showError(error, numberCardInput, "wrong format");
  } else {
  
    //añadiendo espacios cada 4 numeros y añadiendolos automaticamente
    
    numberCardInput.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
      
    // eliminando error
    hideError(error, numberCardInput);
  }
```





### Continuaré

Haciendo un juego de piedra, papel o tijeras que proporcionado por *FrontendMentor* [Rock, Paper, Scissors game.](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)


## Author

- Github - [Jeison](https://github.com/JasonPWR)