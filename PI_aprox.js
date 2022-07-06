var pi = 4; //padrao: (4/1)
var mainnum = 1 //padrao: (1)
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