 var w = window.screen.availWidth;
        var h = window.screen.availHeight;
        var h = 667;
        var w = 375;
        window.addEventListener('orientationchange', function (event) {
            if (window.orientation == 180 || window.orientation == 0) {
                setTimeout(function () {
                    alert("请横屏学习");
                }, 500)

            }
        })
        $(function () {
            if (window.orientation == 180 || window.orientation == 0) {
                setTimeout(function () {
                    alert("请横屏学习");
                }, 500)
            }
            var body = document.getElementById('body');
            var list = document.getElementById('list');
            var aLi = document.getElementById('list').getElementsByTagName('li');
            var left = $('.p1').width();
            $('.p1').css({ "Marginleft": -left / 2 + "px" })
            body.style.width = h + "px";
            body.style.height = w + "px";
            var l = 0.75 * h;
            var len = aLi.length;
            list.style.width = l + "px";
            $('.hideImg').click(function () {
                var v = $("#hidImgFlag").val();
                if (v == 1)
                    return;
                var srcAudio = $(this).attr("src");
                if (typeof (srcAudio) != "undefined") {
                    playAudio(srcAudio);
                }
                show($(this));
            });
            var srcAudioFirst = $(".audioFirst").attr("src");
            if (typeof (srcAudioFirst) != "undefined") {
                playAudio(srcAudioFirst);
            }

            $(".boxAudio").click(function () {
                
            })

            $('#btn').click(function () {
                $(aLi[len - 1]).animate({ "left": -l + "px" });
                if (len == 2) {
                    $('#btn').css({ "display": "none" });
                } else {

                    $(aLi[len - 1]).animate({ "left": -l + "px" }, {
                        complete: function () {
                            var l = len - 1;
                            if (l > 0) {
                                var src = $(aLi[l]).attr("src");
                                if (typeof (src) != "undefined") {
                                    playAudio(src);
                                }
                            }
                        }
                    });

                    len--;
                }
            })
        })
        function show(obj) {
            var img = $(obj).attr("imgId");
            var a = $("." + img).parent().next().first().children();
            $("." + img).show();
            setTimeout(function () {
                $("." + img).hide();
            }, 1000)
        }


        function playAudio(obj) {
            var audio = $("#music1")[0];
            var src = obj.split(';');
            var srcLength = src.length;
            if (srcLength == 0)
                return;
            audio.src = "ogg/" + src[0] + ".ogg";
            audio.play();
            audio.addEventListener("playing", function () {
                $("#btn").hide();
                $("#hidImgFlag").val("1");
            });
            if (src.length == 1) {
                audio.addEventListener("ended", function () {
                    $("btn").show();
                    $("#hidImgFlag").val("0");
                });
            } else {
                var index = 1;
                audio.addEventListener("ended", function () {
                    src.splice(0, 1);
                    loopPlay(src);
                });
            }
        }

        function loopPlay(obj) {
            if (obj.length == 0) {
                $("#btn").show();
                $("#hidImgFlag").val("0");
                return;
            }
            var audio = $("#music1")[0];
            audio.src = "ogg/" + obj[0] + ".ogg";
            audio.play();
            audio.addEventListener("ended", function () {
                obj.splice(0, 1);
                loopPlay(obj);
            });
        }