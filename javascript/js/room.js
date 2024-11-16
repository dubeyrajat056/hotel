// Script to open the video in the modal
$(document).ready(function () {
    $('.clickable-image').on('click', function () {
        var videoUrl = $(this).data('video');
        $('#videoFrame').attr('src', videoUrl);
        $('#videoModal').modal('show');
    });

    // Clear the video src when modal is closed
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#videoFrame').attr('src', '');
    });
});