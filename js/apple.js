$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
            if(clientW<730){
                $(".header1").css("display","none");
                $(".header2").css("display","block");
                $(".btn1").css("display","block");
                $(".con ul").css("display","none");
            }else{
                $(".header1").css("display","block");
                $(".header2").css("display","none");
                $(".btn1").css("display","none");
                $(".con ul").css("display","block");
            }
    });
    $(window).resize();
    $(".menubtn").click(function(){
        $(".son").finish();
        $(".son").slideToggle(200);
    });
    //$(".btn1").click(function(){
    //    $("ul").finish();
    //    $(this).next().slideToggle(500);
    //});
    //$("")
    $(".bbtt").click(function(){
        $(this).next().slideToggle(500);
    })
    var t=setInterval(lunbo,2000);
    var num=0;
    function lunbo(){
        num++;
        //$(".box").animate({marginLeft:-num*100+"%"});
        if(num==$(".box .list").length-1){
            $(".box").finish();
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            });
            $(".dian li").eq(0).animate({border:"1px solid blue",background:"white"})
            $(".dian li").css({background:"#ccc",border:"none"});
            num=0;
        }else{
            $(".box").finish();
            $(".box").animate({marginLeft:-num*100+"%"});
            $(".dian li").css({background:"#ccc",border:"none"});
            $(".dian li").eq(num).css({border:"1px solid blue",background:"white"})
        }
    }
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(lunbo,2000);
    });
    $(".dian li").click(function(){
        var index=$(this).index();
        num=index;
        $(".dian li").css({background:"#ccc",border:"none"});
        $(this).css({border:"1px solid blue",background:"white"})
        $(".box").animate({marginLeft:-num*100+"%"});

    });
    var margin;
    touch.on(".box","dragstart",function(e){
        margin=$(".box")[0].offsetLeft;
    });

    touch.on(".box","drag",function(e){
        $(".box").css("marginLeft",margin+ e.x);
    });

    touch.on(".box","dragend",function(e){
        if(Math.abs(e.x)>300||e.factor<5){
            if(e.direction=="left"){
                num++;
                //$(".box").animate({marginLeft:-num*100+"%"});
                if(num==$(".box .list").length-1){
                    $(".box").css({marginLeft:0});
                    num=0;
                    $(".dian li").eq(num).animate({border:"1px solid blue",background:"white"})
                    $(".dian li").css({background:"#ccc",border:"none"});
                    //num=0;
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                    $(".dian li").css({background:"#ccc",border:"none"});
                    $(".dian li").eq(num).css({border:"1px solid blue",background:"white"})
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    return;
                    //num=$(".box .list").length-1;
                    $(".box").css({marginRight:0});
                    $(".dian li").eq(0).animate({border:"1px solid blue",background:"white"})
                    $(".dian li").css({background:"#ccc",border:"none"});
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                    $(".dian li").css({background:"#ccc",border:"none"});
                    $(".dian li").eq(num).css({border:"1px solid blue",background:"white"});
                }
            }
        //
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }

    });
    $(".box").mousedown(function(e){
        e.preventDefault();
    })

//ie是通过mousemove触发；
});