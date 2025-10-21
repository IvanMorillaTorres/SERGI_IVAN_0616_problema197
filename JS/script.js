function descifrado_1_ivan(cadena_encriptada) {
  let resultado = '';
  let variable_secundaria = '';

  for (let i = 0; i < cadena_encriptada.length; i++) {
    let letra = cadena_encriptada[i];

    // Si es vocal, cortamos el grupo
    if (
      letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ||
      letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'
    ) {
      // Añadir grupo invertido si hay
      if (variable_secundaria !== '') {
        resultado += variable_secundaria.split('').reverse().join('');
        variable_secundaria = '';
      }
      // Añadir la vocal
      resultado += letra;
    } else if (letra === ' ') {
      // Si es espacio, lo añadimos tal cual (no cortamos grupo)
      resultado += letra;
    } else {
      // Acumulamos consonantes
      variable_secundaria += letra;
    }
  }

  // Añadir último grupo si queda
  if (variable_secundaria !== '') {
    resultado += variable_secundaria.split('').reverse().join('');
  }

  return resultado;
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