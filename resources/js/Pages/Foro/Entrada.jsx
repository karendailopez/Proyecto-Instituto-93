import React from 'react';


export default function Detalle({ entrada }) {
    // Aseguramos que etiquetas sea un array, convirtiéndolo si es necesario
    const etiquetasArray = typeof entrada.etiquetas === 'string' ? JSON.parse(entrada.etiquetas) : entrada.etiquetas;

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">{entrada.titulo}</h1>
                <p className="text-gray-700 text-base">{entrada.texto_html}</p>
            </div>

            <div className="px-6 pt-4 pb-2">
                <h2 className="text-gray-600 font-semibold mb-2">Etiquetas:</h2>
                {Array.isArray(etiquetasArray) && etiquetasArray.map((etiqueta, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{etiqueta} 
                    </span>
                ))}
            </div>

            <div className="px-6 py-4 flex justify-between">
                <span className="text-gray-600">Votos: {entrada.votos.length}</span>
                <span className="text-red-600">Denuncias: {entrada.denuncias.length}</span>
            </div>

            <div className="px-6 py-4">
                <h2 className="text-gray-600 font-semibold mb-2">Comentarios ({entrada.comentarios.length}):</h2>
                {entrada.comentarios.map(comentario => (
                    <div key={comentario.id} className="mb-4 bg-gray-100 rounded-lg p-4 shadow-inner">
                        <p className="text-gray-700">{comentario.texto_html}</p>
                        <div className="text-sm text-gray-600 mt-2">Votos: {comentario.votos.length}</div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}
