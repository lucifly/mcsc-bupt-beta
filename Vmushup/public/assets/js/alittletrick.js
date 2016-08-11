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
    $(".loadyourscreen").click(function () {
        console.log("load the screen :"+$(".loadyourscreenname").val());
        var data = {};
        data.name = $(".loadyourscreenname").val();
        var ttt='<svg x="0px" y="5px" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">'
                +'<g transform="translate(0 -1028.4)">'
                +'<path d="m1 1035.4v1 1 2 1 1 1 1 2 1 2 1c0 1.1 0.8954 2 2 2h9 9c1.105 0 2-0.9 2-2v-1-2-4-2-3-1-1h-22z" fill="#bdc3c7"/>'
                +'<path d="m3 2c-1.1046 0-2 0.8954-2 2v3h22v-3c0-1.1046-0.895-2-2-2h-9-9z" transform="translate(0 1028.4)" fill="#bdc3c7"/>'
                +'<path d="m1 6v1 1 2 1 1 1 1 2 1 2 1c0 1.105 0.8954 2 2 2h9 9c1.105 0 2-0.895 2-2v-1-2-4-2-3-1-1h-22z" transform="translate(0 1028.4)" fill="#ecf0f1"/>'
                +'<path d="m4 4a1 1 0 1 1 -2 0 1 1 0 1 1 2 0z" transform="translate(0 1028.4)" fill="#c0392b"/>'
                +'<path d="m4 4a1 1 0 1 1 -2 0 1 1 0 1 1 2 0z" transform="translate(3 1028.4)" fill="#27ae60"/>'
                +'<path d="m4 4a1 1 0 1 1 -2 0 1 1 0 1 1 2 0z" transform="translate(6 1028.4)" fill="#f39c12"/>'
                +'<path d="m3 1036.4v1 10 1h1 2 2v-12h-2-2zm6 0v1 2h12v-2-1h-1-10zm0 4v8h1 10 1v-1-6-1h-1-10z" fill="#bdc3c7"/>'
                +'</g>'
                +'</svg>';
        $(".projectname").html("<i>"+ttt+"</i>   <strong>"+data.name+"</strong>");
        $(".lodinganima").slideToggle();
    //     console.log("loading...");
    //     setTimeout(function(){
    //         $("#loading").slideToggle(3000);
    //         $("#loading").remove();
    //     },4000);
        $.ajax({ 
            url: "/pizzahub/screenload", 
            data: data, 
            success: function(result){
                if(result.code == 400) alert("not such data!");
                else if(result.code == 200)
                {
                    $("#loading").remove();
                    console.log("save sucess");  
                    $(".pizzahub").find("li").remove();
                    $(".pizzahub").append(result.html);
                    //init_map();
                    $(".delete").click(function (event) { event.preventDefault(); event.stopPropagation(); $(this).closest('.brick').remove(); }); 
                }
            }, 
            dataType: "json" 
        });
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
                      //init_map();
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
    render_templet["chart_init"] = chart_init;

var chartinfo = {                   //图表展示容器，与div的id保持一致
        chart: {
            type: 'column'                         //指定图表的类型，默认是折线图（line）
        },
        title: {
            text: 'Charts Template'      //指定图表标题
        },
        xAxis: {
            categories: ['it', 'is', 'chart']   //指定x轴分组
        },
        yAxis: {
            title: {
                text: 'something'                  //指定y轴的标题
            }
        },
        series: [{                                 //指定数据列
            name: 'one',                          //数据列名
            data: [1, 0, 4]                        //数据
        }, {
            name: 'tow',
            data: [5, 7, 3]
        }]
    };

    // (render_templet["chart_init"])("hightchartsdiv",chartinfo);

    
    function connect() {
        if (firstconnect) {
            var HOST = chatLib.HOST;
            var EVENT_TYPE = chatLib.EVENT_TYPE;
            var PORT = chatLib.PORT;
            // socket = io.connect("http://10.108.92.2:" + "8180", { 'reconnect': true });
            socket = io.connect(HOST+":"+PORT, { 'reconnect': true });
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