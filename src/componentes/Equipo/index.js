import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
  //Destructuración
  const { color, colorFondo, titulo, id } = props.datos; //Esto es igual a: const color = props.datos.color

  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
  const objColorFondo = {
    backgroundColor: hexToRgba(color, 0.6)
  };
  const objColor = {
    borderBottomColor: color
  };
  //El style{obj} tambien se puede representar como:
  //style{{backgroundColor:props.datos.colorFondo}}
  //Se ponen los fragments <></> para que no se muestren los equipos que no cumplan con la condicion
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={objColorFondo}>
            <input
                type="color"
                className="input-color"
                value={color}
                onChange={(e) => {
                    actualizarColor(e.target.value, id);
                }}
            />
          <h3 style={objColor}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                color={color}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
