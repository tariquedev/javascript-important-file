$('.syllabus_id').click(function(){
    var id = $(this).data("id");
    var syllabus_tittle_id = '#syllabus_tittle_'+id;
    var syllabus_tittle = $(syllabus_tittle_id).html();
    $("#titleUpdate").val(syllabus_tittle);
});

