import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {

    //const [nombre, actualizarNombre] = useState("Aaron");
    //const [mostrar, actualizarMostrar] = useState(true);

    /* const manejarClick = () => {
        console.log("mostrar/ocultar elemento");
        actualizarMostrar(!mostrar) //funcion para actualizar el estado inicial
    } */

    return <section className="OrgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;