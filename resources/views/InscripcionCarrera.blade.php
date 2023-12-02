<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="colorlib.com">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inscripcion a carrera</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- Font Icon -->
    <link rel="stylesheet" href="/fonts/material-icon/css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="/vendor/nouislider/nouislider.min.css">
    <!-- Main css -->
    <link rel="stylesheet" href="/css/inscripcion.css">
</head>

<body>
    <header class="header">
        <a href="{{ route('login') }}" class="logo">
            <img src="/storage/images/logo.png" class="logo" alt="logo">
        </a>
        <div class="icons">
            <div id="login-btn" class="fas fa-user"></div>
            <div id="menu-btn" class="fa-solid fa-bars"></div>
        </div>
    </header>
    <div class="main">
        <div class="container">
            <form method="POST" id="signup-form" class="signup-form" action="{{ route('inscripcion.store') }}" enctype="multipart/form-data">
                @csrf
                <div>
                    <h3>Carreras</h3>
                    <fieldset>
                        <h2>Elegir carrera</h2>
                        <div class="fieldset-content">
                            <div class="choose-bank">
                                <p class="choose-bank-desc">Seleccione la carrera</p>
                                <div class="form-group">
                                    <select name="carrera_id" id="carrera" required>
                                        <option value="">Selecciona una Carrera</option>
                                        @foreach ($carreras as $carrera)
                                            <option value="{{$carrera->id}}">{{$carrera->nombre}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <h3>Datos personales</h3>
                    <fieldset>
                        <h2>Información personal</h2>
                        <p class="desc">Completa los campos</p>
                        <div class="fieldset-content">
                            <label class="form-label">Datos Personales</label>
                            <div class="form-group">
                                <input type="text" name="apellido" id="apellido" placeholder="Apellidos" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="nombre" id="nombre" placeholder="Nombres" required />
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <select name="tipo_documento" id="tipo_documento" required>
                                        <option value="" selected>Seleccione Tipo de Documento</option>
                                        <option value="DNI">DNI (Documento Nacional de Identidad)</option>
                                        <option value="LC">LC (Libreta Cívica)</option>
                                        <option value="LE">LE (Libreta de Enrolamiento)</option>
                                        <option value="CI">CI (Cédula de Identidad)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="number" name="numero_documento" id="numero_documento" placeholder="Numero de documento" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <select name="estado_civil" id="estado_civil">
                                    <option value="" selected>Seleccione Estado Civil</option>
                                    <option value="soltero">Soltero</option>
                                    <option value="casado">Casado</option>
                                    <option value="divorciado">Divorciado</option>
                                    <option value="viudo">Viudo</option>
                                    <option value="conviviente">Conviviente</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select name="sexo" id="sexo">
                                    <option value="" selected>Seleccione Sexo</option>
                                    <option value="F">Femenino</option>
                                    <option value="M">Masculino</option>
                                    <option value="O">Otro</option>
                                </select>
                            </div>

                            <label class="form-label">Información de nacimiento</label>
                            <div class="form-group">
                                <input type="date" name="fecha_nacimiento" id="fecha_nacimiento" required />
                            </div>
                            <div class="form-group">
                                <select name="pais_nacimiento" id="pais_nacimiento">
                                    <option value="" selected>Seleccione País de Nacimiento</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Chile">Chile</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Perú">Perú</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select name="localidad_nacimiento" id="localidad_nacimiento">
                                    <option value="" selected>Seleccione Localidad</option>
                                    <option value="Domselaar">Domselaar</option>
                                    <option value="Alejandro korn">Alejandro Korn</option>
                                    <option value="San Vicente">San Vicente</option>
                                    <option value="Guernica">Guernica</option>
                                    <option value="Brandsen">Brandsen</option>
                                    <option value="otraLocalidadN">Otra</option>
                                </select>
                            </div>

                            <label class="form-label">Reside </label>
                            <div class="form-group">
                                <select name="domicilio_provincia_id" id="domicilio_provincia_id">
                                    <option value="" selected>Seleccione Provincia</option>
                                    @foreach ($provincias as $provincia)
                                        <option value="{{$provincia->id}}">{{$provincia->descripcion}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <select name="domicilio_localidad_id" id="domicilio_localidad_id">
                                    <option value="" selected>Seleccione Localidad</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" name="domicilio_distrito" id="domicilio_distrito" placeholder="Distrito" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="domicilio_codigo_postal" id="domicilio_codigo_postal" placeholder="Codigo Postal" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="domicilio_calle" id="domicilio_calle" placeholder="Calle" />
                            </div>
                            <div class="form-group">
                                <input type="number" name="domicilio_altura" id="domicilio_altura" placeholder="Altura" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="domicilio_piso" id="domicilio_piso" placeholder="Piso" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="domicilio_departamento" id="domicilio_departamento" placeholder="Departamento" />
                            </div>
                            <div class="form-group">
                                <label class="form-label">Contacto</label>
                                <input type="text" name="telefono" id="telefono" placeholder="Telefono" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="celular" id="celular" placeholder="Celular" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                    </fieldset>

                    <h3>Formacion</h3>
                    <fieldset>
                        <h2>Tu recorrido educativo</h2>
                        <p class="desc">Complete los campos</p>
                        <!-- Titulo Secundario -->
                        <div class="form-row">
                            <label class="form-label">¿Posees título secundario?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="titulo_secundario" id="titulo_secundario_si" value="1"
                                           required
                                           onclick="mostrarContenido('si_titulo_secundario_content', 'no_titulo_secundario_content')" />
                                    <label for="titulo_secundario_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="titulo_secundario" id="titulo_secundario_no" value="0"
                                           required
                                           onclick="mostrarContenido('no_titulo_secundario_content', 'si_titulo_secundario_content')" />
                                    <label for="titulo_secundario_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- Si NO tiene título secundario -->
                        <div id="no_titulo_secundario_content" class="form-row hidden">
                            <div class="form-group">
                                <input type="number" name="adeuda_materias" id="adeuda_materias"
                                       placeholder="Materias Adeudadas" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="adeuda_descripcion" id="adeuda_descripcion"
                                       placeholder="Descripción de Materias Adeudadas" required />
                            </div>
                        </div>

                        <!-- Si tiene título secundario -->
                        <div id="si_titulo_secundario_content" class="form-row hidden">
                            <div class="form-group">
                                <input type="text" name="titulo" id="titulo" placeholder="Título" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="orientacion" id="orientacion" placeholder="Orientación"
                                       required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="otorgado_por" id="otorgado_por" placeholder="Otorgado por"
                                       required />
                            </div>
                            <div class="form-group">
                                <input type="number" name="anio_egreso" id="anio_egreso" placeholder="Año de egreso"
                                       required />
                            </div>
                            <div class="form-group">
                                <input type="number" name="promedio" id="promedio" placeholder="Promedio" required />
                            </div>
                        </div>

                        <!-- Titulo Tramite -->
                        <div class="form-row">
                            <label class="form-label">¿Tienes título en trámite?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="titulo_tramite" id="titulo_tramite_si" value="1"
                                           required />
                                    <label for="titulo_tramite_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="titulo_tramite" id="titulo_tramite_no" value="0"
                                           required />
                                    <label for="titulo_tramite_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- Mayor Título -->
                        <div class="form-row">
                            <label class="form-label">¿Posees algún otro título?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="mayor_titulo" id="mayor_titulo_terciario"
                                           value="terciario" />
                                    <label for="mayor_titulo_terciario">Terciario</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="mayor_titulo" id="mayor_titulo_universitario"
                                           value="universitario" />
                                    <label for="mayor_titulo_universitario">Universitario</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="mayor_titulo" id="mayor_titulo_posgrado"
                                           value="posgrado" />
                                    <label for="mayor_titulo_posgrado">Posgrado</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="mayor_titulo" id="mayor_titulo_ninguno"
                                           value="" />
                                    <label for="mayor_titulo_ninguno">Ninguno</label>
                                </div>
                            </div>
                        </div>

                        <!-- Otro Título -->
                        <div id="otro_titulo_content">
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" name="mayor_titulo_descripcion" id="mayor_titulo_descripcion" placeholder="Otros títulos"
                                           required />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="mayor_titulo_institucion" id="mayor_titulo_institucion"
                                           placeholder="Otorgado por" required />
                                </div>
                                <div class="form-group">
                                    <input type="number" name="mayor_titulo_promedio" id="mayor_titulo_promedio" placeholder="Promedio"
                                           required />
                                </div>
                            </div>
                        </div>

                        <!-- Maximo Nivel Educativo Padre -->
                        <input type="hidden" name="alumno_dato_extras[0][campo]" value="nivel_educativo_padres">
                        <div class="form-row">
                            <label class="form-label">Máximo nivel educativo del padre</label>
                            <div class="form-group">
                                <select name="alumno_dato_extras[0][valor][padre]" id="maximo_nivel_educativo_padre" required>
                                    <option value="" disabled selected hidden>Seleccionar</option>
                                    <option value="nunca_asistio">Nunca asistió</option>
                                    <option value="primaria_incompleta">Primaria incompleta</option>
                                    <option value="primaria_completa">Primaria completa</option>
                                    <option value="secundaria_incompleta">Secundaria incompleta</option>
                                    <option value="secundaria_completa">Secundaria completa</option>
                                    <option value="terciario_incompleto">Terciario incompleto</option>
                                    <option value="terciario_completo">Terciario completo</option>
                                    <option value="universitario_incompleto">Universitario incompleto</option>
                                    <option value="universitario_completo">Universitario completo</option>
                                    <option value="no_sabe_no_contesta">No Sabe/No Contesta</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <label class="form-label">Máximo nivel educativo de la madre</label>
                            <div class="form-group">
                                <select name="alumno_dato_extras[0][valor][madre]" id="maximo_nivel_educativo_madre" required>
                                    <option value="" disabled selected hidden>Seleccionar</option>
                                    <option value="nunca_asistio">Nunca asistió</option>
                                    <option value="primaria_incompleta">Primaria incompleta</option>
                                    <option value="primaria_completa">Primaria completa</option>
                                    <option value="secundaria_incompleta">Secundaria incompleta</option>
                                    <option value="secundaria_completa">Secundaria completa</option>
                                    <option value="terciario_incompleto">Terciario incompleto</option>
                                    <option value="terciario_completo">Terciario completo</option>
                                    <option value="universitario_incompleto">Universitario incompleto</option>
                                    <option value="universitario_completo">Universitario completo</option>
                                    <option value="no_sabe_no_contesta">No Sabe/No Contesta</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <h3>Trabajo</h3>
                    <fieldset>
                        <h2>Tu recorrido laboral</h2>
                        <p class="desc">Completa los campos</p>
                        <input type="hidden" name="alumno_dato_extras[1][campo]" value="trabajo">

                        <!-- Trabaja -->
                        <div class="form-row">
                            <label class="form-label">¿Actualmente trabajas?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][trabaja]" id="trabaja_si" value="1" required />
                                    <label for="trabaja_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][trabaja]" id="trabaja_no" value="0" required />
                                    <label for="trabaja_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- Sector de Trabajo -->
                        <div id="sector_trabajo_content">
                            <div class="form-row">
                                <label class="form-label">Selecciona tu sector de trabajo</label>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="educacion" value="educación" />
                                        <label for="educacion">Educación</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="gobierno"
                                               value="gobierno_sector_publico" />
                                        <label for="gobierno">Gobierno Sector Público</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="servicio_financiero"
                                               value="servicio_financiero" />
                                        <label for="servicio_financiero">Servicio Financiero</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="turismo" value="turismo" />
                                        <label for="turismo">Turismo</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="sector_agropecuario"
                                               value="sector_agropecuario" />
                                        <label for="sector_agropecuario">Sector Agropecuario</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="comercio" value="comercio" />
                                        <label for="comercio">Comercio</label>
                                    </div>
                                </div>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="empresa" value="empresa" />
                                        <label for="empresa">Empresa</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="servicios" value="servicios" />
                                        <label for="servicios">Servicios</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="transporte" value="transporte" />
                                        <label for="transporte">Transporte</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="profesional_independiente"
                                               value="profesional_independiente" />
                                        <label for="profesional_independiente">Profesional Independiente</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="industria_manufacturera"
                                               value="industria_manufacturera" />
                                        <label for="industria_manufacturera">Industria Manufacturera</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="energia" value="energía" />
                                        <label for="energia">Energía</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="salud" value="salud" />
                                        <label for="salud">Salud</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="fuerzas_armadas_seguridad"
                                               value="fuerzas_armadas_seguridad" />
                                        <label for="fuerzas_armadas_seguridad">Fuerzas Armadas / Seguridad</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[1][valor][sector][]" id="otro" value="otro" />
                                        <label for="otro">Otro</label>
                                    </div>
                                </div>
                            </div>
                            <!-- Otro Sector de Trabajo -->
                            <div class="form-row" id="otro_sector_trabajo_content">
                                <div class="form-group">
                                    <input type="text" name="alumno_dato_extras[1][valor][otro_sector]" id="otro_sector_trabajo"
                                           placeholder="Especificar otro sector de trabajo" />
                                </div>
                            </div>
                        </div>

                        <!-- Horas de Trabajo Diario -->
                        <div class="form-row" id="horas_trabajo_content">
                            <label class="form-label">¿Cuántas horas trabajas diariamente?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][horas_trabajo]" id="horas_trabajo_1_3" value="1-3"
                                           required />
                                    <label for="horas_trabajo_1_3">1-3</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][horas_trabajo]" id="horas_trabajo_4_8" value="4-8"
                                           required />
                                    <label for="horas_trabajo_4_8">4-8</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][horas_trabajo]" id="horas_trabajo_mas_8"
                                           value="mas_8" required />
                                    <label for="horas_trabajo_mas_8">Más de 8</label>
                                </div>
                            </div>
                        </div>

                        <!-- Pensionado/Jubilado -->
                        <div class="form-row">
                            <label class="form-label">¿Eres pensionado/jubilado?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][pensionado_jubilado]" id="pensionado_jubilado_si" value="1"
                                           required />
                                    <label for="pensionado_jubilado_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[1][valor][pensionado_jubilado]" id="pensionado_jubilado_no" value="0"
                                           required />
                                    <label for="pensionado_jubilado_no">No</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <h3>Cooperadora</h3>
                    <fieldset>
                        <h2>Pago Cooperadora</h2>
                        <p class="desc">Completa los campos</p>

                        <div class="form-row">
                            <label class="form-label">¿Realizaste el pago de la cooperador?</label>

                            <div class="form-group">
                                <input type="file" name="comprobante_cooperadora" id="comprobante_cooperadora" onchange="ocultarContenido('opcion_saltear')"/>
                            </div>
                            <div class="form-group" id="opcion_saltear">
                                <input type="checkbox" name="saltear_cooperadora" id="saltear_cooperadora" required />
                                <label for="saltear_cooperadora">¿Desea saltear este paso?</label>
                            </div>
                        </div>
                    </fieldset>

                    <h3>Familia y becas</h3>
                    <fieldset>
                        <h2>Familia y estado ante becas</h2>
                        <input type="hidden" name="alumno_dato_extras[2][campo]" value="familia">
                        <div class="fieldset-content">

                            <!-- ViveSolo -->
                            <div class="form-row">
                                <label class="form-label">¿Vive solo?</label>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="radio" name="alumno_dato_extras[2][valor][vive_solo]" id="vive_solo_si" value="1" required />
                                        <label for="vive_solo_si">Sí</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="radio" name="alumno_dato_extras[2][valor][vive_solo]" id="vive_solo_no" value="0" required />
                                        <label for="vive_solo_no">No</label>
                                    </div>
                                </div>
                            </div>

                            <!-- ViveCon -->
                            <div class="form-row" id="vive_con_content">
                                <label class="form-label">¿Con quién vive?</label>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][vive_con][]" id="vive_con_padres" value="padres" />
                                        <label for="vive_con_padres">Con sus padres</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][vive_con][]" id="vive_con_conyuge" value="cónyuge" />
                                        <label for="vive_con_conyuge">Con su cónyuge o conviviente</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][vive_con][]" id="vive_con_hijos" value="hijos" />
                                        <label for="vive_con_hijos">Con hijos</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][vive_con][]" id="vive_con_otros" value="otros" />
                                        <label for="vive_con_otros">Otros</label>
                                    </div>
                                </div>
                            </div>

                            <!-- FamiliaresACargo -->
                            <div class="form-row" id="familia_aCargo_content">
                                <label class="form-label">¿Tiene familiares a cargo?</label>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="radio" name="alumno_dato_extras[2][valor][familiar_a_cargo]" id="familiares_a_cargo_si"
                                               value="1" required />
                                        <label for="familiares_a_cargo_si">Sí</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="radio" name="alumno_dato_extras[2][valor][familiar_a_cargo]" id="familiares_a_cargo_no"
                                               value="0" required />
                                        <label for="familiares_a_cargo_no">No</label>
                                    </div>
                                </div>
                            </div>

                            <!-- ACargoDe -->
                            <div class="form-row" id="a_cargo_de_content" >
                                <label class="form-label">¿A cargo de quién?</label>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][a_cargo_de][]" id="a_cargo_de_padres" value="padres" />
                                        <label for="a_cargo_de_padres">Padres</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][a_cargo_de][]" id="a_cargo_de_hijos" value="hijos" />
                                        <label for="a_cargo_de_hijos">Hijos</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[2][valor][a_cargo_de][]" id="a_cargo_de_otros" value="otros" />
                                        <label for="a_cargo_de_otros">Otros</label>
                                    </div>
                                </div>
                            </div>

                            <input type="hidden" name="alumno_dato_extras[3][campo]" value="becas">
                            <!-- CONDICIÓN FRENTE A BECAS O PROGRAMAS -->
                            <div class="form-row">
                                <label class="form-label">¿Recibe becas o participa en programas?</label>
                                <div class="form-flex">
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="ninguno" value="ninguno"
                                               onchange="bloquearOpciones()" />
                                        <label for="ninguno">Ninguno</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="estimulos"
                                               value="estímulos_económicos_infd" />
                                        <label for="estimulos">Estímulos económicos (INFD)</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="bicentenario"
                                               value="becas_bicentenario" />
                                        <label for="bicentenario">Becas Bicentenario</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="originarios"
                                               value="pueblos_originarios" />
                                        <label for="originarios">Pueblos originarios</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="progresar" value="progresar" />
                                        <label for="progresar">Progresar</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="auh" value="auh" />
                                        <label for="auh">AUH</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="compromiso_docente"
                                               value="compromiso_docente" />
                                        <label for="compromiso_docente">Compromiso docente</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="envion"
                                               value="programa_envion" />
                                        <label for="envion">Programa Envión</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="argentina_trabaja"
                                               value="argentina_trabaja" />
                                        <label for="argentina_trabaja">Argentina trabaja</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="alumno_dato_extras[3][valor][beca_programa]" id="ellas_hacen"
                                               value="ellas_hacen" />
                                        <label for="ellas_hacen">Ellas hacen</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <h3>Cultura</h3>
                    <fieldset>
                        <h2>PRÁCTICAS CULTURALES O COTIDIANAS</h2>
                        <p class="desc">Complete los campos</p>
                        <input type="hidden" name="alumno_dato_extras[4][campo]" value="practicas_culturales">

                        <!-- EscuchaRadio -->
                        <div class="form-row">
                            <label class="form-label">¿Escuchas la radio?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][escucha_radio]" id="escucha_radio_si" value="1" required />
                                    <label for="escucha_radio_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][escucha_radio]" id="escucha_radio_no" value="0" required />
                                    <label for="escucha_radio_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- MiraTelevision -->
                        <div class="form-row">
                            <label class="form-label">¿Miras televisión?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][mira_television]" id="mira_television_si" value="1"
                                           required />
                                    <label for="mira_television_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][mira_television]" id="mira_television_no" value="0"
                                           required />
                                    <label for="mira_television_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- AsisteObrasTeatros -->
                        <div class="form-row">
                            <label class="form-label">¿Asistes a obras de teatro?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][asiste_teatros]" id="asiste_obras_teatros_si"
                                           value="1" required />
                                    <label for="asiste_obras_teatros_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][asiste_teatros]" id="asiste_obras_teatros_no"
                                           value="0" required />
                                    <label for="asiste_obras_teatros_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- AsisteMuseos -->
                        <div class="form-row">
                            <label class="form-label">¿Asistes a museos?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][asiste_museos]" id="asiste_museos_si" value="1" required />
                                    <label for="asiste_museos_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][asiste_museos]" id="asiste_museos_no" value="0" required />
                                    <label for="asiste_museos_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- AsisteConciertos -->
                        <div class="form-row">
                            <label class="form-label">¿Asistes a conciertos?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][asiste_conciertos]" id="asiste_conciertos_si" value="1"
                                           required />
                                    <label for="asiste_conciertos_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][asiste_conciertos]" id="asiste_conciertos_no" value="0"
                                           required />
                                    <label for="asiste_conciertos_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- LecturasFrecuentes -->
                        <div class="form-row">
                            <label class="form-label">¿Realizas lecturas frecuentes?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][lecturas_frecuentes]" id="lecturas_frecuentes_si" value="1"
                                           required />
                                    <label for="lecturas_frecuentes_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][lecturas_frecuentes]" id="lecturas_frecuentes_no" value="0"
                                           required />
                                    <label for="lecturas_frecuentes_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- TipoLecturaFrecuente -->
                        <div id="tipo_lectura_frecuente_content" class="form-row">
                            <label class="form-label">Selecciona el tipo de lectura frecuente</label>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][tipo_lectura_frecuente][]" id="diarios" value="diarios" />
                                <label for="diarios">Diarios</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][tipo_lectura_frecuente][]" id="revistas" value="revistas" />
                                <label for="revistas">Revistas</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][tipo_lectura_frecuente][]" id="libros" value="libros" />
                                <label for="libros">Libros</label>
                            </div>
                        </div>

                        <!-- LecturaEspecializada -->
                        <div class="form-row">
                            <label class="form-label">¿Realizas lectura especializada?</label>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][lectura_especializada]" id="lectura_especializada" value="lectura_especializada" />
                            </div>
                        </div>

                        <!-- OtrasPracticasCulturales -->
                        <div class="form-row">
                            <label class="form-label">Otras prácticas culturales</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[4][valor][otras_practicas_culturales]" id="otras_practicas_culturales"
                                       placeholder="Especificar otras prácticas culturales" />
                            </div>
                        </div>

                        <!-- UsaInternet -->
                        <div class="form-row">
                            <label class="form-label">¿Usas Internet?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][usa_internet]" id="usa_internet_si" value="1" required />
                                    <label for="usa_internet_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][usa_internet]" id="usa_internet_no" value="0" required />
                                    <label for="usa_internet_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- DondeUsaInternet -->
                        <div id="donde_usa_internet_content" class="form-row">
                            <label class="form-label">Selecciona dónde usas Internet</label>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][donde_usa_internet][]" id="hogar" value="hogar" />
                                <label for="hogar">Hogar</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][donde_usa_internet][]" id="lugar_trabajo"
                                       value="lugar_trabajo" />
                                <label for="lugar_trabajo">Lugar de trabajo</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][donde_usa_internet][]" id="ambito_educativo"
                                       value="ambito_educativo" />
                                <label for="ambito_educativo">Ámbito educativo</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][donde_usa_internet][]" id="celular" value="celular" />
                                <label for="celular">Celular</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][donde_usa_internet][]" id="cyber" value="cyber" />
                                <label for="cyber">Cyber</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][donde_usa_internet][]" id="otro" value="otro" />
                                <label for="otro">Otro</label>
                            </div>
                        </div>

                        <!-- UsaRedesSociales -->
                        <div class="form-row">
                            <label class="form-label">¿Usas Redes Sociales?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][usa_redes_sociales]" id="usa_redes_sociales_si" value="1"
                                           required />
                                    <label for="usa_redes_sociales_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[4][valor][usa_redes_sociales]" id="usa_redes_sociales_no" value="0"
                                           required />
                                    <label for="usa_redes_sociales_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- RedesSociales -->
                        <div id="redes_sociales_content" class="form-row">
                            <label class="form-label">Selecciona las Redes Sociales que usas</label>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][redes_sociales][]" id="facebook" value="facebook" />
                                <label for="facebook">Facebook</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][redes_sociales][]" id="twitter" value="twitter" />
                                <label for="twitter">Twitter</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][redes_sociales][]" id="linkedin" value="linkedin" />
                                <label for="linkedin">Linkedin</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][redes_sociales][]" id="instagram" value="instagram" />
                                <label for="instagram">Instagram</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][redes_sociales][]" id="snapchat" value="snapchat" />
                                <label for="snapchat">Snapchat</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][redes_sociales][]" id="otra_red_social" value="otra_red_social" />
                                <label for="otra_red_social">Otra</label>
                            </div>
                        </div>

                        <!-- SitiosFrecuentados -->
                        <div class="form-row">
                            <label class="form-label">Sitios Frecuentados</label>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][sitios_frecuentados][]" id="correo_electronico"
                                       value="correo_electronico" />
                                <label for="correo_electronico">Correo electrónico</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][sitios_frecuentados][]" id="buscadores" value="buscadores" />
                                <label for="buscadores">Buscadores</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][sitios_frecuentados][]" id="reservorios_informacion"
                                       value="reservorios_informacion" />
                                <label for="reservorios_informacion">Reservorios de información</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][sitios_frecuentados][]" id="diarios_revistas"
                                       value="diarios_revistas" />
                                <label for="diarios_revistas">Diarios y revistas</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][sitios_frecuentados][]" id="portal_abc" value="portal_abc" />
                                <label for="portal_abc">Portal ABC</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[4][valor][sitios_frecuentados][]" id="otros_sitios" value="otros_sitios" />
                                <label for="otros_sitios">Otros</label>
                            </div>
                        </div>
                    </fieldset>

                    <h3>Salud</h3>
                    <fieldset>
                        <h2>FICHA DE SALUD - EN CASO DE EMERGENCIA</h2>
                        <p class="desc">Complete los campos</p>
                        <input type="hidden" name="alumno_dato_extras[5][campo]" value="ficha_salud">

                        <!-- ObraSocialPrepaga -->
                        <div class="form-row">
                            <label class="form-label">¿Tienes Obra Social Prepaga?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][obra_social_prepaga]" id="obra_social_si" value="1"
                                           required />
                                    <label for="obra_social_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][obra_social_prepaga]" id="obra_social_no" value="0"
                                           required />
                                    <label for="obra_social_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- DescripcionObraSocial -->
                        <div id="descripcion_obra_social_content" class="form-row">
                            <label class="form-label">Descripción de la Obra Social</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[5][valor][obra_social_descripcion]" id="descripcion_obra_social"
                                       placeholder="Ingrese la descripción" required />
                            </div>
                        </div>

                        <!-- TratamientoMedico -->
                        <div class="form-row">
                            <label class="form-label">¿Estás bajo tratamiento médico?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][tratamiento_medico]" id="tratamiento_medico_si" value="1"
                                           required />
                                    <label for="tratamiento_medico_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][tratamiento_medico]" id="tratamiento_medico_no" value="0"
                                           required />
                                    <label for="tratamiento_medico_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- DescripcionTratamientoMedico -->
                        <div id="descripcion_tratamiento_medico_content" class="form-row">
                            <label class="form-label">Descripción del Tratamiento Médico</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[5][valor][tratamiento_medico_descripcion]"
                                       id="descripcion_tratamiento_medico" placeholder="Ingrese la descripción" required />
                            </div>
                        </div>

                        <!-- Medicacion -->
                        <div class="form-row">
                            <label class="form-label">¿Estás tomando medicación?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][medicacion]" id="medicacion_si" value="1" required />
                                    <label for="medicacion_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][medicacion]" id="medicacion_no" value="0" required />
                                    <label for="medicacion_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- DescripcionMedicacion -->
                        <div id="descripcion_medicacion_content" class="form-row">
                            <label class="form-label">Descripción de la Medicación</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[5][valor][medicacion_descripcion]" id="descripcion_medicacion"
                                       placeholder="Ingrese la descripción" required />
                            </div>
                        </div>

                        <!-- Discapacidad -->
                        <div class="form-row">
                            <label class="form-label">¿Tienes alguna discapacidad?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][discapacidad]" id="discapacidad_si" value="1" required />
                                    <label for="discapacidad_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][discapacidad]" id="discapacidad_no" value="0" required />
                                    <label for="discapacidad_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- DescripcionDiscapacidad -->
                        <div id="descripcion_discapacidad_content" class="form-row">
                            <label class="form-label">Descripción de la Discapacidad</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[5][valor][discapacidad_descripcion]" id="descripcion_discapacidad"
                                       placeholder="Ingrese la descripción" required />
                            </div>
                        </div>

                        <!-- EstadoDiscapacidad -->
                        <div id="estado_discapacidad_content" class="form-row">
                            <label class="form-label">Estado de la Discapacidad</label>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[5][valor][discapacidad_estado]" id="permanente" value="Permanente" />
                                <label for="permanente">Permanente</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="alumno_dato_extras[5][valor][discapacidad_estado]" id="transitoria" value="Transitoria" />
                                <label for="transitoria">Transitoria</label>
                            </div>
                        </div>

                        <!-- Certificado -->
                        <div class="form-row" id="certificado_discapacidad_content">
                            <label class="form-label">¿Tienes certificado de discapacidad?</label>
                            <div class="form-flex">
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][discapacidad_certificado]" id="certificado_si" value="1" required />
                                    <label for="certificado_si">Sí</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="alumno_dato_extras[5][valor][discapacidad_certificado]" id="certificado_no" value="0" required />
                                    <label for="certificado_no">No</label>
                                </div>
                            </div>
                        </div>

                        <!-- ContactoEmergencia -->
                        <div class="form-row">
                            <label class="form-label">Contacto de Emergencia</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[5][valor][contacto_emergencia]" id="contacto_emergencia" placeholder="Ingrese el contacto de emergencia" required />
                            </div>
                        </div>

                        <!-- TelefonoContacto -->
                        <div class="form-row">
                            <label class="form-label">Teléfono de Contacto</label>
                            <div class="form-group">
                                <input type="text" name="alumno_dato_extras[5][valor][telefono_contacto]" id="telefono_contacto" placeholder="Ingrese el teléfono de contacto" required />
                            </div>
                        </div>
                    </fieldset>
                </div>
            </form>
        </div>

        <footer>
            <div class="box-container">
                <div class="box">
                    <h3>Horario de atención</h3>
                    <p>De lunes a viernes de 18:30 a 22:30 hs.</p>
                    <div class="share">
                        <a href="#" class="fab fa-facebook"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                    </div>
                </div>
                <div class="box">
                    <h3>Contacto</h3>
                    <p>2225481175 / 2225484015</p>
                    <div class="share"><a href="#" class="fa-solid fa-envelope"></a></div>

                </div>
                <div class="box">
                    <h3>Localizacion</h3>
                    <p>Av. San Martín 101 – (1865) San Vicente</p>
                </div>
            </div>
            <div class="credit">
                <h3>ISFT N93 | {{ now()->year }}</h3>
            </div>
        </footer>
    </div>

    <!-- JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"></script>
    <script src="/vendor/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="/vendor/jquery-validation/dist/additional-methods.min.js"></script>
    <script src="/vendor/jquery-validation/dist/localization/messages_es_AR.min.js"></script>
    <script src="/vendor/jquery-steps/jquery.steps.min.js"></script>
    <script src="/vendor/minimalist-picker/dobpicker.js"></script>
    <script src="/vendor/nouislider/nouislider.min.js"></script>
    <script src="/vendor/wnumb/wNumb.js"></script>
    <script src="/js/inscripcion.js"></script>
</body>
</html>
