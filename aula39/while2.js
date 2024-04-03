function random(min, max){
    const r = Math.random() * (max - min) + min; // Número aleatório mínimo = 1 e máximo = 49.99 (Só neste exemplo)
    return Math.floor(r);
};

const min = 1;
const max = 50;
let rand = 10;



// While -> Checa primeiro a condição para depois executar o código.

while(rand !== 10){
    rand = random(min, max)
    console.log(rand);
};


console.log('---------------------')


// Do while -> Primeiro executa o código e depois chega a condição, caso a condição seja falsa, o código será executado ao menos uma vez.

do {                        
    console.log(rand)
} while(rand !== 10)