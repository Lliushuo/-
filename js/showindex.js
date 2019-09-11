define(["jquery"], function($){

	function showindex(){
		$.ajax({
			url:"data/data.json?timer"+ (new Date().getTime()),
			// type: "get",
			success: function(data){
				//头部广告动态加载
				var topadv = $(`<img src="${data[0].imgpath}" alt="${data[0].describe}">`);
			    topadv.appendTo(".topadv .lsimg");
			    //logo动态加载
			    var toplogo =$(`<img src="${data[1].imgpath}" alt="${data[1].describe}">`);
				toplogo.appendTo(".logo a");
				//创建logo旁边你的导航条
				var ul = $(`<ul><ul>`);
				for(var i =0 ;i<data[2].length;i++){
					if(i<2){
							var li = $(`<li class="img">
									<a href="">
										<img src="${data[2][i].imgpath}" alt="${data[2][i].desc}">
									</a>
								</li>`);
						li.appendTo(ul);
					}else{
						var li = $(`<li>
									<a href="">
										<span>${data[2][i].desc}</span>
									</a>
								</li>`);
						li.appendTo(ul);
					}

				}
				ul.appendTo(".naver ul");//文档碎片
				// 搜索框中的热词
				for(var i = 0; i<data[3].length;i++){
					var hots=$(`<a href="">${data[3][i]}</a>
								`);
					hots.appendTo(".searchkey .skeyt");

				}
				// 创建侧边导航 循环一次控制一段
				//优化没做
				for(var i = 0; i<data[4].length;i++){
					//显示页面
					var li = $(`<li> </li>`);
					var  show = $(`<div class="celistshow ls${i}">
								<div class="s_info">
									<div class="contlist">
										<div class="title">
											<a href="html/onlylist.html">${data[4][i][0][0].title}</a>
										</div>
										<a href="html/onlylist.html"><span>${data[4][i][0][1][0]}</span></a>
										<a href="html/onlylist.html"><span>${data[4][i][0][1][1]}</span></a>
									</div>
								</div>
							</div>`);
					var hide = $(`<div class="celisthide clearfd cel cel3 sl${i}">
								
							</div>`);
					show.appendTo(li); 
					hide.appendTo(li); 
					var h=0;
					//四个li放在一个ul里面
					li.appendTo(".contmain .celist")
					for(var j = 0; j < data[4][i][1].length;j++){
						var li = $(`<li class="hlistl" id="${data[4][i][1][j].set}">
										<a href="html/details.html?id=${data[4][i][1][j].id}&set=${data[4][i][1][j].set}" class="${data[4][i][1][j].id}">
											<img src="${ data[4][i][1][j].imgpath}" alt="">
											<span>${data[4][i][1][j].desc}</span>
										</a>
									</li>`);
						//第一次 和每四次创建一个li也就是第五次创建（j=4）
						if(j%4==0 || j==0){
							h++;
							var ul = $(`<ul class="hidelist clearfd ul${h}"></ul>`);
							ul.appendTo(`.celist .sl${i}`);
						}

						li.appendTo(`.celist .sl${i} .ul${h}`);

					}

					//判断 每一次ul满了吗 满了自己穿件个查看
					if(data[4][i][1].length % 4==0 ||data[4][i][1].length==4){
					
						var ul =$(`<ul class="hidelist clearfd">
									<li class="clibtn">
										<a href="html/onlylist.html">查看全部</a>
									</li>
								</ul>
									`);
					
						ul.appendTo(`.celist .sl${i}`);
					//不满插在最后一个ul里
					}else{
				
						var li =$(`<li class="clibtn">
										<a href="html/onlylist.html">查看全部</a>
									</li>`);
						li.appendTo(`.celist .sl${i} .ul${h}`);
					}

				}
				// 轮播图banner 创建
				var ul = $(`<ul></ul>`);
				for(var i = 0; i < data[5].length;i++){
					
					var banner = $(`<li><a href="html/onlylist.html"><img src="${data[5][i]}" alt=""></a></li>`);
					banner.appendTo(ul);
				}
				ul. prependTo(".banner .rotateimg");//文档碎片
				//登录后显示头像data[6]
				//
				//banner下导航
				var ul=$(`<ul class="clearfd"></ul>`);
				for(var i = 0; i< data[7].length;i++){
					var li =$(`<li>
							<a href="">
								<div class="p-img">
									<img src="${data[7][i].imgpath}" alt="" class="img${i+1}">
								</div>
								<div class="p-dec">
									${data[7][i].title}
								</div>
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".menu .s2");//减少li插入次数 向页面插入ul
				//华为公告滚动
				var ul=$(`<ul class="pnotul"></ul>`);
				for(var i = 0; i< data[8].length;i++){
					var li = $(`<li><a href="">${data[8][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".s3 .p-noticecontent");//文档碎片
				// 优购码
				var ul=$(`<ul class="clearfd ygul"></ul>`)
				for(var i = 0; i< data[9].length;i++){
					var li = $(`<li>
								<a href="">
									<span>
										<img src="${data[9][i].imgpath}" alt="" class="img${i+1}">
									</span>
									${data[9][i].title}					
								</a>
							</li>`)
					li.appendTo(ul);
			
				}
				ul.appendTo(".s3 .p-info");//文档碎片
				//四分导航图
				var ul = $(`<ul class="dhimg clearfd"></ul>`);
				for(var i = 0; i< data[10].length;i++){
					var li = $(`<li><a href=""><img src="${data[10][i].imgpath}" alt=""></a></li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".sf");//文档碎片优化减少插入页面次数
				//热销单品
				var h2 = $(`<h2>${data[11][0].title}</h2>`);
				h2.appendTo(".rx .rxcontent .title");
				var li = $(`<li><a href=""><img src="${data[11][1].imgpath}" alt="${data[11][1].title}"></a></li>`);
				li.appendTo(".rxcontent .showc .left ul");
				var ul = $(`<ul class="clearfd"></ul>`);
				for(var i = 0; i< data[11][2].length;i++){
					var li = $(`<li class="${data[11][2][i].id}" id="${data[11][2][i].set}">
								<a href="html/details.html?id=${data[11][2][i].id}&set=${data[11][2][i].set}">
									<p class="p-img ">
										<img src="${data[11][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[11][2][i].title}</div>
									<p class="p-desc">${data[11][2][i].desc}</p>
									<p class="p-price">${data[11][2][i].price}</p>
									<p class="p-tips ${data[11][2][i].tipss}">
		                        		<em><span >${data[11][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".rx .right");//文档碎片整理优化
				//精品推荐
				var h2 = $(`<h2>${data[12][0].title}</h2>`);
				h2.appendTo(".jp .jpcontent .title");
				var ul = $(`<ul class="clearfd"></ul>`);
				for(var i = 0; i< data[12][1].length;i++){
					var li = $(`<li class="${data[12][1][i].id}" id="${data[12][1][i].set}">
							<a href="html/details.html?id=${data[12][1][i].id}7set=${data[12][1][i].set}">
								<div class="p-info">
									<p class="p-img">
										<img src="${data[12][1][i].imgpath}" alt="">
									</p>
									<p class="p-desc">${data[12][1][i].desc}</p>
								</div>
								<div class="p-title">
									${data[12][1][i].title}
								</div>
								<div class="p-price">
									${data[12][1][i].price}
								</div>
								
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".jp .showz");
				//中部banner
				var ul = $(`<ul class="mdul clearfd"></ul>`);
				for(var i = 0;i<data[13].length;i++){
					var li = $(`<li><a href=""><img src="${data[13][i].imgpath}" alt=""></a></li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".mdbanner .ls-md");//碎片整理
				//手机系列
				var h2 = $(`<h2 class="l-title">${data[14][0].title}</h2>`);
				h2.appendTo(".shop .telphone .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[14][1].length;i++){
					var li=$(`<li><a href="">${data[14][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .telphone .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .telphone .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[14][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list s-f "><a href="" class="${data[14][2][i].id}">
								<img src="${data[14][2][i].imgpath}" alt="${data[14][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[14][2][i].id}">
									<p class="p-img">
										<img src="${data[14][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[14][2][i].title}</div>
									<p class="p-desc">${data[14][2][i].desc} </p>
									<p class="p-price">${data[14][2][i].price}</p>
									<p class="p-tips ${data[14][2][i].tipss}">
		                        		<em><span >${data[14][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .telphone .b");
				//笔记本电脑系列
				var h2 = $(`<h2 class="l-title">${data[15][0].title}</h2>`);
				h2.appendTo(".shop .bjb .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[15][1].length;i++){
					var li=$(`<li><a href="">${data[15][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .bjb .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .bjb .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[15][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list s-f "><a href="" class="${data[15][2][i].id}" id="${data[15][2][i].set}">
								<img src="${data[15][2][i].imgpath}" alt="${data[15][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[15][2][i].id}" id="${data[15][2][i].set}">
									<p class="p-img">
										<img src="${data[15][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[15][2][i].title}</div>
									<p class="p-desc">${data[15][2][i].desc} </p>
									<p class="p-price">${data[15][2][i].price}</p>
									<p class="p-tips ${data[15][2][i].tipss}">
		                        		<em><span >${data[15][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .bjb .b");
				//平板系列
				var h2 = $(`<h2 class="l-title">${data[16][0].title}</h2>`);
				h2.appendTo(".shop .pb .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[16][1].length;i++){
					var li=$(`<li><a href="">${data[16][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .pb .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .pb .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[16][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list s-f "><a href="" class="${data[16][2][i].id}" id="${data[16][2][i].set}">
								<img src="${data[16][2][i].imgpath}" alt="${data[16][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[16][2][i].id}">
									<p class="p-img">
										<img src="${data[16][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[16][2][i].title}</div>
									<p class="p-desc">${data[16][2][i].desc} </p>
									<p class="p-price">${data[16][2][i].price}</p>
									<p class="p-tips ${data[16][2][i].tipss}">
		                        		<em><span >${data[16][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .pb .b");
				//智能穿戴
				var h2 = $(`<h2 class="l-title">${data[17][0].title}</h2>`);
				h2.appendTo(".shop .zncd .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[17][1].length;i++){
					var li=$(`<li><a href="">${data[17][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .zncd .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .zncd .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[17][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list  s-f-l"><a href="" class="${data[17][2][i].id}" id="${data[17][2][i].id}">
								<img src="${data[17][2][i].imgpath}" alt="${data[17][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[17][2][i].id}" id="${data[17][2][i].id}">
									<p class="p-img">
										<img src="${data[17][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[17][2][i].title}</div>
									<p class="p-desc">${data[17][2][i].desc} </p>
									<p class="p-price">${data[17][2][i].price}</p>
									<p class="p-tips ${data[17][2][i].tipss}">
		                        		<em><span >${data[17][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .zncd .b");
				//智能穿戴轮播
				var ul = $(`<ul class="clearfd sbul"></ul>`);
				for(var i = 0; i<data[18].length;i++){
					var li = $(`<li class="${data[18][i].id}">
							<a href="">
								<div class="ls-info">
									<p class="ls-img">
										<img src="${data[18][i].imgpath}" alt="">
									</p>
								</div>
								<div class="ls-title">${data[18][i].title}</div>
								<p class="ls-desc">${data[18][i].desc} </p>
								<p class="ls-price">${data[18][i].price}</p>
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".shop .zncdlb");
			
					//智能家居
				var h2 = $(`<h2 class="l-title">${data[19][0].title}</h2>`);
				h2.appendTo(".shop .znjj .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[19][1].length;i++){
					var li=$(`<li><a href="">${data[19][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .znjj .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .znjj .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[19][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list  s-f-l"><a href="" class="${data[19][2][i].id}">
								<img src="${data[19][2][i].imgpath}" alt="${data[19][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[19][2][i].id}">
									<p class="p-img">
										<img src="${data[19][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[19][2][i].title}</div>
									<p class="p-desc">${data[19][2][i].desc} </p>
									<p class="p-price">${data[19][2][i].price}</p>
									<p class="p-tips ${data[19][2][i].tipss}">
		                        		<em><span >${data[19][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .znjj .b");
				//智能家居轮播
				var ul = $(`<ul class="clearfd sbul"></ul>`);
				for(var i = 0; i<data[20].length;i++){
					var li = $(`<li class="${data[20][i].id}">
							<a href="">
								<div class="ls-info">
									<p class="ls-img">
										<img src="${data[20][i].imgpath}" alt="">
									</p>
								</div>
								<div class="ls-title">${data[20][i].title}</div>
								<p class="ls-desc">${data[20][i].desc} </p>
								<p class="ls-price">${data[20][i].price}</p>
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".shop .znjjlb");
				
					//热销配件
				var h2 = $(`<h2 class="l-title">${data[21][0].title}</h2>`);
				h2.appendTo(".shop .rxpj .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[21][1].length;i++){
					var li=$(`<li><a href="">${data[21][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .rxpj .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .rxpj .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[21][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list  s-f-l"><a href="" class="${data[21][2][i].id}">
								<img src="${data[21][2][i].imgpath}" alt="${data[21][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[21][2][i].id}">
									<p class="p-img">
										<img src="${data[21][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[21][2][i].title}</div>
									<p class="p-desc">${data[21][2][i].desc} </p>
									<p class="p-price">${data[21][2][i].price}</p>
									<p class="p-tips ${data[21][2][i].tipss}">
		                        		<em><span >${data[21][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .rxpj .b");
				//热销配件轮播
				var ul = $(`<ul class="clearfd sbul"></ul>`);
				for(var i = 0; i<data[22].length;i++){
					var li = $(`<li class="${data[22][i].id}">
							<a href="">
								<div class="ls-info">
									<p class="ls-img">
										<img src="${data[22][i].imgpath}" alt="">
									</p>
								</div>
								<div class="ls-title">${data[22][i].title}</div>
								<p class="ls-desc">${data[22][i].desc} </p>
								<p class="ls-price">${data[22][i].price}</p>
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".shop .rxpjlb");

			
				//生态精品
				var h2 = $(`<h2 class="l-title">${data[23][0].title}</h2>`);
				h2.appendTo(".shop .stjp .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[23][1].length;i++){
					var li=$(`<li><a href="">${data[23][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .stjp .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .stjp .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[23][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list  s-f-l"><a href="" class="${data[23][2][i].id}">
								<img src="${data[23][2][i].imgpath}" alt="${data[23][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[23][2][i].id}">
									<p class="p-img">
										<img src="${data[23][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[23][2][i].title}</div>
									<p class="p-desc">${data[23][2][i].desc} </p>
									<p class="p-price">${data[23][2][i].price}</p>
									<p class="p-tips ${data[23][2][i].tipss}">
		                        		<em><span >${data[23][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .stjp .b");
				//生态精品轮播
				var ul = $(`<ul class="clearfd sbul"></ul>`);
				for(var i = 0; i<data[24].length;i++){
					var li = $(`<li class="${data[24][i].id}">
							<a href="">
								<div class="ls-info">
									<p class="ls-img">
										<img src="${data[24][i].imgpath}" alt="">
									</p>
								</div>
								<div class="ls-title">${data[24][i].title}</div>
								<p class="ls-desc">${data[24][i].desc} </p>
								<p class="ls-price">${data[24][i].price}</p>
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".shop .stjplb");
				//底部banner
				var ul = $(`<ul class="mdul clearfd"></ul>`);
				for(var i = 0;i<data[25].length;i++){
					var li = $(`<li><a href=""><img src="${data[25][i].imgpath}" alt=""></a></li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".shop .mdbanner .ls-bottom");//碎片整理
				
				//精选配件
				var h2 = $(`<h2 class="l-title">${data[26][0].title}</h2>`);
				h2.appendTo(".shop .jxpj .h");
				var ul = $(`<ul class="sjnav"></ul>`);
				for(var i =0;i<data[26][1].length;i++){
					var li=$(`<li><a href="">${data[26][1][i]}</a></li>`)
					li.appendTo(ul);
				}
				ul.appendTo(".shop .jxpj .h");
				var ck = $(`<div class="look">
							<a href="html/onlylist.html">查看更多<i class="iconfont">&#xe501;</i></a>
						</div>`);
				ck.appendTo(".shop .jxpj .h");
				var ul = $(`<ul class="grid-list clearfd"></ul>`);
				for(var i =0;i<data[26][2].length;i++){
					if(i<1){
						var li = $(`<li class="s-list  s-f-l"><a href="" class="${data[26][2][i].id}">
								<img src="${data[26][2][i].imgpath}" alt="${data[26][2][i].title}">
							</a></li>`); 
					}else{
						var li = $(`<li  class="s-list">
								<a href="" class="${data[26][2][i].id}">
									<p class="p-img">
										<img src="${data[26][2][i].imgpath}" alt="">
									</p>
									<div class="p-title">${data[26][2][i].title}</div>
									<p class="p-desc">${data[26][2][i].desc} </p>
									<p class="p-price">${data[26][2][i].price}</p>
									<p class="p-tips ${data[26][2][i].tipss}">
		                        		<em><span >${data[26][2][i].tips}</span></em>
			                        </p>
			                    </a>
							</li>`);
					}
					li.appendTo(ul);
				}
				ul.appendTo(".shop .jxpj .b");
				//精选配件轮播
				var ul = $(`<ul class="clearfd sbul"></ul>`);
				for(var i = 0; i<data[27].length;i++){
					var li = $(`<li class="${data[27][i].id}">
							<a href="">
								<div class="ls-info">
									<p class="ls-img">
										<img src="${data[27][i].imgpath}" alt="">
									</p>
								</div>
								<div class="ls-title">${data[27][i].title}</div>
								<p class="ls-desc">${data[27][i].desc} </p>
								<p class="ls-price">${data[27][i].price}</p>
							</a>
						</li>`);
					li.appendTo(ul);
				}
				ul.appendTo(".shop .jxpjlb");
				// 底部大图广告
				var img = $(`<img src="${data[28][0].imgpath}" alt="">`);
				img.appendTo(".shop .bigimg a");
			},
			error: function(msg){
				console.log(msg);
			}

		})
	}
	return {
		showindex:showindex
	}	
  
});