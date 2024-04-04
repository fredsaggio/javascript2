// Break e continue;

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

for(let i of numeros){

    // "continue" serve pra remover da iteração, neste exemplo eu removi todos os números pares.
    if (i % 2 === 0) { 
        continue;
    }

    // Ao aparecer "break" no código, tudo que está abaixo é ignorado.
    if (i === 7){
        console.log('Aqui era o número 7') // Ignorei tudo que estava depois de '7'.
        break;
    }
    console.log(i)
}