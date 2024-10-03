import React, { useEffect, useState } from 'react';

const Disenio = () => {
    const [mesas, setMesas] = useState([]);
  
    // Obtener los datos de la tabla 'table_mesas' desde la API en PHP
    useEffect(() => {
      fetch('http://localhost/api/get_table_mesas.php') // Asegúrate de que esta URL sea correcta
        .then(response => response.json())
        .then(data => setMesas(data)) // Almacenar los datos en el estado
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="intro-y grid grid-cols-12 gap-6 mt-5">
          {mesas.map((mesa) => (
            <div className="col-span-12 lg:col-span-6" key={mesa.id}>
              <div className="intro-y box">
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                  <h2 className="font-medium text-base mr-auto">
                    Mesa ID: {mesa.id} {/* Aquí muestras el ID de la mesa */}
                  </h2>
                  <div className="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                    <label className="form-check-label ml-0 sm:ml-2" htmlFor={`inscribirse-${mesa.id}`}>Inscribirse</label>
                    <input id={`inscribirse-${mesa.id}`} className="form-check-switch mr-0 ml-3" type="checkbox"/>
                  </div>
                </div>
                <div className="p-5">
                  <div className="preview">
                    {/* Muestra otros campos de la tabla 'table_mesas' */}
                    <p>Curso Materia ID: {mesa.curso_materia_id}</p>
                    <p>Fecha: {mesa.fecha}</p>
                    <p>Descripción: {mesa.descripcion}</p>
                    {/* Agrega más campos según tu estructura de 'table_mesas' */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );}

export default disenio;