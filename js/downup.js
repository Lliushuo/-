define(["jquery"],function($){
	function down(down,node,ls=4,wid=242){
		//前进
		down.click(function(){
		
			var a=$(`${node} li:last`).index();
		
			var max = (a-ls)*-wid;
			if($(`${node}`).position().left>max){
				$(`${node}`).css({
				"left":$(`${node}`).position().left-wid
				});
			}else{
				alert("后面没有了");
			}
			
			
		})
		
		
	}
	function up(up,node,wid=242){
	
		up.click(function(){
			
			
			if($(`${node}`).position().left<0){
				$(`${node}`).css({
				"left":$(`${node}`).position().left+wid,
				});
		
			}else{
				alert("前面没有了")
			}
			
		})
	}
	return {
		down:down,
		up:up
	}
})