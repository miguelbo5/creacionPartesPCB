$(function () {

    var voluntarios = [];

    $.getJSON('voluntarios.json', function (data) {
        $.each(data.voluntarios, function (i, f) {
            var tblRow = 
            '<div style="margin-bottom:20px" class="input-group">' + 
                '<div class="input-group-prepend">' + 
                    '<div class="input-group-text">' + 
                        '<input value="' + f.nombre + '" id="checkBoxVoluntarios' + i + '" type="checkbox" >' +
                    '</div>'+
                '</div>' +
                    '<input type="text" readonly class="form-control" value="' + f.nombre + " " + f.indicativo + '">' + 
                    '<input id="horasVoluntario' + i + '" type="text" class="form-control" placeholder="Horas hechas">' +
            '</div>';
            
            $(tblRow).appendTo("#userdata tbody");
        });
    });
});