document.getElementById("botonDescargar").addEventListener("click", descargarPDF);

motivoServicio: String;
fechaServicio: Date;
numeroExpediente: String;
municipio: String;
horaEntrada: Date;
horaSalida: Date;
tipoActividad: String;
var voluntarios = [];
var numeroVoluntarios = getVoluntariosLenght();

var moviles = [];
var numeroMoviles = 4;


function descargarPDF() {

    motivoServicio = document.getElementById("motivoServicio").value;
    console.log("Motivo servicio: " + motivoServicio);

    numeroExpediente = document.getElementById("numeroExpedienteServicio").value;
    console.log("Nº exp: " + numeroExpediente);

    tipoActividad = $("input:radio[name=radioTipoActividad]:checked").val();
    console.log("Tipo actividad: " + tipoActividad);



    for(let i = 0; i < numeroVoluntarios; i++){

        elementId = "checkBoxVoluntarios" + i;
        
        if(document.getElementById(elementId).checked){

            voluntarios.push(document.getElementById(elementId).value);

        }

    }

    console.log(voluntarios);


    for(let i = 0; i < numeroMoviles; i++){

        elementId = "checkBoxMoviles" + i;
        
        if(document.getElementById(elementId).checked){

            moviles.push(document.getElementById(elementId).value);

        }

    }

    console.log(moviles);

    printpdf();


}

function printpdf() {
    var docDefinition = {
        content: [
            'First paragraph',
            'Another paragraph'
        ]
    }
    pdfMake.createPdf(docDefinition).download();
    
}


function getVoluntariosLenght() {

    $.getJSON('voluntarios.json', function (data) {

        numeroVoluntarios = Object.keys(data.voluntarios).length;

    })

}