function main(socket) {

    console.log("=======================================================================================");
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    //alert(num);  
    this.main = function main() {
        var start = Date.now();
        console.log('开始连接,当前时间:' + start);
        setInterval(function() {
            var num = GetRandomNum(1, 4); 
            socket.emit('dataco', { cloud: num });
            console.log(Date.now() - start + 's--send '+num);
            //console.log(Date.now() - start + '毫秒后,突然杀出一位好汉!\r\n');
        }, 2000);
        // setInterval(function() {
        //     var num = GetRandomNum(1, 10);
        //     socket.emit('dataco', { cloud: num });
        // }, 1000);

    }

}

module.exports = main;