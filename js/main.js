//---------------------------seation-post-content-------------------------------------------
(function ($){
    $('.btn-toggle-comment').on('click', function () {
        var toggleTarget = $(this).data('target');
        $(toggleTarget).toggleClass('d-none');
    });
    
})(jQuery);
//---------------------------seation-post-content-------------------------------------------


    
//-------------------------menu-avtive-sidebar-sm--------------------------------------------
$('.menu-item').click(function() {
    $("#sidebar-s .menu-item.active").removeClass("active");
    $(this).toggleClass("active");
    
});
//-------------------------menu-avtive-sidebar-sm--------------------------------------------





