(function(){
	var start = true;
	var fn = {
		sleep:function(next){
				var slt=1.5+Math.random();
				if(start)
					setTimeout(next,slt*1000);
		},
		next:function(){
			if($(".prt-use-button").find(".btn-use-full")){
				$(".prt-use-button").find(".btn-use-full").trigger("tap");
			}else if($("div[data-quest-id='400091']")){
				$("div[data-quest-id='400091']").trigger("tap");
			}else if($(".lis-supporter").eq(5)){
				$(".lis-supporter").eq(5).trigger("tap");
			}else if($(".se-quest-start")){
				$(".se-quest-start").trigger("tap");
			}else if($('.btn-attack-start.display-on')){
				$('.btn-attack-start.display-on').trigger('tap');
			}else if($('.btn-result:visible')){
				$('.btn-result:visible').trigger('tap');
			}else if($(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok")){
				$(".pop-usual.pop-exp.pop-show").find(".btn-usual-ok").trigger("tap");
			}else if($(".prt-button-area").find(".btn-control")){
				$(".prt-button-area").find(".btn-control").trigger("tap");
			}else if($(".pop-friend-request").find(".btn-usual-cancel")){
				$(".pop-friend-request").find(".btn-usual-cancel").trigger("tap");
			}
			fn.sleep(fn.next);
		}
	},et = 'ontouchstart' in window ? 'touchstart' : 'mousedown'
	,cc = $('<div class="wg"><style>.wg{position:absolute;z-index:250001;top:2px;left:2px}.wg button{width:42px;height:22px;margin-right:4px}</style></div>').appendTo(document.body)
	,cmd = $('<button style="width:52px">start/stop</button>').appendTo(cc);
	cmd1.on(et,function(){
		start=!start;
		if(start==true){
			fn.next();
		}
	});
	fn.next();
})();