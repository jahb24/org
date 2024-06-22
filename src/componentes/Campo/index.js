// import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    // const [valor, actualizarValor] = useState("Aarón")
    const placeHolderModificado = `${props.placeholder}...`

    //Se puede dar un valor por defecto a la variable type (en este caso "text")
    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeHolderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo;