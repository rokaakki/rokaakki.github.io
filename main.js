var host = '',
	lastHash = '';


if(document.getElementById('wg_script_host')){
	host = document.getElementById('wg_script_host').innerHTML;
}else{
	console.info('please update your kajikano extensions.');
	//return;
}


var createAppTeller = function(url){
	var s = document.createElement('script');
	s.src = url;
	document.body.appendChild(s);
};

var createScriptLoader = function(file,readySerif){
	console.log('loading '+file+' ...');
	var s = document.createElement('script');
	if(readySerif==undefined){readySerif='别急，很快就要开始了。'}
	var t = "function mp(){\
		var s=document.createElement('script');\
		s.onerror=function(){location.reload()};\
		s.src='"+host+file+"';\
		document.body.appendChild(s)\
	};\
	function sb(){\
		if(window.$ && $('#ready').size()>0 && !$('#ready').is(':visible')){\
			setTimeout(mp,3000);\
			console.info('"+readySerif+"')\
		}else{\
			setTimeout(sb,1000)\
		}\
	}sb()";
	s.innerHTML = t;
	document.body.appendChild(s);
};

var routeChanged = function(){
	if(lastHash==location.hash){
		return;
	}
	lastHash = location.hash;
	//console.log('routeChanged');
	if('wgModule' in window){
		wgModule.drop(checkLoadModule);
	}else{
		checkLoadModule();
	}
};

var checkLoadModule = function(){
	//console.log(location.hash);
	
	if(/quest/i.test(location.hash)){
		createScriptLoader('quest.js');
	}
	else if(/raid\//i.test(location.hash)){
		if(battleType == "normal")
			createScriptLoader('battle.js');
		else
			createScriptLoader('battle_event.js');
	}
	else if(/raid_multi\//i.test(location.hash)){
		createScriptLoader('battle_multi.js');
	}
	else if(/result/i.test(location.hash)){
		createScriptLoader('result.js');
	}
	else if(/event\/teamraid/i.test(location.hash)){
		createScriptLoader('raid.js');
	}else if(/event\/biography002/i.test(location.hash)){
		createScriptLoader('event.js');
	}
	injectMenu();
};
var injectMenu = function(){
	$(".wg").remove();
	var et = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
	var cc = $('<div class="wg"><style>.wg{position:absolute;z-index:250001;top:2px;left:2px;} \
	 .wg button{margin-right:4px;opacity:0.6} \
	 .wg input{opacity:0.6} \
	 .wg input:focus{opacity:1}</style></div>').appendTo(document.body);
	cmd = $('<button style="width:45px;">stop</button>').appendTo(cc);
	var cmd2 = $('<button style="width:40px">half</button>').appendTo(cc);
	var cmd3 = $('<button style="width:40px">normal</button>').appendTo(cc);
	var cmd4 = $('<button style="width:40px">0</button>').appendTo(cc);
	var input1 = $('<input style="width:20px" />').appendTo(cc);
	var input2 = $('<input style="width:20px" />').appendTo(cc);
	var input3 = $('<input style="width:20px" />').appendTo(cc);
	var input4 = $('<input style="width:20px" />').appendTo(cc);
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
		if(newVal>0&&newVal<7){
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
	if(!useHalf)
		cmd2.text("full");
	if(!start)
		cmd.text("start");
	if(battleType=="event")
		cmd3.text("event");
	if(eventNo){
		cmd4.text("1");
	}
	cmd.on(et,function(){
		start=!start;
		if(start){
			localStorage.setItem("start","true");
			cmd.text("stop");
			fn.next();
		}else{
			localStorage.setItem("start","null");
			cmd.text("start");
		}
	});

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
	cmd3.on(et,function(){
		if(battleType=="normal"){
			battleType="event";
			cmd3.text("event");
			localStorage.setItem("battleType","event");
		}else{
			battleType="normal";
			cmd3.text("normal");
			localStorage.setItem("battleType","normal");
		}
	});
	cmd4.on(et,function(){
		if(eventNo==0){
			eventNo=1;
			cmd4.text("1");
			localStorage.setItem("eventNo","1");
		}else{
			eventNo=0;
			cmd4.text("0");
			localStorage.setItem("eventNo","0");
		}
	});
}
var start = localStorage.getItem("start")=="null"?false:true;
var useHalf = localStorage.getItem("half")=="true"?true:false;
var battle = localStorage.getItem("battle")=="true"?true:false;
var questNo = localStorage.getItem("questNo")?parseInt(localStorage.getItem("questNo")):0;
var episode = localStorage.getItem("episode")?parseInt(localStorage.getItem("episode")):2;
var support = localStorage.getItem("support")?parseInt(localStorage.getItem("support")):5;
var supportType = localStorage.getItem("supportType")?parseInt(localStorage.getItem("supportType")):0;
var battleType = localStorage.getItem("battleType")=="normal"?"normal":"event";

var eventNo = localStorage.getItem("eventNo")?parseInt(localStorage.getItem("eventNo")):0;
