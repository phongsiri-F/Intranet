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



//-------------------------menu-avtive-sidebar-M--------------------------------------------

$('.group-list-sidebar-m').click(function() {
    $("#sidebar-m .group-list-sidebar-m.active").removeClass("active");
    $(this).toggleClass("active");
    
});
//-------------------------menu-avtive-sidebar-M--------------------------------------------



//-------------------------menu-avtive-sidebar-L--------------------------------------------
$('.menu-item-right').click(function() {
    $("#sidebar-l .menu-item-right.active").removeClass("active");
    $(this).toggleClass("active");
    
});

//-------------------------menu-avtive-sidebar-L--------------------------------------------


//--------------------------------get-like-------------------------------------
$('.get-like').click(function() {
    if (!$(this).hasClass('liked')) {
        $(this).addClass("liked");
        $(this).find('[data-fa-i2svg]').remove();
        $(this).append('<i class="fas fa-thumbs-up"></i>');
    }
    else {
        $(this).removeClass("liked");
        $(this).find('[data-fa-i2svg]').remove();
        $(this).append('<i class="far fa-thumbs-up"></i>');
    }
});
//--------------------------------get-like-------------------------------------



//--------------------------------post-comment---------------------------------
$('input').bind("enterKey",function(e){
    var x = document.getElementById("myText").value;
      document.getElementById("demo").innerHTML = x;
});

$('input').keyup(function(e){
  if(e.keyCode == 13)//keyCode = 13 คือ กดปุ่ม Enter,
  {
     $(this).trigger("enterKey");
     $(".post-comment").css("display", "none");
     $(".head-post").css("display","block ");


  }
});
//--------------------------------post-comment---------------------------------



//-------------------------------PerfectScrollbar-------------------------------

    const ps = new PerfectScrollbar(".menu-user", {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20
      });

    const ps2 = new PerfectScrollbar(".groups", {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20
      });

//-------------------------------PerfectScrollbar-------------------------------



//------------------------------------post--------------------------------------
$(".btn-post").click(function () {
    $('.container-feed').css("display", "block");
});

$("#btn_post").click(function () {
    $('.card-new-feed').css("display", "block");
    $('.form-post').css("display", "none");
});


$("#btn_post").click(function () {
    var x = document.getElementById("myText").value;
    document.getElementById("new_content").innerHTML = x;
    $(".new-feed").css("display", "block");
});
//------------------------------------post--------------------------------------
