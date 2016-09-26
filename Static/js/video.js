var player = null;

jQuery(function () {

    initVideoHtml();
    $(".video").click(function () {
        $("#parentdiv").show();
        var url = $(this).attr("url");
        player = new YKU.Player('youkuplayer', {
            styleid: '8',
            client_id: '8f7ebd773f767d3e',
            autoplay: true,
            vid: url
        });
    });

})



function initVideoHtml() {
    if ($("#parentdiv").length > 0) {
        return;
    }
    var body = $("body");
    var divParent = $("<div class='fancybox-overlay fancybox-overlay-fixed' id='parentdiv' onclick='hideParent();' style='width: auto; height: auto;display:none;'></div>");
    $(body).append(divParent);
    var navDiv = $("<div class='fancybox-wrap fancybox-desktop fancybox-type-image fancybox-opened' id='navDiv' onclick='stopPropagation();'></div>");
    $(divParent).append(navDiv);
    var skin = $("<div class='fancybox-skin' style='padding: 10px;max-width: 1920px; height: auto; background: white;'></div>");
    $(navDiv).append(skin);
    var outer = $("<div class='fancybox-outer'></div>");
    $(skin).append(outer);
    var a = $("<a title='Close' class='fancybox-item fancybox-close'  href='javascript:closeClick();'></a>");
    $(skin).append(a);
    var inner = $("<div class='fancybox-inner' style='overflow: visible; width: 100%; height: 100%;max-width: 1920px;'></div>");
    $(outer).append(inner);
    var youku = $("<div id='youkuplayer' style='width:100%;height:500px;'></div>");
    $(inner).append(youku);
    //jQuery(".fancybox-close").live("click", function () {
    //    $("#parentdiv").hide();
    //    player.pauseVideo();
    //})

    //jQuery("#navDiv").live("click", function (e) {
    //    e.stopPropagation();
    //    player.pauseVideo();
    //})
    //jQuery("#parentdiv").live("click", function (e) {
    //    $(this).hide();
    //    player.pauseVideo();
    //})
}

function hideParent() {
    $("#parentdiv").hide();
    player.pauseVideo();

}

function stopPropagation() {
    player.pauseVideo();
    if (window.event) {
        window.event.cancelBubble = true;
    } else {
        var e = arguments.callee.caller.arguments[0] || event;
        e.stopPropagation();
    }
    //if ($.browser.mozilla) {
    //    var $E = function () { var c = $E.caller; while (c.caller) c = c.caller; return c.arguments[0] };
    //    __defineGetter__("event", $E);
    //}
}

function closeClick() {
    $("#parentdiv").hide();
    player.pauseVideo();
}