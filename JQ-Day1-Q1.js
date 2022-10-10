$(document).ready(function() {
    $('#btn').on('click', function() {
        var mailval = $("#mailid").val();
        $('#display').text(mailval);
    })
})