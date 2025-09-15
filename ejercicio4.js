// Ejercicio 4: Agregar elementos al final del arreglo (en el PDF se usó find)
// Resultado esperado al ejecutar: [ 80 ]

const escudos = [20, 60, 45, 80, 90, 30];
let esp = [escudos.find(num => num > 75)];
console.log(esp);
// Resultado en consola: [ 80 ]
