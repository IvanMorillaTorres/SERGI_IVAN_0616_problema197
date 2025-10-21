function descifrado_1_ivan(cadena_encriptada) {
  let resultado = '';
  let variable_secundaria = '';

  for (let i = 0; i < cadena_encriptada.length; i++) {
    let letra = cadena_encriptada[i];

    // Comprobamos si la letra es vocal usando comparación directa
    if (
      letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ||
      letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'
    ) {
      // Si es vocal, añadimos lo acumulado (invertido) y luego la vocal
      resultado += variable_secundaria.split('').reverse().join('');
      resultado += letra;
      variable_secundaria = '';
    } else {
        
      // Si no es vocal, la guardamos en la variable secundaria
      variable_secundaria += letra;
    }
  }

  // Al final, si quedan consonantes, también las invertimos
  resultado += variable_secundaria.split('').reverse().join('');

  return resultado;
}
