console.log("加载成功");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "showindex": "showindex", //页面展示
        "closebtn": "closebtn", //点击隐藏
        "navshow":"navshow",//导航移入显示
        "ceshow":"ceshow",//侧边栏
        "banner":"banner",//巨幅轮播
        "clutter":"clutter",//杂七杂八
        "downup":"downup", // 前进后退
        "magnify":"magnify",//放大加阴影特效哦
        "catcook":"catcook"

    },
     shim: {
        "jquery-cookie": ["jquery"],
        "parabola": {
            exports: "_"
        }
     }

})
require(["showindex","closebtn","jquery","navshow","ceshow","banner","clutter","downup","magnify","catcook"], function(showindex,closebtn,$,navshow,ceshow,banner,clutter,downup,magnify,catcook){
showindex.showindex();
//导航条划入显示
closebtn.closebtn($(".topbtn .btn"),$(".topadv .lsimg"));
navshow.showhide($(".l-sub .gd"),$(".l-hide .s-ls"));
navshow.showhide($(".l-main .kf"),$(".l-main .l-hide .hidecont"));
navshow.showhide($(".l-main .dh"),$(".l-main .wzdh"));
navshow.showhide($(".l-main .sjb"),$(".l-main .l-hide .sjb"));
navshow.showhide($(".shpcat .catshow"),$(".shpcat .cathide "));
//侧边栏js
$(".contmain ").on("mouseover", "ol", function(){
var length = $(".contmain ol").children().length;
for(var i= 0; i<length;i++){
ceshow.ceshow($(".contmain"),i);
}
})
//banner
banner.banner();
//杂七杂八的js特效
clutter.clutter();

//精品推荐点击
downup.down($(".jp .jpprev"),".jpcontent .showz ul");
downup.up($(".jp .jpnext"),".jpcontent .showz ul");
//智能穿戴轮播点击
downup.down($(".shop .zncdlb .jpprev"),".zncdlb ul",5,202);
downup.up($(".shop .zncdlb .jpnext"),".zncdlb ul",202);
//智能家居轮播点击
downup.down($(".shop .znjjlb .jpprev"),".znjjlb ul",5,202);
downup.up($(".shop .znjjlb .jpnext"),".znjjlb ul",202);
//热销配件轮播点击
downup.down($(".shop .rxpjlb .jpprev"),".rxpjlb ul",5,202);
downup.up($(".shop .rxpjlb .jpnext"),".rxpjlb ul",202);
//热销配件轮播点击
downup.down($(".shop .rxpjlb .jpprev"),".rxpjlb ul",5,202);
downup.up($(".shop .rxpjlb .jpnext"),".rxpjlb ul",202);
//生态精品轮播点击
downup.down($(".shop .stjplb .jpprev"),".stjplb ul",5,202);
downup.up($(".shop .stjplb .jpnext"),".stjplb ul",202);
//精选配件轮播点击
downup.down($(".shop .jxpjlb .jpprev"),".jxpjlb ul",5,202);
downup.up($(".shop .jxpjlb .jpnext"),".jxpjlb ul",202);
//放大奥
magnify.big($(".rxcontent .showc .left ul"),"img");
magnify.big($(".rxcontent .showc .right "),"li");
magnify.big($(".sf "),"li");
magnify.big($(".jp .showz"),".p-info");
magnify.big($(".shop  .tel .b"),"li");
catcook.catcook($(".tellist"),"li",$("#cat"),$(".mincat"),$(".mincat"),".l-num",$(".mincat"),".select",false);


})