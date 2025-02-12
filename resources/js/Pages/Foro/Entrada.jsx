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
        foro_entrada_id: entrada.id, 
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
      setData(name, value); 
    };
    
    //Metodo para dar like a las entradas
    const darLike = (idEntrada) =>
      {
          try{
              post(route('foro.votar', idEntrada))
          }
          catch{
              console.log('Error')
          }
      }

    const [comments] = useState(entrada.comentarios || []);
    console.log(entrada)
    return (
      
        <div className="flex flex-col items-center px-5 w-full">
          
          <PublicLayout onlyNav={true} />
          
          <div className="w-full max-w-screen-lg bg-white shadow-lg rounded-2xl p-6 entradas2 bor">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {entrada.titulo}
            </h1>
            <p className="text-gray-700">{entrada.texto_html}</p>
            
              
                <div className="p-5 py-4 flex justify-between items-start footer-entrada">
                {/* <!-- Columna izquierda --> */}
                <div className="flex flex-col items-start">
                    <a href="#" className="btn_votar mt-2" onClick={() => darLike(entrada.id)}>
                    <i className="fa fa-thumbs-up megusta" aria-hidden="true"></i> Me gusta
                    </a>
                    <span className="text-gray text-xs">
                        Me gustas: {entrada.votos ? entrada.votos.length : 0}    
                    </span>
                    
                </div>

                {/* <!-- Columna derecha --> */}
                <span className="text-red text-xs self-start">
                    Denuncias: {entrada.denuncias ? entrada.denuncias.length : 0}
                </span>
          </div>
              
                           
            
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
