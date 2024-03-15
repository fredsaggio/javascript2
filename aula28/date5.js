dataAtual = new Date()
diaAtual = dataAtual.getDay()

switch (diaDaSemana) {
    case 0:
        return diaDaSemana = 'Domingo';
    case 1: 
        return diaDaSemana = 'Segunda';
    case 2: 
        return diaDaSemana = 'Terça';
    case 3:
        return diaDaSemana = 'Quarta';
    case 4:
        return diaDaSemana = 'Quinta';
    case 5:
        return diaDaSemana = 'Sexta';
    default:
        return diaDaSemana = 'Dia inválido';
        
} // Esse código da erro pois não tem o 'break' no final dos cases. Esse return só funcionaria se tivesse uma function envolvida.