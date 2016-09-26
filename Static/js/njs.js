$(function () {
    //切换
    $(".xxbaogaot ul li").click(function () {
        var type = $(this).attr("t")
        if ($(this).attr("id") == "activity" && type == 1) {
            $('.mask').fadeIn();
            $('.layer').slideDown();
            // alert("只有付费用户才能查看教师评语");
            return;
        }
        $(".xxbaogaot ul li").removeClass("on");
        $(this).addClass("on");
        var x = $(this).index();
        $(".xxbaogaoc").hide();
        $(".xxbaogaoc").eq(x).show();
    });
    $("#close").click(function () {
                $(".huodong").hide();
    });
    $('.layer a').click(function(ev){
        var oEvt=ev;
        $('.mask').fadeOut();
        $('.layer').slideUp();
        oEvt.stopPropagation(); 
    });
    //折叠展开
    //$(".xxbaogaocxr dl dt .ico").click(function () {
    //    $(this).parent().parent().parent().find("dl").find("dd").hide();
    //    $(this).parent().parent().parent().find("dl").removeClass("on");
    //    $(this).parent().parent().addClass("on");
    //    $(this).parent().parent().find("dd").show();
    //});
    //$(".xxbaogaocxr dl dt").click(function () {
    //    $(this).parent().parent().find("dl").find("dd").hide();
    //    $(this).parent().parent().find("dl").removeClass("on");
    //    $(this).parent().addClass("on");
    //    $(this).parent().find("dd").show();
    //});
    //左侧
    $(".xxbaogaoc .xxbaogaocxl ul li").click(function () {
        $(".xxbaogaocxl ul li").removeClass("on");
        $(this).addClass("on");
        var x = $(this).index();
        $(this).parent().parent().parent().find(".xxbaogaocxr").hide();
        $(this).parent().parent().parent().find(".xxbaogaocxr").eq(x).show();
    });
    //$(".xxbaogaoc .xxbaogaocxl1 ul li").click(function () {
    //    $(".xxbaogaocxl1 ul li").removeClass("on");
    //    $(this).addClass("on");
    //    var x = $(this).index();
    //    $(this).parent().parent().parent().find(".xxbaogaocxr1").hide();
    //    $(this).parent().parent().parent().find(".xxbaogaocxr1").eq(x).show();
    //});

})