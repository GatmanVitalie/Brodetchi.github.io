// Toggle class for arrow animation
$('.arrow').on('click', function() {
    $(this).toggleClass('active');
});

// Toggle left and right classes for l-r arrows
$('.arrow--l-r').on('click', function() {
    $(this).toggleClass('left right');
});
