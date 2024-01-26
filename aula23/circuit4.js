/* Avaliação de Curto-Circuito.

Elementos que são atribuídos como false no JavaScript: 

FALSE: A única expressão false é a própria 'false'. É o valor literal falso. 

FALSY: Não é o valor falso de forma literal, mas são avaliados como falso: 

'', ´´, "" <- String vazia
 0
 undefined / null  
 NaN. 
*/

const corUsuario = null;

const corPadrao = 'black'

const escolhadeCor = corUsuario || corPadrao // Como o usuário não escolheu nenhuma cor, a cor padrão será escolhida pois é a que retorna o valor booleano 'true'.

console.log(escolhadeCor)