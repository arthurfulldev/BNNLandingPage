$(document).ready(function () {
    $('body').scrollspy({ target: '#bnn-navbar' });
    $("a").on('click', function (event) {
        $('.nav-item').removeClass('active');
        $(this).parent('li').addClass('active');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: (($(hash).offset().top) + 15)
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});