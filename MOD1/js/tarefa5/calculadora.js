/*
Crie uma calculadora simples que permite aos usuários realizar operações matemáticas básicas, 
como adição, subtração, multiplicação e divisão,
utilizando operadores aritméticos. O link do GitHub deve ser postado nos comentários
*/

const visor = document.querySelector('#visor'); //visor
const botoes = document.querySelectorAll('.numero, .operador'); //pegando apenas o que vai fazer parte da string
const botaoIgual = document.querySelector('.igual'); //o igual vai ser como o enter, que eh o estopim pra calculeira kk

let expressao = ''; // a expressão/ string que vai ser tratada para reaqlizar as operções 




for (var i = 0; i < botoes.length; i++) { /*percorre a "lista" de botoes */
    /*função que coloca as coisas no visor e preenche a let expressao */
    botoes[i].addEventListener('click', function() { /* e toda vez que clicaaa ele... */

        /*primeiro faz um verificação meio baguncinha se ja tem operador, pq so pode um */
       if(this.textContent=="+"||this.textContent=="−"||this.textContent=="÷"||this.textContent=="×"){
        for(var j =0; j<expressao.length; j++){
            if(expressao[j]=="+"||expressao[j]=="−"||expressao[j]=="÷"||expressao[j]=="×"){
                alert("não podes, só um operador querid@")
                return;
            }  
        }
            expressao += this.textContent; /*adiciona o operador */
            visor.textContent = expressao;
            
       } else {
         expressao += this.textContent;  /*adiciona o numero direto*/
        visor.textContent = expressao;
       }
       
    });
}

const num = ["1","2","3","4","5","6","7","8","9","0"]; 
const ope = ['+','−','÷','×']
let conta = ""; 
let a = "";
let b = ""; 
let operador; 
let resultado; 

botaoIgual.addEventListener("click", function calcular() {
   
    let expressao = visor.textContent; // ← agora funciona!
   


     for(var i =0; i<expressao.length; i++){
        if (num.includes(expressao[i]) ){
            //its a number
            let temOperador = false;
            for(var k = 0; k < conta.length; k++) {
                if(ope.includes(conta[k])) {
                    temOperador = true;
                    break;
                }
            }
            
            if(temOperador) {
                // Já tem operador, é o segundo número
                b = b + expressao[i];
            } else {
                // Ainda não tem, é o primeiro
                a = a + expressao[i];
            }
            conta += expressao[i]; /*adiciona na string de verificação */

        } else if (ope.includes(expressao[i])) {
            //eh operador 
            operador =  (expressao[i]); 
            conta += expressao[i];  /*adiciona na string de verificação */
        }
     }
     //convertendo as strings pra numeros e operadores do js
     a = parseInt(a); 
     b = parseInt(b); 

   switch (operador) {
    case '+':
        resultado = a + b;
   
        break;

    case '−':
        resultado = a - b; 
        break;

    case '÷':
        if(b==0) {
            resultado = "error, unexpected value for b rsrs"
        } else {
            resultado = a/b; 
        }
    
        break;

    case '×':
        resultado = a * b; 
        break;
}

    visor.textContent = resultado;

})
