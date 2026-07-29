import { useState, useEffect } from "react"; //importando os hooks
//importando o json de filmes
import filmes from "./filmes.json";
import './App.css';

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    filme.genero.toLowerCase().includes(pesquisa.toLowerCase())
  );


  return (
    <div className="App">

      <input value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)} //mapeando
        style={{ width: "400px", height: "35px", margin: "auto" }} />

      <h1>Filmes Filtrados</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Imagem</th>
          </tr>
        </thead>

        <tbody>
          {filmesFiltrados.map((filme) => (
            <tr key={filme.id}>
              <td>{filme.nome}</td>
              <td>{filme.genero}</td>
              <td> <img src={filme.imagem} alt={filme.nome} width={150} /></td>

            </tr>
          ))}
        </tbody>
      </table>








      <h1>Todos os filmes</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Imagem</th>
          </tr>
        </thead>

        <tbody>
          {filmes.map((filme) => (
            <tr key={filme.id}>
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
