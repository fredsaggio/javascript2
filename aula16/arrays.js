const alunos = ['João', 'Henrique', 'Paulo']
const teste = 'testando string'

alunos.push('Fred') // Adiciona um elemento no final do Array.
alunos.push('Letícia')
alunos[alunos.length] = 'girafa' // Também adiciona elementos, use 'push' no lugar desse.

alunos[7] = 'hipopotamo' // Outro jeito de adicionar elementos é colocar o número de índice que não foi usado ainda.
                         // Se eu coloco um índice que pula o ultimo índice pré-existente, irá se criar um empty item.

alunos.shift() // Remove o primeiro elemento do Array. Vai tirar o valor 'João'.
alunos.unshift('José') // Adiciona um elemento no começo de um Array. Vai adicionar o valor 'José'.



console.log(alunos)
console.log(alunos[2])
console.log(teste[5]) // Diferença entre buscar objeto em Array e em Strings simples. 

