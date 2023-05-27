<<<<<<< HEAD

=======
>>>>>>> eed0bbf (Primeiro projeto)
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

<<<<<<< HEAD

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

=======
>>>>>>> eed0bbf (Primeiro projeto)
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
<<<<<<< HEAD
<<<<<<< HEAD
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
=======
            <input placeholder={placeholderModificada}/>
>>>>>>> eed0bbf (Primeiro projeto)
=======
            <input required={props.obrigatorio} placeholder={placeholderModificada}/>
>>>>>>> 3fd0c7b (Trabalhando com Props)
        </div>
    )
}

export default CampoTexto