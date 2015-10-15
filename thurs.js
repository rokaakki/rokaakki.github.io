var timeTask = null;
var fn = {
	sleep:function(next){
			var slt=1.5+Math.random();
			timeTask=setTimeout(next,slt*1000);
	},
	next:function(){
		if($(".prt-use-button").find(".btn-use-full")){
			$(".prt-use-button").find(".btn-use-full").trigger("tap");
		}else if($("div[data-quest-id='400091']")){
			$("div[data-quest-id='400091']").trigger("tap");
		}else if($(".lis-supporter").eq(5)){
			$(".lis-supporter").eq(5).trigger("tap");
		}else if($(".se-quest-start")){
			$(".se-quest-start").trigger("tap");
		}else if($('.btn-attack-start.display-on')){
			$('.btn-attack-start.display-on').trigger('tap');
		}else if($('.btn-result:visible')){
			$('.btn-result:visible').trigger('tap');
		}else if($(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok")){
			$(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").trigger("tap");
		}else if($(".prt-button-area").find(".btn-control")){
			$(".prt-button-area").find(".btn-control").trigger("tap");
		}else if($(".pop-friend-request").find(".btn-usual-cancel")){
			$(".pop-friend-request").find(".btn-usual-cancel").trigger("tap");
		}

		fn.sleep(fn.next);
	}
}