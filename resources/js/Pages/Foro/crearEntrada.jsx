import React from 'react';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../css/foro.css';

export default function EntradasCrear() {
    const { data, setData, post } = useForm({
        titulo: '',
        texto_html: '',
        slug: '',
        etiquetas: [], 
        user_id: 2,
        estado_entrada_id: 1,
        cantidad_visitas: 10
    });
    const Submit = (event) => {
        event.preventDefault()

        try{
            post(route('foro.insertarEntrada'))
            alert('Entrada ingresada exitosamente')
        }
        catch{
            console.log('Error')
        }
    }


    const cambioInput = (event) =>{
        console.log(event)
        const { name, value } = event.target;
        setData(name, value);
    }

    return(
        <>
        <PublicLayout onlyNav={true} />
        <form className='formulario' onSubmit={Submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputText1" className="form-label">
                Titulo:
                </label>
                <input
                type="text"
                value={data.titulo}
                name='titulo'
                className="form-control"
                id="exampleInputText1"
                aria-describedby="textHelp"
                autoComplete="off"
                onChange={cambioInput}
                />
                <div id="textHelp" className="form-text">
                Que aporte o duda presenta...
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleTextarea1" className="form-label">
                Descripcion:
                </label>
                <textarea
                className="form-control"
                value={data.texto_html}
                name='texto_html'
                id="exampleTextarea1"
                rows="4"
                autoComplete="off"
                onChange={cambioInput}
                ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
                Subir
            </button>
    </form>
        </>
    )
}