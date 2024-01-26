/* Avaliação de Curto-Circuito.

Elementos que são atribuídos como false no JavaScript: 

FALSE: A única expressão false é a própria 'false'. É o valor literal falso. 

FALSY: Não é o valor falso de forma literal, mas são avaliados como falso: 

'', ´´, "" <- String vazia
 0
 undefined / null  
 NaN. 


*/

/* Testando o `||`. */

console.log(0 || undefined || null || 'teste' || NaN); // Esse comando irá retornar a string, pois é o único que tem o valor booleano como 'true', o resto é todo lido como 'false'. Como o elemento OR sempre procura o valor true, é este valor que será computado.

console.log(false || undefined || 'false' || 0 || NaN); // O valor computado aqui será o ''false'', já que o mesmo está dentro de uma string, logo é considerado um valor 'true'.

console.log(false || NaN || 8 || true || 'teste') // O '8' foi o valor que apareceu, pois é o primeiro valor 'true'.