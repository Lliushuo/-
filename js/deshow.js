define(["jquery","urlvalue"],function($,url){
	function deshow(){
		var set = url.urlvalue("set");
		var lid = url.urlvalue("id");
		$.ajax({
			url:"../data/telphone.json?timer"+ (new Date().getTime()),
			success:function(data){
				for(var i = 0;i<data[0][set].length;i++){
					if(data[0][set][i].id==lid &&data[0][set][i].set==set){
						$(".numbtn a span").attr({
							"id":lid,
							"class":set
						})
						
						var a =$(`<a href=""><img src="${data[0][set][i].imgpath}" alt=""></a>`);
						a.appendTo(".content .left .mainimg");
						var b =$(`<img src="${data[0][set][i].imgpath}" alt="">`);
						b.appendTo(".bigimg");
						$("#bread-pro-name").html(`${data[0][set][i].xdesc}`);
						$(".rgcont .tpw h1").html(`${data[0][set][i].xdesc}`);
						$(".rgcont .redw .product-slogan-link").html(`${data[0][set][i].zp}`);
						$(".p-info .price .jg em").html(`${data[0][set][i].price}`);
						var d = new Date()
						var day = d.getDay();
						if(day==0){
							day = 1;
						}
						var m = d.getMonth();
						var  r = d.getDate();
						$(".fwsm span").html(`现货，明天19:00前付款，预计${m+1}月${r+1}日（周${day+1}）送达`)
						for(var h = 0; h<data[0][set][i].color.length;h++){
				
							var li = $(`<li>
										<a href="javascript:void(0)">
											<img src="${data[0][set][i].color[h].imgpath}" alt="">
											<p><span>${data[0][set][i].color[h].name}</span></p>
										</a>
									</li>`);
							li.appendTo(".skus .scolor .lc");
						}

						for(var h = 0; h<data[0][set][i].versions.length;h++){
				
							var li = $(`<li>
										<a href="javascript:void(0)">
											

											<p><span>${data[0][set][i].versions[h]}</span></p>
										</a>
									</li>`);
							li.appendTo(".skus .scolor .cfw");
						}
						for(var h = 0; h<data[0][set][i].combo.length;h++){
				
							var li = $(`<li>
										<a href="javascript:void(0)">
											

											<p><span>${data[0][set][i].combo[h]}</span></p>
										</a>
									</li>`);
							li.appendTo(".skus .scolor .cmj");
						}
						for(var h = 0; h<data[0][set][i].safeguard.length;h++){
				
							var li = $(`<li>
										<a href="javascript:void(0)">
											

											<p><span>${data[0][set][i].safeguard[h]}</span></p>
										</a>
									</li>`);
							li.appendTo(".skus .scolor .cq");
						}
						for(var h = 0; h<data[0][set][i].hirepurchase.length;h++){
				
							var li = $(`<li>
										<a href="javascript:void(0)">
											

											<p><span>${data[0][set][i].hirepurchase[h]}</span></p>
										</a>
									</li>`);
							li.appendTo(".skus .scolor .hcl");
						}
						for(var h = 0; h<data[0][set][i].recommend.length;h++){
				
							var li = $(`<li>
										<a href="javascript:void(0)">
											

											<p><span>${data[0][set][i].recommend[h]}</span></p>
										</a>
									</li>`);
							li.appendTo(".skus .scolor .rzl");
						}
						for(var h = 0; h<data[0][set][i].imgpaths.length;h++){
				
							var li = $(`<li><a href="javascript:void(0)"><img src="${data[0][set][i].imgpaths[h]}" alt=""></a></li>`);
							li.appendTo(".btimg .ulimg .ydl");
						}
					}
				}
			},
			error:function(msg){
				console.log(msg);
			}
		})
	}
	return {
		deshow:deshow
	}





})