import jQuery from 'jquery';
import { Head } from '@inertiajs/react';
import PublicLayout from "@/Layouts/PublicLayout.jsx";

import Swal from "sweetalert2";
export default function Welcome({ auth, message}) {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 20) {
            jQuery('.navbar').addClass('scrolled');
            jQuery('.navbar-link').addClass('a-scrolled');
        } else {
            jQuery('.navbar').removeClass('scrolled');
            jQuery('.navbar-link').removeClass('a-scrolled');
        }
    });

    jQuery(document).ready(function() {
        jQuery('.navbar-toggler').click(() => {
            jQuery('.navbar-collapse').toggleClass('show');
        });
    });

    if(message) {
        Swal.fire({
            title: message['title'],
            text: message['text'],
            icon: "success"
        });
    }

    return (
        <>
            <Head title="Bienvenido" />

            <PublicLayout>
                <div className="main-container d-flex flex-column align-items-center">
                    <div className="container-fluid">
                        <p>
                            Su trayectoria académica comenzó con dos carreras: Tecnicatura Superior en Análisis de Sistemas y Tecnicatura
                            Superior en Administración Contable, las cuales durante su primer año de vida se dictaron en el edificio de la
                            escuela Secundaria N° 2 hasta que poco después se trasladó definitivamente al edificio de la Escuela Primaria
                            N° 1 en la Calle SAN MARTÍN 101 – San Vicente – donde desde hace más de dos décadas abre sus puertas
                            diariamente a partir de las 18:30 hs. con el firme objetivo de formar “a los mejores Técnicos de la Provincia
                            de Buenos Aires”.
                        </p>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-bs-toggle="pill"
                                       href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <i className="fa fa-user-circle-o mr-2"></i>
                                        <span className="font-weight-bold small text-uppercase">¿Qué ventajas ofrece el Instituto Superior 93?</span>
                                    </a>
                                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-bs-toggle="pill"
                                       href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                        <i className="fa fa-calendar-minus-o mr-2"></i>
                                        <span className="font-weight-bold small text-uppercase">¿Qué carreras se pueden estudiar en el Instituto Superior 93?</span>
                                    </a>
                                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-bs-toggle="pill"
                                       href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                        <i className="fa fa-star mr-2"></i>
                                        <span className="font-weight-bold small text-uppercase">¿Que caracteriza al Instituto Superior 93?</span>
                                    </a>
                                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-bs-toggle="pill"
                                       href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                        <i className="fa fa-check mr-2"></i>
                                        <span className="font-weight-bold small text-uppercase">¿Cuándo comienza la inscripción?</span>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-9">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Permite a sus alumnos insertarse laboralmente en el ámbito local, provincial, regional y nacional.
                                            </li>
                                            <li className="list-group-item">
                                                Cuenta con docentes altamente capacitados y especializados en cada una de las carreras.
                                            </li>
                                            <li className="list-group-item">
                                                Se encuentra localizado en el centro de San Vicente accediendo por diversos medios de transporte.
                                            </li>
                                            <li className="list-group-item">
                                                Todas sus carreras son terciarias, gratuitas y otorgan títulos oficiales.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel"
                                         aria-labelledby="v-pills-profile-tab">
                                        <ul className="list-group">
                                            <li className="list-group-item">Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones</li>
                                            <li className="list-group-item"> Tecnicatura Superior en Guía de Turismo</li>
                                            <li className="list-group-item">Tecnicatura Superior en Administración Contable</li>
                                            <li className="list-group-item">Tecnicatura Superior en Administración con Orientación en Marketing</li>
                                            <li className="list-group-item">Tecnicatura Superior en Administración Pública</li>
                                            <li className="list-group-item">Tecnicatura Superior en Enfermería</li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel"
                                         aria-labelledby="v-pills-messages-tab">
                                        <h4 className="font-italic mb-4">Reviews</h4>
                                        <p className="font-italic text-muted mb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>

                                    <div className="tab-pane fade shadow rounded bg-white p-5 text-center" id="v-pills-settings" role="tabpanel"
                                         aria-labelledby="v-pills-settings-tab">
                                        <p className="font-italic text-muted mb-2">
                                            La inscripción se realizará durante el mes de diciembre y se
                                            llevará a cabo en: Av. San Martín 101- San Vicente (al lado de la Iglesia) de lunes a viernes entre las
                                            19:00 y las 21:00 hs. <a href="">Ver Requisitos</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="text-center my-5">
                    <h2 className="py-5">Nuestras carreras</h2>
                    <div className="row gy-5">
                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <div className="img-container" style={{background: '#EA4E1D', color: '#fff'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Tecnicatura Superior en Administración con Orientación en Marketing</h5>
                                    </div>
                                    <img src="/storage/images/welcome/marketing.jpg" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <a className="css-button-arrow--sky" href="https://isfdyt93-bue.infd.edu.ar/sitio/tecnicatura-superior-en-administracion-con-orientacion-en-marketing/" role="button">Más info</a>
                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <div className="img-container" style={{background: '#2D3979', color: '#fff'}}>
                                    <div className="card-body">
                                        <h6 className="card-title">Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones</h6>
                                    </div>
                                    <img src="/storage/images/welcome/sistemas.jpg" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <a className="css-button-arrow--sky" href="https://isfdyt93-bue.infd.edu.ar/sitio/tecnicatura-superior-en-analisis-desarrollo-y-programacion-de-aplicaciones/" role="button">Más info</a>
                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <div className="img-container" style={{background: '#009CB3', color: '#fff'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Tecnicatura Superior en Enfermería</h5>
                                    </div>
                                    <img src="/storage/images/welcome/enfermeria.jpg" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <a className="css-button-arrow--sky" href="https://isfdyt93-bue.infd.edu.ar/sitio/tecnicatura-superior-en-enfermeria/" role="button">Más info</a>

                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <div className="img-container" style={{background: '#016533', color: '#fff'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Tecnicatura Superior en Guía de Turismo</h5>
                                    </div>
                                    <img src="/storage/images/welcome/turismo.jpg" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <a className="css-button-arrow--sky" href="https://isfdyt93-bue.infd.edu.ar/sitio/tecnicatura-superior-en-guia-de-turismo/" role="button">Más info</a>

                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <div className="img-container" style={{background: '#FBBB33', color: '#fff'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Tecnicatura Superior en Administración Contable</h5>
                                    </div>
                                    <img src="/storage/images/welcome/admContable.jpg" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <a className="css-button-arrow--sky" href="https://isfdyt93-bue.infd.edu.ar/sitio/tecnicatura-superior-en-administracion-contable/" role="button">Más info</a>
                                </div>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center">
                            <div className="card">
                                <div className="img-container" style={{background: '#BE1623', color: '#fff'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Tecnicatura Superior en Administración Pública</h5>
                                    </div>
                                    <img src="/storage/images/welcome/admPublica.jpg" alt=""></img>
                                </div>
                                <div className="user-info">
                                    <a className="css-button-arrow--sky" href="https://isfdyt93-bue.infd.edu.ar/sitio/tecnicatura-superior-en-administracion-publica/" role="button">Más info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PublicLayout>
        </>
    );
}
