import React from 'react';

const Disenio = ({ mesas, handleSave }) => {
    return (
        <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            {mesas.map((mesa) => {
                console.log(mesa.personal_presidente); 
                return (
                    <div key={mesa.id} className="col-span-12 lg:col-span-6">
                        <div className="intro-y box">
                            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                                <h2 className="font-medium text-base mr-auto">
                                    {/* Verificamos si 'materia' está definido */}
                                    {mesa.materia ? mesa.materia : 'Materia no disponible'}
                                </h2>
                                <div className="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <label className="form-check-label ml-0 sm:ml-2" htmlFor={`show-example-${mesa.id}`}>Inscribirse</label>
                                    <input id={`show-example-${mesa.id}`} data-target="#basic-datepicker" className="show-code form-check-switch mr-0 ml-3" type="checkbox" onClick={handleSave}/>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="preview">
                                <p>Primera fecha: {mesa.fecha_hora_1}</p>
                                <p>Segunda fecha: {mesa.fecha_hora_2}</p>
                                {/* Mostrar los nombres del presidente y auxiliar */}
                                <p>Presidente: {mesa.personal_presidente ? `${mesa.personal_presidente.nombre} ${mesa.personal_presidente.apellido}` : 'Presidente no disponible'}</p>
                                <p>Auxiliar: {mesa.personal_auxiliar ? `${mesa.personal_auxiliar.nombre} ${mesa.personal_auxiliar.apellido}` : 'Auxiliar no disponible'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Disenio;