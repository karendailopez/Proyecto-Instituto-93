import PublicLayout from '@/Layouts/PublicLayout';
import '../../Layouts/Blog/Articulo.css';
import { useForm } from '@inertiajs/react';
import React , { useState } from 'react';
import SeccionComentario from "@/Layouts/Blog/SeccionComentario";
import '../../../css/blog.css';
import '../../../css/foro.css';
import { Link } from '@inertiajs/react';

export default function Detalle({ articulo, articulosRelacionados}) {
 
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
            <>
                <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
                    <PublicLayout onlyNav={true} />
        
                    <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
                         
                            {Array.isArray(articulo) ? (
                                articulo.map((articulos, index) => (
                                    <div key={index}>
                                        <h1 className="text-3xl font-bold text-gray-900 titulo">{articulos.tituto}</h1>
                                        <p className="text-gray-600 mt-2 text-center" style={{ marginTop: '20px', marginLeft: '75px', color: '#3f68ac' }}>
                                            <span className="font-semibold">{articulo.user.name}</span> - {new Date(articulo.created_at).toLocaleDateString()}
                                        </p>
                                        <img src={articulo.portada_alta_url} alt="Imagen destacada" className="w-full h-64 object-cover rounded-lg mt-4 imagen"/>
                                        <div className="mt-6 text-gray-800 space-y-4 descripcion">
                                            <p>{articulos.descripcion}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 titulo">{articulo.tituto}</h1>
                                    <p className="text-gray-600 mt-2" style={{ marginTop: '20px', marginLeft: '75px', color: '#3f68ac' }}>
                                        <span className="font-semibold">{articulo.user.name}</span> - {new Date(articulo.created_at).toLocaleDateString()}
                                    </p>
                                    {articulo.portada_alta_url != null && (
                                        <img 
                                            src={articulo.portada_alta_url} 
                                            alt="Imagen destacada" 
                                            className="w-full h-64 object-cover rounded-lg mt-4 imagen" 
                                        />
                                    )}

                                    
                                <div className="row">
                                    <div className="mt-6 text-gray-800 space-y-4 descripcion">
                                        <p>{articulo.descripcion}</p>
                                    </div>
            

                                   
                                    {/* Sidebar */}
                                    <aside className="col-md-4">
                                        <div className="container mt-5">
                                            <h3 className="h6 text-uppercase">
                                                <span style={{ color: "#2d62a9" }}>Te puede interesar</span>
                                            </h3>

                                            {articulosRelacionados != null && articulosRelacionados.length > 0 ? (
                                                <ul className="list-unstyled">
                                                    {articulosRelacionados.map((articulo) => (
                                                        <Link 
                                                            key={articulo.id} 
                                                            href={route('blog.articulos', articulo.id)} 
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <article className="mb-4 d-flex align-items-start" id="noti">
                                                            {articulo.portada_alta_url != null && (
                                                                <img
                                                                    src={articulo.portada_baja_url}
                                                                    alt={`Portada de ${articulo.tituto}`}
                                                                    className="img-fluid rounded me-3"
                                                                    style={{ width: "150px", height: "100px" }}
                                                                />)}
                                                                <div>
                                                                    <h2
                                                                        className="h5 text-primary"
                                                                        id="titulo-noti"
                                                                        style={{ fontSize: "16px" }}
                                                                    >
                                                                        {articulo.tituto}
                                                                    </h2>
                                                                    <p className="text-muted">
                                                                        Publicado el {new Date(articulo.created_at).toLocaleDateString()}
                                                                    </p>
                                                                </div>
                                                            </article>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-muted">No hay articulos relacionados</p>
                                            )}
                                        </div>
                                    </aside>


            </div>
                                <hr />
                                {/* TAGS */}
                                 <div className="container mt-5">
                                            <h3 className="h6 text-uppercase">
                                                <span style={{ color: "#2d62a9" }}>Tags Relacionados</span>
                                            </h3>
                                            
                                            {articulo.temas_relacionados != null && articulo.temas_relacionados.length > 0 ? (
                                            <ul className="list-unstyled d-flex gap-2 flex-wrap">
                                                {articulo.temas_relacionados.map((tema) => (
                                                    <Link 
                                                        key={tema.id} 
                                                        href={route('blog.tema', { id: tema.id, descripcion: tema.descripcion })} 
                                                        className="px-3 py-1 border rounded text-decoration-none"
                                                        style={{ background: "#f8f9fa", color: "#007bff" }}
                                                    >
                                                        {tema.descripcion}
                                                    </Link>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-muted">No hay temas relacionados</p>
                                        )}

                                        </div> 
                                             
                                <hr/>
                                <div className="p-5 py-4 flex justify-between items-start footer-entrada">
                                    <div className="flex flex-col items-start">
                                        <a href="#" className="btn_votar mt-2" onClick={() => darLike(articulo.id)}>
                                            <i className="fa fa-thumbs-up megusta" aria-hidden="true"></i> Me gusta
                                        </a>
                                        <span className="text-gray text-xs">
                                            Me gustas: {articulo.votos ? articulo.votos.length : 0}
                                        </span>
                                    </div>
                                </div>
        
                                {/* Sección de comentarios */}
                                <div className="mt-20">
                                    <h2 className="text-2xl font-bold m-4 text-center">Comentarios</h2>
                                    <SeccionComentario comments={comments} />
                                </div>
        
                                {/* Formulario de comentario */}
                                <form className="formulario" onSubmit={Submit}>
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
                                                autoComplete="off"
                                                onChange={cambioInput}
                                            />
                                        </div>
                                    </div>
        
                                    <button className="btnenviar">Enviar</button>
                                </form>
                            </div>
                        )}
                    </div>
        
                    {/* Footer */}
                    <footer className="bg-dark text-white text-center py-4 mt-5">
                        <p className="mb-0">
                            &copy; 2024 Blog Instituto Superior 93. Todos los derechos reservados.
                        </p>
                        <p className="small">
                            Diseñado con <span style={{ color: "red" }}>❤</span>
                        </p>
                    </footer>
                </div>
            </>
        );
    }        

