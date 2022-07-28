// Funciones para optimizar las elecciones del jugador y la pc, son repetitivas

function ramdom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = " "; //creo variable resultado para guardar la eleccion
  if (jugada == 1) {
    resultado = "Piedra 🥊";
  } else if (jugada == 2) {
    resultado = "Papel 🧻";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    resultado = "MAl EleGido";
  }
  return resultado;
}
// 1 es piedra, 2 es papel , 3 es tijera
let jugador = 0;
let pc = ramdom(1, 3);
jugador = prompt("Elije: 1. para piedra  2. para papel 3. para tijera ");

alert(`PC elige : ${eleccion(pc)}`);
alert(`Tu eliges : ${eleccion(jugador)}`);

//War;
if (pc == jugador) {
  alert("EMPATE");
} else if (jugador == 1 && pc == 3) {
  alert("Ganaste ");
} else if (jugador == 2 && pc == 1) {
  alert("Ganaste");
} else if (jugador == 3 && pc == 2) {
  alert("Ganaste");
} else {
  alert("Perdiste 💣");
}

// vamos a dar la condiciones de eleeccion
//Eleccion Jugador
// if (jugador == 1) {    // Lo convierto en funcion
//   alert("Elegiste  🥊");
// } else if (jugador == 2) {
//   alert("Elegiste 🧻");
// } else if (jugador == 3) {
//   alert("Elegiiste ✂");
// } else "elegiste perder";

// Eleccion PC
// if (pc == 1) {
//   alert("Pc elige  🥊");
// } else if (pc == 2) {
//   alert("Pc elige  🧻");
// } else if (pc == 3) {
//   alert("Pc elige  ✂");
// } else "elegiste perder";

// War optimizada/

// if (jugador == pc){
//     alert('Empate' )
// }else if (( jugador == 1 && pc == 3 ) || ( jugador == 2 && pc == 1) || ( jugador == 3 && pc == 2) ){
//     alert('Ganaste Campeon')
// }else {
//     alert('Elegiste perder ' )
// }
