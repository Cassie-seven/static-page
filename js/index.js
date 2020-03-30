window.onload=function(){
	//二级导航运动
	var Aul = document.getElementById('NavUL');
	var aul = Aul.getElementsByTagName('ul');
	for(var i = 0; i < aul.length; i++){
		var ali = aul[i].getElementsByTagName('li');
		for(var j = 0; j < ali.length; j++){
			ali[j].onmouseover = function(){
				var aspan = this.getElementsByTagName('span')[0];//[0]为索引号
			    startmove(aspan,{marginTop:-34});
			}
			ali[j].onmouseout = function(){
			    var aspan = this.getElementsByTagName('span')[0];
			    startmove(aspan,{marginTop:0});
		    }
		}
	}





	
	//轮播滚动运动
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var animated = false;
	var timer;
 
    //图片切换功能函数
	function animate(offset){
			animated = true;
			var newleft = parseInt(list.style.left) + offset;//目标值
			var time = 300;//位移总时间
			var interval = 10;//位移间隔时间

			function go(){
				var speed = (newleft - parseInt(list.style.left))/20;
			    speed = speed > 0?Math.ceil(speed):Math.floor(speed);

				if((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft)){
					list.style.left = parseInt(list.style.left) + speed + "px";
		            setTimeout(go, interval);//定时器		
				}//到达目标值时，当前的left会等于目标值newleft
	            else{
					animated = false;
					list.style.left = newleft + "px"; 		
			        if(newleft > -1310){
				        list.style.left = -2620 + "px";
			        }
			        if(newleft < -2620){
				        list.style.left = -1310 + "px";
			        }
				}			
			}
			go();
		}
    //实现无限滚动
	function play(){
		timer = setInterval(function(){//间隔定时器
			next.onclick();
		},5000);//毫秒，每隔3秒滚动一张图片
	}
	
	function stop(){
		clearInterval(timer);
	}
    //点击箭头，图片滚动	
	next.onclick = function(){
		if(!animated){	
		    animate(-1310);
		}
	}
	prev.onclick = function(){
		if(!animated){	
		    animate(1310);
		}
	}
	container.onmouseover = stop;//鼠标进入时停止滚动
	container.onmouseout = play;//鼠标离开时开始滚动	
	play();//实现自由滚动






	//页面主体改变图片属性
	// 页面主体上部
	var content1_1 = document.getElementById('content1_1');
	var content1_1img = document.getElementById('content1_1img');
    content1_1.onmouseover = function(){
    	content1_1img.src = 'images/content1_1choice.png';
    }
    content1_1.onmouseout = function(){
    	content1_1img.src = 'images/content1_1.png';
    }

    var content1_2 = document.getElementById('content1_2');
	var content1_2img = document.getElementById('content1_2img');
    content1_2.onmouseover = function(){
    	content1_2img.src = 'images/content1_2choice.png';
    }
    content1_2.onmouseout = function(){
    	content1_2img.src = 'images/content1_2.png';
    }

    var content1_3 = document.getElementById('content1_3');
	var content1_3img = document.getElementById('content1_3img');
    content1_3.onmouseover = function(){
    	content1_3img.src = 'images/content1_3choice.png';
    }
    content1_3.onmouseout = function(){
    	content1_3img.src = 'images/content1_3.png';
    }

    var content1_4 = document.getElementById('content1_4');
	var content1_4img = document.getElementById('content1_4img');
    content1_4.onmouseover = function(){
    	content1_4img.src = 'images/content1_4choice.png';
    }
    content1_4.onmouseout = function(){
    	content1_4img.src = 'images/content1_4.png';
    }

    // 页面主体下部
    var c_b_Aul = document.getElementById('c_bottom_ul');
    var c_b_aul = c_b_Aul.getElementsByTagName('ul');
    for(var i = 0; i<c_b_aul.length; i++){
    	var ali = c_b_aul[i].getElementsByTagName('li')[0];
    	//实现变化效果
    	ali.onmouseover = function(){
    		var aimg = this.getElementsByTagName('img')[1];
    		var bimg = this.getElementsByTagName('img')[2];
    		var cimg = this.getElementsByTagName('img')[3];
    		aimg.style.display = 'block';//背景
    		bimg.src = 'images/c_shadow_choice.png';//阴影
    		cimg.style.display = 'block';
    		startmove(cimg,{marginTop:-112,opacity:100});//加号移动
    	}
    	ali.onmouseout = function(){
    		var aimg = this.getElementsByTagName('img')[1];
    		var bimg = this.getElementsByTagName('img')[2];
    		var cimg = this.getElementsByTagName('img')[3];
    		aimg.style.display = 'none';
    		bimg.src = 'images/c_shadow.png';
    		cimg.style.display = 'none';
    		startmove(cimg,{marginTop:0,opacity:0});
    	}
    }

    //页面主体点击箭头效果
    var contain = document.getElementById('contain');
    var uparrow = document.getElementById('uparrow');
    var downarrow = document.getElementById('downarrow');
    uparrow.onclick = function(){
    	startmove(contain,{marginTop:-610});
    	uparrow.style.display = 'none';
    	downarrow.style.display = 'block';
    }
    downarrow.onclick = function(){
    	startmove(contain,{marginTop:15});
    	uparrow.style.display = 'block';
    	downarrow.style.display = 'none';
    }

    //页面底部图片透明度的改变
    var b_l = document.getElementById('bottom_left');
    var b_l_ul = b_l.getElementsByTagName('ul');
    for(var i = 0; i<b_l_ul.length; i++){
    	var b_l_li = b_l_ul[i].getElementsByTagName('li');
    	for(var j = 0; j<b_l_li.length; j++){
    		b_l_li[j].onmouseover = function(){
    			var img = this.getElementsByTagName('img')[0];
    			startmove(img,{opacity:100});
    		}
    		b_l_li[j].onmouseout = function(){
    			var img = this.getElementsByTagName('img')[0];
    			startmove(img,{opacity:30});
    		}
    	}
    }
}

// 获取属性
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];//IE、Opero获得属性
	}
	else{
		return getComputedStyle(obj,false)[attr];//谷歌、火狐等获得属性
	}	
}

// 运动函数
function startmove(obj,json){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			var icur = 0;
			if (attr == 'opacity') {
				icur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				icur = parseInt(getStyle(obj,attr));
			}

			var speed = (json[attr] - icur)/5;
			speed = speed > 0?Math.ceil(speed):Math.floor(speed);

			if (icur != json[attr]) {
				flag = false;
			}

			if (attr == 'opacity') {
				obj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity='+(icur + speed)+')';
				obj.style.filter = 'alpha(opacity='+(icur + speed)+')';
				obj.style.opacity = (icur + speed)/100;
			}
			else{
				obj.style[attr] = icur + speed +'px';
			}
		}
	},30)
}

//轮播滚动函数
//图片切换功能函数
// function animate(obj,offset){
// 	animated = true;
// 	var newleft = parseInt(obj.style.left) + offset;//目标值
// 	var time = 300;//位移总时间
// 	var interval = 10;//位移间隔时间
// 	// var speed = offset/(time/interval);//每次位移量
// 	//调节图片滚动速度
// 	function go(){
// 		var speed = (newleft - parseInt(obj.style.left))/30;
// 	    speed = speed > 0?Math.ceil(speed):Math.floor(speed);

// 		if((speed < 0 && parseInt(obj.style.left) > newleft) || (speed > 0 && parseInt(obj.style.left) < newleft)){
// 			obj.style.left = parseInt(obj.style.left) + speed + "px";
//             setTimeout(go, interval);//定时器		
// 		}//到达目标值时，当前的left会等于目标值newleft
//         else{
// 			animated = false;
// 			obj.style.left = newleft + "px"; 
	
// 	        // 页面最初的left为-692px，则滚动到前一张辅助图时left为0，滚动到最后一张图片时left为-3460px，
// 	        // 则滚动到后一张辅助图时left为-4152px
// 	        // 此处实现无限滚动
// 	        if(newleft > -1310){
// 		        obj.style.left = -2620 + "px";
// 	        }
// 	        if(newleft < -2620){
// 		        obj.style.left = -1310 + "px";
// 	        }
// 		}			
// 	}
// 	go();
// }