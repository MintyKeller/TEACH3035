/*ABA 3 */

const produtos = [

    {
        nome: "Bolinha para Hamster",
        imagem: "itens/bolinha-hamster.jpg",
        descricao: "Uma bolinha divertida para o hamster explorar a casa com segurança.",
        preco: 34.90
    },

    {
        nome: "Cama Nuvem",
        imagem: "itens/cama-nuve1.webp",
        descricao: "Uma caminha supermacia e confortável para o seu pet descansar.",
        preco: 89.90
    },

    {
        nome: "Cama Nuvem Cozy",
        imagem: "itens/cama-nuvem1.webp",
        descricao: "Um cantinho aconchegante e fofinho para o seu melhor amigo.",
        preco: 74.90
    },

    {
        nome: "Casinha de Coelho",
        imagem: "itens/casinha-coelho.jpeg",
        descricao: "Um abrigo confortável para o coelho descansar e se esconder.",
        preco: 119.90
    },

    {
        nome: "Casinha de Madeira para Cachorro",
        imagem: "itens/casinha-dog.jpg",
        descricao: "Casinha resistente e confortável para deixar o pet protegido.",
        preco: 299.90
    },

    {
        nome: "Casinha Suspensa para Gatos",
        imagem: "itens/casinha-gato.webp",
        descricao: "Um espaço moderno e divertido para o gato brincar e relaxar.",
        preco: 189.90
    },

    {
        nome: "Gaiola Completa para Hamster",
        imagem: "itens/casinha-hamster.webp",
        descricao: "Um lar colorido e divertido para o seu pequeno companheiro.",
        preco: 249.90
    },

    {
        nome: "Casinha para Passarinhos",
        imagem: "itens/casinha-passarinho.jpeg",
        descricao: "Um cantinho charmoso para passarinhos descansarem e se abrigarem.",
        preco: 59.90
    },

    {
        nome: "Caverna Dupla para Tartarugas",
        imagem: "itens/caverninha-dupla-tugas.webp",
        descricao: "Esconderijo natural com dois espaços para as tartarugas explorarem.",
        preco: 79.90
    },

    {
        nome: "Caverna Rochosa para Tartarugas",
        imagem: "itens/caverninha-tuga.jpg",
        descricao: "Uma toca decorativa para deixar o ambiente do réptil mais interessante.",
        preco: 64.90
    },

    {
        nome: "Coleira para Coelho",
        imagem: "itens/coleira-coelho.jpg",
        descricao: "Leve e confortável para passeios tranquilos com o seu coelhinho.",
        preco: 39.90
    },

    {
        nome: "Peitoral para Cachorro",
        imagem: "itens/coleira-dog.webp",
        descricao: "Peitoral confortável para passeios mais seguros e agradáveis.",
        preco: 54.90
    },

    {
        nome: "Comida para Passarinhos",
        imagem: "itens/comida-passarinho.jpeg",
        descricao: "Mistura nutritiva para deixar seus passarinhos felizes e bem alimentados.",
        preco: 24.90
    },

    {
        nome: "Mix de Sementes para Hamster",
        imagem: "itens/comidinha-hamster.webp",
        descricao: "Uma seleção de sementes e grãos para variar a alimentação do seu hamster.",
        preco: 19.90
    },

    {
        nome: "Kit Banho Pet",
        imagem: "itens/kit-banho.jpeg",
        descricao: "Tudo para deixar o banho do seu pet mais prático e divertido.",
        preco: 69.90
    },

    {
        nome: "Kit Pug de Cuidados",
        imagem: "itens/kit-pug.webp",
        descricao: "Um kit especial com produtos para cuidar e mimar o seu companheiro.",
        preco: 89.90
    },

    {
        nome: "Kit de Brinquedos para Cachorros",
        imagem: "itens/kit-toys-dogs.jpg",
        descricao: "Vários brinquedos para garantir muita diversão e brincadeiras.",
        preco: 79.90
    },

    {
        nome: "Kit Completo para Tartarugas",
        imagem: "itens/kit-tugas.jpeg",
        descricao: "Acessórios essenciais para cuidar e montar um ambiente confortável.",
        preco: 99.90
    },

    {
        nome: "Bolsa de Transporte para Gatos",
        imagem: "itens/passeio-gato.jpg",
        descricao: "Transporte seu gato com conforto, segurança e muito estilo.",
        preco: 139.90
    },

    {
        nome: "Pente Removedor de Pelos",
        imagem: "itens/pente-dog.webp",
        descricao: "Ajuda a remover pelos soltos e manter o pelo do seu pet bem cuidado.",
        preco: 29.90
    },

    {
        nome: "Suporte Suspenso para Coelhos",
        imagem: "itens/suporte-colehinho.jpg",
        descricao: "Um espaço divertido para o coelho descansar e explorar o ambiente.",
        preco: 49.90
    },

    {
        nome: "Surprise Box Pet",
        imagem: "itens/suprise-box.jpeg",
        descricao: "Uma caixinha surpresa cheia de mimos e novidades para o seu pet.",
        preco: 59.90
    }

];
//pegando a div q  a gnt vai preencher
const lojinha = document.getElementById("lojinha"); 
produtos.forEach(function(produto){
    //criando a div item
    const card = document.createElement("div");
    //dando a classe pra div 
    card.classList.add("item");

    //a gnt ja fez isso na escola
    card.innerHTML = `
    <h2>${produto.nome}</h2>
    <img src="${produto.imagem}">
    <p> ${produto.descricao}</p>
    <p class="preco">R$ ${produto.preco}</p>
    <button>Quero!</button>
    `;
    lojinha.appendChild(card); //coloca dentro da div vazia

 
    //DENTRO DO FOR EACH, FZR A FUNÇÃO, pra pegar o botão cliciado
    const botao = card.querySelector("button");
    botao.addEventListener("click", function(){
        adcionarAoCarrinho(produto);
    });
});

function adcionarAoCarrinho(produto) {
     let carrinho = JSON.parse(localStorage.getItem("carrinho")); 
     if(carrinho ===null) {
        carrinho = []; 
     }
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho! 🛒`);
}