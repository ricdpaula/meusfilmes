import Filme from "../Filme/Filme";
import "./Categorias.css";

const Categorias = (props) => {
  return (
    props.filmes.length > 0 ? <section
    className="categorias"
    style={{ backgroundColor: props.corSegundaria }}
  >
    <h2 style={{ borderColor: props.corPrimaria }}>{props.nome}</h2>
    <div className="cards">
      {props.filmes.map((filme) => (
        <Filme
          key={filme.nomeFilme}
          corDeFundo={props.corPrimaria}
          nome={filme.nomeFilme}
          imagem={filme.imagemFilme}
        />
      ))}
    </div>
  </section> : ''
  ); 
};

export default Categorias;
