console.log("加载成功");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",


    },
  

})
require(["jquery"], function($){
    // 切换
    $(".title").on("click","span",function(){
        var a =$(this).html();
        if(a=="账号登录"){
         
         $(".linput").css({
            "display":"block"
         });
          $(".sm").css({
            "display":"none"
         });
        }else{
            $(".sm").css({
            "display":"block"
            });
              $(".linput").css({
            "display":"none"
         });
        }
    })

  
    $(".linput .button ").click(function(){
    
        $.ajax({
            url:"../admin/login.php",
            method:"post",
            data:{
                username:$(".username").val(),
                password:$(".password").val()
            },
            success:function(data){
                  if(JSON.parse(data)["message"]=="登录成功"){
                      alert("登录成功3s后到达战场");
                       setTimeout("window.location.href='../index.html'",3000);

                  }else{
                    alert(JSON.parse(data)["message"]);
                  }
              
            
            },
            error:function(msg){
                console.log(msg);
            }

        })
    })
       
  

})