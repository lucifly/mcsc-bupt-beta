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
var allowDrop = function (event) {
    console.log("allowDrop");
    event.preventDefault();
};
var dragstart = function (event) {
    var temp = $(event.target).closest('li').index();
    console.log("dargstart");
    event.dataTransfer.setData("Text", temp);
};
var drag = function (event) {
    console.log("menu ondragstart");
    //$("ul").append(brick).index();
    var tname = $(event.target).find(".serv-name").text();
    event.dataTransfer.setData("Text", tname);
    //event.dataTransfer.setData("Text", event.target.id); 
};
var drop = function (event) {
    console.log("drop");
    event.preventDefault();
    var that = event.dataTransfer.getData("Text");
    console.log("data: " + that);
    //     /^[1-9]([0-9\.]+\d)?$/.test("1.04")
    if (/^[0-9]([0-9\.]*\d)?$/.test(that)) 
    { 
        console.log("11"); 
        $(event.target).closest('li').after($(".pizzahub li:eq(" + that + ")"));
    }
    else if(that == "map")
    {
        var data = {"servername": that}
        $.ajax({ 
            url: "/pizzahub/service", 
            data: data, 
            success: function(result){
                    //var mapelemat = "<li class='brick' ondrop='drop(event)' ondragover='allowDrop(event)' ondragstart='dragstart(event)'><div id='allmap' style='height:100%'></div><a class='delete' href='#'>&times;</a></li>";
                    $(event.target).closest('li').after(result); 
                    $(".delete").click(function (event) { event.preventDefault(); event.stopPropagation(); $(this).closest('.brick').remove(); }); 
            
                    var mapid = $(result).find("div").attr("id");
                    // 百度地图API功能
                    // init_map_id(mapid);
                    var map = new BMap.Map(mapid);    // 创建Map实例
                    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
                    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
                    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            }, 
            dataType: "html" 
        });

    }
    else{ 
        var data = {"servername": that}
        //console.log(taht);
        $.ajax({ 
            url: "/pizzahub/service", 
            data: data, 
            success: function(result){
                    $(event.target).closest('li').after(result); 
                    var resultid = $(result).attr("id");
                    console.log("resultid:"+resultid);
                    $("#"+resultid+"button").click(function(event){
                        var selectval = $("#"+resultid+"select").val();
                        console.log("selectval:"+selectval);
                        $.ajax({
                            url:"/pizzahub/bindsrc",
                            data: { "weight":resultid,"src":selectval},
                            success:function(data){ 
                                $("#"+resultid+"div").after(data);
                                $("#"+resultid+"div").hide();
                                $("#"+resultid).removeClass("bindsrc");
                                }
                        });
                    });
                    $(".delete").click(function (event) { event.preventDefault(); event.stopPropagation(); $(this).closest('.brick').remove(); }); 

            }, 
            dataType: "html" 
        });
    }
    
};
function loadEvents(){
    allowDrop();
    dragstart();
    drag();
    drag();
}
addLoadEvent(loadEvents);
