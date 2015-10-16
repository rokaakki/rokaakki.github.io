(function(){
	var start = true;
	var battle = localStorage.getItem("battle")?true:false;
	var questNo = 0;
	var episode = 2;

	var fn = {
		sleep:function(next){
				var slt=1.5+Math.random();
				setTimeout(next,slt*1000);
		},
		next:function(){
			if(!start)
				return;
			if(/quest\//i.test(location.hash)){
				if($(".btn-favorite.visible").length){
					$(".btn-favorite.visible").trigger("tap");
				}else if($(".prt-popup-body").find(".btn-cleard-episode").eq(episode).length){
					$(".prt-popup-body").find(".btn-cleard-episode").eq(episode).trigger("tap");
				}else if($(".prt-use-button").find(".btn-use-full").length){
					$(".prt-use-button").find(".btn-use-full").trigger("tap");
				}else if($(".btn-usual-ok:visible").length){
					$(".btn-usual-ok:visible").trigger("tap");
				}else if($(".prt-noindex-list").find(".prt-list-contents").eq(questNo).length){
					$(".prt-noindex-list").find(".prt-list-contents").eq(questNo).find(".btn-quest-list").trigger("tap");
				}else if($(".lis-supporter").eq(5).length){
					$(".lis-supporter").eq(5).trigger("tap");
				}else if($(".cnt-quest-command").find(".btn-command-forward:visible").length){
					$(".cnt-quest-command").find(".btn-command-forward:visible").trigger("tap");
				}else if($(".se-quest-start:visible").length){
					battle=true;
					localStorage.setItem("battle","true");
					$(".se-quest-start").trigger("tap");
				}
				fn.sleep(fn.next);
			}else if(/raid\//i.test(location.hash)&&battle){
				if($(".prt-battle-num").find(".num-info3").length>1){
					$(".prt-ability-list").find(".ability-character-num-1-4").trigger("tap");
				}
				if($('.btn-attack-start.display-on').length){
					$('.btn-attack-start.display-on').trigger('tap');
				}else if($('.btn-result:visible').length){
					$('.btn-result:visible').trigger('tap');
				}else if($(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").length){
					$(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").trigger("tap");
				}else if($(".prt-button-area").find(".btn-control").length){
					battle=false;
					localStorage.setItem("battle",null);
					$(".prt-button-area").find(".btn-control").trigger("tap");
				}
				fn.sleep(fn.next);
			}else{
				start=false;
				cmd.text("start");
			}	
		}
	},et = 'ontouchstart' in window ? 'touchstart' : 'mousedown'
	,cc = $('<div class="wg"><style>.wg{position:absolute;z-index:250001;top:2px;left:2px}.wg button{width:42px;height:22px;margin-right:4px}</style></div>').appendTo(document.body)
	,cmd = $('<button style="width:52px">start</button>').appendTo(cc);
	cmd.on(et,function(){
		if(!(/quest\//i.test(location.hash)||/raid\//i.test(location.hash)))
			return alert("Page error!");
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