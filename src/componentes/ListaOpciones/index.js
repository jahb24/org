import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    /*metodo map -> arreglo.map((equipo, index)=>{
        return <option></option>
        })*/
  /* const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Dev Ops",
    "UX y Diseño",
    "Móvil",
    "Innovacion y Gestión",
  ]; *///Este arreglo ya no es necesario, por que se está obteniendo de App.js

  const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>
        )}
      </select>
    </div>
  );
};

export default ListaOpciones;
