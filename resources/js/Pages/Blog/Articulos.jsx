import PublicLayout from '@/Layouts/PublicLayout';
import '../../Layouts/Blog/Articulo.css';
import { useForm } from '@inertiajs/react';
import React , { useState } from 'react';
import SeccionComentario from "@/Layouts/Blog/SeccionComentario";
import '../../../css/blog.css';
import '../../../css/foro.css';

export default function Detalle({ articulo }) {
 
    /*Metodo para subir un comentario*/
    const Submit = (event) => {
        event.preventDefault()

        try{
            post(route('blog.insertarComentario'))
            alert('Comenatario creado exitosamente')
        }
        catch{
          alert('No se pudo subir el comentario')
        }
    }
    const { data, setData, post } = useForm({
        mensaje: '',
        user_id: 3,
        blog_articulo_id: articulo.id
    });
    const cambioInput = (event) => {
        const { name, value } = event.target;
        setData(name, value); 
      };
    const [comments] = useState(articulo.comentarios || []);

    const darLike = (idArticulo) =>
        {
            try{
                post(route('blog.votar', idArticulo))
            }
            catch{
                console.log('Error')
            }
        }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            
            <PublicLayout onlyNav={true} />

            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
                {Array.isArray(articulo) ? articulo.map((articulos, index) => (
                    <div key={index}>
                        <h1 className="text-3xl font-bold text-gray-900 titulo">{articulos.tituto}</h1>
                        <p className="text-gray-600 mt-2 text-center"style={{ marginTop: '20px !important', marginLeft: '75px', color: '#3f68ac' }}><span className="font-semibold">{articulo.user.name}</span> - {new Date(articulo.created_at).toLocaleDateString()}</p>
                        <img src={articulo.portada_alta_url} alt="Imagen destacada" className="w-full h-64 object-cover rounded-lg mt-4 imagen"/>
                        <div className="mt-6 text-gray-800 space-y-4 descripcion">
                            <p>{articulos.descripcion}</p>
                        </div>
                    </div>
                )) : (
                    <div>
                        {console.log('ARTTT')}
                        {console.log(articulo)}
                        <h1 className="text-3xl font-bold text-gray-900 titulo" >{articulo.tituto}</h1>
                        <p className="text-gray-600 mt-2" style={{ marginTop: '20px !important', marginLeft: '75px', color: '#3f68ac' }}><span className="font-semibold">{articulo.user.name}</span> - {new Date(articulo.created_at).toLocaleDateString()}</p>
                        <img src={articulo.portada_alta_url} alt="Imagen destacada" className="w-full h-64 object-cover rounded-lg mt-4 imagen"/>
                        <div className="mt-6 text-gray-800 space-y-4 descripcion">
                            <p>{articulo.descripcion}</p>
                        </div>
                        <hr />
                        <div className="p-5 py-4 flex justify-between items-start footer-entrada">
                            {/* <!-- Columna izquierda --> */}
                            <div className="flex flex-col items-start">
                                {console.log(articulo.votos)}
                                <a href="#" className="btn_votar mt-2" onClick={() => darLike(articulo.id)}>
                                <i className="fa fa-thumbs-up megusta" aria-hidden="true"></i> Me gusta
                                </a>
                                <span className="text-gray text-xs">
                                    Me gustas: {articulo.votos ? articulo.votos.length : 0}    
                                </span>
                                
                            </div>
                        </div>
                        {/*Comentarios*/}
                        {/*Seccion donde se muestran los comentarios*/}
                        <div className="mt-20">
                                    <h2 className="text-2xl font-bold m-4 text-center">Comentarios</h2>
                                    <SeccionComentario
                                        comments={comments} 
                                    />
                        </div>
                        {/*Seccion donde se comenta*/}
                        <form className='formulario' onSubmit={Submit}>
                        <div className="flex justify-center items-center w-full">
                        <div className="mb-3 w-full max-w-screen-lg">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label labelcom">
                            Comentar:
                            </label>
                            <textarea 
                            className="form-control w-full p-2 border rounded-md bordecom" 
                            id="exampleFormControlTextarea1" 
                            name="mensaje"  
                            rows="3" 
                            value={data.mensaje} 
                            type="text" 
                            autoComplete="off" 
                            onChange={cambioInput} 
                            />
                        </div>
                        </div>

                            {/* Botón para enviar */}
                            <button
                                className="btnenviar"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                )}
            </div>
             {/* Footer */}
          <footer className="bg-dark text-white text-center py-4 mt-5">
          <p className="mb-0">
            &copy; 2024 Blog Intituto Superior 93. Todos los derechos reservados.
          </p>
          <p className="small">
            Diseñado con <span style={{ color: "red" }}>❤</span>
          </p>
        </footer>
        </div>
    );
}

