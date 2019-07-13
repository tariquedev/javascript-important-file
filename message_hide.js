<script>
        $(window).load(function(){
            setTimeout(function(){
                    $('#message').fadeOut() },
                4000);
        });

        $('#category_name').keyup(function() {
            $('#slug').val($(this).val().toLowerCase().split(',').join('').replace(/\s/g,"-"));
        });
</script>
