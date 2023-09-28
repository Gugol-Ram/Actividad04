import React, { useState } from "react";
import "../Css/Encuestas.css";

function Encuestas({ encuestas }) {
  const [seleccionadas, setSeleccionadas] = useState([]);

  const toggleSeleccion = (encuestaId, opcion) => {
    const nuevaSeleccion = [...seleccionadas];
    const index = nuevaSeleccion.findIndex(
      (item) => item.encuestaId === encuestaId && item.opcion === opcion
    );

    if (index === -1) {
      nuevaSeleccion.push({ encuestaId, opcion });
    } else {
      nuevaSeleccion.splice(index, 1);
    }

    setSeleccionadas(nuevaSeleccion);
  };

  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul className="encuesta-list">
        {encuestas.map((encuesta) => (
          <li key={encuesta.id}>
            {encuesta.pregunta}
            <ul>
              {encuesta.opciones.map((opcion) => (
                <li key={opcion}>
                  <label>
                    <input
                      type="checkbox"
                      checked={seleccionadas.some(
                        (item) =>
                          item.encuestaId === encuesta.id &&
                          item.opcion === opcion
                      )}
                      onChange={() => toggleSeleccion(encuesta.id, opcion)}
                    />
                    {opcion}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={() => setSeleccionadas([])}>Enviar Respuesta</button>
    </div>
  );
}

export default Encuestas;
