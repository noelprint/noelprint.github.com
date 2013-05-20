jQuery(function ($) {

    var $window   = $(window),
        $document = $(document),
        $parent   = $('html, body'),
        offset    = $('html').data('offset') || $('body').data('offset') || 0;

    $('a[href^="#"]').not('[href="#"]').click(function (e) {

        e.preventDefault();

        $parent.animate({

            scrollTop: Math.min($(this.hash).offset().top - offset, $document.height() - $window.height())

        }, 500);

    });
    
});
