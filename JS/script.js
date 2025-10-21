function descifrado_1_ivan(cadena_encriptada) {
  let resultado = [];
  let variable_secundaria = '';

  for (let i = 0; i < cadena_encriptada.length; i++) {
    const letra = cadena_encriptada[i];

    if ('aeiouAEIOU'.includes(letra)) {
      // Si hay consonantes acumuladas, las invertimos y añadimos
      if (variable_secundaria.length > 0) {
        resultado.push(...variable_secundaria.split('').reverse());
        variable_secundaria = '';
      }
      // Añadir la vocal directamente
      resultado.push(letra);
    } else {
      // Espacios cuentan como consonantes, se acumulan
      variable_secundaria += letra;
    }
  }

  // Añadir últimas consonantes si quedan
  if (variable_secundaria.length > 0) {
    resultado.push(...variable_secundaria.split('').reverse());
  }

  return resultado.join('');
}



function descifrado_2_sergi(mensaje) {
  let frase = mensaje.length;
  let resultado = new Array(frase);
  let izq = 0;
  let der = frase - 1;

  for (let i = 0; i < frase; i++) {
    if (i % 2 === 0) {
      resultado[izq++] = mensaje[i];
    } else {
      resultado[der--] = mensaje[i];
    }
  }

  return resultado.join('');
}

function ejecutar_descifrado_1() {
  const entrada = document.getElementById('mensaje1').value;
  const salida = descifrado_1_ivan(entrada);
  document.getElementById('resultado1').textContent = salida;
}

function ejecutar_descifrado_2() {
  const entrada = document.getElementById('mensaje2').value;
  const salida = descifrado_2_sergi(entrada);
  document.getElementById('resultado2').textContent = salida;
}

function ejecutar_descifrado_ambos() {
  const entrada = document.getElementById('mensaje3').value;
  const intermedio = descifrado_1_ivan(entrada);
  const salida = descifrado_2_sergi(intermedio);
  document.getElementById('resultado3').textContent = salida;
}