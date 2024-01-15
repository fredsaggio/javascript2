let umaString = 'O rato roeu a roupa do rei de roma.'

console.log(umaString.length) // Mostra o comprimento de uma string, cada caractere e espaço conta como 1.

console.log(umaString.slice(30)) // Esse código faz a string ser cortada a partir do índice colocado na function "slice", nesse exemplo, por exemplo, foi colocado o índice "30", ou seja, tudo que está antes do índice 30 não irá aparecer.

console.log(umaString.length -12) // Mostra o comprimento da String - 12. Saída: 23.

console.log(umaString.slice(-5, -1)) // Mostra apenas os ultimos 5 caracteres da string, porém com -1 no final, ou seja, será apenas 4 caracteres mostrados.

console.log(umaString.split('r', 3)) // Serve para dividir a string em partes, o que fica dentro das aspas é o que será retirado da string, nesse caso foi o R, logo a saída fica: O ato oeu a'. Ficou limitado em 3 porque foi eu que delimitei com o "3" aLi do lado do "r".

console.log(umaString.toUpperCase()) // Serve para colocar todas as letras em maiúsculo.

console.log(umaString.toLowerCase()) // Serve para colocar todas as letras em minúsculo.