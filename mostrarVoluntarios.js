$(function () {

    var voluntarios = [];

    $.getJSON('voluntarios.json', function (data) {
        $.each(data.voluntarios, function (i, f) {
            var tblRow = 
            '<div style="margin-bottom:20px" class="input-group">' + 
                '<div class="input-group-prepend">' + 
                    '<div class="input-group-text">' + 
                        '<input value="' + f.nombre + '" id="checkBoxVoluntarios' + i + '" type="checkbox" aria-label="Checkbox for following text input">' +
                    '</div>'+
                '</div>' +
                    '<input type="text" class="form-control" value="' + f.nombre + " " + f.indicativo + '" aria-label="Text input with checkbox">' + 
            '</div>';
            
            $(tblRow).appendTo("#userdata tbody");
        });
    });
});



    
      
    
  
  


