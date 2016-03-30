/**getipaddress.js */
var os = require('os');
//family =  IPV4 or IPV6
exports.ipaddress = function (family) {
    var networkiface = os.networkInterfaces();
    var iface = networkiface["以太网"];
    for (var j = 0; j < iface.length; j++)
        if ((iface[j]).family == family)
            return (iface[j]).address;
}
