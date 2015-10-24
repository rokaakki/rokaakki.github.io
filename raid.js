
var fn = {
	sleep:function(next){
			var slt=1.5+Math.random();
			setTimeout(next,slt*1000);
	},
	next:function(){
		if(!start)
			return;
		var useBtn = useHalf?'.btn-use-full.index-1':'.btn-use-full.index-0';
		if(/event\/teamraid/i.test(location.hash)){
			if($(".prt-use-button:visible").find(useBtn).length){
				//click use ap (higher than quest)
				$(".prt-use-button:visible").find(useBtn).trigger("tap");
			}else if($(".btn-multi-battle.lis-quest-list[data-ap='25']").length){
				//click quest
				$(".btn-multi-battle.lis-quest-list[data-ap='25']").trigger("tap");
			}else if($("#enemy_1:visible").length){
				//click banner
				$("#enemy_1").trigger("tap");
			}else if($(".se-quest-start:visible").length){
				//start quest (higher than ok)
				battle=true;
				localStorage.setItem("battle","true");
				$(".se-quest-start").trigger("tap");
			}else if($(".btn-usual-ok:visible").length){
				//click ok (higher than quest)
				$(".btn-usual-ok:visible").trigger("tap");
			}else if($(".prt-noindex-list").find(".prt-list-contents").eq(questNo).length){
				$(".prt-noindex-list").find(".prt-list-contents").eq(questNo).find(".btn-quest-list").trigger("tap");
			}else if($(".lis-supporter[data-attribute='"+supportType+"'").eq(support).length){
				$(".lis-supporter[data-attribute='"+supportType+"'").eq(support).trigger("tap");
			}else if($(".cnt-quest-command").find(".btn-command-forward:visible").length){
				$(".cnt-quest-command").find(".btn-command-forward:visible").trigger("tap");
			}else if($(".prt-lead-link:visible").find("div[data-location-href='quest']").length){
				$(".prt-lead-link:visible").find("div[data-location-href='quest']").trigger("tap")
			}
			fn.sleep(fn.next);
		}
	}
};
fn.sleep(fn.next);
