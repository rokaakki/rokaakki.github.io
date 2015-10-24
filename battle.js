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
				$(".prt-ability-list").find(".ability-character-num-1-4").trigger("tap");
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