console.log("加载成功");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "navshow":"navshow",//导航条js
        "deshow":"deshow",//页面展示
        "urlvalue":"urlvalue",//获取url 中携带的值
        "big":"big",//放大 数量增加 样式的选择
        "downup":"downup",
        "deimg":"deimg",
        "catcook":"catcook"
    },
     shim: {
        "jquery-cookie": ["jquery"],
        "parabola": {
			exports: "_"
		}
   	 }
    
   
})
require(["jquery","navshow","deshow","big","downup","deimg","catcook"], function($,navshow,deshow,big,downup,deimg,catcook){

navshow.showhide($(".l-sub .gd"),$(".l-hide .s-ls"));
navshow.showhide($(".l-main .kf"),$(".l-main .l-hide .hidecont"));
navshow.showhide($(".l-main .dh"),$(".l-main .wzdh"));
navshow.showhide($(".l-main .sjb"),$(".l-main .l-hide .sjb"));
navshow.showhide($(".shpcat .catshow"),$(".shpcat .cathide "));
deshow.deshow();
big.big();
big.num();
downup.down($(".btimg .back"),".content .left .btimg .ulimg ul",4,74);
downup.up($(".btimg .forward"),".content .left .btimg .ulimg ul",74);
deimg.deimg();
catcook.catcook($(".tellist"),"li",$("#cat"),$(".mincat"),$(".mincat"),".l-num",$(".mincat"),".select");

})
