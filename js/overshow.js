define(["jquery"],function(){
	function show(over,show){
		over.on({
			mouseover:function(){
				show.show();
				over.css({
					"backgroundColor":"#fff",
				});
	
			},
			mouseout:function(){
				show.hide();
				over.css({
					"backgroundColor":" #f9f9f9",
					
				});
			}

		});
		show.on({
			mouseover:function(){
				show.show();
				over.css({
					"backgroundColor":"#fff",
				});
	
			},
			mouseout:function(){
				show.hide();
				over.css({
					"backgroundColor":" #f9f9f9",
					
				});
			}

		});
	}
	return {
		showhide:show
	}
})