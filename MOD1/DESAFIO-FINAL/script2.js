
//pegando os clientes do local storage
let clientes = JSON.parse(localStorage.getItem("clientes"));

if(clientes === null){
    clientes = [];
}

criarCardsClientes();

function criarCardsClientes(){
        const listaClientes = document.getElementById("clientes"); 

        clientes.forEach(function(cliente){ //percorrendo a lista de clientes
        //criando os cards
        const card = document.createElement("div");
        //criando a class das divs
        card.classList.add("cliente");
        card.innerHTML = `
        <h2>${cliente.especieEmoji} ${cliente.nomeAnimal}</h2>
        <p>📅 ${cliente.data}</p>`;
        //adicionando na div mae, clientes
        listaClientes.appendChild(card);

         //DENTRO DO FOR EACH, FZR A FUNÇÃO, pra pegar o cliente cliciado p mostrra o modal
            card.addEventListener("click", function(){
                mostrarModal(cliente);
        });


    });

}

function mostrarModal(cliente){
    //pegando a divizinha modal
    const modal = document.getElementById("modal");
    //pegando o conteudo da divzinha modal
    const janela = document.getElementById("janela");
    janela.innerHTML = `
   <h2>${cliente.especieEmoji} ${cliente.nomeAnimal}</h2>

    <p><strong>Espécie:</strong> ${cliente.especie}</p>
    <p><strong>Porte:</strong> ${cliente.porte}</p>
    <p><strong>Idade:</strong> ${cliente.idade}</p>
    <hr>
    <h3>Informações do Tutor</h3>
    <p><strong>Nome:</strong> ${cliente.nomeTutor}</p>
    <p><strong>Endereço:</strong> ${cliente.endereco}</p>
    <p><strong>Telefone:</strong> ${cliente.telefone}</p>
    <p><strong>Data:</strong> ${cliente.data}</p>
    <button id="fechar">Fechar</button>
`;

    //faz aparecer
    modal.style.display = "flex";
    //função do botão dentro da div janela 
    document.getElementById("fechar").addEventListener("click", function(){
        modal.style.display = "none";
    });
}

/*VOU ACRESCENTAR UMA COISINHA A MAIS DEPOIS.../ */
const relatos = [

    {
        nome: "Billie",
        dono: "Victor",
        imagem: "pets/billie-victor.jpeg",
        relato: "blablablablablablalallalala",
   
    },
    {
        nome: "Cindy",
        dono: "Escobar",
        imagem: "pets/cindy-escobar.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Dondoca",
        dono: "Cleria",
        imagem: "pets/dondoca-carol.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Estrelinha",
        dono: "Carol",
        imagem: "pets/estrelinha-carol.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Frani",
        dono: "Talita",
        imagem: "pets/franizinha-talita.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Gata Carol",
        dono: "Carol",
        imagem: "pets/gata-mae-carol.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Nora e Mimosa",
        dono: "Carol e Cleria",
        imagem: "pets/irmas-carol.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "As gêmeas Maria's",
        dono: "Carol e Cleria",
        imagem: "pets/gemeas-marias-carol.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Gori",
        dono: "Lorenzo",
        imagem: "pets/gori-lore.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Listrado",
        dono: "Amanda",
        imagem: "pets/listrado-amanda.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Lua",
        dono: "Escobar",
        imagem: "pets/lua-escobar.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Mia",
        dono: "Isa",
        imagem: "pets/billie-victor.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Billie",
        dono: "Victor",
        imagem: "pets/billie-victor.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Billie",
        dono: "Victor",
        imagem: "pets/billie-victor.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Billie",
        dono: "Victor",
        imagem: "pets/billie-victor.jpeg",
        relato: "blablablablablablalallalala",
   
    },

    {
        nome: "Billie",
        dono: "Victor",
        imagem: "pets/billie-victor.jpeg",
        relato: "blablablablablablalallalala",
   
    }



 

];