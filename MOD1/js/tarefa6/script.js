/*
Crie uma lista de tarefas usando objetos JavaScript. 
Cada tarefa deve ser representada como um objeto contendo 
informações como o nome da tarefa, a data de criação e o status 
(concluída ou não). 
Você também deve criar funções para adicionar tarefas à lista, 
marcar tarefas como concluídas e listar as tarefas pendentes.
 O link do GitHub deve ser postado nos comentários.
*/

//queria usar tipo o scanner.nextLine do java e tentei entao usar
//promises e assincronimso pra fazer isso, com ajuda do copilot pra
//entender direitnho e finalmente poder brincar com o terminal
//pelo js, e nao precisar do window.prompt


 //importa o módulo readline do Node.js — tipo import java.util.Scannervvvv
const readline = require("readline");
//eh como o Scanner sc = new Scanner(System.in)
const scanner = readline.createInterface({ //cria um objeto que pode ler do terminal
    input: process.stdin,  // recebe dados do teclado (standard input)
    output: process.stdout // mostra coisas na tela (standard output)
});

// criação do Scanner.next(), pq acho que nao vem pronta da biblioteca//modulo? 
function perguntar(pergunta) {
    return new Promise(resolve => {  //promessa que aguarda a resposta do usuário
        scanner.question(pergunta, resposta => { // mostra a pergunta e espera a resposta
            resolve(resposta);  //quando o usuário responde, retorna a resposta
            //resolve eh o return de promisses, que eh lida pelo await
        });
    });
}

//CRIAÇÃO DE LISTA DE TAREFA
let tarefas = []; 




async function main() {  //função do async/await
let escolha = 0;

while (escolha !=5){
    console.log("O que deseja fazer?")
    console.log("(1) Adicionar tarefa");
    console.log("(2) Concluir tarefa");
    console.log("(3) Listar Tarefas Pendentes ");
    console.log("(4) Listar Todas");
    console.log("(5) Sair")
    escolha = Number(await perguntar("Escolha: ")); //usa a promisse que eh lida pelo await
    console.log(escolha)
    console.log("-----------------------------------------------")
    switch (escolha) {
  case 1:
    console.log("CRIAÇÃO DE TAREFA, YAY "); 
    nome = String(await perguntar("Digite o nome da tarefa: ")); 
    data = String(await perguntar("Insira a data de criação da tarefa: ")); 
    //cria o OBJETO DE tarefa
    let tarefa = {
        nome: nome, 
        data: data, 
        concluida: false 
    }
    tarefas.push(tarefa); //adiciona o objeto a lista
    console.log("Tarefa " + tarefa.nome  + " criada!")
    console.log("-----------------------------------------------")
    break;
  case 2:
    console.log("Concluindo tarefas yaayy"); 
    nome = String(await perguntar("Digite o nome da tarefa procurada: "));
    for (let i =0; i<tarefas.length; i++){
        if(tarefas[i].nome == nome){
            tarefas[i].concluida = true; 
            console.log('Concluidno tarefa ' + tarefas[i].nome )
        } 
    } 
    console.log("Não recebeu aviso de tarefa concluida? Colocou o nome direitinho? (se recebeu aviso, ignore)");
    console.log("-----------------------------------------------")
    break;
  case 3:
    console.log("Listando...")
    for (let i =0; i<tarefas.length; i++){
        if (tarefas[i].concluida == false) {

            console.log("TAREFA N°" + (i+1)); 
            console.log("Nome: " + tarefas[i].nome); 
            console.log("Data de criação: " + tarefas[i].data); 
            console.log("Status: Não concluída")
        }
    }
     console.log("Se nada foi printado, parabéns, vc deu conta de suas tarefas hahah")
    console.log("-----------------------------------------------")
    break;
  case 4:
    console.log("Listando...")
    for (let i =0; i<tarefas.length; i++){

            console.log("TAREFA N°" + (i+1)); 
            console.log("Nome: " + tarefas[i].nome); 
            console.log("Data de criação: " + tarefas[i].data); 
        if (tarefas[i].concluida == false) {
            console.log("Status: Não concluída")
        } else {
            console.log("Status: Concluída!")
        }
    }
    console.log("-----------------------------------------------")
    break;
  case 5:
    console.log("tchauuu! :)")
    console.log("-----------------------------------------------")
    break;




  default:
    console.log("Digite um número entre 1 e 5!")
}


}

   scanner.close();
}

main();