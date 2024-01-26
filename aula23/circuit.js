/* Avaliação de Curto-Circuito.

Elementos que são atribuídos como false no JavaScript: 

FALSE: A única expressão false é a própria 'false'. É o valor literal falso. 

FALSY: Não é o valor falso de forma literal, mas são avaliados como falso: 

'', ´´, "" <- String vazia
 0
 undefined / null  
 NaN. 


*/

console.log('Luiz' && 'Fred'); // Os dois valores são true, logo o ultimo será computado. 

console.log('Fred' && null && 'Biscoito' && false); // O falor null é considerado "False", logo ele será computado. 

let teste = true;

function falaOi() {
    return 'Oi!'
};

console.log(teste && falaOi()); // Neste exemplo, o 'teste' foi colocado como true, logo o circuito continuará e só irá parar no ultimo valor que é a function 'falaOi()', computando o resultado na mesma, no caso, 'Oi!'.