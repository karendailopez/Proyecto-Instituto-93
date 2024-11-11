import React from 'react';
import { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../css/foro.css';

/*
export default function Index({ entradas }) {
    return (
        <>
        
        <PublicLayout carteles={true} />
            <h2>hola!!!</h2>

        </>
    );
};*/

export default function Index({ entradas }) {
/*
    const [entradasConVotos, setEntradasConVotos] = useState(entradas);

    const handleVotar = async (entradaId) => {
        try {
            const response = await fetch(`/web/foro/entradas/${entradaId}/votar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: entradaId })
            });

            if (response.ok) {
                const updatedData = await response.json();
                setEntradasConVotos((prevEntradas) =>
                    prevEntradas.map((entrada) =>
                        entrada.id === entradaId
                            ? { ...entrada, votos: updatedData.total_votos }  
                            : entrada
                    )
                );
            } else {
                console.error("Error al votar");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor", error);
        }
    };

*/

    return (
        <>
            <PublicLayout onlyNav={true} />
            <hr />
            <button className="custom-button">Crear Entrada</button>
            <div className="flex flex-col items-center px-5 foro-w ml-5">
                {entradas.map((entrada) => {
                    const etiquetasArray = typeof entrada.etiquetas === 'string' ? JSON.parse(entrada.etiquetas) : entrada.etiquetas;

                    return (
                        
                        <div key={entrada.id} className="container w-full mb-5 entrada">

                            <div className="shadow-lg">
                                <div className="flex flex-col sm:flex-row items-center p-5">
                                    <h3 className="text-m">{entrada.titulo}</h3>
                                    <p className="text-gray">{entrada.texto_html}</p>
                                </div>
                                <div className="px-6">
                                    {Array.isArray(etiquetasArray) && etiquetasArray.map((e) => (
                                        <span key={e.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray mr-2 mb-2">
                                            #{e.label}
                                        </span>
                                    ))}
                                </div>
                                <div className="p-5 py-4 flex justify-between items-start footer-entrada">
                                    {/* <!-- Columna izquierda --> */}
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray text-xs">Me gustas: {entrada.votos.length}    </span>
                                        <a href="#" className="btn_votar mt-2">
                                        <i className="fa fa-thumbs-up" aria-hidden="true"></i> Me gusta
                                        </a>
                                    </div>

                                    {/* <!-- Columna derecha --> */}
                                    <span className="text-red text-xs self-start">Denuncias: {entrada.denuncias.length}</span>
                                    </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}