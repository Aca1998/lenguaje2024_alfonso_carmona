function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    // Limpiar resultado anterior
    resultado.innerHTML = "";
  
    // Generar la tabla de multiplicar
    for (let i = 0; i <= 9; i++) {
      const linea = document.createElement("p");
      linea.textContent = `${numero} x ${i} = ${numero * i}`;
      resultado.appendChild(linea);
    }
  }
  