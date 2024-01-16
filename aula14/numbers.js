let num1 = 'teste'

let num2 = 2

let temp = Number(num1) + num2

console.log(temp) // Concatenação, pois há uma string entre esses dois elementos. 

console.log(Number.isNaN(temp)) /* Verificar se o número é um NaN, se for, retorna true, caso contrário, false. */

console.log(typeof num1) // Deu typeof string pois eu mudei o type deste elemento logo acima. 

console.log(num1.toString(2))