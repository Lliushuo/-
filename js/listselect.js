define(["jquery"],function($){
	function listselect(){
		$(".cff").on("click","a",function(){
			$(".tellist").empty();//删除子元素
			var name = $(this).html();
			$.ajax({
				url:"../data/telphone.json?timer"+ (new Date().getTime()),
				success:function(data){
					for(var i = 0; i <data[1].length;i++){
						if(data[1][i]==name){     //每一种类的手机 有个id标识
							var ul = $(`<ul class="clearfd listul" id=${i
							}> </ul>`);
							for(var j = 0;j <data[0][i].length ;j++){
							var li = $(`<li class="${data[0][i][j].id}">
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
												<td class="buy"><a href="details.html?id=${data[0][i][j].id}&set=${data[0][i][j].set}/" class="p-button-cart"><span>加入购物车</span></a></td>
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

						ul.appendTo(".tellist");

						}
					}
					
				},
				error:function(msg){
					console.log(msg)
				}

			
			
			})
		})
	}		
	return {
		listselect:listselect
	}
})

	