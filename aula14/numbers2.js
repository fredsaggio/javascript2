let num1 = 1
let num2 = 0.1
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 += Number(num2) 
num1 = Number(num1.toFixed(2))  /* Tem que colocar o toFixed e o Number atrás para tudo funcionar corretamente. */

console.log(Number.isInteger(num1)) /* Verificando se o número é inteiro. */
console.log(num1)