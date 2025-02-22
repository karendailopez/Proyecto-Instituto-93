import React from "react";
import { Link } from '@inertiajs/react';
import '../../../css/blog.css';
import MenuDesplegable from '../../Layouts/Blog/MenuDesplegable'
const Blog = ({grupos, ultimoArticulo, otrosArticulos, articulos, autor}) => {

  return (
    <>
  
      {/* Header */}
      <header className="bg-primary text-white text-center py-4">
        <h1 className="display-4">BLOG - ISFT 93</h1>
        <p className="lead">Un espacio para compartir noticias</p>
      </header>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container py-3">
        
      {grupos.map((grupo) => {
        return(
        <div key={grupo.id}>
          {/* Navbar */}
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <MenuDesplegable grupo={grupo}/>
                        </ul>
                </div>
            
        </div>
        )
        
          
      })}
      </div>
      </nav>
      
        

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          <main className="col-md-8">
            <section id="articles">
              {ultimoArticulo ? (
                <article className="mb-4 card-principal">
                <img
                  src={ultimoArticulo.portada_baja_url}
                  alt={`Portada de ${ultimoArticulo.tituto}`}
                  className="img-fluid rounded mb-3"
                />
                <h2 className="h5 text-primary">{ultimoArticulo.tituto}</h2>
                <p className="text-muted">Publicado el {new Date(ultimoArticulo.created_at).toLocaleDateString()}</p>
                <p>
                  {ultimoArticulo.descripcion.length > 200
                    ? `${ultimoArticulo.descripcion.slice(0, 200)}...`
                    : ultimoArticulo.descripcion}
                </p>
                <Link href={route('blog.articulos', ultimoArticulo.id)} className="btn btn-sm btn-outline-primary">
                  Leer más
                </Link>
              </article>
              
              ) : (
                <p className="text-danger">No hay artículos disponibles en este momento.</p>
              )}
            </section>
          </main>
        

          {/* Sidebar */}
          <aside className="col-md-4">
             {/* LO ULTIMO DE SISTEMAS */}
            <div className="mb-3">
            <h3 className="h6 text-uppercase">
              Lo último - <span style={{ color: "#2d62a9"}}>Sistemas</span>
            </h3>

              <ul className="list-unstyled">
              {articulos
                        .filter(articulo => articulo.categoria_nombre === 'Sistemas')
                        .map((articulo) => (
                          <Link href={route('blog.articulos', articulo.id)}style={{ textDecoration: 'none' }} >
                          <article className="mb-4 d-flex align-items-start" id="noti">
                          <img
                            src={articulo.portada_baja_url}
                            alt={`Portada de ${articulo.tituto}`}
                            className="img-fluid rounded me-3"
                            style={{ width: "150px", height: "100px" }}
                          />
                          <div>
                          <h2
                          className="h5 text-primary"
                          id="titulo-noti"
                          style={{ fontSize: "16px" }}
                          >
                          {articulo.tituto}
                          </h2>
                            <p className="text-muted">Publicado el {new Date(articulo.created_at).toLocaleDateString()}</p>
                          </div>
                        </article>
                          </Link>
                          
                ))}
              
              
              </ul>
            </div>
            
            {/* LO ULTIMO DE TURISMO */}
            <div className="mb-3">
            <h3 className="h6 text-uppercase">
              Lo último - <span style={{ color: "#22b216"}}>Turismo</span>
            </h3>

              <ul className="list-unstyled">
               
              {articulos
                        .filter(articulo => articulo.categoria_nombre === 'Turismo')
                        .map((articulo) => (
                          <Link href={route('blog.articulos', articulo.id)}style={{ textDecoration: 'none' }}>
                          <article className="mb-4 d-flex align-items-start" id="noti">
                          <img
                            src={articulo.portada_baja_url}
                            alt={`Portada de ${articulo.tituto}`}
                            className="img-fluid rounded me-3"
                            style={{ width: "150px", height: "100px" }}
                          />
                          <div>
                          <h2
                          className="h5 text-primary"
                          id="titulo-noti"
                          style={{ fontSize: "16px" }}
                          >
                          {articulo.tituto}
                          </h2>
                            <p className="text-muted">Publicado el {new Date(articulo.created_at).toLocaleDateString()}</p>
                            
                          </div>
                        </article>
                          </Link>
                          
                        ))}
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
      {/* Cards de los otros 3 artículos */}
        <div className="row" style={{margin: '20px'}}>
          
          {otrosArticulos.length > 0 ? (
            otrosArticulos.map((articulo) => (
              <article key={articulo.id} className="col-md-4 mb-4 card-size">
                
              <img
                src={articulo.portada_baja_url}
                alt={`Portada de ${articulo.tituto}`}
                className="img-fluid rounded mb-3"
              />
              <h2 className="h5 text-primary">{articulo.tituto}</h2>
              <p className="text-muted">Publicado el {new Date(articulo.created_at).toLocaleDateString()}</p>
              {/* <p className="text-muted">Publicado por: {autor.user.name}</p> */}
              <p>
                {articulo.descripcion.length > 200
                  ? `${articulo.descripcion.slice(0, 200)}...`
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
      

     
    </>
  );
};

export default Blog;


