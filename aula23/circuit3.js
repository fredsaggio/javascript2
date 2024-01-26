/* Avaliação de Curto-Circuito.

Elementos que são atribuídos como false no JavaScript: 

FALSE: A única expressão false é a própria 'false'. É o valor literal falso. 

FALSY: Não é o valor falso de forma literal, mas são avaliados como falso: 

'', ´´, "" <- String vazia
 0
 undefined / null  
 NaN. 
*/

const user = 'Fredzin';
const password = '1234';

const fazerLogin = user === 'Fredzin' && password === '12345'; // Daria false porque a senha está diferente.

console.log(fazerLogin);

