$('#title').keyup(function() {
    $('#slug').val($(this).val().toLowerCase().split(',').join('').replace(/\s/g,"-"));
});