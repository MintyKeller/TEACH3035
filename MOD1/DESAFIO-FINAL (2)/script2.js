
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
        imagem: "pets/billie-victor.png",
        relato: "Aqui foram queridos comigo e me trataram com muito carinho, apesar da minha timidez...",
   
    },
    {
        nome: "Cindy",
        dono: "Escobar",
        imagem: "pets/cindy-escobar.jpeg",
        relato: "Deixaram o meu dono ficar comigo o tempo todo durante o meu banho, é que ele é muito apegado a mim... Acredito que ele ficou feliz com isso (e eu também)",
   
    },

    {
        nome: "Candoca",
        dono: "Cleria",
        imagem: "pets/candoca-carol.jpeg",
        relato: "Cuidaram tão bem dos meus cabelinhos! Me senti muito confortável aqui,  meu rabinho não parava de balançar...",
   
    },

    {
        nome: "Estrelinha",
        dono: "Carol",
        imagem: "pets/estrelinha-carol.jpeg",
        relato: "Me deram vários petiscos. Eu ADORO petiscos. Me senti como uma verdadeira estrela.",
   
    },

    {
        nome: "Frani",
        dono: "Talita",
        imagem: "pets/franizinha-talita.jpeg",
        relato: "Fizeram carinho na minha barriga e eu fiquei feliz quando me deram algo para comer.",
   
    },

    {
        nome: "Pudim",
        dono: "Carol",
        imagem: "pets/pudim-cleria.jpeg",
        relato: "Cuidaram muito bem das minhas filhotes, as Maria's. Pelo relato delas, senti que elas nem brigaram aqui na PetShop, Ginger's",
   
    },

    {
        nome: "Nora e Mimosa",
        dono: "Carol e Cleria",
        imagem: "pets/irmas-carol.png",
        relato: "Mamãe voltou com uma ração muito gostosa da Ginger's. Nós amamos!",
   
    },

    {
        nome: "As gêmeas Maria's",
        dono: "Carol e Cleria",
        imagem: "pets/gemeas-marias-carol.jpeg",
        relato: "Depois do banho, levamos alguns brinquedos pra casa e nós achamos eles muito divertidos!",
   
    },

    {
        nome: "Gori",
        dono: "Lorenzo",
        imagem: "pets/gori-lore.jpeg",
        relato: "No início eu fiquei um pouco assustado, admito. Mas depois, o carinho dessa PetShop fez com que eu me sentisse mais confortável!",
   
    },

    {
        nome: "Listrado",
        dono: "Amanda",
        imagem: "pets/listrado-amanda.jpeg",
        relato: "Tem sempre música boa tocando na Ginger's, me lembra as músicas que a minha dona ouve! Gostei.",
   
    },

    {
        nome: "Lua",
        dono: "Escobar",
        imagem: "pets/lua-escobar.jpeg",
        relato: "Meu dono comprou uma caminha tão macia, Cindy e eu sempre a disputamos... Mas meu dono comprou mais uma, agora!",
   
    },

    {
        nome: "Mia",
        dono: "Isa",
        imagem: "pets/mia-gataGorda-isa.jpeg",
        relato: "Eu simplesmente AMEI os petiscos e as rações daí!!",
   
    },

    {
        nome: "Minnie",
        dono: "Talita",
        imagem: "pets/minnie-talita.jpeg",
        relato: "De início eu não queria ir, mas minha dona implorou tanto dizendo que eu ia gostar... Até que ela estava certa.",
   
    },

    {
        nome: "Peludo",
        dono: "Gui",
        imagem: "pets/peludo-gui.jpeg",
        relato: "Me trataram com muito carinho e tem uma ótima recepção. Me trataram com a devida atenção que eu mereço.",
   
    },

    {
        nome: "Pipoca",
        dono: "Ana",
        imagem: "pets/pipoca-ana.jpeg",
        relato: "Fizeram um penteado tão legal em mim! Minha dona amou! Até o momento que eu me enrolei na lama de novo... E me levaram de novo na Ginger's para banho, o que foi lucro!",
   
    },

    {
        nome: "Luna",
        dono: "Maurício",
        imagem: "pets/luninha-mau.jpeg",
        relato: "Meu dono me deu uns brinquedos tão legais daí!! Eu brinquei até cansar! E adorei a bandanazinha que escolheram pra mim também!",
   
    },
        {
        nome: "Floquinha",
        dono: "Maurício",
        imagem: "pets/floquinha-mau.jpeg",
        relato: "Finalmente um lugar que encontrou o shampoo certo para o meu tipo de pelo!",
   
    },



 

];

//pegando a div q  a gnt vai preencher
const Listarelatos = document.getElementById("relatos"); 

relatos.forEach(function(relato){
    //criando a div item
    const card = document.createElement("div");
    //dando a classe pra div 
    card.classList.add("relato");

    //a gnt ja fez isso na escola
 card.innerHTML = `
    <img src="${relato.imagem}">

    <div class="texto-relato">
        <h2>${relato.nome}</h2>
        <h3>Tutor: ${relato.dono}</h3>
        <p>${relato.relato}</p>
    </div>
`;
    Listarelatos.appendChild(card); //coloca dentro da div vazia
});