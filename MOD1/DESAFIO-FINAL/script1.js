//função de envio do cadastro 
const formulario = document.getElementById("forms");
const bichos = {
    Cachorro: "🐶",
    Gato: "🐱",
    Pássaro: "🐦",
    Peixe: "🐠",
    Réptil: "🦎",
    Coelho:"🐰",
    Roedor: "🐹",
    Outro: "🐾"
}
/*📅 */
//(ler → criar objeto → pegar lista → adicionar → salvar)
document.getElementById("botao-enviar").addEventListener("click", function (event) {
    // pegar os dados e salvar

    //não deixa a pagina recarregar
    event.preventDefault();
    //lendo o formulario 
    //dados cliente
    const nomeTutor = document.getElementById("nomeTutor").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const data = document.getElementById("data").value;
    //dados animal
    const nomeAnimal = document.getElementById("nomeAnimal").value;
    const especie = document.getElementById("especie").value;
    const especieEmoji = bichos[especie]; /*pega o emojizinho */

    const idade = document.getElementById("idade").value;
    const porte = document.getElementById("porte").value;
    //salavando em um obj js
    const cliente = {
    nomeTutor: nomeTutor,
    telefone: telefone,
    endereco: endereco,
    data: data,
    nomeAnimal: nomeAnimal,
    especie: especie,
    especieEmoji: especieEmoji,
    idade: idade,
    porte: porte
    }
    //localstorage nao salva objetos, mas sim textos... então a gnt vai converter 
    JSON.stringify(cliente)
    //vai ficar tipo assim, uma string igual um json em uma linha so 
    //{"nomeTutor":"Ana","telefone":"5199999999","endereco":"Rua A, 123","data":"2026-07-15","nomeAnimal":"Rex","idade":3,"porte":"Grande"}
   
   //pegando a lista de clientes que já existem, e verificando se ela esta vazia
   let clientes = JSON.parse(localStorage.getItem("clientes"));
   if (clientes === null) {
    clientes = []; //se for o primeiro cliente a ser cadastrado
   }
   //adicionando o novo cliente na lista 
   clientes.push(cliente);
  
   //salavando no local storage 
   localStorage.setItem("clientes", JSON.stringify(clientes));
   
    /*
    const dados = localStorage.getItem("cliente");
    const cliente = JSON.parse(dados);
    cliente.nomeTutor
    cliente.telefone
    cliente.nomeAnimal
    */
   alert("Cadastrado com sucesso ;)");
    formulario.reset();
   
});

