/**
 * entitylib manager js
 * @N 
 * 20160614
 */
var datastore = "./entitylib.json";

//get  entities info list
exports.get_entities_info = function () {

    var entities = require(datastore);
    var entitieslist = entities.entities;

    var entities_info = [];
    for (var i = 0; i < entitieslist.length; i++) {
        var temp = {};
        temp.entityname = (entitieslist[i]).entityname;
        temp.UID = (entitieslist[i]).UID;
        temp.prototypeservice = (entitieslist[i]).prototypeservice;
        temp.author = (entitieslist[i]).info.author;
        temp.descript = (entitieslist[i]).info.descript;
        entities_info[i] = temp;
    }

    return entities_info;


};

//get singer entity info
exports.findentity = function (key, value) {

    var entities = require(datastore);
    var entitieslist = entities.entities;

    var i; i = 0;
    for (i = 0; i < entitieslist.length; i++) {
        var temp = entitieslist[i];
        if (temp[key] == value)
            return temp;
    }

    return "404";

};

//find entity which is bind to the service
exports.find_entity_for_service = function (service) {

    var entities = require(datastore);
    var entitieslist = entities.entities;

    var result = [];
    var i; i = 0;
    for (i = 0; i < entitieslist.length; i++) {
        var temp = entitieslist[i];
        if (temp["prototypeservice"] == service) {
            result[(result.length)] = { "entityname": temp["entityname"], "UID": temp["UID"] };
        }
    }

    return result;


};

/**
 * test if UID unique
 */
exports.is_UID_unique = function (params) {
 
    var entities = require(datastore);
    var entitieslist = entities.entities;

    for (var i = 0; i < entitieslist.length; i++) {
        if(params === (entitieslist[i]).UID) return false;
    }
    return true;
    
}

/**
 *get UID array
 */
exports.get_entities_UID = function () {
 
    var entities = require(datastore);
    var entitieslist = entities.entities;
    var result = [];
    for (var i = 0; i < entitieslist.length; i++) {
       result[result.length]=(entitieslist[i]).UID; 
    }
    return result;
    
}
