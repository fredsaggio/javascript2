function calc(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('Tem que ser números!') // Lançando um erro personalizado. 
    }

    return x + y 

}

// Tentando executar o código, caso o código esteja correto, o bloco try será executado, caso contrário, o bloco catch será executado.

try { 
    console.log(calc(2, 3))
} catch(error) { // Tratando o erro
    console.log('Tá errado isso aí irmão')
 // console.log(error) // Esse 'error' é o que tem dentro do 'throw' lá em cima.
}