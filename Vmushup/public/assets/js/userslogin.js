/**
 * 20160811 N
 */
$(function () {
    //{'ISLOGIN':'','NOTLOGIN':''};
    // var store = $.AMUI.store;
    console.log("inint_login");
    // var store= $.AMUI.store;
    // var store = $.AMUI.store;
    var LOGINSTATE = chatLib.LOGINSTATE;
    if (!store.enabled) {
    alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.');
    return;
    }
    // 存储 'username' 的值
    if(store.get('username')) {
        console.log("has store");
        if( store.get('username') == LOGINSTATE.ISLOGIN)
        {
            $(".users").find(".usersname").text(store.get('user'));
            $(".users").show();
            $(".nousers").hide();
            console.log($(".users").find(".usersname").text()+"loged");
        }
    }
    else{
        store.set('username', LOGINSTATE.NOTLOGIN);
        console.log("needchecklog");
    }
    $('.needchecklog').click(function(event){
        if(islog()) console.log("loged");
        else{
            event.preventDefault();
            console.log("not");
            window.location.href="/users";
        }
    });
    $(".logout").click(function(event){
            $(".users").hide();
            $(".nousers").show();
            store.set('username',LOGINSTATE.NOTLOGIN);
            store.remove('user');
            window.location.href="/";
        });

    var tologin = function(){
        store.set('username', LOGINSTATE.ISLOGIN);
    };
    var tologout = function(){
        store.set('username', LOGINSTATE.NOTLOGIN);
    };

    var islog = function(){
        var temp = store.get('username');
        if(temp == LOGINSTATE.ISLOGIN) return true;
        return false;
    };

});