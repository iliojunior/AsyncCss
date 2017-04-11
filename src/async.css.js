(function ($) {

    'use strict';

    var estilos = $("link[media=bogus]");

    estilos.each(function (index) {
        this.removeAttribute("media");
    });

})(jQuery);