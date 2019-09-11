define(["jquery"],function($){

	function overshow(node,num){
		node.on("mouseover", `.ls${num}`, function(){
			$(`.sl${num}`).show();
			
		
		});
		node.on("mouseover", `.sl${num}`, function(){
			$(`.sl${num}`).show();
			
		
		});
		node.on("mouseout", `.sl${num}`, function(){
			$(`.sl${num}`).hide();
		});
		node.on("mouseout", `.ls${num}`, function(){
			$(`.sl${num}`).hide();
		});
	}

	return {
		ceshow:overshow,
	}


})