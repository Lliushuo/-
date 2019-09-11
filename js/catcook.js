define(["parabola","jquery","jquery-cookie"],function(pr,$){
		//点击加入 存放在cookie中事件委托
		/*
		@father:事件委托给谁
		@lstarget:触发源
		@lsnum:改谁的数值
		@lsshow:显示到哪里
		@select:是否不是根目录 区分图片 false 是根目录 true 不是默认不是
		@btnfather:点击数量改变的委托对象
		@btntarget:点击源
		@gwc:是不是 购物车页面 默认不是 

		 */
		function stockpile(father,lstarget,lsnum,lsshow,btnfather,btntarget,cfather,ctarget,select=true,gwc=false){
			sc_num();
			sc_msg();
			sc_btnnum(btnfather,btntarget);
			sc_move(cfather,ctarget);
			if(gwc){

				show();
				sc_btnnum($(".shop .catform"),".cata");//购物车页面数量点击
				sc_move($(".shop .catform"),".delete");
			}
			function ballMove(oBtn){
                //将小球显示，并且小球的位置移动到小球的位置
                $("#ball").css({
                    display: 'block',
                    left: oBtn.offset().left+30,
                    top: oBtn.offset().top
                })

                //计算抛物线运动要进行的相对位置
                var X = $(".shpcat").offset().left - $("#ball").offset().left+30;
                var Y = $(".shpcat").offset().top - $("#ball").offset().top;
             	
                //1、创建一个抛物线对象
                var bool = new Parabola({
                    el: "#ball",
                    offset: [X, Y],
                    duration: 600,
                    curvature: 0.000005,
                    callback: function(){
                        $("#ball").hide();
                    }
                });
                bool.start();
            }
			// sc_btnnum(btnfather,btntarget);
			father.on("click",lstarget,function(){
				ballMove($(this).find("span"));
				var id = $(this).attr("class");
				var set = $(this).attr("id");
				//判断是不是没插入过cookie first为true 代表空
				var first = $.cookie("ls") == null ? true : false;
				if(!first){
					$(".mincat .noshop").css("display","none");
				}
				if(first){
					var arr = [{"id": id,"set":set,"num":1,"state":true}];
					
                    $.cookie("ls", JSON.stringify(arr), {
                        expires: 7,
                        path:"/"
                    })
				}else{
					
					//不是第一次添加 判断这次加入的 缓冲中有没有是新加入 还是数量加一
					var cookieStr = $.cookie("ls"); //获取cookiejson格式
					var cookieArr = JSON.parse(cookieStr);//json转原格式
					var same =false; //假设是一个新的产品
					for(var i = 0; i < cookieArr.length; i++){
	                    if(id == cookieArr[i].id){
	                        cookieArr[i].num++;
	                        same = true;
	                        break;
	                    }
                   	}
                   	if(!same){
                   		cookieArr.push({"id": id,"set":set,"num":1,"state":true});
                   		
                   	}
                   	$.cookie("ls", JSON.stringify(cookieArr), {
                        expires: 7,
                        path:"/"
                    })
				}
				
				
				sc_num();
				sc_msg();
			})
			//计算cookie中有多少商品数量总和
			function sc_num(){
                var cookieStr = $.cookie("ls");
                if(cookieStr){
                    //计算求和
                    var cookieArr = JSON.parse(cookieStr);
                    var sum = 0;
                    for(var i = 0; i < cookieArr.length; i++){
                        sum += cookieArr[i].num;
                    }
                    lsnum.html(sum);
                   
                }else{
                    lsnum.html(0);
                   
                }
            }
           //如果cook中有 则 显示出来
           	function sc_msg(ls=false){
           		if(ls){
           			lsshow.find(".havshop").remove();
           			var div = $(`<div class="noshop">
											<p>
												<span class="nullshop"></span>
											</p>	
											<p id="cartInfo">您的购物车是空的，赶紧选购吧~</p>
										</div>`);
           			div.appendTo(".mincat");
           		}

           		if(cookieStr = $.cookie("ls")){
           			lsshow.empty();
           		}
           		var url=null;
           	 	if(select){
           	 		url="../data/telphone.json?timer";
           	 	}else{
           	 		url="data/telphone.json";
           	 	}
           		$.ajax({

           			url:url,
					success:function(data){
							var summoney=0;
						var cookieStr = $.cookie("ls");
						var newArr = [];
						if(cookieStr){
							var cookieArr = JSON.parse(cookieStr);
							for(var i = 0; i < cookieArr.length; i++){
								var lsid = cookieArr[i].id;
								var set = cookieArr[i].set;
								var nums=cookieArr[i].num;
								
								
								for(var j = 0; j<data[0][set].length;j++){
									if(lsid ==data[0][set][j].id){
										data[0][set][j].num = nums;
										newArr.push(data[0][set][j]);
									}
								
								}
							}
							
							var div = $(`<div class="havshop"></div>`);
							for(var i =0; i<newArr.length;i++){
								if(select){
									var ul = $(`<ul class="cat clearfd">
												<li class="catlist">
													<ul class="clearfd">
														<li>
														<a href="javascript:void(0)" id="${newArr[i].id}">
															<div class="select">
																
															</div>
														</a>
															
														</li>
														<li>
															<div class="l-img">
																<img src="${newArr[i].imgpath}" alt="">
															</div>
														</li>
														<li>
															<div class="desc">
																${newArr[i].xdesc}
															</div>
															<div class="pirce clearfd">
																<span class="pir">${newArr[i].price}</span>
																<span class="num">x${newArr[i].num}</span>
															</div>
															
														</li>
													</ul>
													<div class="numbtn clearfd">
														<a href="javascript:void(0)" id="${newArr[i].id}">
															<div class="l-num zj">-</div>
															<div class="l-num js">+</div>
														</a>
													</div>
													<div class="parets clearfd">
														<div class="p_tb">
														配
														</div>
														<div class="p_desc">
															${newArr[i].desc}
														</div>
													</div>
																		
												</li>
											</ul>`);
								}else{
										var ul = $(`<ul class="cat clearfd">
												<li class="catlist">
													<ul class="clearfd">
														<li>
														<a href="javascript:void(0)" id="${newArr[i].id}">
															<div class="select">
																
															</div>
														</a>
															
														</li>
														<li>
															<div class="l-img">
																<img src="${newArr[i].imgpathx}" alt="">
															</div>
														</li>
														<li>
															<div class="desc">
																${newArr[i].xdesc}
															</div>
															<div class="pirce clearfd">
																<span class="pir">${newArr[i].price}</span>
																<span class="num">x${newArr[i].num}</span>
															</div>
															
														</li>
													</ul>
													<div class="numbtn clearfd">
														<a href="javascript:void(0)" id="${newArr[i].id}">
															<div class="l-num zj">-</div>
															<div class="l-num js">+</div>
														</a>
													</div>
													<div class="parets clearfd">
														<div class="p_tb">
														配
														</div>
														<div class="p_desc">
															${newArr[i].desc}
														</div>
													</div>
																		
												</li>
											</ul>`);
								}
							
								summoney += newArr[i].num*newArr[i].price
								ul.appendTo(div);

							}
							var js=$(`<div class="jiesuan clearfd">
												<div class="countpri">
													<p>总计：￥${summoney}</p>
													<p>
													<span>￥${summoney}</span>
													<del>${summoney}</del>
													</p>
												</div>
												<a href="">
													<div class="colsepri">
															结算
													</div>
												</a>
											</div>`);
							js.appendTo(div);
							div.appendTo(lsshow);
							


						}
					},
					error:function(msg){
						console.log(msg)
					}
           		})
           	}
           	//按钮的点击实现数量的加减 
           	function sc_btnnum(w,tar){
           		
           		w.on("click",tar,function(){
           			var id= $(this).parent().attr("id");
           			var name = $(this).html();
           			var cookieStr = $.cookie("ls");
                	var cookieArr = JSON.parse(cookieStr);
                	for(var i = 0; i < cookieArr.length; i++){
                   		if(id == cookieArr[i].id){
                   			if(name=="+"){
                   				cookieArr[i].num++;
                   			}else{
                   				if(cookieArr[i].num == 1){
                                	console.log("别点了好吗好吗？");
	                            }else{
	                                cookieArr[i].num--;
	                            }
                   			}
                   			
                        	$.cookie("ls", JSON.stringify(cookieArr), {
                           		expires: 7,
                           		path:"/"
                        	})
                        	sc_num();
							sc_msg();
							if(gwc){
								show();
							}
                   		}
                   	}
           		})
		
           	}
           	//移动到圆圈上点击销毁此商品
           	function sc_move(w,tar){
           		
           		    w.on("click",tar,function(){
           		    
	           		    $(this).css({
	           		    	"background":"none"
	           		    })
	           			var id= $(this).parent().attr("id");
	           			
	           			var cookieStr = $.cookie("ls");
	                	var cookieArr = JSON.parse(cookieStr);
	                	for(var i = 0; i < cookieArr.length; i++){
	                   		if(id == cookieArr[i].id){
	                   			
	                   			cookieArr.splice(i,1);
	                   	
	                        	break;
	                   		}
	                   	}
	                 
	                   	if(!cookieArr.length){
	                   $.cookie('ls',null,{ path: '/'});
	                
	                   
	              		}else{
		                    $.cookie("ls", JSON.stringify(cookieArr),{
		                        expires: 7,
		                        path:"/"
		                    })
		                }
	               	
	               		sc_num();
						sc_msg(true);
						if(gwc){
								show();
							}
           			})
           	}
           	//商品详情页的点击加入
           	$(".numbtn a span").on("click",function(){
			
				var id = $(this).attr("id");
				var set = $(this).attr("class");
				var nbnum =parseInt($(".num input").val());
			
				//判断是不是没插入过cookie first为true 代表空
				var first = $.cookie("ls") == null ? true : false;
			
				if(first){
					var arr = [{"id": id,"set":set,"num":nbnum,"state":true}];
                    $.cookie("ls", JSON.stringify(arr), {
                        expires: 7,
                        path:"/"
                    })
				}else{
					
					//不是第一次添加 判断这次加入的 缓冲中有没有是新加入 还是数量加一
					var cookieStr = $.cookie("ls"); //获取cookiejson格式
					var cookieArr = JSON.parse(cookieStr);//json转原格式
					var same =false; //假设是一个新的产品
					for(var i = 0; i < cookieArr.length; i++){
	                    if(id == cookieArr[i].id){
	                        cookieArr[i].num+= nbnum;
	                        same = true;
	                        break;
	                    }
                   	}
                   	if(!same){
                   		cookieArr.push({"id": id,"set":set,"num":nbnum,"state":true});
                   	}
                   	$.cookie("ls", JSON.stringify(cookieArr), {
                        expires: 7,
                        path:"/"
                    })
				}
				
				
				sc_num();
				sc_msg();
				alert("商品加入购物车了呢");
			});
			
			//购物车页面 显示出来
			function show(){
					$.ajax({
           				url:"../data/telphone.json?timer"+ (new Date().getTime()),
						success:function(data){
							var summoney=0;
							$(".shop .catform").empty();
							$(".s-title .total p span").html(`¥&nbsp; ${summoney}`);
							var cookieStr = $.cookie("ls");

							var newArr = [];
							if(cookieStr){
								var cookieArr = JSON.parse(cookieStr);
		
								for(var i = 0; i < cookieArr.length; i++){
									var lsid = cookieArr[i].id;
									var set = cookieArr[i].set;
									var nums=cookieArr[i].num;									
									for(var j = 0; j<data[0][set].length;j++){
										if(lsid ==data[0][set][j].id){
											
						
											data[0][set][j].num = nums;
						
											newArr.push(data[0][set][j]);
				
										}
										
									}
								}
							
								
								var div = $(`<div class="havshop"></div>`);
								for(var i =0; i<newArr.length;i++){
									var div = $(`	<div class="sc-catlist">
												<label for="" class="checkbox">
													<input type="text" class="l-sel" state="${newArr[i].id}" id="checked">
												</label>
												<div class="catare">
													<div class="main clearfd">
														<a href=""><img src="${newArr[i].imgpath}" alt=""></a>
														<ul clearfd>
															<li>
									                           ${newArr[i].xdesc}
									                        </li>	
															<li><a href="">
																¥ ${newArr[i].price}
															</a></li>
															<li>
																<div class="numbtn">
																	<input type="number" class="p-stock-text" value="${newArr[i].num}">
																</div>
																<p class="p-stock-btn clearfd" id="${newArr[i].id}">
																<a href="javascript:void(0)" id="${newArr[i].id}" class="cata">−</a>
																 <a href="javascript:void(0)" id="${newArr[i].id}" class="cata">+</a>
																 </p>
															</li>
															<li><a href="">
																¥ ${newArr[i].price * newArr[i].num}
						                          
															</a></li>
															<li id="${newArr[i].id}"><a href="javascript:void(0)" class="delete">删除</a></li>
														</ul>
													</div>

												</div>	
											</div>`);
								
									if(newArr[i].ls=true){
										
										 summoney+=newArr[i].price * newArr[i].num;
										 
									}
									
									
									div.appendTo(".shop .catform");
								}
								$(".s-title .total p span").html(`¥&nbsp; ${summoney}`)


						}
						},
				
						error:function(msg){
							console.log(msg)
						}
	           			})
			}
			
			//全选单选功能
			$(".layout").on("click",".qx",function(){
				if($(this).attr("id")=="checked"){
					$(".layout .checkbox input").css({
					 "backgroundPosition": " -18px -129px"
					})
					$(".s-title .total p span").html(`¥&nbsp;00`);
					var cookieStr = $.cookie("ls");
                	var cookieArr = JSON.parse(cookieStr);
                	for(var i = 0; i < cookieArr.length; i++){
                   	
                   		cookieArr[i].state=false;
                   	}
                   		$.cookie("ls", JSON.stringify(cookieArr), {
                           		expires: 7,
                           		path:"/"
                        	})

					$(this).attr("id","")
				}else{
					$(".layout .checkbox input").css({
					 "backgroundPosition": "  0px -129px"
					})
					$(this).attr("id","checked");
					var cookieStr = $.cookie("ls");
                	var cookieArr = JSON.parse(cookieStr);
                	for(var i = 0; i < cookieArr.length; i++){
                   	
                   		cookieArr[i].state=true;
                   	}
                   		$.cookie("ls", JSON.stringify(cookieArr), {
                           		expires: 7,
                           		path:"/"
                        	})
					show();
				}
				
				

			})

			
			//单选
			$(".layout").on("click",".l-sel",function(){
				if($(this).attr("id")=="checked"){
					$(this).css({
					 "backgroundPosition": " -18px -129px"
					})
					var s=0;
					var id = $(this).attr("state");
					var cookieStr = $.cookie("ls");
                	var cookieArr = JSON.parse(cookieStr);
                	for(var i = 0; i < cookieArr.length; i++){
                   		if(id == cookieArr[i].id){
                   				cookieArr[i].state=false;
                   				$.cookie("ls", JSON.stringify(cookieArr), {
                           		expires: 7,
                           		path:"/"
                        	})
                      	
							
                   		}
                   		if(cookieArr[i].state==true){
                   			s++;
                   		}
                   	}

                 	if(s==0){
                 		$(".layout .checkbox input").css({
					 	"backgroundPosition": " -18px -129px"
						})
						$(".qx").attr("id","")
                 	}
                   	var cookieStr = $.cookie("ls");
                	var ls = JSON.parse(cookieStr);
                	var arr =[];
                	for(var i = 0;i<ls.length;i++){
                		if( ls[i].state==true){
                			arr.push(ls[i]);
                		}
                	}
             	
                   	$.ajax({
           				url:"../data/telphone.json?timer"+ (new Date().getTime()),
						success:function(data){
							   var newArr=[];
								for(var i = 0; i < arr.length; i++){
									var lsid = arr[i].id;
									var set = arr[i].set;
									var nums=arr[i].num;									
									for(var j = 0; j<data[0][set].length;j++){
										if(lsid ==data[0][set][j].id){
											
						
											data[0][set][j].num = nums;
						
											newArr.push(data[0][set][j]);
				
										}
										
									}
								}
								var sum=0;
								for(var i =0; i<newArr.length;i++){
									sum+=newArr[i].num*newArr[i].price
								}

								 $(".s-title .total p span").html(`¥&nbsp;${sum}`);
						},
						error:function(){

						}
					})
                  
					$(this).attr("id","");

				}else{
					var l=0
					$(this).css({
					 "backgroundPosition": "  0px -129px"
					})
					var id = $(this).attr("state");
					var cookieStr = $.cookie("ls");
                	var cookieArr = JSON.parse(cookieStr);
                	for(var i = 0; i < cookieArr.length; i++){
                   		if(id == cookieArr[i].id){
                   				cookieArr[i].state=true;
                   				$.cookie("ls", JSON.stringify(cookieArr), {
                           		expires: 7,
                           		path:"/"
                        	})
                      	
							
                   		}
                   		if(cookieArr[i].state==false){
                   			l++;
                   		}
                   	}
                   	if(l==0){
                 				$(".layout .checkbox input").css({
								 "backgroundPosition": "  0px -129px"
								})
								$(".qx").attr("id","checked");
                 	}

                   	
                   	var cookieStr = $.cookie("ls");
                	var ls = JSON.parse(cookieStr);
                	var arr =[];
                	for(var i = 0;i<ls.length;i++){
                		if( ls[i].state==true){
                			arr.push(ls[i]);
                		}
                	}
   

                   
                   	$.ajax({
           				url:"../data/telphone.json?timer"+ (new Date().getTime()),
						success:function(data){
							   var newArr=[];
								for(var i = 0; i < arr.length; i++){
									var lsid = arr[i].id;
									var set = arr[i].set;
									var nums=arr[i].num;									
									for(var j = 0; j<data[0][set].length;j++){
										if(lsid ==data[0][set][j].id){
											
						
											data[0][set][j].num = nums;
						
											newArr.push(data[0][set][j]);
				
										}
										
									}
								}
								var sum=0;
								for(var i =0; i<newArr.length;i++){
									sum+=newArr[i].num*newArr[i].price
								}

								$(".s-title .total p span").html(`¥&nbsp;${sum}`);
						},
						error:function(){

						}
					})
					$(this).attr("id","checked")
				}
				
				

			})
				
				
		
			
           		
           	

		}
	return{
		catcook:stockpile
	}
})