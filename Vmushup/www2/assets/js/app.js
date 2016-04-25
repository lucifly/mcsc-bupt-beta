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



//addLoadEvent(insRow);


//------------------------------svg----------------------------------//
(function() {

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

    init();

})();

