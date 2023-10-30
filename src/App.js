import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Categorias from "./componentes/Categorias/Categorias";
import Rodape from "./componentes/Rodape/Rodape";

function App() {
  const [filmes, setFilmes] = useState([]);

  const categorias = [
    {
      genero: "Terror",
      corPrimaria: "#3B3B3B",
      corSegundaria: "#E8E8E8",
    },
    {
      genero: "Comedia",
      corPrimaria: "#FFF51E",
      corSegundaria: "#FFFDD2",
    },
    {
      genero: "Romance",
      corPrimaria: "#FF2A2A",
      corSegundaria: "#FFE0D2",
    },
    {
      genero: "Ficção",
      corPrimaria: "#1683FF",
      corSegundaria: "#B0D5FF",
    },
    {
      genero: "Ação",
      corPrimaria: "#2F16FF",
      corSegundaria: "#D5D0FF",
    },
    {
      genero: "Animação",
      corPrimaria: "#FF2A88",
      corSegundaria: "#FFE1EE",
    },
  ];

  const aoNovoFilme = (filme) => {
    console.log(filme);
    setFilmes([...filmes, filme]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCadastrarFilme={(filme) => aoNovoFilme(filme)}
        categorias={categorias.map((categorias) => categorias.genero)}
      />
      {categorias.map((categoria) => (
        <Categorias
          key={categoria.genero}
          nome={categoria.genero}
          corPrimaria={categoria.corPrimaria}
          corSegundaria={categoria.corSegundaria}
          filmes={filmes.filter(filme => filme.genero === categoria.genero)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
