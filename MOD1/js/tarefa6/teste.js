const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            resolve(resposta);
        });
    });
}

async function main() {
    let escolha = 0;

    while (escolha != 5) {
        console.log("\nO que deseja fazer?");
        console.log("(1) Adicionar tarefa");
        console.log("(2) Concluir tarefa");
        console.log("(3) Listar tarefas pendentes");
        console.log("(4) Listar todas");
        console.log("(5) Sair");

        escolha = Number(await perguntar("Escolha: "));

        console.log("Você escolheu:", escolha);
    }

    rl.close();
}

main();