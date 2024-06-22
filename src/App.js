import { useState } from "react";
import { v4 as uuid } from 'uuid';

import "./App.css";
import Header from "./componentes/Header/header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  //Arreglo de objetos
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/jahb24.png",
      nombre: "Jorge Hernández",
      puesto: "Desarrollador Front End",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/jahb24.png",
      nombre: "Jorge Hernández",
      puesto: "Desarrollador Front End",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/jahb24.png",
      nombre: "Jorge Hernández",
      puesto: "Desarrollador Front End",
      fav: true
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      color: "#57C278",
      colorFondo: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      color: "#82CFFA",
      colorFondo: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      color: "#A6D157",
      colorFondo: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Dev Ops",
      color: "#E06B69",
      colorFondo: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      color: "#DB6EBF",
      colorFondo: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      color: "#FFBA05",
      colorFondo: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestión",
      color: "#FF8A29",
      colorFondo: "#FFEEDF",
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo", colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.color = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  //ternario -> condicion ? mostrar: noMostrar
  //Corto Circuito -> condicion && seMuestra

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
