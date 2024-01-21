const nome = {
    nomee: 'João',
    sobrenome: 'Victor'
}

const b = nome

nome.nomee = 'Fred'

console.log(b) // O b também foi alterado pois eu não usei o spread (...). Utilizando o spread ficaria:

               // const b = {...nome}