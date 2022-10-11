function about(){
    var mySwiper = new Swiper ('.swiper', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        scrollbarDraggable : true ,
        autoplay:true,//开启自动轮播
        delay:1000,
        speed:300,
        disableOnInteraction:false,
        pauseOnMouseEnter: true,
        parallax: true,
        reverseDirection: true, //开启反向自动轮播
        grabCursor: true,
        /* effect:'flip', */

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    })
    mySwiper.scrollbar.$dragEl.css('background','#0093E9');
}
if(window.location.pathname === '/about.html'){
    about()
}