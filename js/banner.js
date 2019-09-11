define(["jquery"],function($){
	
	function banner(){
		var timer= null;
		var i =0;
		//自动轮播
		 lstimer(i);
		//小按钮
		$(".banner .bannerbtn .btnx").on("mouseover","span",function(){
			clearInterval(timer);
			$(".banner  .bannerbtn .btnx span").attr("class", '');
			$(this).attr("class","s-btn");
			
			$(".rotateimg ul").css({
			"top":-500 * $(this).index()
			})
			
			i=$(this).index();
			lstimer(i);
		})

		function lstimer(i){
			timer = setInterval(function(){
			i++;
			$(".rotateimg ul").css({
				"top":-500*i
			})
			$(".banner  .bannerbtn .btnx span").attr("class", '');
			$(".banner  .bannerbtn .btnx span").eq(i).attr("class","s-btn");
			if($(".rotateimg ul").position().top==-2500){
				$(".rotateimg ul").css({
				"top":0
			})
				$(".banner  .bannerbtn .btnx span").eq(0).attr("class","s-btn");
				i=0;
			}

			},2000);
		}

		//左右按钮
		$(".bannerbtn .prev").click(function(){
			var num=$(".banner  .bannerbtn .s-btn").index();
			clearInterval(timer);
			i = num-1;
			if(i<0){
				i=4;
			}
			$(".banner  .bannerbtn .btnx span").attr("class", '');
			$(".banner  .bannerbtn .btnx span").eq(i).attr("class","s-btn");
			$(".rotateimg ul").css({
				"top":-500 * i
			})
			lstimer(i);
		});
		$(".bannerbtn .next").click(function(){
			var num=$(".banner  .bannerbtn .s-btn").index();
			clearInterval(timer);
			i = num+1;
			if(i>4){
				i=0;
			}
			$(".banner  .bannerbtn .btnx span").attr("class", '');
			$(".banner  .bannerbtn .btnx span").eq(i).attr("class","s-btn");
			$(".rotateimg ul").css({
				"top":-500 * i
			})
			lstimer(i);
		});
		$(".rotateimg").on("mouseover",function(){
			clearInterval(timer);
		})
		$(".rotateimg").on("mouseout",function(){
			clearInterval(timer);
			var i=$(".banner  .bannerbtn .s-btn").index();
			lstimer(i);
		})
		

	}
	return{
		banner:banner
	}


	
})