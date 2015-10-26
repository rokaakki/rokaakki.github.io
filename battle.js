var fn = {
	sleep:function(next){
			var slt=1.5+Math.random();
			setTimeout(next,slt*1000);
	},
	next:function(){
		if(!start)
			return;
		if(/raid\//i.test(location.hash)&&battle){
			if($(".prt-battle-num").find(".num-info3").length>1){
				//$(".prt-ability-list").find(".ability-character-num-1-4").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-1").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-2").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-3").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-4").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-2-1").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-2-2").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-2-3").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-3-1").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-3-2").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-3-3").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-4-1").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-4-2").trigger("tap");
				$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-4-3").trigger("tap");
			}
			if($('.btn-attack-start.display-on').length){
				$('.btn-attack-start.display-on').trigger('tap');
			}else if($('.btn-result:visible').length){
				$('.btn-result:visible').trigger('tap');
			}
			
		}
		fn.sleep(fn.next);
	}
};
fn.sleep(fn.next);