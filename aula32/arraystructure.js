// Método de desestruturação simples:

const numeros = [10, 20, 30, 40, 50, 60, 70, 80];

const [one, two, three, four, five, ...rest] = numeros;

console.log(rest);


// Método de desestruturação pouco utilizado:

const letras = [ ['A', 'B', 'C'], ['D', 'E', 'F'], ['G','H', 'I'] ]; 

const [, , [, , banana]] = letras;

console.log(banana);


// Método de desestruturação mais utilizado:

const frutas = [['Morango', 'Uva', 'Maçã'], ['Melancia', 'Banana', 'Laranja'], ['Mamão', 'Ameixa', 'Carambola']];

const [frutasBoas, frutasMedianas, frutasRuins] = frutas;

console.log(frutasBoas[1], frutasMedianas[2], frutasRuins[2]);