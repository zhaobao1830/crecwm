$(function() {
	//	描述相符星星
	$(".div1").on("click", function() {
		$(".tu").css("background-image", "url(../images/star1.png)")
	});
	$(".div2").on("click", function() {
		$(".tu").css("background-image", "url(../images/star2.png)")
	});
	$(".div3").on("click", function() {
		$(".tu").css("background-image", "url(../images/star3.png)")
	});
	$(".div4").on("click", function() {
		$(".tu").css("background-image", "url(../images/star4.png)")
	});
	$(".div5").on("click", function() {
		$(".tu").css("background-image", "url(../images/star5.png)")
	});
	//	物流服务星星
	$(".wu1").on("click", function() {
		$(".tu1").css("background-image", "url(../images/star1.png)")
	});
	$(".wu2").on("click", function() {
		$(".tu1").css("background-image", "url(../images/star2.png)")
	});
	$(".wu3").on("click", function() {
		$(".tu1").css("background-image", "url(../images/star3.png)")
	});
	$(".wu4").on("click", function() {
		$(".tu1").css("background-image", "url(../images/star4.png)")
	});
	$(".wu5").on("click", function() {
		$(".tu1").css("background-image", "url(../images/star5.png)")
	});
	//	服务态度星星
	$(".tai1").on("click", function() {
		$(".tu2").css("background-image", "url(../images/star1.png)")
	});
	$(".tai2").on("click", function() {
		$(".tu2").css("background-image", "url(../images/star2.png)")
	});
	$(".tai3").on("click", function() {
		$(".tu2").css("background-image", "url(../images/star3.png)")
	});
	$(".tai4").on("click", function() {
		$(".tu2").css("background-image", "url(../images/star4.png)")
	});
	$(".tai5").on("click", function() {
		$(".tu2").css("background-image", "url(../images/star5.png)")
	});

	//	获取图片

	$("input[type='file']").change(function() {  
		var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/;  
		var _this = $(this);  
  	var file = this.files[0];  
		if(window.FileReader) { 			    
 
 	var reader = new FileReader();              
			reader.readAsDataURL(file);   
			//            监听文件读取结束后事件    
			         
			reader.onloadend = function(e) {
				if(!pattern.test(_this.val())){ 
		           alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！"); 
		      	   return false; 
		          }
				else{
//	                var files = e.target.files,file;
//		    		file = files[0];
		    		var URL = window.URL || window.webkitURL;
		    		var imgst = URL.createObjectURL(file);	
	                _this.prev(".imgs").css("display", "block")
				    _this.prev(".imgs").attr("src", imgst);
				    _this.prevAll(".tian").html("");
				    _this.parents(".tjtp").next().css("display", "block");
				    imgids++;
	
}				           
			};           
		         
		}

	});
//        获取图片
//	    $("input[type='file']").change(function(e){
//			var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/;   
//			var _this = $(this);
//		
//		    if(!pattern.test(_this.val())){ 
//		    alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！"); 
//		      	return false; 
//		    }else{
//		    		
//		    	var imgst;
//		    	if(document.all){
//		    		
//		    		imgst = document.selection.createRange().text;
//		    	}else{
//		    		
//		    		var files = e.target.files,file;
//		    		file = files[0];
//		    		var URL = window.URL || window.webkitURL;
//		    		imgst = URL.createObjectURL(file);
//					_this.prev(".imgs").attr("src",imgst);
//					_this.prev(".imgs").css("display","block");
//					_this.prevAll(".tian").html("");
//					_this.parents(".tjtp").next().css("display", "block");
//					
//
//		    	}
//		    }
//		});
	
	//赋值宽高
	$(".tjtp").css({"height":$(".tjtp").width(),"line-height":$(".tjtp").width()+"px"});

	//匿名
	$(".nim").on("click", function() {
		if($(".imgg").css("display") == "block") {
			$(".imgg").css("display", "none");
		} else {
			$(".imgg").css("display", "block");
		}
	})

	//长按事件
	$.fn.longTap = function(fn) {
		var timeout = undefined;
		var $this = this;
		for(var i = 0; i < $this.length; i += 1) {
			$this[i].addEventListener('touchstart', function(event) {
				timeout = setTimeout(fn, 500); //长按时间超过800ms，则执行传入方法
			}, false);
			$this[i].addEventListener('touchend', function(event) {
				clearTimeout(timeout); //长按事件少于800ms，不会执行传入的方法
			}, false);
		}
	};
	var imgids = 0;
	$(".imgs").each(function() {
		$(".tjtp").css({"height":$(".tjtp").width(),"line-height":$(".tjtp").width()+"px"});
		var ids = $(this).attr("id");

		var t;
		var pointer = document.querySelector('#' + ids);
		var cancelTimeout = function() {
			if(t) {
				clearTimeout(t);
				t = null;
			}
		};
		pointer.addEventListener('touchstart', function(e) {
			t = setTimeout(function() {
				cancelTimeout();
			}, 2000);
			e.preventDefault();
			return false;
		});
		pointer.addEventListener('touchend', cancelTimeout);
		pointer.addEventListener('touchcancel', cancelTimeout);

		var setT;
		$('#' + ids).unbind("longTap").longTap(function() {
			firm('#' + ids);
			return false;
		});

		function firm(z) {
			$(".tanchuang").css("display","block");
			$(".beijing").unbind("click").click(function(){
				$(".tanchuang").css("display","none");
			});
			$("#false").unbind("click").click(function(){
				$(".tanchuang").css("display","none");
			});
			$("#true").unbind("click").click(function(){
				var _this = $(z);
				_this.parents(".tjtp").remove();
				$(".tanchuang").css("display","none");
				if(imgids == 6){
					$("#tupians").append('<div class="tjtp" style="display:block"><label class="labelss"><p class="tian">添加图片</p><img id="'+z+'" class="imgs" src="" alt="" /><input type="file" style="display:none;"/></label></div>');
					
				}else{
					$("#tupians").append('<div class="tjtp"><label class="labelss"><p class="tian">添加图片</p><img id="'+z+'" class="imgs" src="" alt="" /><input type="file" style="display:none;"/></label></div>')
				}
				$("input[type='file']").unbind("change").change(function() {
					var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/;   
					var _this = $(this);
					var file = this.files[0];  
					if(window.FileReader) {              
						var reader = new FileReader();              
						reader.readAsDataURL(file);   
						//            监听文件读取结束后事件    
						reader.onloadend = function(e) {
						   if(!pattern.test(_this.val())){ 
		                     alert("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！"); 
		      	             return false; 
		                    }else{
		    	                var URL = window.URL || window.webkitURL;
		    		            var imgst = URL.createObjectURL(file);
		    	                _this.prev(".imgs").css("display", "block")
							    _this.prev(".imgs").attr("src",imgst);
							    _this.prevAll(".tian").html("");
							    _this.parents(".tjtp").next().css("display", "block");  
							             
							    imgids++;
		    	
		    }
							
						};         
					}
				});
				$(".tjtp").css({"height":$(".tjtp").width(),"line-height":$(".tjtp").width()+"px"});
				imgids--;
			});
		}
	})

})