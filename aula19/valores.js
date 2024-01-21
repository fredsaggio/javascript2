/* Valores primitivos (imutáveis) - String, Number, Boolean, Undefined, Null, Symbol and Bigint. */

/* Valores de referência (mutáveis) - Array, Object e Function. */

let nome = 'Fred'

nome = 'Fred'

nome[3] = 'w' // Não funciona pois a string é um valor imutável. 

console.log(nome)