(function ($) {

    'use strict';

    var estilos = $("link[async]");

    estilos.each(function (i) {
        $(this).attr("media", "bogus");

        $(this).load(function (evt) {
            $(this).removeAttr("media");
        });
    });

})(jQuery);