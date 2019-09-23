//---------------------------seation-post-content-------------------------------------------
(function ($) {
    $('.btn-toggle-comment').on('click', function () {
        var toggleTarget = $(this).data('target');
        $(toggleTarget).toggleClass('d-none');
    });

})(jQuery);
//---------------------------seation-post-content-------------------------------------------



//-------------------------menu-avtive-sidebar-sm--------------------------------------------
$('.menu-item').click(function () {
    $("#sidebar-s .menu-item.active").removeClass("active");
    $(this).toggleClass("active");

});
//-------------------------menu-avtive-sidebar-sm--------------------------------------------



//-------------------------menu-avtive-sidebar-M--------------------------------------------

$('.group-list-sidebar-m').click(function () {
    $("#sidebar-m .group-list-sidebar-m.active").removeClass("active");
    $(this).toggleClass("active");

});
//-------------------------menu-avtive-sidebar-M--------------------------------------------



//-------------------------menu-avtive-sidebar-L--------------------------------------------
$('.menu-item-right').click(function () {
    $("#sidebar-l .menu-item-right.active").removeClass("active");
    $(this).toggleClass("active");

});

//-------------------------menu-avtive-sidebar-L--------------------------------------------


//--------------------------------get-like-------------------------------------
$('.get-like').click(function () {
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
$('input').bind("enterKey", function (e) {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
});

$('input').keyup(function (e) {
    if (e.keyCode == 13)//keyCode = 13 คือ กดปุ่ม Enter,
    {
        $(this).trigger("enterKey");
        $(".post-comment").css("display", "none");
        $(".head-post").css("display", "block ");


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
$(".btn-post").click(function () { //สร้างโพส
    $('.container-feed').css("display", "block");
});

$("#btn_post").click(function () {
    $('.card-new-feed').css("display", "block");
    $('.form-post').css("display", "none");
    $('.post-img-feed').remove();
});

$("#btn_post").click(function () {
    var x = document.getElementById("myText").value;
    document.getElementById("new_content").innerHTML = x;
    $(".new-feed-img").css("display", "block");
});

$("#btn_post_img").click(function () {
    $(".new-feed-img").css("display", "block");
    $('.postimgtest').css("display", "none");
    $('.card-body').remove();
});
//-----------------------------------------------เงื่อนไขอัพรูป----------------------------------------------

function readURL(input) {
    var index = 0;
    var files = input.files;

    var count_img = files.length;
    var id = "#profile-img-tag_" + count_img + "_";

    for (var i = 0; i < input.files.length; i++) {
        var file = files[i];

        var reader = new FileReader();

        reader.onload = (function(f) {
            return function(e) {
                constand = id + "" + index;
                $(constand).attr('src', e.target.result);
                index += 1;
            };
        })(file);

        reader.readAsDataURL(file);
    }


}

$("#files").change(function () {
    readURL(this);
});


$("#btn_post_img_multiline").click(function () {
  
    var count_img = $(".pip").length;
    if (count_img == 1) {
        $("#card-img-1").css("display", "block");
        readURL(this);
    } else if (count_img == 2) {
        $("#card-img-2").css("display", "block");
        readURL(this);
    } else if (count_img == 3) {
        $("#card-img-3").css("display", "block");
        readURL(this);
    } else if (count_img == 4) {
        $("#card-img-4").css("display", "block");
        readURL(this);
    }
});

//-----------------------------------------------เงื่อนไขอัพรูป----------------------------------------------


//-------------------------------------------post-perview-img---------------------------------------------
$("#files").on("change", function (e) {
    var files = e.target.files,
        filesLength = files.length;
    for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function (e) {
            
            $("<span class=\"pip\">" +
                "<img class=\"imageThumb\" src=\"" + e.target.result + "\"/>" +
                "<br/><span class=\"remove\">X</span>" +
                "</span>").insertAfter("#files");

            $(".remove").click(function () {
                $(this).parent(".pip").remove();
            });
        });
        fileReader.readAsDataURL(f);
    }
});
//-------------------------------------------post-perview-img---------------------------------------------


