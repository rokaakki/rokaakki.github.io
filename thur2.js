(function(){
	var start = localStorage.getItem("start")=="null"?false:true;
	var useHalf = localStorage.getItem("half")=="true"?true:false;
	var battle = localStorage.getItem("battle")=="true"?true:false;
	var questNo = localStorage.getItem("questNo")?parseInt(localStorage.getItem("questNo")):0;
	var episode = localStorage.getItem("episode")?parseInt(localStorage.getItem("episode")):2;

	var support = localStorage.getItem("support")?parseInt(localStorage.getItem("support")):5;
	var supportType = localStorage.getItem("supportType")?parseInt(localStorage.getItem("supportType")):0;
	var fn = {
		sleep:function(next){
				var slt=1.5+Math.random();
				setTimeout(next,slt*1000);
		},
		next:function(){
			if(!start)
				return;
			var useBtn = useHalf?'.btn-use-other':'.btn-use-full';
			if(/quest/i.test(location.hash)){
				if($(".btn-favorite.visible").length){
					//click favorite
					$(".btn-favorite.visible").trigger("tap");
				}else if($(".prt-popup-body").find(".btn-cleard-episode:visible").eq(episode).length){
					//click episode (higher than quest)
					$(".prt-popup-body").find(".btn-cleard-episode:visible").eq(episode).trigger("tap");
				}else if($("#pop").find(".btn-use-item:visible").length){
					//click use half
					$("#pop").find(".btn-use-item:visible").trigger("tap");
				}else if($(".prt-use-button:visible").find(useBtn).length){
					//click use ap (higher than quest)
					$(".prt-use-button:visible").find(useBtn).trigger("tap");
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
	,cmd2 = $('<button style="width:52px">half</button>').appendTo(cc)
	,input1 = $('<input style="width:32px" />').appendTo(cc)
	,input2 = $('<input style="width:32px" />').appendTo(cc)
	,input3 = $('<input style="width:32px" />').appendTo(cc)
	,input4 = $('<input style="width:32px" />').appendTo(cc);
	input1.val((questNo+1));
	input2.val((episode+1));
	input3.val((support+1));
	input4.val(supportType);
	input1.change(function(){
		var newVal = parseInt(input1.val());
		if(newVal>0&&newVal<6){
			questNo = newVal-1;
			localStorage.setItem("questNo",questNo);
		}
	});
	input2.change(function(){
		var newVal = parseInt(input2.val());
		if(newVal>0&&newVal<5){
			episode = newVal-1;
			localStorage.setItem("episode",episode);
		}
	});
	input3.change(function(){
		var newVal = parseInt(input3.val());
		if(newVal>0&&newVal<5){
			support = newVal-1;
			localStorage.setItem("support",support);
		}
	});
	input4.change(function(){
		var newVal = parseInt(input4.val());
		if(newVal>-1&&newVal<7){
			supportType = newVal;
			localStorage.setItem("supportType",supportType);
		}
	});
	cmd.on(et,function(){
		if(!(/quest/i.test(location.hash)||/raid\//i.test(location.hash)||/result\//i.test(location.hash)))
			return alert("Page error!");
		start=!start;
		if(start){
			fn.next();
			localStorage.setItem("start","true");
			cmd.text("stop");
		}else{
			localStorage.setItem("start","null");
			cmd.text("start");
		}
	});
	if(!useHalf)
		cmd2.text("full");
	if(!start)
		cmd.text("start");
	cmd2.on(et,function(){
		useHalf=!useHalf;
		if(useHalf){
			cmd2.text("half");
			localStorage.setItem("half","true");
		}else{
			cmd2.text("full");
			localStorage.setItem("half",null);
		}
	});
	fn.sleep(fn.next);
})();