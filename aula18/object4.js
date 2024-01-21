const pessoal = {
    nome: 'Frederico',
    sobrenome: 'Saggio',
    idade: 18,

    falarNome() {
        console.log(`Meu nome é ${this.nome}`)
    },

    falarIdade() {
        console.log(`Eu tenho ${this.idade} anos de idade.`) // Lembra de colocar o this como referencial de "idade".
    },

    incrementarIdade() {
        ++this.idade
    }
}


pessoal.falarNome() // Nenhum desses precisa de console.log na frente para funcionar. 
pessoal.falarIdade()
pessoal.incrementarIdade()
pessoal.falarIdade()
