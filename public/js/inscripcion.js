
(function($) {
    const form = $("#signup-form");

    form.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            nombre: {maxlength: 50},
            apellido: {maxlength: 50},
            email: {email: true},
            numero_documento: {maxlength: 8},
            localidad_nacimiento: {maxlength: 50},
            pais_nacimiento: {maxlength: 50},
        },
        onfocusout: function(element) {
            $(element).valid();
        },
    });

    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        stepsOrientation: "vertical",
        titleTemplate: '<div class="title"><span class="step-number">#index#</span><span class="step-text">#title#</span></div>',
        labels: {
            previous: 'Volver',
            next: 'Siguiente',
            finish: 'Finalizar',
            current: ''
        },
        onStepChanging: function(event, currentIndex, newIndex) {
            if (currentIndex === 0) {
                form.parent().parent().parent().append('<div class="footer footer-' + currentIndex + '"></div>');
            }
            if (currentIndex === 1) {
                form.parent().parent().parent().find('.footer').removeClass('footer-0').addClass('footer-' + currentIndex + '');
            }
            if (currentIndex === 2) {
                form.parent().parent().parent().find('.footer').removeClass('footer-1').addClass('footer-' + currentIndex + '');
            }
            if (currentIndex === 3) {
                form.parent().parent().parent().find('.footer').removeClass('footer-2').addClass('footer-' + currentIndex + '');
            }

            // if(currentIndex === 4) {
            //     form.parent().parent().parent().append('<div class="footer" style="height:752px;"></div>');
            // }
            form.validate().settings.ignore = ":disabled,:hidden";

            if(currentIndex > newIndex) {
                return true;
            }
            return form.valid();
        },
        onFinishing: function(event, currentIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinished: function(event, currentIndex) {
            form.submit();
        },
        onStepChanged: function(event, currentIndex, priorIndex) {
            return true;
        }
    });

    form.inputs = {
        localidad: form.find('#domicilio_localidad_id')
    };

    form.find('#domicilio_provincia_id').change((e) => {
        const provincia_id = e.target.value;

        $.get( "/api/localidad/" + provincia_id, function( data ) {
            form.inputs.localidad.html('<option value="" selected>Seleccione Localidad</option>');

            data.forEach((x) => {
                form.inputs.localidad.append(`<option value="${ x.id }">${ x.descripcion }</option>`);
            });
        });
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    //oculto los campos al cargar la pagina
    ocultarContenido('no_titulo_secundario_content');
    ocultarContenido('si_titulo_secundario_content');

    ocultarContenido('horas_trabajo_content');
    ocultarContenido('sector_trabajo_content');
    ocultarContenido('horas_trabajo_content');

    ocultarContenido('otro_titulo_content');

    ocultarContenido('descripcion_obra_social_content');

    ocultarContenido('descripcion_tratamiento_medico_content');
    ocultarContenido('descripcion_medicacion_content');

    ocultarContenido('descripcion_discapacidad_content');
    ocultarContenido('estado_discapacidad_content');
    ocultarContenido('certificado_discapacidad_content');

    //variables que buscan el id

    let terciarioRadio = document.getElementById('mayor_titulo_terciario');
    let universitarioRadio = document.getElementById('mayor_titulo_universitario');
    let posgradoRadio = document.getElementById('mayor_titulo_posgrado');
    let ningunoRadio = document.getElementById('mayor_titulo_ninguno');


    let trabajaSiRadio = document.getElementById('trabaja_si');
    let trabajaNoRadio = document.getElementById('trabaja_no');

    let viveSoloSiRadio = document.getElementById('vive_solo_si');
    let viveSoloNORadio = document.getElementById('vive_solo_no');

    let obraSocialSiRadio = document.getElementById('obra_social_si');
    let obraSocialNoRadio = document.getElementById('obra_social_no');

    let discapacidadSiRadio = document.getElementById('discapacidad_si');
    let discapacidadNoRadio = document.getElementById('discapacidad_no');

    let tratamientoSiRadio = document.getElementById('tratamiento_medico_si');
    let tratamientoNoRadio = document.getElementById('tratamiento_medico_no');

    let medicacionSiRadio = document.getElementById('medicacion_si');
    let medicacionNoRadio = document.getElementById('medicacion_no');

    //radiobuttoms
    terciarioRadio.addEventListener('change', function () {
        if (terciarioRadio.checked) {
            mostrarContenido('otro_titulo_content', 'otro_titulo_content');
        }
    });

    universitarioRadio.addEventListener('change', function () {
        if (universitarioRadio.checked) {
            mostrarContenido('otro_titulo_content', 'otro_titulo_content');
        }
    });

    posgradoRadio.addEventListener('change', function () {
        if (posgradoRadio.checked) {
            mostrarContenido('otro_titulo_content', 'otro_titulo_content');
        }
    });

    ningunoRadio.addEventListener('change', function () {
        if (ningunoRadio.checked) {
            ocultarContenido('otro_titulo_content');
        }
    });

    viveSoloSiRadio.addEventListener('change', function() {
        if (viveSoloSiRadio.checked) {
            ocultarContenido('vive_con_content');
            ocultarContenido('familia_aCargo_content');
        } else {
            mostrarContenido('familia_aCargo_content' ,'familia_aCargo_content')
        }
    });

    viveSoloNORadio.addEventListener('change', function() {
        if (viveSoloSiRadio.checked) {
            ocultarContenido('vive_con_content');
            ocultarContenido('familia_aCargo_content');
        } else {
            mostrarContenido('vive_con_content', 'vive_con_content');
        }
    });

    trabajaSiRadio.addEventListener('change', function () {
        if (trabajaSiRadio.checked) {
            mostrarContenido('sector_trabajo_content', 'sector_trabajo_content');
            mostrarContenido('horas_trabajo_content', 'horas_trabajo_content');
        }
    });

    trabajaNoRadio.addEventListener('change', function () {
        if (trabajaNoRadio.checked) {
            ocultarContenido('sector_trabajo_content');
            ocultarContenido('horas_trabajo_content');
        }
    });

    obraSocialSiRadio.addEventListener('change', function () {
        if (obraSocialSiRadio.checked) {
            mostrarContenido('descripcion_obra_social_content', 'descripcion_obra_social_content');
        }
    });

    obraSocialNoRadio.addEventListener('change', function () {
        if (obraSocialNoRadio.checked) {
            ocultarContenido('descripcion_obra_social_content');
        }
    });

    discapacidadSiRadio.addEventListener('change', function () {
        if (discapacidadSiRadio.checked) {
            mostrarContenido('descripcion_discapacidad_content', 'descripcion_discapacidad_content');
            mostrarContenido('estado_discapacidad_content', 'estado_discapacidad_content');
            mostrarContenido('certificado_discapacidad_content', 'certificado_discapacidad_content');
        }
    });

    discapacidadNoRadio.addEventListener('change', function () {
        if (discapacidadNoRadio.checked) {
            ocultarContenido('descripcion_discapacidad_content');
            ocultarContenido('estado_discapacidad_content');
            ocultarContenido('certificado_discapacidad_content');
        }
    });

    tratamientoSiRadio.addEventListener('change', function () {
        if (tratamientoSiRadio.checked) {
            mostrarContenido('descripcion_tratamiento_medico_content', 'descripcion_tratamiento_medico_content');
        }
    });

    tratamientoNoRadio.addEventListener('change', function () {
        if (tratamientoNoRadio.checked) {
            ocultarContenido('descripcion_tratamiento_medico_content');
        }
    });

    medicacionSiRadio.addEventListener('change', function () {
        if (medicacionSiRadio.checked) {
            mostrarContenido('descripcion_medicacion_content', 'descripcion_medicacion_content');
        }
    });

    medicacionNoRadio.addEventListener('change', function () {
        if (medicacionNoRadio.checked) {
            ocultarContenido('descripcion_medicacion_content');
        }
    });
});

function bloquearOpciones() {
    let opciones = document.getElementsByName("BecaPrograma");

    for (let i = 1; i < opciones.length; i++) {
        opciones[i].disabled = document.getElementById("ninguno").checked;
    }
}

function mostrarContenido(mostrar, ocultar) {
    let elementosMostrar = document.getElementById(mostrar).children;
    let elementosOcultar = document.getElementById(ocultar).children;

    for (let i = 0; i < elementosOcultar.length; i++) {
        elementosOcultar[i].style.display = "none";
    }

    for (let j = 0; j < elementosMostrar.length; j++) {
        elementosMostrar[j].style.display = "block";
    }
}

function ocultarContenido(ocultar) {
    let elementosOcultar = document.getElementById(ocultar).children;

    for (let i = 0; i < elementosOcultar.length; i++) {
        elementosOcultar[i].style.display = "none";
        elementosOcultar[i].value = "";
    }
}
