
// Jeito que fiz, utilizei operadores ternários numa function. 
function ePaisagem(a, l){
    return a > l? 'Retrato': 'Paisagem';
};

console.log(ePaisagem(100, 500));



// Jeito do professor, utilizou arrow function e operadores ternários. 
const paisagem = (x, y) => x > y; // Esse só retorna 'true' ou 'false'.

console.log(paisagem(1, 5))