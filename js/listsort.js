define(["jquery"],function($){
	function listsort(){
		$(".lsnb ul li a").click(function(){
			var identifying = $(".tellist ul").attr("id"); //通过ul的id 识别是全部还是单一
			var gist=$(this).html();
			var kind=$(this).attr("class"); // 通过 a上的class 识别是那种类别排序
			$.ajax({
				url:"../data/telphone.json?timer"+ (new Date().getTime()),
				success:function(data){
					if(identifying ==-1){
						//全部
						var arr = [];
						//循环将数据放在一个数组中
						for(var i = 0 ;i<data[0].length;i++){
							for(var j = 0 ; j< data[0][i].length;j++){
								arr.push(data[0][i][j]);
							}
						}
						$(".tellist").empty();//删除子元素
						//将数组排序
						for(var i= 0; i<arr.length;i++){
							for(j=0;j < arr.length-i-1;j++){
								var min=arr[j][`${kind}`];
								var max = arr[j+1][`${kind}`];
								if(min<max){ //从大到小
									var tmp = arr[j];
									arr[j]=arr[j+1];
									arr[j+1]=tmp;
								}
						
							}
						}
						var ul = $(`<ul class="clearfd listul" id=${identifying
							}> </ul>`);
							for(var j = 0;j <arr.length ;j++){
							var li = $(`<li class="${arr[j].id}">
								<div class="panels">
									<p class="p-img">
										<a href="details.html?id=${arr[j].id}&set=${arr[j].set}"><img src="${arr[j].imgpath}" alt=""></a>
									</p>
									<p class="p-name">
										<a href="details.html?id=${arr[j].id}&set=${arr[j].set}">
											<span>${arr[j].name}</span>
											<span class="red">${arr[j].desc}</span>
										</a>
									</p>
									<p class="p-price">
										<b>${arr[j].price}</b>
									</p>
									<div class="p-button clearfd">
										<table>
											<tbody>
											<tr>
												<td class="buy"><a href="details.html?id=${arr[j].id}&set=${arr[j].set}/" class="p-button-cart"><span>加入购物车</span></a></td>
												<td><a href="/" class="p-button-cart"><span>${arr[j].hot}人评论</span></a></td>
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

					}else{
						//单一排序事件排序
						$(".tellist").empty();//删除子元素
						var arr=data[0][identifying];
						for(var i= 0; i<arr.length;i++){
							for(j=0;j < arr.length-i-1;j++){
								var min=arr[j][`${kind}`];
								var max = arr[j+1][`${kind}`];
								if(min<max){ //从大到小
									var tmp = arr[j];
									arr[j]=arr[j+1];
									arr[j+1]=tmp;
								}
						
							}
							
						}
						var ul = $(`<ul class="clearfd listul" id=${identifying
							}> </ul>`);
							for(var j = 0;j <arr.length ;j++){
							var li = $(`<li class="${arr[j].id}">
								<div class="panels">
									<p class="p-img">
										<a href="details.html?id=${arr[j].id}&set=${arr[j].set}"><img src="${arr[j].imgpath}" alt=""></a>
									</p>
									<p class="p-name">
										<a href="details.html?id=${arr[j].id}&set=${arr[j].set}">
											<span>${arr[j].name}</span>
											<span class="red">${arr[j].desc}</span>
										</a>
									</p>
									<p class="p-price">
										<b>${arr[j].price}</b>
									</p>
									<div class="p-button clearfd">
										<table>
											<tbody>
											<tr>
												<td class="buy"><a href="details.html?id=${arr[j].id}&set=${arr[j].set}/" class="p-button-cart"><span>加入购物车</span></a></td>
												<td><a href="details.html?id=${arr[j].id}&set=${arr[j].set}/" class="p-button-cart"><span>${arr[j].hot}人评论</span></a></td>
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

				},
				error:function(msg){
					console.log(msg);
				}
			
			})
		})
	}
	return {
		listsort:listsort
	}


})