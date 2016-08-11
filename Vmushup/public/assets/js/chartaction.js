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

var chart_init = function chart_init(id, data ) {
    console.log(id+ data);
       $('#'+id).highcharts(data);
}


function loadEvents(){

}
addLoadEvent(loadEvents);
