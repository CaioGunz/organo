import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label >{props.label}</label>
<<<<<<< HEAD
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} >
                <option value=""></option>
=======
            <select required={props.obrigatorio} className="lista-suspensa">
>>>>>>> 3fd0c7b (Trabalhando com Props)
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa