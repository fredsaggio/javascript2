// Operadores ternários: "?" seguido de duas afirmativas, uma true e uma false, divididas por um ":".

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000? 'Usuário VIP' : 'Usuário normal';
let corUsuario = null;
const corPadrao = corUsuario || 'Preto' // Caso o usuário não selecione uma cor padrão, ela será preto, como mostra o código, caso ele queira uma cor diferente, terá que escolher e essa cor será armazenada na variável 'corUsuario'.

console.log(nivelUsuario, corPadrao) 