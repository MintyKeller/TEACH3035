
/*function mudarCor {
    let div = document.getElementsByTagName("div"); 
}*/

//Crie uma página web com um elemento HTML 
// (por exemplo, um parágrafo, uma div ou qualquer outro de sua escolha) e um botão.
//  Quando o botão for clicado, a cor do elemento deve mudar para uma cor aleatória. 
// O link do GitHub deve ser postado nos comentários.

const button = document.querySelector("button"); //pegando o botaozinho

//criando a cor a


button.addEventListener("click", function mudarCor(){

//criando a cor aleatoria
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    let corRandom = `rgb(${r},${g},${b})`  //que bonitinho, huh!

    let div = document.querySelector("div"); 
    div.style.backgroundColor = corRandom;
}) 

// eu fiz com getElementByTagName e deu errado rsrs