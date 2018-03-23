

$(".num").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
          $(this).addClass("bg-fangzi")
    }else {
            $(this).removeClass("bg-fangzi");
            // $(this).addClass("bg-wite")

    }
});



$(".leftlist").mouseover(function () {
    a=parseInt($(".leftbox").css("left"))+parseInt($(".leftbox").css("width"));
    b=parseInt($(".leftlogo").css("height"))+parseInt($(".lefttop").css("height"));
    c=parseInt($(".leftlist").css("height"));
    d=parseInt($(this).index())-2;
    $(".leftlit").css("margin-left",a-30+"px");
    $(".litlist").eq(d).css("margin-top",b+c*d+"px");
    $(".litlist").eq(d).css("display","block");
    $(".litlist").eq(d).find($("span")).addClass("animated flipInX");
    $(this).css("color","#F8C046");
    $(this).mouseout(function () {
        $(this).css("color","white");
        $(".litlist").eq(d).css("display","none");
        $(".litlist").eq(d).find($("span")).removeClass("animated flipInX");
    })
});
$(".litlist").mouseover(function () {
    $(this).css("display","block");
    $(this).mouseout(function () {
        $(this).css("display","none");
    })
});



$(".righthide").click(function () {
    if (parseInt($(".allrnavli").css("height"))==280){
       $(".allrnavli").css({"height":"0","transition":"all .5s linear"});
       $(this).css("transform","rotate(180deg)")
    }else {
        $(".allrnavli").css({"height":"280px","transition":"all .5s linear"})
        $(this).css("transform","rotate(0deg)")
    }
});






$(".btn-xx").click(function () {
    $(".num").removeClass("bg-fangzi");
});
$(".nav-tabs").find("li").click(function () {
    $(".num").removeClass("bg-fangzi");
});


$(".num-btn").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).parents(".numk").find(".num-btn").removeClass("bg-zi");
        $(this).addClass("bg-zi")
    }else {
        $(this).removeClass("bg-zi");
    }
});
$(".special-num").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).addClass("bg-zi")
    }else {
        $(this).removeClass("bg-zi");
    }
});
$(".cntro-all").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").addClass("bg-fangzi")
    }
});
$(".cntro-lg").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".lgnum").addClass("bg-fangzi")
    }
});
$(".cntro-sm").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".smnum").addClass("bg-fangzi")
    }
});
$(".cntro-singular").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".singular").addClass("bg-fangzi")
    }
});
$(".cntro-plural").click(function () {
    if ($(this).css("background-color")=="rgb(188, 188, 188)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".plural").addClass("bg-fangzi")
    }
});
$(".cntro-clear").click(function () {
    $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
});


var  newbuy=new Array();
$(function () {
    $(".btn-xx").click(function () {
        $(".allgames").css("display","none");
        $(".groupone").eq($(this).index()).css("display","block");
    });
    $(".tab-pane>.btn-xx").click(function () {
        $(this).parents(".tab-pane").find(".btn-xx").removeClass("active");
        $(this).addClass("active")
    });
    $(".one").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(0).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#wuxing .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupone").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".wuxingwords").css("display","block");
    });

    $(".two").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(1).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#sixing .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".grouptwo").eq($(this).index()).css("display","block");

        });
        $(".twords").css("display","none");
        $(".sixingwords").css("display","block");
    });

    $(".three").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(2).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#qiansan .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupthree").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".qiansanwords").css("display","block");
    });

    $(".four").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(3).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#zhongsan .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupfour").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".zhongsanwords").css("display","block");
    });

    $(".five").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(4).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#housan .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupfive").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".housanwords").css("display","block");
    });

    $(".six").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(5).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#erxing .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupsix").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".erxingwords").css("display","block");
    });

    $(".seven").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(6).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#dingwei .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupseven").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".dingweiwords").css("display","block");
    });
    $(".eight").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(7).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#buding .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupeight").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".budingwords").css("display","block");
    });
    $(".nine").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(8).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#daxiao .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupnine").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".daxiaowords").css("display","block");
    });
    $(".ten").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(9).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#quwei .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupten").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".quweiwords").css("display","block");
    });
    $(".eleven").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(10).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#longhu .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupeleven").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".longhuwords").css("display","block");
    });
    $(".twelve").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(11).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#rener .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".grouptwelve").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".renerwords").css("display","block");
    });
    $(".thirteen").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(12).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#rensan .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupthirteen").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".rensanwords").css("display","block");
    });
    $(".fourteen").click(function () {
        $(".allgames").css("display","none");
        $(".teamone").eq(13).css("display","block");
        $(".btn-xx").removeClass("active");
        $("#rensi .btn-xx").eq(0).addClass("active");
        $(".btn-xx").click(function () {
            $(".allgames").css("display","none");
            $(".groupfourteen").eq($(this).index()).css("display","block");
        });
        $(".twords").css("display","none");
        $(".rensiwords").css("display","block");
    });
});
//================================================奖金返点
$("#trackBar").mouseup(function () {
    console.log($("#trackBar").val())
});
//================================================元角分厘
$("#myform input").click(function () {
    // alert($("#myform input").css("color"))
    // rgb(210, 43, 78)
    $("#myform input").css("color","rgb(238,178,63)");
    if ($(this).css("color")=="rgb(238,178,63)"){
        $(this).css("color","rgb(210, 43, 78)");
    }else {
        $(this).css("color","rgb(210, 43, 78)")
    }
});
//===============================================倍数
$("#multiple").blur(function () {
    var value=this.value;
    var min=1;
    var max=1000;
    if(parseInt(value)<min||parseInt(value)>max){
        this.value='65536';
    }
});
$(".times-btn").eq(0).click(function () {
    var num=parseInt($("#multiple").val());
    if(num<=1){num=1}else {num=num-1}
    $("#multiple").val(num);
});
$(".times-btn").eq(1).click(function () {
    var num=parseInt($("#multiple").val());
    if(num>=65536){num=65536}else {num=num+1}
    $("#multiple").val(num);
});

//==============================================购彩
var numsarray=new Array();

$(".btn-now").eq(0).click(function () {
     for(i=0;i<$(".nav-tabs>li>a").length;i++){
         if ($(".nav-tabs>li").eq(i).hasClass("active")){
             numsarray.push({topname:$(".nav-tabs>li").eq(i).find($("a")).text()});
             // console.log($(".tab-pane").eq(i))
             for(j=0;j<$(".tab-pane").eq(i).find($("button")).length;j++){
                 if ($(".tab-pane").eq(i).find($("button")).eq(j).hasClass("active")){
                     // console.log($(".tab-pane").eq(i).find($("button")).eq(j).text())
                     numsarray.push({btmname:$(".tab-pane").eq(i).find($("button")).eq(j).text()});
                     // console.log(numsarray)
                     for (k=0;k<$(".allgames").length;k++){
                         // console.log($(".allgames").eq(k).css("display"))
                         if ($(".allgames").eq(k).css("display")=="block"){
                             //==============================================五星复式
                             if (k==0){

                             }
                         }
                     }

                 }
             }
         }

     }
});

$(".nav-tabs").click(function () {
    numsarray=[];
});
$(".btn-xx").click(function () {
    numsarray=[];
});
