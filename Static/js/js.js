$(document).ready(function () {
     $(".nianlingl").animate({"bottom":"45px","opacity":1},{"duration":1000,easing:"easeInOutExpo"});
     setTimeout(function(){
        $(".nianlingm").animate({"bottom":"45px","opacity":1},{"duration":1000,easing:"easeInOutExpo"});
     },100);
     setTimeout(function(){
        $(".nianlingr").animate({"bottom":"45px","opacity":1},{"duration":1000,easing:"easeInOutExpo"});
     },200);
    // $(".change_btn").click(function(){
    //     if($(".change_bg").css("left")!="-295px"){
    //         $(".change_bg").animate({"left":"-295px"},{"duration":300});
    //         document.getElementById('change_btn').innerHTML="+";
    //     }else{
    //         $(".change_bg").animate({"left":"0px"},{"duration":300});
    //         document.getElementById('change_btn').innerHTML="×";
    //     }
        
    // });
    $("input").focusin(function () {
        if ($(this).val() == $(this).attr("tip")) {
            $(this).val("");
        }

    });
    $("input").focusout(function () {

        if ($(this).val() == "") {
            $(this).val($(this).attr("tip"));
        }

    });
    $('.backtop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 'fast');
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.backtop').css('display', 'block');
        } else {
            $('.backtop').css('display', 'none');
        }
    })
    //µ¼º½ÏÂÀ­¼°¸´Ô­
    $(".uban ul li").hover(function () {
        $(".uban ul li").find(".a").removeClass("on");
        $(this).find(".a").addClass("on");
        $(".uban ul li").find("dl").removeClass("on");
        $(this).find("dl").addClass("on");
    }, function () {
        var x = $(this).parent().parent().attr("alt");

        $(".uban ul li").find(".a").removeClass("on");
        $(".uban ul li").find("dl").removeClass("on");
        $(".uban ul li").eq(x).find(".a").addClass("on");

    });
    $(".top_hide_c ul li").hover(function () {
        $(".top_hide_c ul li").find(".a").removeClass("on");
        $(this).find(".a").addClass("on");
        $(".top_hide_c ul li").find("dl").removeClass("on");
        $(this).find("dl").addClass("on");
    }, function () {
        var x = $(this).parent().parent().attr("alt");

        $(".top_hide_c ul li").find(".a").removeClass("on");
        $(".top_hide_c ul li").find("dl").removeClass("on");
        $(".top_hide_c ul li").eq(x).find(".a").addClass("on");

    });

});
// 运动
window.onscroll=function(){
   $(".top_hide_c").css({"overflow":"hidden"});
   var t=document.documentElement.scrollTop||document.body.scrollTop;
   var h=$(".wlc").offset().top-700;

   // console.log(h);
   if(t>190){
     $(".top_hide_c").stop().animate({"height":"60px"},{"duration":300,complete:function(){
         $(".top_hide_c").css({"overflow":"visible","borderBottom":"1px solid #333"});
     }});
   }else{
     $(".top_hide_c").stop().animate({"height":"0px","borderBottom":"0px"});
   }
   if(t>310){
    $(".xitongl").animate({"left":"0px"},{"duration":2000,easing:"easeInOutExpo"})
    $(".xitongr").animate({"right":"0px"},{"duration":2000,easing:"easeInOutExpo"})
   }
   if(t>h){
    $(".wlc_a").animate({"top":"0px","opacity":1},{"duration":800,easing:"easeInOutExpo"});
    setTimeout(function(){
      $(".wlc_b").animate({"top":"0px","opacity":1},{"duration":800,easing:"easeInOutExpo"});
    },100)
    setTimeout(function(){
      $(".wlc_c").animate({"top":"0px","opacity":1},{"duration":800,easing:"easeInOutExpo"});   
    },200)
    setTimeout(function(){
      $(".wlc_d").animate({"top":"0px","opacity":1},{"duration":800,easing:"easeInOutExpo"});   
    },300)
    setTimeout(function(){
      $(".wlc_e").animate({"top":"0px","opacity":1},{"duration":800,easing:"easeInOutExpo"});  
    },400)
   }

};
// $(".nianlingl").

/* Easing library
========================================================*/
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?fa18eb686cba5ec49d1f07db8be8578b";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();


