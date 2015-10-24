
var fn = {
	sleep:function(next){
			var slt=1.5+Math.random();
			setTimeout(next,slt*1000);
	},
	next:function(){
		if(!start)
			return;
		if(/raid_multi\//i.test(location.hash)&&battle){
			$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-2").trigger("tap");
			$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-3").trigger("tap");
			$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-4").trigger("tap");
			if($('#pop').find('.btn-usual-cancel:visible').length){
				$('#pop').find('.btn-usual-cancel:visible').trigger('tap');
			}else if($('.btn-attack-start.display-on').length){
				$('.btn-attack-start.display-on').trigger('tap');
			}else if($('.btn-result:visible').length){
				$('.btn-result:visible').trigger('tap');
			}
			
		}
		fn.sleep(fn.next);
	}
};
fn.sleep(fn.next);