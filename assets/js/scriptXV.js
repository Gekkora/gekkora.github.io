$(function () {


    //Smooth Scrolling

    $(".nav-item a.nav-link, .navbar-brand").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var target = this.hash;

            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 800, function () {
                window.location.hash = target;
            });
        }
    });

    //Cierra el menu del navbar cuando cuando clickeas un item, para pantallas pequeñas

    $('.nav-link').click(function () {
        $(".navbar-collapse").collapse('hide');
    })
})

