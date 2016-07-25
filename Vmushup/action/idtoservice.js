/**
 * this is a table for widgetid to service
 * in this js we provide some function for table mannger
*/
//LSCE4IoT is a new platform but built on the stone.
var idtoservice_table = {};

exports.additem = function (key, value) {
    if (idtoservice_table) {
        // if (!idtoservice_table[key]) {
        //     console.log("!--[ERROR] idtoservice_table[" + key + "] not exist");
        //     return -1;
        // }
        idtoservice_table[key] = value;
        console.log("-idtoservice_table-additem-[info] idtoservice_table[" + key + "]  has been added");
        return 0;
    }
    console.log("!-idtoservice_table-additem-[ERROR] idtoservice_table not exist");
    return -2;
};

exports.delitem = function (key) {
    if (idtoservice_table) {
        if (idtoservice_table[key]) {
            delete idtoservice_table[key];
            console.log("-idtoservice_table-delitem-[info] idtoservice_table[" + key + "] has been delete");
            return 0;
        }
        console.log("!-idtoservice_table-delitem-[ERROR] idtoservice_table[" + key + "] not exist");
        return -1;
    }
    console.log("!-idtoservice_table-delitem-[ERROR] idtoservice_table not exist");
    return -2;
};

exports.modifyitem = function (key, value) {

    if (idtoservice_table) {
        if (!idtoservice_table[key]) {
            console.log("!-idtoservice_table-modifyitem-[ERROR] idtoservice_table[" + key + "] not exist");
            return -1;
        }
        idtoservice_table[key] = value;
        console.log("-idtoservice_table-modifyitem-[info] idtoservice_table[" + key + "]  has changed to " + value);
        return 0;
    }
    console.log("!-idtoservice_table-modifyitem-[ERROR] idtoservice_table not exist");
    return -2;
};

exports.getitem = function (key) {
    if (idtoservice_table) {
        if (idtoservice_table[key]) {
            console.log("-idtoservice_table-getitem-[info] idtoservice_table[" + key + "] has been return");
            return idtoservice_table[key];
        }
        console.log("!-idtoservice_table-getitem-[ERROR] idtoservice_table[" + key + "] not exist");
        return -1;
    }
    console.log("!-idtoservice_table-getitem-[ERROR] idtoservice_table not exist");
    return -2;
};

exports.add_unique_item = function (key, value) {
    if (idtoservice_table) {
        var count = 0;
        key = key.replace(/\s/g, "");
        for (var p in idtoservice_table) {
            if (p.indexOf(key) >= 0)
                count++;
        }

        key = key + count.toString();
        idtoservice_table[key] = value;
        console.log("-idtoservice_table-add_unique_item-[info] idtoservice_table[" + key + "]  has been added");
        return key;
    }
    console.log("!-idtoservice_table-add_unique_item-[ERROR] idtoservice_table not exist");
    return -2;
};

exports.get_id_of_value = function (value) {

    if (idtoservice_table) {
        var result = [];
        for (var p in idtoservice_table)
            if (idtoservice_table[p] == value)
                result[result.length] = p;
        return result;
    }
    console.log("!-idtoservice_table-get_id_of_value-[ERROR] idtoservice_table not exist");
    return result;
}

exports.get_all_match_item = function (keyarray) {
    if (idtoservice_table) {
        var key="";
        var result = [];
        if(keyarray)
        {
            for(var i=0;i<keyarray.length;i++)
            {
                key = keyarray[i];
                if (idtoservice_table[key]) {
                    console.log("-idtoservice_table-get_all_match_item-[info] get idtoservice_table[" + key + "]");
                    result[i] = idtoservice_table[key];
                }
                else
                {
                    console.log("!-idtoservice_table-get_all_match_item-[ERROR] idtoservice_table[" + key + "] not exist");
                    return -1;
                }
            }
            return result;

        }
        console.log("!-idtoservice_table-get_all_match_item-[ERROR] keyarray not exist");
        return -3;

    }
    console.log("!-idtoservice_table-get_all_match_item-[ERROR] idtoservice_table not exist");
    return -2;
};