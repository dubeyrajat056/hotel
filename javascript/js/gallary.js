// Filter functionality
$(document).ready(function () {
    // Show all images by default
    $(".gallery-item").show();

    // Filter images when filter button is clicked
    $(".filter-btn").click(function () {
        var filter = $(this).attr("data-filter");

        // Add active class to the clicked button and remove from others
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        // Show/hide gallery items based on filter
        if (filter == "all") {
            $(".gallery-item").show();
        } else {
            $(".gallery-item").hide();
            $("." + filter).show();
        }
    });
});