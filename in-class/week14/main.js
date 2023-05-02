$('#menu-toggle').click(function(){

    $('#menu').slideToggle(100);
})


$(window).resize(function () {

    if(window.innerWidth > 700) {
        $('#menu').show();
    }
})