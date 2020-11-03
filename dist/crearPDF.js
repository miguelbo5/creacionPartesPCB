document.getElementById("botonDescargar").addEventListener("click", descargarPDF);

var motivoServicio;
fechaServicio: Date;
var numeroExpediente;
var municipio;
horaEntrada: Date;
horaSalida: Date;
var tipoActividad;
var voluntarios = [];
var horasVoluntarios = [];
var numeroVoluntarios = getVoluntariosLenght();

var moviles = [];
var conductorMovil = [];
var numeroMoviles = 4;


function descargarPDF() {

    motivoServicio = document.getElementById("motivoServicio").value;

    fechaServicio = new Date(document.getElementById("fechaServicio").value);

    numeroExpediente = document.getElementById("numeroExpedienteServicio").value;

    tipoActividad = $("input:radio[name=radioTipoActividad]:checked").val();

    municipio = document.getElementById("municipioServicio").value;

    horaEntrada = document.getElementById("horaEntradaServicio").value;

    horaSalida = document.getElementById("horaSalidaServicio").value;

    for (let i = 0; i < numeroVoluntarios; i++) {

        elementId = "checkBoxVoluntarios" + i;

        if (document.getElementById(elementId).checked) {

            voluntarios.push(document.getElementById(elementId).value);

            horasVoluntarios.push(document.getElementById('horasVoluntario' + i).value);

        }

    }

    for (let i = 0; i < numeroMoviles; i++) {

        elementId = "checkBoxMoviles" + i;

        if (document.getElementById(elementId).checked) {

            moviles.push(document.getElementById(elementId).value);

            conductorMovil.push(document.getElementById('conductorVehiculo' + i).value);

        }

    }

    if (checkForms()) {
        printpdf();
        clearForms();
    } else {
        $('.alert').show()
    }


}

function clearForms() {

    motivoServicio = document.getElementById("motivoServicio").value = null;

    fechaServicio = new Date(document.getElementById("fechaServicio").value = null);

    numeroExpediente = document.getElementById("numeroExpedienteServicio").value = null;

    municipio = document.getElementById("municipioServicio").value = null;

    horaEntrada = document.getElementById("horaEntradaServicio").value = null;

    horaSalida = document.getElementById("horaSalidaServicio").value = null;

}

function checkForms() {

    if(!motivoServicio || !fechaServicio || !horaEntrada || !horaSalida || !municipio){

        return false;

    }else{

        return true;

    }

}

function printpdf() {

    let headersTablaVoluntarios = new Array('Nombre', 'Horas');
    let headersTablaMoviles = new Array('Vehiculo', 'Conductor');
    let headersTablaComidas = new Array('Comida', 'Bar/Restaurante', 'Total');

    var documentoPdf = {

        content: [

            {
                text: 'Motivo: ' + motivoServicio,
                margin: [0, 5],
            },

            {
                text: 'Fecha: ' + fechaServicio.toString('d/M/yyyy'),
                margin: [0, 5],
            },

            {
                text: 'Municipio: ' + municipio,
                margin: [0, 5],
            },

            {
                text: 'Tipo de servicio: ' + tipoActividad,
                margin: [0, 5],
            },

            {
                text: 'Hora entrada: ' + horaEntrada,
                margin: [0, 5],
            },

            {
                text: 'Hora salida: ' + horaSalida,
                margin: [0, 5],
            },


                    //Tabla voluntarios
                    {
                        margin: [0, 10],
                        table:
                        {
                            headerRows: 1,
                            body: crearBodyTablas(headersTablaVoluntarios, voluntarios, horasVoluntarios)
                        }
                    },

                    //Tabla moviles
                    {
                        margin: [0, 10],
                        table:
                        {
                            headerRows: 1,
                            body: crearBodyTablas(headersTablaMoviles, moviles, conductorMovil)
                        }
                    },

                

                
            
            //Tabla comidas
            {
                margin: [0, 10],
                table:
                {
                    headerRows: 1,
                    body: crearBodyTablaComidas(headersTablaComidas)
                }
            }

        ]
    }

    let nombreArchivo = "PARTE " + fechaServicio.toString("d MMMM yyyy");

    pdfMake.createPdf(documentoPdf).download(nombreArchivo);

}

function crearBodyTablas(titulos, primerParametro, segundoParametro) {

    var body = [];

    body.push(titulos);

    for (let i = 0; i < primerParametro.length; i++) {

        var columna = [];

        columna.push(primerParametro[i].toString());
        columna.push(segundoParametro[i].toString())

        body.push(columna);

    }

    return body;

}

function crearBodyTablaComidas(titulos) {

    var body = [];

    let comidas = [];
    let restaurantes = [];
    let totalPersonas = [];

    body.push(titulos);

    if (document.getElementById('checkBoxDesayuno').checked) {

        comidas.push(document.getElementById('checkBoxDesayuno').value);
        restaurantes.push(document.getElementById('barRestauranteDesayuno').value);
        totalPersonas.push(document.getElementById('totalPersonasDesayuno').value);

    }

    if (document.getElementById('checkBoxAlmuerzo').checked) {

        comidas.push(document.getElementById('checkBoxAlmuerzo').value);
        restaurantes.push(document.getElementById('barRestauranteAlmuerzo').value);
        totalPersonas.push(document.getElementById('totalPersonasAlmuerzo').value);

    }

    if (document.getElementById('checkBoxComida').checked) {

        comidas.push(document.getElementById('checkBoxComida').value);
        restaurantes.push(document.getElementById('barRestauranteComida').value);
        totalPersonas.push(document.getElementById('totalPersonasComida').value);

    }

    if (document.getElementById('checkBoxCena').checked) {

        comidas.push(document.getElementById('checkBoxCena').value);
        restaurantes.push(document.getElementById('barRestauranteCena').value);
        totalPersonas.push(document.getElementById('totalPersonasCena').value);


    }

    for (let i = 0; i < comidas.length; i++) {

        let columna = [];
        columna.push(comidas[i].toString());
        columna.push(restaurantes[i].toString());
        columna.push(totalPersonas[i].toString());

        body.push(columna);

    }

    return body;

}


function getVoluntariosLenght() {

    $.getJSON('voluntarios.json', function (data) {

        numeroVoluntarios = Object.keys(data.voluntarios).length;

    })

}