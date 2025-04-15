import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import '../../../css/blog.css';

export default function Temas({ descripcion, articulosRelacionados }) {

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <PublicLayout onlyNav={true} />
        <div className="container mt-5">
                <h2 className="text-center text-primary fw-bold">{descripcion}</h2>
                
                <div className="row" style={{ margin: '50px' }}>
                    {articulosRelacionados.map((articulo) => (
                        <article key={articulo.id} className="col-md-4 mb-4 card-size">
                            {articulo.portada_alta_url && (
                                <img
                                    src={articulo.portada_alta_url}
                                    alt={`Portada de ${articulo.tituto}`}
                                    className="img-fluid rounded mb-3"
                                />
                            )}
                            <h2 className="h5 text-primary">{articulo.titulo}</h2>
                            <p className="text-muted">Publicado el {new Date(articulo.created_at).toLocaleDateString()}</p>
                            <p>
                                {articulo.descripcion.length > 100
                                    ? `${articulo.descripcion.slice(0, 100)}...`
                                    : articulo.descripcion}
                            </p>
                            <Link href={route('blog.articulos', articulo.id)} className="btn btn-sm btn-outline-primary">
                                Leer más
                            </Link>
                        </article>
                    ))}
                </div>
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
    )
}