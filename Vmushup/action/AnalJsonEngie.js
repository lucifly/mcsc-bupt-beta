/**
 * analyse_json engine
 * v1.02 alpha
 * @N.M
 * 2015.11.3
 */

var fs = require("fs");

var exjson = require("./examplejson");//读取流程json

var nodes_index = exjson.nodes;//流程json中节点信息
var nodes_length = nodes_index.length;

var edges_index = exjson.edges;//流程json中有向边信息
var edges_num = edges_index.length;

var esjson = {"nodes":[]};//记录用json
var es_node_index = esjson.nodes;

console.log("--业务解析引擎测试[开始]");
var i = 0;
for(i=0;i<nodes_length;i++)
{
	var temp_node = {};
	
	//填写节点信息
	temp_node.id = nodes_index[i].id;
	temp_node.src = nodes_index[i].src;
	
	var slipnumstar = (temp_node.src).lastIndexOf('/') +1;
	var slipnumend = (temp_node.src).lastIndexOf('.html');
	temp_node.name = (temp_node.src).substring(slipnumstar,slipnumend); 
	
	//填写边信息
	var linkArry = new Array();
	linkArry = [];
	var temp_edge = {};
	var j; j=0; var k; k = 0;
	for(j=0;j<edges_num;j++)
	{
		if( ((edges_index[j]).source)[0] == i)
		{
			temp_edge.source_interface = ((edges_index[j]).source)[1] ;
			temp_edge.target_id = ((edges_index[j]).target)[0] ;
			temp_edge.target_interface = ((edges_index[j]).target)[1] ;
			linkArry[k] = temp_edge;
			k++;
		}
	}
	var t_arry_import = new Array();	
	temp_node.linking = linkArry; 
    temp_node.link_import= t_arry_import;
	
	es_node_index[i] = temp_node;
}
for(var ii=0;ii<es_node_index.length;ii++)
{
    var temparry = (es_node_index[ii]).linking;
    for(var jj=0;jj<temparry.length;jj++)
    {
        var t_id =  (temparry[jj]).target_id;
        var t_import =  (es_node_index[t_id]).link_import;
        var t_edge; t_edge = {};
        t_edge.source_id = ii;
        t_edge.source_interface = (temparry[jj]).source_interface;
        t_edge.target_interface = (temparry[jj]).target_interface;
        (t_import[(t_import.length)]) =t_edge;
    }
}
var analjson_data = JSON.stringify(esjson);

console.log("----准备写入./alpha/analjson.json文件");
fs.writeFile('./analjson.json', analjson_data,  function(err) {
   if (err) {
       return console.error(err);
   }
console.log("----json文件写入成功！");
});


