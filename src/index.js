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

async function getRadomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA "
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO!!"

    }

    return result
}

async function logRollResult(characterName,block,diceResult,attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block}  ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    }

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁🚦 Rodada  ${round}`);

        //sorteia bloco
        let block = await getRadomBlock()
        console.log(`Bloco: ${block}`)

        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(
                character1.NOME,
                "VELOCIADADE",
                diceResult1,
                character1.VELOCIDADE
            );
            await logRollResult(
                character2.NOME,
                "VELOCIADADE",
                diceResult2,
                character2.VELOCIDADE
            )
            
            
        }
        if(block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(
                character1.NOME,
                "MANOBRABILIDADE",
                diceResult1,
                character1.MANOBRABILIDADE
            );
            await logRollResult(
                character2.NOME,
                "MANOBRABILIDADE",
                diceResult2,
                character2.MANOBRABILIDADE
            )
            
        }
        if(block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER  
            let powerResult2 = diceResult2 + character2.PODER  
        }
    }
}

//funcao autoinvocada
(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n
    `
    )
    await playRaceEngine(player1, player2)
})();