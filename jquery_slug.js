$('#title').keyup(function() {
    var slug = $(this).val()
    .toLowerCase()
    .split(',')
    .join('')
    .replace(/[\s\\@#$%&*()_+={}\[\]:;"'<>?,./]/g, '-')
    .replace(/--+/g, '-') 
    .replace(/^-|-$/g, '');
    $('#slug').val(slug);
});
