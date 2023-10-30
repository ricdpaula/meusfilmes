import { Fragment } from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <Fragment>
      <label>Genero:</label>
      <select
        className="select"
        value={props.valor}
        onChange={(evento) => {
          props.aoAlterado(evento.target.value);
        }}
      >
        <option value={''}>Selecione um gênero</option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </Fragment>
  );
};

export default ListaSuspensa;
