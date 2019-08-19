$(function() {
    $('.caption-background').toggleClass('hidden');
    $('.caption2').toggleClass('hidden');

    $('.rsABlock img.info').click(function(e) {
        e.preventDefault();
        $('.caption-background').toggleClass('hidden');
    });

    $('.rsABlock img.ts').click(function(e) {
        e.preventDefault();
        $('.caption2').toggleClass('hidden');
    });
});
