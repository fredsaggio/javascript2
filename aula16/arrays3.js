const alunos = ['João', 'Henrique', 'Paulo']
const teste = 'testando string'

delete alunos[2] // Deleta um elemento do array sem alterar os índices, deixando um 'empty item' no lugar. 

console.log(alunos)
console.log(alunos[15]) // Índice inexistente sempre dará 'undefined'.