/*
var name = 'Wolverine'; // Se puede redefinar/reinicializando n veces

if(true){
    var name = 'Magneto';
}

var name = 'Hulk';

// No se puede vover a inicializar con let ya que ya existe
// Slet name = 'Beast'; // SyntaxError: Identifier 'name' has already been declared.

console.log(name);

let name2 = 'Wolverine_2'; // Se puede redefinar/reinicializando n veces

if (true) {
    let name2 = 'Magneto_2'; // Aquí sí se pertime porque están en scoop distintos.
}

console.log(name2);
*/

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${i}` );
}

console.log(`i: ${i}`);

let j; //let j = 'Hola Mundo';
for (let j = 0; j <= 5; j++){
    console.log(`j: ${j}`);
}

console.log(`j: ${j}`);