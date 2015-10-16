(function(){
	var start = true;
	var battle = localStorage.getItem("battle")=="true"?true:false;
	var questNo = localStorage.getItem("questNo")?parseInt(localStorage.getItem("questNo")):0;
	var episode = localStorage.getItem("episode")?parseInt(localStorage.getItem("episode")):2;

	var fn = {
		sleep:function(next){
				var slt=1.5+Math.random();
				setTimeout(next,slt*1000);
		},
		next:function(){
			if(!start)
				return;
			if(/quest/i.test(location.hash)){
				if($(".btn-favorite.visible").length){
					//click favorite
					$(".btn-favorite.visible").trigger("tap");
				}else if($(".prt-popup-body").find(".btn-cleard-episode").eq(episode).length){
					//click episode (higher than quest)
					$(".prt-popup-body").find(".btn-cleard-episode").eq(episode).trigger("tap");
				}else if($(".prt-use-button").find(".btn-use-full").length){
					//click full ap (higher than quest)
					$(".prt-use-button").find(".btn-use-full").trigger("tap");
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
				}else if($(".lis-supporter").eq(5).length){
					$(".lis-supporter").eq(5).trigger("tap");
				}else if($(".cnt-quest-command").find(".btn-command-forward:visible").length){
					$(".cnt-quest-command").find(".btn-command-forward:visible").trigger("tap");
				}else if($(".prt-lead-link").find("div[data-location-href='quest']").length){
					$(".prt-lead-link").find("div[data-location-href='quest']").trigger("tap")
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
				}
				fn.sleep(fn.next);
			}else if(/result\//i.test(location.hash)){
				if($(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").length){
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
	,cmd = $('<button style="width:52px">stop</button>').appendTo(cc)
	,input1 = $('<input style="width:32px" />').appendTo(cc)
	,input2 = $('<input style="width:32px" />').appendTo(cc);
	input1.val(questNo);
	input2.val(episode);
	input1.change(function(){
		var newVal = parseInt(input1.val());
		if(newVal>-1&&newVal<5){
			questNo = newVal;
			localStorage.setItem("questNo",questNo);
		}
	});
	input2.change(function(){
		var newVal = parseInt(input2.val());
		if(newVal>-1&&newVal<4){
			episode = newVal;
			localStorage.setItem("episode",episode);
		}
	});
	cmd.on(et,function(){
		if(!(/quest/i.test(location.hash)||/raid\//i.test(location.hash)||/result\//i.test(location.hash)))
			return alert("Page error!");
		start=!start;
		if(start==true){
			fn.next();
			cmd.text("stop");
		}else{
			cmd.text("start");
		}
	});
	fn.sleep(fn.next);
})();