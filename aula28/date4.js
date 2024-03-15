dataEscolhida = new Date('2021-03-24')
diaDaSemana = dataEscolhida.getDay()
escolherODia = diaAtualDaSemana(diaDaSemana)

function diaAtualDaSemana(diaDaSemana) {
    switch (diaDaSemana) {
        case 0:
            return diaDaSemana = 'Domingo';
        case 1: 
            return diaDaSemana = 'Segunda-feira';
        case 2: 
            return diaDaSemana = 'Terça-feira';
        case 3:
            return diaDaSemana = 'Quarta-feira';
        case 4:
            return diaDaSemana = 'Quinta-feira';
        case 5:
            return diaDaSemana = 'Sexta-feira';
        default:
            return diaDaSemana = 'Dia inválido';
            
    }
}

console.log(`Hoje é ${escolherODia}, ${dataEscolhida.toString()}.`)