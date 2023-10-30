import { Fragment } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <Fragment>
            <label>{props.label}</label>
            <input value={props.valor} className='campo-texto' onChange={aoDigitar} type='text' placeholder={props.placeholder}/>
        </Fragment>
    )
}

export default CampoTexto