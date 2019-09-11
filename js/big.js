define(["jquery"],function($){
	function big(){
		$(".content .mainimg").on("mouseenter",function(){
			$(".smallimg").css({
				"display":"block"
			})
			$(".bigimg").css({
				"display":"block"
			})

		})
		$(".content .mainimg").on("mouseleave",function(){
			$(".smallimg").css({
				"display":"none"
			})
			$(".bigimg").css({
				"display":"none"
			})
		})
		$(".content .mainimg").on("mousemove",function(ev){
			  var l = ev.pageX - $(this).offset().left - 50;
              var t = ev.pageY - $(this).offset().top - 50;
                if(l <= 0){
                        l = 0;
                }
                if(l >= 350){
                    l = 350;
                }

                if(t <= 0){
                    t = 0;
                }
                if(t >= 350){
                    t = 350;
                }
                $(".smallimg").css({
                        left: l,
                        top: t
                })
                 $(".bigimg img").css({
                        left: -3 * l, 
                        top: -3 * t
                    })
		})

	}
	function num(){
		//数量加减功能
		$(".productbtn .num .zj").click(function(){
			var a = $(".productbtn .num").find("input").val();
			a++;
			$(".productbtn .num").find("input").val(a);
		})
		$(".productbtn .num .js").click(function(){
			var a = $(".productbtn .num").find("input").val();
			a--;
			if(a<=1){
				a=1;
			}

			$(".productbtn .num").find("input").val(a);
		})
		// 项目选择功能
		$(".lc").on("click","a",function(){
			$(".lc li a").css({
				border:"1px solid #a4a4a4"
			})
			$(this).css({
				border:"1px solid red"
			})
		})
		$(".cfw").on("click","a",function(){
			$(".cfw li a").css({
				border:"1px solid #a4a4a4"
			})
			$(this).css({
				border:"1px solid red"
			})
		})
		$(".cmj").on("click","a",function(){
			$(".cmj li a").css({
				border:"1px solid #a4a4a4"
			})
			$(this).css({
				border:"1px solid red"
			})
		})
		$(".cq").on("click","a",function(){
			$(".cq li a").css({
				border:"1px solid #a4a4a4"
			})
			$(this).css({
				border:"1px solid red"
			})
		})
		$(".hcl").on("click","a",function(){
			$(".hcl li a").css({
				border:"1px solid #a4a4a4"
			})
			$(this).css({
				border:"1px solid red"
			})
		})
		// $(".rzl").on("click","a",function(){
		// 	$(".rzl li a").css({
		// 		border:"1px solid #a4a4a4"
		// 	})
		// 	$(this).css({
		// 		border:"1px solid red"
		// 	})
		// })
	}
	return {
		big:big,
		num:num
	}
})