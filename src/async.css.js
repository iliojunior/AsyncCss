(function ($) {

    'use strict';

    var estilos = $("link[media=bogus]");

    estilos.each(function (i) {
        $(this).load(function (evt) {
            $(this).removeAttr("media");
        });
    });

})(jQuery);