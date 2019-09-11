console.log("加载成功");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "navshow":"navshow",//导航条js
        "catcook":"catcook"
    },
     shim: {
        "jquery-cookie": ["jquery"],
        "parabola": {
			exports: "_"
		}
   	 }
    
   
})
require(["jquery","navshow","catcook"], function($,navshow,catcook){

navshow.showhide($(".l-sub .gd"),$(".l-hide .s-ls"));
navshow.showhide($(".l-main .kf"),$(".l-main .l-hide .hidecont"));
navshow.showhide($(".l-main .dh"),$(".l-main .wzdh"));
navshow.showhide($(".l-main .sjb"),$(".l-main .l-hide .sjb"));
navshow.showhide($(".shpcat .catshow"),$(".shpcat .cathide "));

catcook.catcook($(".tellist"),"li",$("#cat"),$(".mincat"),$(".mincat"),".l-num",$(".mincat"),".select",true,true);
})