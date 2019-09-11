console.log("加载成功");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",


    },
  

})
require(["jquery"], function($){
    // 切换
    $(".c_title").on("click","a",function(){
       
        if($(this).find("span").html()=="手机号"){
            $(".telp").css("display","block");
            $(".mail").css("display","none");
            $(".c_title a").attr("id","");
            $(".c_title a:first").attr("id","red");
        }else{
            $(".mail").css("display","block");
            $(".telp").css("display","none");
            $(".c_title a").attr("id","");
            $(".c_title a:last").attr("id","red");
        
        }
    })
    //选择国家
    $(".ls-countrys").click(function(){
       $(".ls-country").toggle();
    })   
    $(".ls-country ul li").click(function(){
      
        $(".ls-c").html(  $(this).find("span").html());
        $(".ls-country").toggle();
    })
    //手机号
    
    $(".ls-telphone").click(function(){
       $(".ls-telphones").toggle();
    })   
    $(".ls-telphones ul li").click(function(){
      
        $(" .ls-tell").html( $(this).find("span").html());
        $(".ls-telphones").toggle();
    })
    $(".telc").focus(function(){
        $(".teltext").html(" ")
    })
    //验证码
     $(".yzms").focus(function(){
        $(".yzmtext").html(" ")
    })

     $(".code").html( Math.random().toString(36).substr(2,6));
       $(".scode").click(function(){
           $(".code").html( Math.random().toString(36).substr(2,6));
 
       })
 
     //密码
    
    $(".pwd").focus(function(){
        $(".pwdtext").html(" ");
     })
    //再次输入密码
    $(".repwd").focus(function(){
        $(".repwdtext").html(" ");
    })

    //年月日
    $(".year").click(function(){
        $(".l-year").toggle();
    })
    $(".year ul li ").click(function(){
        
        $(".year span:first").html($(this).find("span").html())
         $(".year").click();
    })
    //
    $(".month").click(function(){
        $(".l-mon").toggle();

    })
    $(".month ul li ").click(function(){
        
        $(".month span:first").html($(this).find("span").html())
         $(".month").click();
    })
    //
    $(".day").click(function(){
        $(".l-day").toggle();
    })
     $(".day ul li ").click(function(){
        
        $(".day span:first").html($(this).find("span").html())
         $(".day").click();
    })


    //验证
    //手机号
    $(".telc").blur(function(){
       var va =$(this).val();
       var tel=/^1[3|4|5|8|7][0-9]\d{8}$/;
       if(!tel.test(va)){
           $(".teltext").html("<span style='color:red'>请输入正确的手机号</span>") 
            $(this).val("");
        }
    })
    //验证码
      $(".yzms").blur(function(){
       var va =$(this).val();
       var code=$(".scode .code").html();
   
      if(va.toLowerCase()!=code.toLowerCase()){
           $(".yzmtext").html("<span style='color:red'>验证码输入错误</span>") 
            $(this).val("");
      }
    })
    //密码
    $(".pwd").blur(function(){
        var pwd = $(this).val();
        var x=/[a-z]/.test(pwd);
        var d = /[A-Z]/.test(pwd);
        var n = /\d/.test(pwd);

        if(x && d && n){
            if(pwd.length<6||pwd.leng>16){
               $(".pwdtext").html("<span style='color:red'>密码必须在6-16位</span>") 
            $(this).val("");  
            }
            if($(".repwd").val()!="" && $(".repwd").val()!=$(this).val()){
                   $(".pwdtext").html("<span style='color:red'>密码必须一致</span>") 
            $(this).val(""); 
            }
        }else{

           $(".pwdtext").html("<span style='color:red'>密码必须由大小写字母数字组成</span>") 
            $(this).val("");  
        }
    })
    //再次输入密码
    $(".repwd").blur(function(){
        if(!$(".pwd").val()){
            $(".repwdtext").html("<span style='color:red'>先输入密码再确认</span>") 
            $(this).val(""); 
        }
        if( $(this).val()!=$(".pwd").val()){
              $(".repwdtext").html("<span style='color:red'>密码必须一致</span>") 
            $(this).val(""); 
        }
    })

    // 提交数据库
  $(".button input").click(function(){
    $.ajax({
            url:"../admin/register.php",
            method:"post",
            data:{
                password:$(".pwd").val(),
               username:$(".telc").val(),
                repassword:$(".repwd").val(),
                ycode:$(".yzms").val(),
            },
            success:function(data){
            
            if(JSON.parse(data)["message"]=="注册成功"){
              alert("注册成功3s后到达登录页面")
              setTimeout("window.location.href='login.html'",3000);
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