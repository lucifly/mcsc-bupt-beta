//(function($) {
//  'use strict';
//
//  $(function() {
//    var $fullText = $('.admin-fullText');
//    $('#admin-fullscreen').on('click', function() {
//      $.AMUI.fullscreen.toggle();
//    });
//
//    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
//      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
//    });
//  });
//
//})(jQuery);
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//function insRow(idname, name) {
//    var x = document.getElementById(idname).insertRow(-1);
//    var x1 = x.insertCell(0);
//    var x2 = x.insertCell(1);
//    var x3 = x.insertCell(2);
//    x1.innerHTML = '<input type="text" name="' + name + '">';
//    //x2.innerHTML = '<input type="text" name="' + name + '">';
//    x2.innerHTML = '<div class="am-u-sm-8 am-u-md-10">'
//        + '<select data-am-selected="{btnSize: \'sm\'}" style="display: none;">'
//        + '<option value="option1">选项一...</option>'
//        + '<option value="option2">选项二.....</option>'
//        + '<option value="option3">选项三........</option>'
//        + '</select>'
//        + '</div>';
//    x3.innerHTML = '<input type="text" name="' + name + '">';
//}


$(document).ready(function(){
    var slides = [{src: 'assets/image/home1.jpg'}, {src: 'assets/image/home2.jpg'}, {src: 'assets/image/home3.jpg'}, {src: 'assets/image/home4.jpg'},{src: 'assets/image/home5.jpg'}]
    var jR3DCarousel;
    var carouselProps =  {
        width: 1000, 				/* largest allowed width */
        height: 500, 				/* largest allowed height */
        slideLayout : 'fill',     /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
        animation: 'slide3D', 		/* slide | scroll | fade | zoomInSlide | zoomInScroll */
        animationCurve: 'ease',
        animationDuration: 700,
        animationInterval: 2000,
        //slideClass: 'jR3DCarouselCustomSlide',
        autoplay: true,
        onSlideShow: show,		/* callback when Slide show event occurs */
        navigation: 'circles',	/* circles | squares */
        slides: slides 			/* array of images source or gets slides by 'slide' class */

    }
    function setUp(){
        jR3DCarousel = $('.jR3DCarouselGallery').jR3DCarousel(carouselProps);

        $('.settings').html('<pre>$(".jR3DCarouselGallery").jR3DCarousel('+JSON.stringify(carouselProps, null, 4)+')</pre>');

    }
    function show(slide){
        console.log("Slide shown: ", slide.find('img').attr('src'))
    }
    $('.carousel-props input').change(function(){
        if(isNaN(this.value))
            carouselProps[this.name] = this.value || null;
        else
            carouselProps[this.name] = Number(this.value) || null;

        for(var i = 0; i < 999; i++)
            clearInterval(i);
        $('.jR3DCarouselGallery').empty();
        setUp();
        jR3DCarousel.showNextSlide();
    })

    $('[name=slides]').change(function(){
        carouselProps[this.name] = getSlides(this.value);
        for (var i = 0; i < 999; i++)
            clearInterval(i);
        $('.jR3DCarouselGallery').empty();
        setUp();
        jR3DCarousel.showNextSlide();
    });

    function getSlides(no){
        slides = [];
        for ( var i = 0; i < no; i++) {
            slides.push({src: 'https://unsplash.it/'+Math.floor(1366-Math.random()*200)+'/'+Math.floor(768+Math.random()*200)})
        }
        return slides;
    }

    //carouselProps.slides = getSlides(7);
    setUp()

})

//------------------------------svg----------------------------------//
//(function() {

    function init() {
        var speed = 250,
            easing = mina.easeinout;

        [].slice.call ( document.querySelectorAll( '#intro-grid > a' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                pathConfig = {
                    from : path.attr( 'd' ),
                    //to : el.getAttribute( 'data-path-to' )
                    to : el.getAttribute( 'data-path-hover' )
                };

            el.addEventListener( 'mouseenter', function() {
                path.animate( { 'path' : pathConfig.to }, speed, easing );
            } );

            el.addEventListener( 'mouseleave', function() {
                path.animate( { 'path' : pathConfig.from }, speed, easing );
            } );
        } );
    }
//
//    init();
//
//})();

addLoadEvent(init);