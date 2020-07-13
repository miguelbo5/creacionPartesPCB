document.getElementById("botonDescargar").addEventListener("click", descargarPDF);

function descargarPDF() {
    
    motivoServicio: String;
    fechaServicio: Date;
    numeroExpediente: String;
    municipio: String;
    horaEntrada: Date;
    horaSalida: Date;
    tipoActividad: String;
    
    motivoServicio = document.getElementById("motivoServicio").value;

    console.log(motivoServicio);


    
    

    tipoActividad = $("input:radio[name=radioTipoActividad]:checked").val();

    console.log(tipoActividad);
      

    

}