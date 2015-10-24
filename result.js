
var fn = {
	sleep:function(next){
			var slt=1.5+Math.random();
			setTimeout(next,slt*1000);
	},
	next:function(){
		if(!start)
			return;
		if(/result/i.test(location.hash)){
			if($(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").length){
				$(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").trigger("tap");
			}else if($(".prt-button-area").find(".btn-control").length){
				battle=false;
				localStorage.setItem("battle",null);
				$(".prt-button-area").find(".btn-control").trigger("tap");
			}
			
		}
		fn.sleep(fn.next);
	}
}
fn.sleep(fn.next);