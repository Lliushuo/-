console.log("加载成功");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "listshow":"listshow", //页面展示加一些js特效
        "listselect":"listselect",
        "navshow":"navshow",
        "listsort":"listsort",
        "catcook":"catcook"
    },
    shim: {
        "jquery-cookie": ["jquery"],
        "parabola": {
			exports: "_"
		}
     }
   
})
require(["jquery","listshow","listselect","navshow","listsort","catcook"], function($,listshow,listselect,navshow,listsort,catcook){
listshow.listshow();
navshow.showhide($(".l-sub .gd"),$(".l-hide .s-ls"));
navshow.showhide($(".l-main .kf"),$(".l-main .l-hide .hidecont"));
navshow.showhide($(".l-main .dh"),$(".l-main .wzdh"));
navshow.showhide($(".l-main .sjb"),$(".l-main .l-hide .sjb"));
navshow.showhide($(".shpcat .catshow"),$(".shpcat .cathide"));
listselect.listselect();
listsort.listsort();
//购物车相关
catcook.catcook($(".tellist"),"li",$("#cat"),$(".mincat"),$(".mincat"),".l-num",$(".mincat"),".select");

})
