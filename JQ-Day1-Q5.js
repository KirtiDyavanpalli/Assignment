$(document).ready(function() {
    $("#btn").css('display', 'none');
    $("#textbox").on('keyup', function() {
        let valcheck = $('#textbox').val();
        if(valcheck == "")
        {
            $("#btn").css('display', 'none');
        }
        else
        {
            $("#btn").css('display', 'block');
        }
    })
})