$(document).ready(function() {

    $('#left').load('../html/onload.html');

    $('#right ol li a').click(function() {
        var page = $(this).attr('href');
        $('#left').load('../html/' + page);
        return false;
    });
});