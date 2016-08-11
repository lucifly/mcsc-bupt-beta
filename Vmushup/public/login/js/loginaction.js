/**
 * Created by wangying on 2016/7/21.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

// $(".signuptext").click(function (event) { 
//      $(".signup").slideDown();
//      $(".login").slideUp();
//      $(".signuptext").hide();$(".logintest").show();
//      $(".loginhead").hide();$(".signuphead").show();
// });
$(".logintest").click(function (event) { 
     $(".login").slideDown();
     $(".signup").slideUp();
     $(".logintest").hide();$(".signuptext").show();
     $(".signuphead").hide();$(".loginhead").show();
});

$('.login').click(function (){
    $(".loginerror").hide();
    var uname = $("#username").val();
    var upwd = $("#password").val();
    // console.log(uname+":ad:"+upwd);
    if(uname!="" && upwd!="")
    {
         console.log(uname+":ad:"+upwd);
        var data = {"uname":uname,"upwd":upwd}
        $.ajax({ 
            url: "/users/login", 
            data: data, 
            success: function(result){ 
                if(result.result) 
                {
                  console.log("save sucess");
                  store.set('user',uname);
                  var LOGINSTATE = chatLib.LOGINSTATE;
                  store.set('username',LOGINSTATE.ISLOGIN)
                  if(uname == "user"){ window.location.href="/yourpizzahub"; }
                  else window.location.href="/";
                }
                else {
                  console.log("false");
                  $(".loginerror").show();
                }
            }, 
            dataType: "json" 
        });
    }
});

function loadEvents(){
    // allowDrop();
    // dragstart();
    // drag();
    // drag();
}
addLoadEvent(loadEvents);
