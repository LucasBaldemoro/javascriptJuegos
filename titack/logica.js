const $tablero = document.querySelector(".tablero");
const $celdasTablero = document.querySelectorAll(".cell");
const $botonReinicio = document.querySelector(".reinicio");
const $status = document.querySelector(".game-status");
const $cuerpo = document.querySelector("main");
let $spanOponente = document.querySelector(".oponente");
let $Turno = document.querySelector(".Turno");

function oponentes($spanOponente) {
  if ($spanOponente.textContent === "X") {
    $spanOponente.textContent = "O";
    $spanOponente.style.color = "green";
  } else {
    $spanOponente.textContent = "X";
    $spanOponente.style.color = "red";
  }

  return $spanOponente;
}

function FindelJuego($spanOponente) {
  $Turno.textContent = "El ganador es";
  alert("juego terminado", $spanOponente.textContent);

  for (let index = 0; index < $celdasTablero.length; index++) {
    $celdasTablero[index].classList.add("desativado");
  }
  intentos = 0;
}

let intentos = 0;

function buscadorGanador($celdasTablero) {
  let opciones = Array.from($celdasTablero).map((celda) => celda.textContent);

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
  } else {
  }

  intentos++;

  console.log(intentos);
}

function empate($celdasTablero) {
  if (intentos >= 9) {
         alert("hay empate")

    $Turno.textContent = "Empateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!";
   $spanOponente.style.color = "white"
    for (let index = 0; index < $celdasTablero.length; index++) {
      $celdasTablero[index].classList.remove("desativado");
    }
  }

  console.log(intentos, "holaaas");
}

$celdasTablero.forEach((ItemCelda) => {
  ItemCelda.addEventListener("click", function () {
    oponentes($spanOponente);
    ItemCelda.innerHTML = $spanOponente.textContent;

    ItemCelda.classList.add("desativado");
    buscadorGanador($celdasTablero, ItemCelda);
    empate($celdasTablero);
  });
  ItemCelda.addEventListener("  mouseup", function () {
    empate($celdasTablero);
  });
});

$botonReinicio.addEventListener("click", function () {
  $tablero.style.display = "grid";
  intentos = 0;
  $Turno.textContent = "Turno actual: Jugador";
  $spanOponente.textContent = "X";
  $spanOponente.style.color = "red";

  for (let index = 0; index < $celdasTablero.length; index++) {
    $celdasTablero[index].textContent = "";
    $celdasTablero[index].classList.remove("desativado");
  }
});
