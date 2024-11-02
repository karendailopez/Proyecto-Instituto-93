import 'jquery/dist/jquery.slim.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../css/public.css';
import { Link } from '@inertiajs/react';
import {useEffect} from "react";

export default function PublicLayout({ children, carteles=false }) {
    useEffect(() => {
        document.body.classList.remove('main');
    }, []);

    return (
       <>
           <nav className="navbar navbar-expand-lg navbar-dark">
               <div className="flex-row d-flex align-items-end w-100">
                   <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                       <img className="mx-3" src="/storage/images/logo.png" alt="Logo instituto ISFT93" width="120" height="120"></img>
                   </a>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse justify-content-end">
                       <ul className="navbar-nav ml-auto gap-3">
                           <li className="nav-item">
                               <Link href={route('inscripcion-carrera')} className="nav-link navbar-link text-dark">
                                   Inscribirse a Carrera
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link href={route('inscripcion-materia')} className="nav-link navbar-link text-dark">
                                   Inscribirse a Materias
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link href={route('foro')} className="nav-link navbar-link text-dark">
                                   Foro
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link href={route('login')} className="nav-link navbar-link text-dark">
                                   Login
                               </Link>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>


           {!carteles && (
            <>
           <div>
               <div className="card mb-3" style={{width: '100%', minHeight: '40vh'}}>
                   <div className="row flex-row-reverse g-0">
                       <div className="col-md-8" style={{minHeight: '40vh'}}>
                           <img src="/storage/images/welcome/imgInsti.png" className="img-fluid w-100" alt="..."></img>
                       </div>
                       <div className="col-md-4" style={{minHeight: '40vh'}}>
                           <div className="card-body p-5 h-100" style={{backgroundColor: '#2847a5'}}>
                               <h3 className="card-title text-white">EL INSTITUTO SUPERIOR 93 ASEGURA TU FUTURO</h3>
                               <p className="card-text text-white">En junio de 1993 se creó el instituto, una de las instituciones más emblemáticas de San Vicente.</p>
                               <div className="text-center">
                                <a href={route('inscripcion-carrera')} className="btn btn-warning w-50">Inscribite</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           </>
        )}

           <main className="my-5">
               <div className="container">
                   {children}
               </div>
           </main>

           {!carteles && (
            <>
           <div className="container">
               <footer className="d-flex flex-wrap justify-content-between py-3 my-4 border-top gap-3">
                   <div className="col-md-4 d-flex flex-column align-items-center">
                       <h5>Donde nos ubicamos</h5>
                       <p>Av. San Martín 101 – (1865) San Vicente</p>
                       <iframe
                           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6534.532929879079!2d-58.4251964!3d-35.0250632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2c53aefcbec1%3A0x391483c1d5e02671!2sInstituto%20Superior%20de%20Formaci%C3%B3n%20Docente%20y%20T%C3%A9cnica%20N%C2%BA%2093%20Arturo%20Umberto%20Illia!5e0!3m2!1ses-419!2sar!4v1697821517919!5m2!1ses-419!2sar"
                           width="300" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"></iframe>
                   </div>

                   <div className="col mb-3">
                       <div className="row">
                           <h5>Horario de Atención</h5>
                           <p>De lunes a viernes de 18:30 a 22:30 hs.</p>
                       </div>
                       <div className="row">
                           <h5>Informes e inscripción</h5>
                           <ul>
                               <li>(02225) 481175 | (02225) 484015</li>
                               <li>institutosuperior93@gmail.com</li>
                           </ul>
                       </div>
                   </div>
               </footer>
           </div>
           <div className="d-flex align-items-center justify-content-center" style={{backgroundColor: '#254083', height: '100px'}}>
               <h5 className="footer-text text-white">Nuestras redes</h5>
               <div className="social-buttons" style={{width: '350px'}}>
                   <div className="footer-social-links d-flex justify-content-evenly">
                        <a href="#" title="Facebook" target="_blank"><i className="fa-regular fa-envelope"></i></a>
                        <a href="#" title="Twitter" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" title="Google+" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" title="LinkedIn+" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                   </div>
               </div>
           </div>
           </>
        )}
       </>
    );
}
