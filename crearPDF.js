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
var numeroMoviles = 4;


function descargarPDF() {

    motivoServicio = document.getElementById("motivoServicio").value;
    console.log("Motivo servicio: " + motivoServicio);

    fechaServicio = document.getElementById("fechaServicio").value;
    console.log("Fecha servicio: " + fechaServicio);

    numeroExpediente = document.getElementById("numeroExpedienteServicio").value;
    console.log("Nº exp: " + numeroExpediente);

    tipoActividad = $("input:radio[name=radioTipoActividad]:checked").val();
    console.log("Tipo actividad: " + tipoActividad);

    municipio = document.getElementById("municipioServicio").value;
    console.log("Municipio: " + municipio);

    horaEntrada = document.getElementById("horaEntradaServicio").value;
    console.log("Hora entrada: " + horaEntrada);

    horaSalida = document.getElementById("horaSalidaServicio").value;
    console.log("Hora salida: " + horaSalida);

    for (let i = 0; i < numeroVoluntarios; i++) {

        elementId = "checkBoxVoluntarios" + i;

        if (document.getElementById(elementId).checked) {

            voluntarios.push(document.getElementById(elementId).value);

            horasVoluntarios.push(document.getElementById('horasVoluntario' + i).value);

        }

    }

    console.log(voluntarios);
    console.log(horasVoluntarios);

    for (let i = 0; i < numeroMoviles; i++) {

        elementId = "checkBoxMoviles" + i;

        if (document.getElementById(elementId).checked) {

            moviles.push(document.getElementById(elementId).value);

        }

    }

    console.log(moviles);



    if (checkForms()) {
        printpdf();
        clearForms();
    } else {
        $('.alert').show()
    }


}

function clearForms() {

}

function checkForms() {

    return true;

}

function printpdf() {

    var documentoPdf = {

        content: [
            {
                table:
                {
                    headerRows: 2,
                    widths: 'auto',
                    body: crearArray(voluntarios, horasVoluntarios)
                }
            }
        ]
    }

    pdfMake.createPdf(documentoPdf).download();

}

function crearArray(voluntarios, horasVoluntarios) {
    
    var body = [];

    var titulos = new Array( 'Nombre', 'Horas');

    body.push(titulos);


    for (let i = 0; i < voluntarios.length; i++) {
        
        var columna = [];

        columna.push(voluntarios[i].toString());
        columna.push(horasVoluntarios[i].toString())

        body.push(columna);
        
    }

    return body;

}


function getVoluntariosLenght() {

    $.getJSON('voluntarios.json', function (data) {

        numeroVoluntarios = Object.keys(data.voluntarios).length;

    })

}