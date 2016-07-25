/**
 * Created by wangying on 2016/7/12.
 */
function draw() {
    var dots = [[50,50],[20,110],[100,70],[160,80],[340,80]];
    // console.log(dots[0]);
    // console.log(dots[1]);
    // console.log(dots[2]);
    // console.log(dots.length);
    var c = document.getElementById("test1");




    document.getElementById("asdf").onclick = changechart();
    function drawDots(dots) {
        // 打点--canvas法
        var img = new Image();
        img.src = "assets/image/cat.png";
        var ctx = c.getContext("2d");
        img.onload = function () {
            for (var i = 0; i < dots.length; i++) {
                ctx.drawImage(img, dots[i][0], dots[i][1]);
            }
        }
    }
    function appendDot(dots)
    {
        //贴图打点
        for( var i=0; i<dots.length; i++){
            console.log("test: "+dots[i][0] + "," + dots[i][1]);
            if ((dots[i][0] > 0) && (dots[i][0] < 200) && (dots[i][1] > 0) && (dots[i][1] < 180)) {
                var img = document.createElement("img");
                img.src = "assets/image/cat.png";
                $(img).css({"left": dots[i][0], "top": dots[i][1], "width":"15px", "height":"15px","position":"absolute"});
                $(".backimg").before(img);
            }
        }

    }
    function changechart() {
            var chart = $('#hightchartsdiv').highcharts();
            console.log(77);
            chart.series[0].data[0].update(54);

    }



                // if (img.complete) {
                //     ctx.drawImage(img,dots[i][0],dots[i][1]);
                // }
                // else {
                //     img.onload = function(){
                //         ctx.drawImage(img,dots[i][0],dots[i][1]);
                //     }
                // }

                // $("#test1").append(txt1);

 

    // img.onload = function () {
    //     ctx.drawImage(img, 20, 30);
    //
    // };
    // ctx.drawImage(img, 50, 50);
    //
    // ctx.strokeStyle='#aaa';
    // ctx.lineWidth=5;
    // ctx.beginPath();
    // ctx.moveTo(20,80);
    // ctx.lineTo(160,80);
    // ctx.stroke();
    // ctx.closePath();
}