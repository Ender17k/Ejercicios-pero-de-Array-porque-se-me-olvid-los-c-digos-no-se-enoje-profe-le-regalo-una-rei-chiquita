const pergaminos = [65, 70, 85, 90, 50];
let legible = pergaminos.every(function(pergaminos) {
  return (pergaminos > 60);
});
console.log(legible);
// false
