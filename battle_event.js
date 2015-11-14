var fn = {
	sleep:function(next){
			var slt=1+Math.random();
			setTimeout(next,slt*1000);
	},
	next:function(){
		if(!start)
			return;
		if(/raid\//i.test(location.hash)&&battle){
			if($('.btn-result:visible').length){
				$('.btn-result:visible').trigger('tap');
			}else{
				var skill = false;
				if($(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-2").length){
					$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-2").trigger("tap");
					skill = true;
				}
				if(!skill&&$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-4").length){
					$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-4").trigger("tap");
					skill = true;
				}
				if(!skill&&$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-3").length){
					$(".prt-ability-list").find(".btn-ability-available").find(".ability-character-num-1-3").trigger("tap");
					skill = true;
				}
				if(!skill&&$(".prt-battle-num").find(".num-info2").length>1){
					if($(".prt-ability-list").find(".btn-ability-available").length){
						if($(".prt-ability-list").find(".btn-ability-available").eq(0).find('div[ability-id="711"]').length){
							continue;
						}else{
							skill = true;
							$(".prt-ability-list").find(".btn-ability-available").eq(0).trigger("tap");
						}
					}
				}
				if(!skill){
					if($('.btn-attack-start.display-on').length){
						$('.btn-attack-start.display-on').trigger('tap');
					}
				}
			}
			
			
		}
		fn.sleep(fn.next);
	}
};
fn.sleep(fn.next);