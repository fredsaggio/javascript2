const alunos = ['João', 'Henrique', 'Paulo']
const teste = 'testando string'

const valorRemovido = alunos.shift()
const valorAdicionado = alunos.push('abacate') // Retorna em number porque o push retorna o novo comprimento do Array e não o valor o adicionado, diferente do 'shift'.

alunos.pop() // Remove o último elemento, no caso o 'Abacate' que eu adicionei no push.

console.log(alunos)

console.log(valorRemovido) // Valor removido porém salvo em uma variável const.

console.log(valorAdicionado) // Valor adicionado e salvo em uma variável const. 
