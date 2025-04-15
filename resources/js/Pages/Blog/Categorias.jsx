import PublicLayout from "@/Layouts/PublicLayout";
import { Link } from '@inertiajs/react';
import '../../../css/blog.css';

export default function Categorias({ portada, articulos}) {
    return (
        <div>
          {console.log(portada)}
          <PublicLayout onlyNav={true} />
          <div style={{ position: 'relative', width: '100%' }}>
          {/* Imagen de portada */}
          {portada.portada_alta_url ? (
              <img
                  src={portada.portada_alta_url}
                  alt="Portada"
                  style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      filter: 'brightness(70%)',
                      borderRadius: '8px'
                  }}
              />
          ) : (
              <p>No hay imagen disponible</p>
          )}

          {/* Título sobre la imagen */}
          <h2 style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              fontSize: '3rem', // Tamaño de la fuente aumentado
              fontWeight: 'bold', // Hace que las letras se vean más impactantes,
              margin: 0,
              padding: '0.5rem'
          }}>
              {portada.descripcion}
          </h2>
      </div>
          {/* Articulos */}
      <div className="row" style={
                            {margin: '50px'
                            }}>
          {articulos.length > 0 ? (
            articulos.map((articulo) => (
              <article key={articulo.id} className="col-md-4 mb-4 card-size">
                {articulo.portada_alta_url != null && (
              <img
                src={articulo.portada_baja_url}
                alt={`Portada de ${articulo.tituto}`}
                className="img-fluid rounded mb-3"
              />)}
              <h2 className="h5 text-primary">{articulo.tituto}</h2>
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

            ))
          ) : (
            <p className="text-warning">No hay otros artículos disponibles.</p>
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
