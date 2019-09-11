define(["jquery"], function($){

		function closebtn(btn,node){
	 	 btn.click(function(){
	  	node.hide();
	  	 })
	
		}
		return {
			closebtn:closebtn
		}	
  

	
});