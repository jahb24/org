import { useState } from "react";

import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("")
  const [color, actualizarColor] = useState("")

  const {registrarColaborador, crearEquipo} = props

  const manejarEnvio = (evento) => {
    evento.preventDefault(); //Para prevenir la recarga de la página
    
    let datosAEnviar = {
        nombre,
        puesto,
        foto,
        equipo
    }

    registrarColaborador(datosAEnviar)
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, color})//Para no escribir titulo:titulo, color:color
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required={true}
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar Enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el Equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar Titulo"
          required={true}
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color Primario"
          placeholder="Ingresar Color (ej. #FFFFFF)"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
