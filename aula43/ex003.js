
// Código otimizado, utilizei a estrutura if-else de forma resumida.
function retornaNumero2(n) {
   if (isNaN(n)) return 'Não é um número' // Verifiquei se é um número utilizando isNaN.
   if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
   if (n % 3 === 0) return 'Fizz'
   if (n % 5 === 0) return 'Buzz'
   return n
}

for(let i = 0; i <= 100; i++) { // Utilizei 'for' clássico pois não estou utilizando arrays.
   console.log(i, retornaNumero2(i));
}


// Código que eu fiz na primeira vez, utilizei if-else de maneira não-resumida, ocasionando num código desnecessariamente grande.

/* function retornaNumero(n){
   if (isNaN(n) === false){
      if (n % 3 === 0 && n % 5 === 0){
         return 'FizzBuzz'
      } else if (n % 3 === 0) {
         return 'Fizz'
      } else if (n % 5 === 0) {
         return 'Buzz'
      } else {
         return n
      }
   } else {
      return n
   }
}

console.log(retornaNumero('brabuleta')) */

