const $tablero = document.querySelector(".tablero");
const $celdasTablero = document.querySelectorAll(".cell");

let $spanOponente = document.querySelector(".oponente");

function oponentes($spanOponente) {
  if ($spanOponente.textContent === "X") {
    $spanOponente.textContent = "O";
  } else {
    $spanOponente.textContent = "X";
  }
}


function buscadorGanador() {
  
}

$celdasTablero.forEach((ItemCelda) => {
  ItemCelda.addEventListener("click", function () {
    oponentes($spanOponente);
    ItemCelda.innerHTML = $spanOponente.textContent
  });
});
