

// ============== Menu Script =============

 $(".menu-btn > a").on("click", function(){
    $("nav").toggleClass("active");
    return false;
});

    // //  ============ Notifications Open =============

     $(".not-box-open").on("click", function(){$("#message").hide();
         $(".user-account-settingss").hide();
        $(this).next("#notification").toggle();
     });


    // ============= User Account Setting Open ===========

 $(".user-info").on("click", function(){
     $("#notification").hide();
     $(this).next("#users").toggle();
    });



    //  ============= POST JOB POPUP FUNCTION =========

    $(".post-jb").on("click", function(){
        $(".post-popup.job_post").addClass("active");
        $(".wr-full").addClass("overlay");
        return false;
    });
    $(".post-project > a").on("click", function(){
        $(".post-popup.job_post").removeClass("active");
        $(".wr-full").removeClass("overlay");
        return false;
    });

     //  ================== Edit Options Function =================
     $(".ed-opts-open").on("click", function(){
        $(this).next(".ed-options").toggleClass("active");
        return false;
    });

    
    //  ============= SIGNIN CONTROL FUNCTION =========

    $('.sign-control li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.sign-control li').removeClass('current');
        $('.sign_in_sec').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });



