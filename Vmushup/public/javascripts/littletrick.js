// Generated by CoffeeScript 1.9.3
(function() {
  $(function() {

     $(document).on("click", ".serviceli", function(event) {
       $(".serviceinfotab").show();
       $(".entityinfotab").hide();
       $(this).closest('ul').find(".active").removeClass("active");
       $(this).addClass("active");
    });

     $(document).on("click", ".entityli", function(event) {
       $(".serviceinfotab").hide();
       $(".entityinfotab").show();       
       $(this).closest('ul').find(".active").removeClass("active");
       $(this).addClass("active");
    });

     $(document).on("click", ".addnew", function(event) {
       $(".submitbtn").show(); 
       $(".cancebtn").show(); 
       $(".newentity").show();  
    });

  });

}).call(this);
