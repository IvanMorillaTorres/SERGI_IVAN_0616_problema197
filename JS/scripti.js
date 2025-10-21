function  ivan(a) {

}
    
function cifrado_2_sergi(mensaje) {
  const frase = mensaje.length;
  const resultado = new Array(frase);
  let izq = 0;
  let der = frase - 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      resultado[izq++] = mensaje[i];
    } else {
      resultado[der--] = mensaje[i];
    }
  }

  return resultado.join('');
}
