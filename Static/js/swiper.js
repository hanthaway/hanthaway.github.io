
$(function(){
        var mySwiper = new Swiper('.device .swiper-container', {
        pagination: '.device .pagination',
            mode: 'horizontal',
            loop: true,
            speed: 2000,
            freeMode: true,
            grabCursor: true,
            paginationClickable: true,
            autoplay: 0
        })
        $('.device .arrow-left').click(function (e) {
            e.preventDefault();
            mySwiper.swipePrev();
        })
        $('.device .arrow-right').click(function (e) {
            e.preventDefault();
            mySwiper.swipeNext();
        })

        var mySwiper1 = new Swiper('.device1 .swiper-container', {
            pagination: '.device1 .pagination',
            mode: 'horizontal',
            loop: true,
            speed: 2000,
            freeMode: true,
            grabCursor: true,
            paginationClickable: true,
            autoplay: 0
        })
        $('.device1 .arrow-left').click(function (e) {
            e.preventDefault();
            mySwiper.swipePrev();
        })
        $('.device1 .arrow-right').click(function (e) {
            e.preventDefault();
            mySwiper1.swipeNext();
        })



        var mySwiper2 = new Swiper('.device2 .swiper-container', {
            pagination: '.device2 .pagination',
            mode: 'horizontal',
            loop: true,
            speed: 2000,
            freeMode: true,
            grabCursor: true,
            paginationClickable: true,
            autoplay: 0
        })
        $('.device2 .arrow-left').click(function (e) {
            e.preventDefault();
            mySwiper2.swipePrev();
        })
        $('.device2 .arrow-right').click(function (e) {
            e.preventDefault();
            mySwiper2.swipeNext();
        })

        var mySwiper3 = new Swiper('.device3 .swiper-container', {
            pagination: '.device3 .pagination',
            mode: 'horizontal',
            loop: true,
            speed: 2000,
            freeMode: true,
            grabCursor: true,
            paginationClickable: true,
            autoplay: 0
        })
        $('.device3 .arrow-left').click(function (e) {
            e.preventDefault();
            mySwiper3.swipePrev();
        })
        $('.device3 .arrow-right').click(function (e) {
            e.preventDefault();
            mySwiper3.swipeNext();
        })



        var mySwiper4 = new Swiper('.device4 .swiper-container', {
            pagination: '.device4 .pagination',
            mode: 'horizontal',
            loop: true,
            speed: 2000,
            freeMode: true,
            grabCursor: true,
            paginationClickable: true,
            autoplay: 3000
        })
        $('.device4 .arrow-left').click(function (e) {
            e.preventDefault();
            mySwiper4.swipePrev();
        })
        $('.device4 .arrow-right').click(function (e) {
            e.preventDefault();
            mySwiper4.swipeNext();
        })
})

