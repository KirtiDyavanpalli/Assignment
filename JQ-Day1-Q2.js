$(document).ready(function() {
    $(stylebtn).on('click', function() {
        $('input').css("border-color", "red");
    })
    $(stylefirstbtn).on('click', function(){
        $('#div1').html("Some Text");
    })
    $(hellobtn).on('click', function() {
        $('input').val("HELLO")
        $('textarea').text("HELLO")
    })
})