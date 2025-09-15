// Ejercicio 1: Creación de un arreglo
// Resultado esperado al ejecutar: [ [ 60, 80, 90 ] ]

const objetosMagicos = [20, 60, 45, 80, 90, 30];
// Filtramos los valores >= 50 y los ponemos dentro de otro arreglo (como en el PDF)
let objetosmenora50 = [objetosMagicos.filter(num => num >= 50)];
console.log(objetosmenora50);
// Resultado en consola: [ [ 60, 80, 90 ] ]
