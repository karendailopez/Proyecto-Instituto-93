import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from '@inertiajs/react';
import '../../../css/foro.css';



export default function Index({ entradas }) {

    const entradasOrdenadas = entradas.reverse();

    const { data, setData, post } = useForm({
        user_id: 2,
        foro_entrada_id: 0,
        foro_comentario_id: 0
    });
    

    const darLike = (idEntrada) =>
    {
        try{
            post(route('foro.votar', idEntrada))
        }
        catch{
            console.log('Error')
        }
    }
    const guardar = () =>{
        setData({
            user_id: 2,
            foro_entrada_id: 1,
            foro_comentario_id: 1
        });
    }
    return (
        <>
            <PublicLayout onlyNav={true} />
            <hr />
            <Link href={route('foro.crearEntrada')} className="custom-button" >Crear Entrada</Link>
            <div className="flex flex-col items-center px-5 foro-w ml-5 entradas2">
                {entradasOrdenadas.map((entrada) => {
                    const etiquetasArray = typeof entrada.etiquetas === 'string' ? JSON.parse(entrada.etiquetas) : entrada.etiquetas;

                    return (
                        <div key={entrada.id} className="container w-full mb-5 entrada">
                            <Link href={route('foro.entrada', entrada.id)} className='link'>
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
                                    </div>  
                            </Link>
                                <div className="p-5 py-4 flex justify-between items-start footer-entrada">
                                    {/* <!-- Columna izquierda --> */}
                                    <div className="flex flex-col items-start">
                                        <a href="#" className="btn_votar mt-2" onClick={() => darLike(entrada.id)}>
                                        <i className="fa fa-thumbs-up megusta" aria-hidden="true"></i> Me gusta
                                        </a>
                                        <span className="text-gray text-xs" onClick={() => {
                                            guardar()
                                            }}>
                                                Me gustas: {entrada.votos.length}    
                                        </span>
                                        
                                    </div>

                                    
                                    </div>
                            </div>
                    
                    );
                })}
            </div>
        </>
    );
}