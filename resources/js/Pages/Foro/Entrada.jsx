import React , { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import SeccionComentario from "@/Layouts/Foro/SeccionComentario";
import '../../../css/foro.css';
import { useForm } from '@inertiajs/react';

export default function Detalle({ entrada }) {
    /*Metodo para subir un comentario*/
      const { data, setData, post } = useForm({
        texto_html: '',
        user_id: 3,
        foro_entrada_id: 9, 
        foro_comentario_id: '',
        estado_comentario_id: 1
    });
    const Submit = (event) => {
        event.preventDefault()

        try{
            post(route('foro.insertarComentario'))
            alert('Comenatario creado exitosamente')
        }
        catch{
          alert('No se pudo subir el comentario')
        }
    }
    const cambioInput = (event) => {
      const { name, value } = event.target;
      setData(name, value); // 🔴 Ahora sí actualiza correctamente el estado
    };
    
    const [comments] = useState(entrada.comentarios || []);
    return (
      
        <div className="flex flex-col items-center px-5 w-full">
          
          <PublicLayout onlyNav={true} />
          
          <div className="w-full max-w-screen-lg bg-white shadow-lg rounded-2xl p-6 entradas2 bor">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {entrada.titulo}
            </h1>
            <p className="text-gray-700">{entrada.texto_html}</p>
          </div>

          {/*Seccion donde se muestran los comentarios*/}
          <div className="mt-20">
                    <h2 className="text-2xl font-bold m-4 text-center">Comentarios</h2>
                    <SeccionComentario
                        comments={comments} 
                    />
          </div>
          <form className='formulario' onSubmit={Submit}>
          <div className="mb-3 w-full max-w-screen-lg">
            <label htmlFor="exampleFormControlTextarea1" className="form-label labelcom">
              Comentar: 
            </label>
            <textarea 
              className="form-control w-full p-2 border rounded-md bordecom" 
              id="exampleFormControlTextarea1" 
              name="texto_html"  
              rows="3" 
              value={data.texto_html} 
              type="text" 
              autoComplete="off" 
              onChange={cambioInput} 
            />
          </div>
          {/* Botón para enviar */}
          <button
            className="btnenviar"
          >
            Enviar
          </button>
          </form>
          
        </div>
      );
      
}
