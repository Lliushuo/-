define(["jquery"],function($){
	function clutter(){
		//新人福利
		$(".w-btn .new").mouseover(function(){
			$(".w-btn .new").css("color","#fff");
			$(".w-btn .new").css("backgroundColor","#CF0A2C");
		})
		$(".w-btn .new").mouseout(function(){
			$(".w-btn .new").css("color"," #de5b60");
			$(".w-btn .new").css("backgroundColor","#fff");
		})
		//企业购优惠
		$(".menu ").on("mouseover",".menuul .s2 ul li ",function(){
			$(this).find(".p-dec").css("color","#CF0A2C");
		})
		$(".menu ").on("mouseout",".menuul .s2 ul li",function(){
			$(this).find(".p-dec").css("color","#777");		
		})
		//公告牛逼
		var timer = null;
		var i = 0
		timer = setInterval(function(){
			i++;
			$(".p-noticecontent .pnotul li").css({
				"top":-43*i
			})
			if($(".p-noticecontent .pnotul li").position().top==-172){
				$(".p-noticecontent .pnotul li").css({
				"top":0
				})
			i=0;
			}
		},2000);
		//实名认证
		$(".menu ").on("mouseover",".menuul .s3 .p-info ul li",function(){
			$(this).find("a").css("color","#CF0A2C");
		})
		$(".menu ").on("mouseout",".menuul .s3 .p-info ul li ",function(){
			$(this).find("a").css("color","#777");		
		})
		//中部轮播
		var timer= null;
		var i =0;
		//自动轮播
		 lstimer(i);
		//小按钮
		$(".mdbancontent").on("mouseover","span",function(){
			clearInterval(timer);
			$(".mdbancontent .eqmd span").attr("class", '');
			$(this).attr("class","s-btn");
			
			$(".mdbanner .ls-md .mdul").css({
			"top":-120 * $(this).index()
			})
			
			i=$(this).index();
			lstimer(i);
			
		})

		function lstimer(i){
			timer = setInterval(function(){
			i++;
			$(".mdbanner .ls-md .mdul").css({
				"top":-120*i
			})
			$(".mdbanner .eqmd span").attr("class", '');
			$(".mdbanner .eqmd span").eq(i).attr("class","s-btn");
			if($(".mdbanner .ls-md .mdul ").position().top==-960){
				$(".mdbanner .ls-md .mdul").css({
				"top":0
			})
				$(".mdbanner .eqmd span").eq(0).attr("class","s-btn");
				i=0;
			}

			},2000);
		}
		
	}

	$(".w-btn .new")

	return{
		clutter:clutter
	}
})