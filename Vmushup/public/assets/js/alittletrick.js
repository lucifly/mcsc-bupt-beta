/**
 * 20160520 N
 */

// //drag and drop
$(function () {
    $(".delete").click(function (event) { event.preventDefault(); event.stopPropagation(); $(this).closest('.brick').remove(); });
    $(".brick").attr("draggable", "true");
    console.log(".gridly 1");
    $("#searchstart").click(function () {
        socket.emit("searchserver", { argument: $("#searchinput").val() });
        console.log($("#searchinput").val());
    });
    console.log(".gridly 2");

    var socket;
    var firstconnect = true;

    function group_result(params) {
        var servlib = params;
        var result = "";
        result = '<div class="library-section" role="tablist">'
            + '<h2 class="menu-header" data-am-collapse="{target: \'#list0\'}">'
            + 'result'
            + '<span class="am-icon-angle-right am-fr am-margin-right"></span>'
            + '</h2>'
            + '<div class="library-content brick" role="tabpanel" style="display:block" >'
            + '<ul class="am-list am-collapse admin-sidebar-list" id=\'list0\'>';

        var servarray = params;
        for (var i = 0; i < servarray.length; i++) {
            result += '<div class="library-module dragicon"  draggable="true"  ondragstart="drag(event)" >';
            if (((servarray[i]).info).icon != "") {
                result += '<div class="serv-img isNative" style="background-image:url(\'assets/image/icons/' + ((servarray[i]).info).icon + '\');background-position: 0px 0px;margin: 0 auto;"></div>';
            } else {
                result += '<div class="serv-img isNative"></div>';
            }
            result += '<h3 class="serv-name" title="' + ((servarray[i]).info).description + '">' + ((servarray[i]).info).title + '</h3>';
            result += '<div style="display : none" title = "' + ((servarray[i])).url + '" ></div>';
            result += '</div >';
        }
        result += '</ul >';
        result += '</div >'; 
        result += '</div >';
        return result;
    }

    function connect() {
        if (firstconnect) {
            socket = io.connect("http://10.108.92.2:" + "8080", { 'reconnect': true });
            console.log("connect to server");
            //return_search_result
            //2016.5.26 这个地方要改，加功能
            socket.on('return_search_result', function (data) {
                //alert(data.data); 
                var result = group_result(data.data);
                $(".library-section").hide();
                $("#searchbat").after(result);

            });

            firstconnect = false;
        }
        else {
            socket.socket.reconnect();
        }
    };

    function disconnect() {
        socket.disconnect();
    };
    function show(data) {
    };

    connect();
});