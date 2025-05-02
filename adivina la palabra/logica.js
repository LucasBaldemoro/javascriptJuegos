let LetraSpan = document.querySelector(".LetraAlrevez");
let BotonComprobar = document.querySelector(".BotonComprobar");
let pistaSpan = document.querySelector(".pistaRespuesta");
let inputIntroducion = document.querySelector(".inputIntroducion");

const respuestas = ["ALTAVOZ", "EVEREST", "AVENIDA", "ARBUSTO", "BILLETE"];
const preguntas = [
  "planeta es el más cercano al Sol",
  " la montaña más alta en la actualidad",
  "la transcurre diferentes vehiculos",
  "adorna paisajes",
  "se usa para comprar bienes o servicios",
];

let respuesta = "";
function DatosIngresos() {
  let NumeroAleatorio = parseInt(Math.random() * 5);
  let LetraArray = respuestas[NumeroAleatorio].split("");
  let nuevo = LetraArray.sort(() => Math.random() - 0.5);
  LetraSpan.textContent = nuevo;
  pistaSpan.textContent = preguntas[NumeroAleatorio];

  respuesta = respuestas[NumeroAleatorio];
  return respuesta;
}

DatosIngresos();

BotonComprobar.addEventListener("click", function () {
  if (texto === respuesta.toLowerCase() && inputIntroducion.value !== "") {
    alert("Respuesta correcta");
    DatosIngresos();
  } else {
    alert("incorrecto");
  }
});

let texto = "";

inputIntroducion.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    event.preventDefault(); // Bloquea la tecla
  } else {
  }
});

inputIntroducion.addEventListener("input", (event) => {
  texto = inputIntroducion.value;
  console.log(texto);
});

let contador = 0;
let RelogIncremento = document.querySelector(".RelogIncremento");

function Relog() {
  if (contador <= 20) {
    contador++;
    RelogIncremento.textContent = contador;
  } else {
    alert("perdiste");
    contador = 0;

    DatosIngresos()
  }
}

setInterval(Relog, 1000);

let BotonResetear = document.querySelector(".BotonResetear");

BotonResetear.addEventListener("click", function () {
  DatosIngresos();
});
