document.getElementById("botonDescargar").addEventListener("click", descargarPDF);

motivoServicio: String;
fechaServicio: Date;
numeroExpediente: String;
municipio: String;
horaEntrada: Date;
horaSalida: Date;
tipoActividad: String;
voluntarios: Array;

function descargarPDF() {


    motivoServicio = document.getElementById("motivoServicio").value;

    // if(document.getElementById('checkBoxVoluntarios').ckecked){

    //     voluntarios[0]

    // }

    getVoluntariosLenght();
    console.log(numeroVoluntarios);

    tipoActividad = $("input:radio[name=radioTipoActividad]:checked").val();


    function getVoluntariosLenght() {

        $.getJSON('voluntarios.json', function (data) {
            
            var numeroVoluntarios = Object.keys(data.voluntarios).length;
    
        })
    
    }


}



