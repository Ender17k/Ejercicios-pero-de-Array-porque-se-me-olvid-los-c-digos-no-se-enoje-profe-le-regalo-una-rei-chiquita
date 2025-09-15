const espadas = [20, 60, 45, 80, 90, 30];
const espada = espadas.reduce((acumulador, espada) => {
  if (espada > 50) {
    return acumulador + 1;
  }
  return acumulador;
}, 0);
console.log(espada);
// 3
