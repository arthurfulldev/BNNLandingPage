$(document).ready(function () {
    $('body').scrollspy({ target: '#navbar-example2' });
    $("a").on('click', function (event) {
        $('.nav-item').removeClass('active');
        $(this).parent('li').addClass('active');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});