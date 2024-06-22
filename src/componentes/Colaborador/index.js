import "./Colaborador.css"
import { RiDeleteBin2Line } from "react-icons/ri";
import { PiCalendarHeartFill, PiCalendarHeartLight } from "react-icons/pi";


const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {color, eliminarColaborador, like} = props

    return <div className="colaborador">
        <RiDeleteBin2Line className="eliminar" color="white" onClick={() => eliminarColaborador(id)}/>
        {fav ? 
        <PiCalendarHeartFill color="red" className="fav" onClick={() => like(id)}/> : 
        <PiCalendarHeartLight color="white" className="fav" onClick={() => like(id)}/>}
        
        <div className="encabezado" style={{backgroundColor:color}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador