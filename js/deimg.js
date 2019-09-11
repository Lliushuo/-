define(["jquery"],function($){
	function deimg(){
		$(".btimg .ulimg ul").on("mouseenter","li",function(){
			$(".btimg .ulimg ul a").css({
				"border":"1px solid white"
				})
			
			$(".bigimg").empty().html($(this).find('a').html());
			
			$(".mainimg").find('a').remove();
			$(".mainimg").find("img").remove();
			$($(this).find('a').html()).prependTo(".mainimg")
		
			$(this).find("a").css({
				"border":"1px solid red"
			})
		})
	}
	return {
		deimg:deimg
	}

})