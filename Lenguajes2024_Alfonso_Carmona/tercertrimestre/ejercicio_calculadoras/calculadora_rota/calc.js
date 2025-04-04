const pantalla = document.getElementById("resultado");

function agregarNumero(valor) {
  pantalla.value += valor;
}

function limpiar() {
  pantalla.value = "";
}

function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function operar(simbolo) {
  if (simbolo === "raiz") {
    try {
      const resultado = Math.sqrt(eval(pantalla.value));
      pantalla.value = isNaN(resultado) ? "Error" : resultado;
    } catch {
      pantalla.value = "Error";
    }
  } else {
    pantalla.value += simbolo;
  }
}

function inverso() {
  try {
    const valor = eval(pantalla.value);
    if (valor === 0) {
      pantalla.value = "Error";
    } else {
      pantalla.value = 1 / valor;
    }
  } catch {
    pantalla.value = "Error";
  }
}

function cuadrado() {
  try {
    const valor = eval(pantalla.value);
    pantalla.value = Math.pow(valor, 2);
  } catch {
    pantalla.value = "Error";
  }
}

function aHex() {
  try {
    const numero = parseInt(eval(pantalla.value));
    if (isNaN(numero)) {
    } else {
      pantalla.value = numero.toString(16);
    }
  } catch {
    pantalla.value = "Error";
  }
}

function Binario() {
  try {
    const numero = parseInt(eval(pantalla.value));
    if (isNaN(numero)) {
    } else {
      pantalla.value = numero.toString(2);
    }
  } catch {
    pantalla.value = "Error";
  }
}


function calcular() {
  try {
    const resultado = eval(pantalla.value);
    pantalla.value = resultado;
  } catch {
    pantalla.value = "Error";
  }
}
