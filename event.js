
var fn = {
	sleep:function(next){
			var slt=1.5+Math.random();
			setTimeout(next,slt*1000);
	},
	next:function(){
		if(!start)
			return;
		var useBtn = useHalf?'.btn-use-full.index-1':'.btn-use-full.index-0';
		if(/event\/biography002/i.test(location.hash)||/quest\/supporter/i.text(location.hash)){
			if($(".prt-use-button:visible").find(useBtn).length){
				//click use ap (higher than quest)
				$(".prt-use-button:visible").find(useBtn).trigger("tap");
			}else if($(".btn-boss-battle[data-ap='30']").length){
				//click quest
				$(".btn-boss-battle[data-ap='30']").trigger("tap");
			}else if($(".btn-boss-detail.js-quest-list.free").length){
				//click banner
				$(".btn-boss-detail.js-quest-list.free").eq(eventNo).trigger("tap");
			}else if($(".se-quest-start:visible").length){
				//start quest (higher than ok)
				battle=true;
				localStorage.setItem("battle","true");
				$(".se-quest-start").trigger("tap");
			}else if($(".btn-usual-ok:visible").length){
				//click ok (higher than quest)
				$(".btn-usual-ok:visible").trigger("tap");
			}else if($(".lis-supporter[data-attribute='"+supportType+"'").eq(support).length){
				$(".lis-supporter[data-attribute='"+supportType+"'").eq(support).trigger("tap");
			}
			
		}
		fn.sleep(fn.next);
	}
};
fn.sleep(fn.next);
