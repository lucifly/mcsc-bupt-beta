/**
 * 20160520 N
 */
// (function(exports){
// //drag and drop
$(function () {
    var map_record = {} ;
    $(".delete").click(function (event) { event.preventDefault(); event.stopPropagation(); $(this).closest('.brick').remove(); });
    $(".brick").attr("draggable", "true");
    console.log(".gridly 1");
    $("#searchstart").click(function () {
        socket.emit("searchserver", { argument: $("#searchinput").val() });
        console.log($("#searchinput").val());
    });
    $(".loadscreen").click(function () {
        console.log("load the screen :"+$(".loadscreenname").val());
        var data = {};
        data.name = $(".loadscreenname").val();
        $.ajax({ 
             url: "/pizzahub/screenload", 
             data: data, 
             success: function(result){
                  if(result.code == 400) alert("not such data!");
                  else if(result.code == 200)
                  {
                      console.log("save sucess");  
                      $(".pizzahub").find("li").remove();
                      //console.log(result.html);
                      $(".pizzahub").append(result.html);
                      init_map();
                      $(".delete").click(function (event) { event.preventDefault(); event.stopPropagation(); $(this).closest('.brick').remove(); }); 
        
                  }
                }, 
             dataType: "json" 
        });
    });
    $(".savecreen").click(function () {
        console.log("save the screen as"+$(".screensavename").val());
        var data = {};
        data.name = $(".screensavename").val();
        var screen = [];
        $(".pizzahub").find("li").each(function (index) {
           screen[index] = $(this).attr("id");            
        });
        data.screen = screen;
        data.screenhtml = $(".pizzahub").html();
        $.ajax({ 
             url: "/pizzahub/screensave", 
             data: data, 
             success: function(result){ console.log("save sucess");}, 
             dataType: "json" 
        });
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
                   
/**
 * 20160720
 * @N
 * 根据模板渲染widget 
 *  renderwidget();
 */
    function renderwidget(widget_id,data,Func) {
        Func(widget_id,data);
    }
    var render_templet =[];
    render_templet["ais"] = function ais(widget_id,data) {
        //贴图打点
        console.log("ais: " + widget_id+" - "+data);
        var dots = data;
        $("#"+widget_id).find(".cat").remove();
        for( var i=0; i<dots.length; i++){
            console.log("test: "+dots[i][0] + "," + dots[i][1]);
            if ((dots[i][0] > 0) && (dots[i][0] < 200) && (dots[i][1] > 0) && (dots[i][1] < 180)) {
                //$("#"+widget_id).find("img []").before($(img));
                var img = document.createElement("img");
                img.src = "assets/image/cat.png";
                $(img).css({"left": dots[i][0]+"px", "top":  dots[i][1]+"px", "width":"15px", "height":"15px","position":"absolute"});
                $(img).addClass("cat");
                $("#"+widget_id).find(".backimg").before($(img));
                //backimg
            }
        }
    }
    function connect() {
        if (firstconnect) {
            socket = io.connect("http://localhost:" + "8180", { 'reconnect': true });
            console.log("connect to server");
            //return_search_result
            socket.on('return_search_result', function (data) {
                //alert(data.data); 
                var result = group_result(data.data);
                $(".library-section").hide();
                $("#searchbat").after(result);

            });
            socket.on("datatobrower",function (data) {
                //datatab
                console.log("sadadad");
                for(var i=0;i<(data.targetid).length;i++)
                {

                    //$("#"+(data.targetid)[i]).find(".datatab").append("<br />"+data.data);
                    console.log(data.servername[i] +" : " + data.data);
                    renderwidget((data.targetid)[i],data.data, render_templet[data.servername[i]]);

                }
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



/**
 * 
 * pizzahub widgets 初始化内容
 * 
 * 
 */
    function init_map()
    {
        var mapid = $(".mapapi").find("div").attr("id");
        // 百度地图API功能
        var map = new BMap.Map(mapid);    // 创建Map实例
        map_record[mapid] = map;//将当前地图对象记录下来
        /**
         * 20160720
         * @N
         * 用百度地图打点
         * 
         */
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }    
    function init_map_id(mapid)
    {
        // 百度地图API功能
        var map = new BMap.Map(mapid);    // 创建Map实例
        map_record[mapid] = map;//将当前地图对象记录下来
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }

    /**
     * 20160716
     * @N
     * need complete function
     */
    function init_text()
    {

    }
    function init_images()
    {

    }
    function init_video(params) 
    {
        
    }

    /**
     * 
     * pizzahub widgets append data
     * 
     */
    function append_map(params) {
        
    }
    function append_text(params) {
        
    }
    function append_images(params) {
        
    }
    function append_video(params) {
        
    }

    connect();
});

// })( (function(){
//     if(typeof exports === 'undefined') {
//         window.chatLib = {};
//         return window.chatLib;
//     } else {
//         return exports;
//     }
// })() );