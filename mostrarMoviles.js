$(function () {

    var moviles = [];

    $.getJSON('moviles.json', function (data) {
        $.each(data.moviles, function (i, f) {
            var tblRow = 
            '<div style="margin-bottom:20px" class="input-group">' + 
                '<div class="input-group-prepend">' + 
                    '<div class="input-group-text">' + 
                        '<input value="' + f.nombre + '" id="checkBoxMoviles' + i + '" type="checkbox" aria-label="Checkbox for following text input">' +
                    '</div>'+
                '</div>' +
                    '<input readonly type="text" class="form-control" value="' + f.nombre + " " + f.matricula + '" aria-label="Text input with checkbox">' +
                    '<input id="conductorVehiculo' + i + '" type="text" class="form-control" placeholder="Indicativo">' + 
            '</div>';
            
            $(tblRow).appendTo("#movilesdata tbody");
        });
    });
});