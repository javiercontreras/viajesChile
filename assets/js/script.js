$(document).ready(function() {
    // Function to check viewport width and hide elements
    function checkViewportWidth() {
        var viewportWidth = $(window).width();

        // Example condition: hide elements if viewport width is less than 768px
        if (viewportWidth < 992) {
            $("#whoWeAre").hide();
        } else {
            $("#whoWeAre").show(); // Ensure elements are visible if condition is not met
        }
    }

    // Initial check when the document is ready
    checkViewportWidth();

    // Check again on window resize (to handle responsive changes)
    $(window).resize(function() {
        checkViewportWidth();
    });
});