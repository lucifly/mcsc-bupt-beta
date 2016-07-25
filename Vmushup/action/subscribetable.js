/**
 * this is a table for datasource to windows
 * in this js we provide some function for table mannger
*/
//LSCE4IoT is a new platform but built on the stone.
var subscribe_table = {};

exports.additem = function (key, value) {
    if (subscribe_table) {
        // if (!subscribe_table[key]) {
        //     console.log("!--[ERROR] subscribe_table[" + key + "] not exist");
        //     return -1;
        // }
        subscribe_table[key] = value;
        console.log("--[info] subscribe_table[" + key + "]  has been added");
        return 0;
    }
    console.log("!--[ERROR] subscribe_table not exist");
    return -2;
};

exports.delitem = function (key) {
    if (subscribe_table) {
        if (subscribe_table[key]) {
            delete subscribe_table[key];
            console.log("--[info] subscribe_table[" + key + "] has been delete");
            return 0;
        }
        console.log("!--[ERROR] subscribe_table[" + key + "] not exist");
        return -1;
    }
    console.log("!--[ERROR] subscribe_table not exist");
    return -2;
};

exports.modifyitem = function (key, value) {

    if (subscribe_table) {
        if (!subscribe_table[key]) {
            console.log("!--[ERROR] subscribe_table[" + key + "] not exist");
            return -1;
        }
        subscribe_table[key] = value;
        console.log("--[info] subscribe_table[" + key + "]  has changed to " + value);
        return 0;
    }
    console.log("!--[ERROR] subscribe_table not exist");
    return -2;
};

exports.getitem = function (key) {
    if (subscribe_table) {
        if (subscribe_table[key]) {
            console.log("--[info] subscribe_table[" + key + "] has been return");
            return subscribe_table[key];
        }
        console.log("!--[ERROR] subscribe_table[" + key + "] not exist");
        return -1;
    }
    console.log("!--[ERROR] subscribe_table not exist");
    return -2;
};

exports.add_unique_item = function (key, value) {
    if (subscribe_table) {
        var count = 0;
        key = key.replace(/\s/g, "");
        for (var p in subscribe_table) {
            if (p.indexOf(key) >= 0)
                count++;
        }

        key = key + count.toString();
        subscribe_table[key] = value;
        console.log("--[info] subscribe_table[" + key + "]  has been added");
        return key;
    }
    console.log("!--[ERROR] subscribe_table not exist");
    return -2;
};

exports.get_id_of_value = function (value) {

    if (subscribe_table) {
        var result = [];
        for (var p in subscribe_table)
            if (subscribe_table[p] == value)
                result[result.length] = p;
        return result;
    }
    console.log("!--[ERROR] subscribe_table not exist");
    return result;
}