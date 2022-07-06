var pi = 4;
var mainnum = 1
var pibool = true;
function aproxpi(){
    setInterval(function(){
    	mainnum +=2;
    	if(pibool){
    		pibool = false
    		pi = pi - (4/mainnum)
    	} else {
    		pibool = true
    		pi = pi + (4/mainnum)
    	}
    })
}
aproxpi()
setInterval(function(){console.clear();console.log(pi+' (COUNT: '+mainnum+')')},1000)