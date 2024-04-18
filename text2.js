function inverterString(str) {

    let reversedString = ''; // Tipagem do javascript é ruim, não tem como eu inicializar a variável sem um valor. 
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

let stringUsuario = 'fred'

console.log(inverterString(stringUsuario))