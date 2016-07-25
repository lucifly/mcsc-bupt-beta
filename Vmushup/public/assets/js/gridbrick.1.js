/**
 * 20160520 N
 */

//drag and drop
(function() {
    $(function() {
        // var brick;
        // brick = "<li class='brick'><img class='am-thumbnail' src='http://s.amazeui.org/media/i/demos/bing-1.jpg' /><a class='delete' href='#'>&times;</a></li>"
        // $(document).on("click", ".gridly .brick", function(event) {
        //     var $this, wsize,hsize;
        //     event.preventDefault();
        //     event.stopPropagation();
        //     $this = $(this);
        //     $this.toggleClass('brick');

        //     wsize=300;
        //     hsize=180;
        //     $this.data('width', wsize);
        //     $this.data('height', hsize);

        //     return $('.gridly').gridly('layout');
        // });
        $(document).on("click", ".gridly .delete", function(event) {
            var $this;
            event.preventDefault();
            event.stopPropagation();
            $this = $(this);
            $this.closest('.brick').remove();
            //return $('.gridly').gridly('layout');
        });
        //$(document).on("click", ".add", function(event) {
        //    event.preventDefault();
        //    event.stopPropagation();
        //    $('.gridly').append(brick);
        //    return $('.gridly').gridly();
        //});
        //return $('.gridly').gridly();
    });

})();