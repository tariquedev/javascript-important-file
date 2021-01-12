$('#country').change(function(){
var countryID = $(this).val();    
if(countryID){
    $.ajax({
        type:"GET",
        url:"{{url('api/get-state-list')}}/"+countryID,
        success:function(res){               
        if(res){
            $("#state").empty();
            $("#state").append('<option>Select</option>');
            $.each(res,function(key,value){
                $("#state").append('<option value="'+value.id+'">'+value.state_name+'</option>');
            });
        
        }else{
            $("#state").empty();
        }
        }
    });
}else{
    $("#state").empty();
    $("#city").empty();
}      
});
$('#state').on('change',function(){
var stateID = $(this).val();    
if(stateID){
    $.ajax({
        type:"GET",
        url:"{{url('api/get-city-list')}}/"+stateID,
        success:function(res){               
        if(res){
            $("#city").empty();
            $.each(res,function(key,value){
                $("#city").append('<option value="'+value.id+'">'+value.city_name+'</option>');
            });
        
        }else{
            $("#city").empty();
        }
        }
    });
}else{
    $("#city").empty();
}
    
});
