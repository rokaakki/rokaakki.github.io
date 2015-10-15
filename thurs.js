(function(){
	var start = true;
	var battle3 = false;
	var fn = {
		sleep:function(next){
				var slt=1.5+Math.random();
				if(start)
					setTimeout(next,slt*1000);
		},
		next:function(){
			if($(".prt-use-button").find(".btn-use-full").length){
				$(".prt-use-button").find(".btn-use-full").trigger("tap");
			}else if($("div[data-quest-id='400091']").length){
				$("div[data-quest-id='400091']").trigger("tap");
			}else if($(".lis-supporter").eq(5).length){
				$(".lis-supporter").eq(5).trigger("tap");
			}else if($(".se-quest-start").length){
				$(".se-quest-start").trigger("tap");
				battle3=false;
			}else if($(".prt-battle-num").find(".num-info3").length>1){
				if(!battle3){
					$(".prt-ability-list").find(".ability-character-num-1-4").trigger("tap");
					battle3=true;
				}else{
					if($('.btn-attack-start.display-on').length){
						$('.btn-attack-start.display-on').trigger('tap');
					}else{
						$('.btn-result:visible').trigger('tap');
					}
				}
			}else if($('.btn-attack-start.display-on').length){
				$('.btn-attack-start.display-on').trigger('tap');
			}else if($('.btn-result:visible').length){
				$('.btn-result:visible').trigger('tap');
			}else if($(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").length){
				$(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").trigger("tap");
			}else if($(".prt-button-area").find(".btn-control").length){
				$(".prt-button-area").find(".btn-control").trigger("tap");
			}else if($(".pop-friend-request").find(".btn-usual-cancel").length){
				$(".pop-friend-request").find(".btn-usual-cancel").trigger("tap");
			}
			fn.sleep(fn.next);
		}
	},et = 'ontouchstart' in window ? 'touchstart' : 'mousedown'
	,cc = $('<div class="wg"><style>.wg{position:absolute;z-index:250001;top:2px;left:2px}.wg button{width:42px;height:22px;margin-right:4px}</style></div>').appendTo(document.body)
	,cmd = $('<button style="width:52px">stop</button>').appendTo(cc);
	cmd.on(et,function(){
		start=!start;
		if(start==true){
			fn.next();
			cmd.text("stop");
		}else{
			cmd.text("start");
		}
	});
	fn.next();
})();