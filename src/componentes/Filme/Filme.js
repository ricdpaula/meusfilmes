import './Filme.css'

const Filme = ({corDeFundo, imagem, nome}) => {
    return (
        <div className='filme'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
            </div>
        </div>
    )
}

export default Filme