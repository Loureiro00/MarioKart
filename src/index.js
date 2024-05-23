const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}


// funcao assincrona, onde a gente pede para o Js "esperar", antes de fazer essa function
async function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}


//funcao autoinvocada
(async function main() {
    console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n
    `    
    )
})();