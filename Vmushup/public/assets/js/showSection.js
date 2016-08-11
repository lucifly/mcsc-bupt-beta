function shownNextStep() {
	if(!document.getElementById("nextStep")) return false;
	var nextStep = document.getElementById("nextStep");
	var lastStep = document.getElementById("lastStep");
	var sections = document.getElementsByTagName("section");
	for (var i=0;i<sections.length;i++) {
	    	sections[i].style.display = "none";
	}
	sections[0].style.display = "block";
    var cartoongif = document.getElementById("cartoongif");
    var cartoondiv = document.getElementById("cartoon");
    var cartoon = cartoondiv.getElementsByTagName("img");
    cartoon = cartoon[0];
    cartoon.style.display = "none";
    var showcartoon = cartoondiv.getElementsByTagName("a");
    showcartoon = showcartoon[0];
    cartoondiv.style.display = "none";
    lastStep.style.display = "none";
    var progresslen=document.getElementById("progresslen");

    lastStep.onclick = function() {
    	for(var i=1;i<sections.length;i++) {
    		if(sections[i].style.display == "block") {
    			sections[i].style.display = "none";
                var j=i-1;
                progresslen.lastChild.nodeValue="Step "+j+" of 5";
                progresslen.setAttribute("style","width:"+(j/5*100)+"%;");
    			sections[i-1].style.display = "block";
    			buttondis();
    			
        		cartoongif.setAttribute("src","../assets/images/pizzahub"+j+".gif");
        		cartoon.style.display = "none";
        		showcartoon.innerText = "查看演示 »";
    			return false;
    		}
    	}
    };
   	nextStep.onclick = function() { 
        //最后一页转出
        if(sections[sections.length-1].style.display == "block") {
            nextStep.setAttribute("href","/users");
        }
        for(var i=0;i<sections.length-1;i++){
        	if(sections[i].style.display == "block") {


        		sections[i].style.display = "none";
        		var j=i+1;
                //进度条
                progresslen.lastChild.nodeValue="Step "+j+" of 5";
                progresslen.setAttribute("style","width:"+(j/5*100)+"%;");
        		sections[i+1].style.display = "block"; 
        		cartoongif.setAttribute("src","../assets/images/pizzahub"+j+".gif");
        		cartoon.style.display = "none";

        		showcartoon.innerText = "查看演示 »";
               
              
       		    return buttondis();
        	}        
        }
           
          	
    };


    showcartoon.onclick = function() {
    	if(cartoon.style.display == "none") {
    		cartoon.style.display = "block";
    	    showcartoon.childNodes[0].nodeValue = "« 关闭演示";
    	}else {
    		cartoon.style.display = "none";
    		showcartoon.innerText = "查看演示 »";
    	}
    	return false;
    };

    function buttondis() {
	    //最后一页按钮处理
        if(sections[sections.length-1].style.display == "block") {
            nextStep.innerText = "Finish";
        }else if(sections[0].style.display == "block") {
        	cartoondiv.style.display = "none";
            lastStep.style.display = "none";
        }else {
        	cartoondiv.style.display = "block";
            lastStep.style.display = "block";
            nextStep.innerText = "下一步 »";
        }
    }
    
    var progresslen=document.getElementById("progresslen");
    function progresslength() {
        for(var i=0;i<sections[sections.length-1];i++) {
             progresslen.lastChild.nodeValue="Step"+i+" of 5";
        }
    }


}


window.onload = shownNextStep;