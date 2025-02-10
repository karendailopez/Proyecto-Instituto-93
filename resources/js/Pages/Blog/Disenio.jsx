import React from "react";
import '../../../css/blog.css';
const Blog = ({grupos, articulos}) => {
  console.log(articulos);
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
        <div>
          {/* Navbar */}
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                   {grupo.descripcion}
                                </a>
                                <ul className="dropdown-menu" >
                                    <li><a className="dropdown-item" href="#">Home1</a></li>
                                    <li><a className="dropdown-item" href="#">Home2</a></li>
                                    <li><a className="dropdown-item" href="#">Home3</a></li>
                                </ul>
                              </li>
                              
                      
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
          {/* Articles Section */}
          <main className="col-md-8">
            <section id="articles">
              <article className="mb-4 card-principal">
                <img
                  src="https://media.istockphoto.com/id/1020187160/es/foto/desarrollador-de-software-de-trabajo.jpg?s=612x612&w=0&k=20&c=oHs8RmFT0oavjgiAHn3D50RluRoqqtP8s5Qa6XEboPM="
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded mb-3"
                />
                <h2 className="h5 text-primary">{articulos[0].tituto}</h2>
              <p>
                {articulos[0].descripcion}
              </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  Leer más
                </a>
              </article>
              




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
              <article className="mb-4 d-flex align-items-start" id="noti">
                <img
                  src="https://media.istockphoto.com/id/1394627722/es/foto/reservar-cita-en-el-calendario-de-reuniones.jpg?s=612x612&w=0&k=20&c=5kMxvg-iRxbyH_vJYtqem9cpDCOdMFq3LpebJGl6PU4="
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded me-3"
                  style={{ width: "150px", height: "auto" }}
                />
                <div>
                <h2
                className="h5 text-primary"
                id="titulo-noti"
                style={{ fontSize: "16px" }}
                >
                JavaScript revoluciona el desarrollo web con las nuevas funcionalidades de ECMAScript 2024
                </h2>
                  <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                </div>
              </article>
              <article className="mb-4 d-flex align-items-start" id="noti">
                <img
                  src="https://img.freepik.com/fotos-premium/programador_827316-741.jpg?size=626&ext=jpg"
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded me-3"
                  style={{ width: "150px", height: "auto" }}
                />
                <div>
                <h2
                className="h5 text-primary"
                id="titulo-noti"
                style={{ fontSize: "16px" }}
                >
                JavaScript revoluciona el desarrollo web con las nuevas funcionalidades de ECMAScript 2024
                </h2>
                  <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                </div>
              </article>
              <article className="mb-4 d-flex align-items-start" id="noti">
                <img
                  src="https://media.gettyimages.com/id/1219854221/es/foto/concepto-de-desarrollo-y-codificaci%C3%B3n-del-dise%C3%B1o-web.jpg?s=612x612&w=0&k=20&c=b2NkqxW1D98ONujW9jV--VbrIwzgL66WwEu2vwy6VBk="
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded me-3"
                  style={{ width: "150px", height: "auto" }}
                />
                <div>
                <h2
                className="h5 text-primary"
                id="titulo-noti"
                style={{ fontSize: "16px" }}
                >
                JavaScript revoluciona el desarrollo web con las nuevas funcionalidades de ECMAScript 2024
                </h2>
                  <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                </div>
              </article>
              </ul>
            </div>
            
            {/* LO ULTIMO DE TURISMO */}
            <div className="mb-3">
            <h3 className="h6 text-uppercase">
              Lo último - <span style={{ color: "#22b216"}}>Turismo</span>
            </h3>

              <ul className="list-unstyled">
              <article className="mb-4 d-flex align-items-start" id="noti">
                <img
                  src="https://media.istockphoto.com/id/489556478/es/foto/viaja-de-herramientas.jpg?s=612x612&w=0&k=20&c=9iBZRpH4Wpe9QrrlUVzko8XKGis5wjb0h5csjDkr4bM="
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded me-3"
                  style={{ width: "150px", height: "auto" }}
                />
                <div>
                <h2
                className="h5 text-primary"
                id="titulo-noti"
                style={{ fontSize: "16px" }}
                >
               Gran concurrencia en el Foro Sectorial de Turismo de Merlo
                </h2>
                  <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                </div>
              </article>
              <article className="mb-4 d-flex align-items-start" id="noti">
                <img
                  src="https://media.istockphoto.com/id/485614909/es/foto/gu%C3%ADa-de-explicar-a-los-turistas-en-roma-por-el-coliseo.webp?a=1&b=1&s=612x612&w=0&k=20&c=lj-cTyKw5G97FlmMOieMf-vMqCS57nXrKQxez3K6ZrQ="
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded me-3"
                  style={{ width: "150px", height: "auto" }}
                />
                <div>
                <h2
                className="h5 text-primary"
                id="titulo-noti"
                style={{ fontSize: "16px" }}
                >
                Gran concurrencia en el Foro Sectorial de Turismo de Merlo
                </h2>
                  <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                </div>
              </article>
              <article className="mb-4 d-flex align-items-start" id="noti">
                <img
                  src="https://media.gettyimages.com/id/1140611116/es/foto/emocionado-de-viajar.jpg?s=612x612&w=0&k=20&c=-RlrRUGLAaFZ82qrEDFIZweYz5ZSeQJ82dB1saYocCI="
                  alt="Portada del Artículo 1"
                  className="img-fluid rounded me-3"
                  style={{ width: "150px", height: "auto" }}
                />
                <div>
                <h2
                className="h5 text-primary"
                id="titulo-noti"
                style={{ fontSize: "16px" }}
                >
                Gran concurrencia en el Foro Sectorial de Turismo de Merlo
                </h2>
                  <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                </div>
              </article>
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
      <div className="row">
                    {/* Card 1 */}
                    <article className="col-md-4 mb-4 card-size">
                      <img
                        src="https://media.gettyimages.com/id/1430329171/es/foto/el-ingeniero-de-programaci%C3%B3n-est%C3%A1-trabajando-en-su-oficina.jpg?s=612x612&w=0&k=20&c=b6351TJWwZR08o2VJimq-v_y9cNMCXehFzIE_7bSLvk="
                        alt="Portada del Artículo 2"
                        className="img-fluid rounded mb-3"
                      />
                      <h2 className="h5 text-primary">{articulos[1].tituto}</h2>
                      <p className="text-muted">Publicado el 6 de noviembre de 2024</p>
                      <p>
                      {articulos[1].descripcion}
                      </p>
                      <a href="#" className="btn btn-sm btn-outline-primary">Leer más</a>
                    </article>

                    {/* Card 2 */}

                    <article className="col-md-4 mb-4 card-size">
                      <img
                        src="https://media.istockphoto.com/id/625727674/es/foto/estrategia-de-marketing-concepto-de-negocio.jpg?s=612x612&w=0&k=20&c=WrxCfBV_YwRNFvXeTDXsp9nexJFnVXdIHz8yb0B0cmQ="
                        alt="Portada del Artículo 1"
                        className="img-fluid rounded mb-3"
                      />
                      <h2 className="h5 text-primary">Estrategias de Marketing Efectivas</h2>
                      <p className="text-muted">Publicado el 7 de noviembre de 2024</p>
                      <p>
                      Las estrategias de marketing son planes diseñados para promover productos o servicios, atraer clientes y generar ventas.
                       Incluyen tácticas como la segmentación del mercado, la personalización de mensajes,
                        el uso de redes sociales, campañas publicitarias y la fidelización de clientes,
                         con el objetivo de maximizar el impacto y alcanzar las metas comerciales.
                      </p>
                      <a href="#" className="btn btn-sm btn-outline-primary">Leer más</a>
                    </article>

                     {/* Card 3  */}
                    <article className="col-md-4 mb-4 card-size">
                      <img
                        src="https://media.gettyimages.com/id/1071461664/es/foto/tener-un-recorrido-por-calles-de-la-ciudad.jpg?s=612x612&w=0&k=20&c=8GEj7QI87o7OpsSWiQSk9iQwTGOlUcSR7FDzerAjyo8="
                        alt="Portada del Artículo 3"
                        className="img-fluid rounded mb-3"
                      />
                      <h2 className="h5 text-primary">El Turismo de Experiencias: La Nueva Era de los Viajes</h2>
                      <p className="text-muted">Publicado el 8 de noviembre de 2024</p>
                      <p>
                      El turismo de experiencias ha ganado popularidad, con los viajeros buscando vivencias únicas
                       y auténticas en lugar de simplemente visitar destinos turísticos tradicionales. 
                       Este enfoque pone énfasis en actividades inmersivas, como gastronomía local, deportes 
                       de aventura
                      </p>
                      <a href="#" className="btn btn-sm btn-outline-primary">Leer más</a>
                    </article>
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
    </>
  );
};

export default Blog;


