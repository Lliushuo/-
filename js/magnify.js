define(["jquery"],function($){
	function big(node,snode){
		node.on("mouseover",snode,function(){
		$(this).css({
			boxShadow: "3px 3px 10px #D4D4D4"
		})
		})
		node.on("mouseout",snode,function(){
		$(this).css({
			boxShadow: "0px 0px 0px"
		})
		
		})
		
	}
	return {
		big:big
	}
});