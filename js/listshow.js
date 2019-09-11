define(["jquery"], function($){
	function listshow(){
		$.ajax({
			url:"../data/telphone.json?timer"+ (new Date().getTime()),
			
			success: function(data){
															//全部都插入 个ul加个id识别种类
				var ul = $(`<ul class="clearfd listul" id="-1"> </ul>`);
				for(var i=0;i<data[0].length;i++){
					for(var j = 0;j <data[0][i].length ;j++){
						var li = $(`<li class="${data[0][i][j].id}"" id="${data[0][i][j].set}">
							<div class="panels">
								<p class="p-img">
									<a href="details.html?id=${data[0][i][j].id}&set=${data[0][i][j].set}"><img src="${data[0][i][j].imgpath}" alt=""></a>
								</p>
								<p class="p-name">
									<a href="details.html?id=${data[0][i][j].id}&set=${data[0][i][j].set}">
										<span>${data[0][i][j].name}</span>
										<span class="red">${data[0][i][j].desc}</span>
									</a>
								</p>
								<p class="p-price">
									<b>${data[0][i][j].price}</b>
								</p>
								<div class="p-button clearfd">
									<table>
										<tbody>
										<tr>
											<td class="buy"><a href="javascript:void(0)" class="p-button-cart"><span>加入购物车</span></a></td>
											<td><a href="/" class="p-button-cart"><span>${data[0][i][j].hot}人评论</span></a></td>
										</tr>

										</tbody>
									</table>
								</div>

							</div>
						</li>
						`);	
						li.appendTo(ul)
					}
				}
				ul.appendTo(".tellist");
				var ul =$(`<ul calss="clearfd ls-ul"></ul>`);
				for(var i = 0;i<data[1].length;i++){
					var li = $(`<li><a >${data[1][i]}</a></li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".pvalues .cff");
				
			},
			error:function(msg){
				console.log(msg)
			}



		})
		//加框
		$(".tellist").on("mouseover",".panels",function(){
			$(this).css({
				"border":"1px solid red"
			})
		})
		$(".tellist").on("mouseout",".panels",function(){
			$(this).css({
				"border":"1px solid #dedede"
			})
		})
		//购买
		$(".tellist").on("mouseover",".buy",function(){
			$(this).css({
				"backgroundColor":"red",
				
			});
			$(this).find("a span").css("color","white");
		})
		$(".tellist").on("mouseout",".buy",function(){
			$(this).css({
				"backgroundColor":"white",
				
			});
			$(this).find("a span").css("color","#e01d20");
		})
		//列表
		$(".pvalues").on("mouseover","li",function(){
			$(this).find("a").css({
				"color":"#333"	
			})
		})
		$(".pvalues").on("mouseout","li",function(){
			$(this).find("a").css({
				"color":"#999"	
			})
		})
	

	}

	return {
		listshow:listshow
	}
})