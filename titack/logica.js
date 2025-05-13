const $tablero = document.querySelector(".tablero");
const $celdasTablero = document.querySelectorAll(".cell");
const $botonReinicio = document.querySelector(".restart-btn");
const $status = document.querySelector(".game-status");
let $spanOponente = document.querySelector(".oponente");

function oponentes($spanOponente) {
  if ($spanOponente.textContent === "X") {
    $spanOponente.textContent = "O";
  } else {
    $spanOponente.textContent = "X";
  }

  return $spanOponente;
}

function FindelJuego($spanOponente, $tablero) {
  alert("juego terminado el ganador es" + " " + $spanOponente.textContent);
  $status.textContent =
    "Juego terminado el ganador es" + $spanOponente.textContent;
  $status.style.color = "red";
  $tablero.style.display = "none";

  for (let index = 0; index < $celdasTablero.length; index++) {

    $celdasTablero[index].textContent = ""
  }

}
function buscadorGanador($celdasTablero) {
  let opciones = Array.from($celdasTablero).map((celda) => celda.textContent);

  let resultado = $spanOponente.textContent;
  // columnas
  for (let index = 0; index < 9; index += 3) {
    if (
      opciones[index] &&
      opciones[index] === opciones[index + 1] &&
      opciones[index] === opciones[index + 2]
    ) {
      FindelJuego($spanOponente, $tablero);
    } else {
    }
  }

  // filas

  for (let index = 0; index < 9; index += 1) {
    if (
      opciones[index] &&
      opciones[index] === opciones[index + 3] &&
      opciones[index] === opciones[index + 6]
    ) {
      console.log("hola");
      FindelJuego($spanOponente, $tablero);
    } else {
    }
  }

  // inclinado

  if (
    opciones[0] &&
    opciones[0] === opciones[4] &&
    opciones[0] === opciones[8]
  ) {
    console.log("hola");
    FindelJuego($spanOponente, $tablero);
  } else if (
    opciones[2] &&
    opciones[2] === opciones[4] &&
    opciones[2] === opciones[6]
  ) {
    console.log("hola");
    FindelJuego($spanOponente, $tablero);
  }
}

$celdasTablero.forEach((ItemCelda) => {
  ItemCelda.addEventListener("click", function () {
    oponentes($spanOponente);
    ItemCelda.innerHTML = $spanOponente.textContent;

    buscadorGanador($celdasTablero);
  });
});

$botonReinicio.addEventListener("click", function () {
  $tablero.style.display = "grid";

 $celdasTablero.textContent = ""
});
