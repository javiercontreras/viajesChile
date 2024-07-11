$(document).ready(function () {
    function checkViewportWidth() {
        var viewportWidth = $(window).width();
        if (viewportWidth < 992) {
            $("#whoWeAre").hide();
            $("#p_viajes_chile").hide();
            $("#a_who").hide();
        } else {
            $("#whoWeAre").show();
            $("#p_viajes_chile").show();
            $("#a_who").show();
        }
    }

    checkViewportWidth();

    $(window).resize(function () {
        checkViewportWidth();
    });

    $(document).ready(function () {
        $("#whoWeAre").dblclick(function () {
            $(this).css({
                "color": "var(--color-aero)",
            });
        });
    });
});