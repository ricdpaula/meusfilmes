import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";

const Formulario = (props) => {

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrarFilme({
      nomeFilme,
      imagemFilme,
      genero
    })
    setNomeFilme('')
    setImagemFilme('')
    setGenero('')
  };

  const [nomeFilme, setNomeFilme] = useState("");
  const [imagemFilme, setImagemFilme] = useState("");
  const [genero, setGenero] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <CampoTexto 
          valor={nomeFilme} 
          label="Nome do filme"
          aoAlterado={nome => setNomeFilme(nome)}
          placeholder="Insira um filme"
          />
        <CampoTexto 
          valor={imagemFilme} 
          label="Imagem do filme" 
          aoAlterado={imagem => setImagemFilme(imagem)}
          placeholder="Insira a url de uma imagem"
          />
        <ListaSuspensa 
          valor={genero} 
          itens={props.categorias}
          aoAlterado={genero => setGenero(genero)}
          />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
