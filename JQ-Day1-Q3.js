$(document).ready(function() {
    $('a').on('mouseover', function() {
        $('a').attr('target', '_blank');
        window.open("https://www.google.com");
    })
})
