import { useState, useEffect } from "react"; //importando os hooks
//importando o json de filmes
import filmes from "./filmes.json";
import './App.css';

function App() {
  const [listaFilmes, setListaFilmes] = useState(filmes);


  function selecionarFilme(id: number) {
    const filmeSelecionado = listaFilmes.find((filme) => filme.id === id);//salva o filme pra usar no alert
    const novaLista = listaFilmes.map((filme) => { //cria nova lista com o checked mudado dos filmes
      if (filme.id === id) { //verifica se eh o filme clicado

        if (!filme.checked) { // ve se o checked tava em false antes e mostra o alerta, se nao, nao printa a mensagem
          alert(`Você selecionou: ${filme.nome}`);
        }

        return {
          ...filme, //copia tudo igual do json
          checked: !filme.checked //muda apenas o checked

        };
      }

      return filme; //se for o filme clicado, retorna ele mudado, se nao, retorna ele igual
    });

    setListaFilmes(novaLista);

  }


  return (
    <div className="App">

      <h1>Todos os filmes</h1>
      <table>
        <thead>
          <tr>
            <th>Selecionar</th>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Imagem</th>
          </tr>
        </thead>

        <tbody>
          {listaFilmes.map((filme) => (
            <tr key={filme.id}>
              <td>  <input type="checkbox" checked={filme.checked} style={{ width: "30px", height: "35px", margin: "10px 20px 10px 40px" }} onChange={() => selecionarFilme(filme.id)} /></td>
              <td>{filme.nome}</td>
              <td>{filme.genero}</td>
              <td> <img src={filme.imagem} alt={filme.nome} width={150} /></td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
