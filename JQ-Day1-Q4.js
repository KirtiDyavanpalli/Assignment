$(document).ready(function(){
    $('#textbox').on('focusout', function() {
        let value = $('#textbox').val()
        if(value > 10)
        {
            $('#textbox').addClass("error");
        }
    })
})