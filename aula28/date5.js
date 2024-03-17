dataAtual = new Date()
diaAtual = dataAtual.getDay()

switch (diaDaSemana) {
    case 0:
        diaDaSemana = 'Domingo';
        return diaDaSemana;
    case 1: 
        diaDaSemana = 'Segunda';
        return diaDaSemana;
    case 2: 
        diaDaSemana = 'Terça';
        return diaDaSemana;
    case 3:
        diaDaSemana = 'Quarta';
        return diaDaSemana;
    case 4:
        diaDaSemana = 'Quinta';
        return diaDaSemana;
    case 5:
        diaDaSemana = 'Sexta';
        return diaDaSemana;
    default:
        diaDaSemana = 'Dia inválido';
        
} // Esse código da erro pois não tem o 'break' no final dos cases. Esse return só funcionaria se tivesse uma function envolvida.