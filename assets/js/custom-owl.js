$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,/*Vong lap cua phan slider*/
    margin: 20,/*Khoang cach giua 2 phan tu */
    nav: true, /** neu de false se bien mat */
    dots: false,/**Mat dau cham */
    autoplay: true, /**Slider tu dong chay */
    autoplayTimeout: 2500, /**Slider tu dong chay sau  sau 500 ms */
    responsive:{ /*Hien thi item tren cac khoang man hinh*/
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
  })
});

