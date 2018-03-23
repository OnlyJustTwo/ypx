$(function () { $("[data-toggle='tooltip']").tooltip(); });


var myTitle = $(".title");
var minList = $(".minList");
myTitle.click(function(){
    var num = $(this).parent().children("ul").children("li").length;
    if($(this).parent().css("height")=="30px"){
        $(this).parent().css({"height":parseInt(25*num+30)+"px","transition":"all .3s linear"});
        $(this).parent().siblings('li').css("height","30px");
    }
    else{
        $(this).parent().css({"height":"30px","transition":"all .3s linear"});
    }
})

$(".num").click(function () {
    if ($(this).css("background-color")=="rgb(249, 249, 249)"){
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
    if ($(this).css("background-color")=="rgb(245, 245, 245)"){
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
    if ($(this).css("background-color")=="rgb(245, 245, 245)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").addClass("bg-fangzi")
    }
});
$(".cntro-lg").click(function () {
    if ($(this).css("background-color")=="rgb(245, 245, 245)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".lgnum").addClass("bg-fangzi")
    }
});
$(".cntro-sm").click(function () {
    if ($(this).css("background-color")=="rgb(245, 245, 245)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".smnum").addClass("bg-fangzi")
    }
});
$(".cntro-singular").click(function () {
    if ($(this).css("background-color")=="rgb(245, 245, 245)"){
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi")
    }else{
        $(this).parents(".numk").find(".num").removeClass("bg-fangzi");
        $(this).parents(".numk").find(".singular").addClass("bg-fangzi")
    }
});
$(".cntro-plural").click(function () {
    if ($(this).css("background-color")=="rgb(245, 245, 245)"){
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
var mypay = 1;
$("[name='money']").click(function () {
    $("#myform input").css({"color":"rgb(102,102,102)","transform":"scale(1)"});
    if ($(this).css("color")=="rgb(102,102,102)"){
        $(this).css({"color":"rgb(208, 24, 74)","transform":"scale(1.1)"});
    }else {
        $(this).css({"color":"rgb(208, 24, 74)","transform":"scale(1.1)"})
    }
    for (i = 0; i < $("[name='money']").length; i++) {
        if ($(this).val() == "元") {
            mypay = parseFloat(1)
        } else if ($(this).val() == "角") {
            mypay = parseFloat(0.1)
        } else if ($(this).val() == "分") {
            mypay = parseFloat(0.01)
        } else if ($(this).val() == "厘") {
            mypay = parseFloat(0.001)
        }

    }
});
//===============================================倍数
var multiple = 1;
$("#multiple").keyup(function () {
    var value=this.value;
    var min=1;
    var max=1000;
    if(parseInt(value)<min||parseInt(value)>max){
        this.value='65536';
    }
    multiple=value
});
$("#multipleFirst").keyup(function () {
    var value=this.value;
    var min=1;
    var max=1000;
    if(parseInt(value)<min||parseInt(value)>max){
        this.value='65536';
    }
    multiple=value
});
$(".times-btn").eq(0).click(function () {
    var num=parseInt($("#multiple").val());
    if(num<=1){num=1}else {num=num-1}
    $("#multiple").val(num);
    multiple=num;
});
$(".times-btn").eq(1).click(function () {
    var num=parseInt($("#multiple").val());
    if(num>=65536){num=65536}else {num=num+1}
    $("#multiple").val(num);
    multiple=num;
});
$(".times-btn1").eq(0).click(function () {
    var num=parseInt($("#multipleFirst").val());
    if(num<=1){num=1}else {num=num-1}
    $("#multipleFirst").val(num);
    multiple=num;
});
$(".times-btn1").eq(1).click(function () {
    var num=parseInt($("#multipleFirst").val());
    if(num>=65536){num=65536}else {num=num+1}
    $("#multipleFirst").val(num);
    multiple=num;
});

//==============================================================================================清空号码
$(".clearnum").click(function () {
    $(".readybox").html("");
    $(".readybox").append("<thead>" + "<tr>\n" +
        "                                <td>" + "<h4>玩法</h4>" + "</td>\n" +
        "                                <td>" + "<h4>号码</h4>" + "</td>\n" +
        "                                <td>" + "<h4>注数</h4>" + "</td>\n" +
        "                                <td>" + "<h4>倍数</h4>" + "</td>\n" +
        "                                <td>" + "<h4>金额</h4>" + "</td>\n" +
        "                                <td>" + "</td>\n" +
        "                            </tr>" + "</thead>");
});
//==================================================================================================================购彩
var numsarray = new Array();
var readybox = new Array();
//===========================================================================添加选号
$(".btn-now").eq(1).click(function () {
    chooseball();
    if (numsarray != 0) {
        readybox.push(numsarray);
        $(".bet").text(numsarray[2].bet);
        multiple = parseInt($("#multiple").val());
        var pay = parseFloat(numsarray[2].bet) * 2 * parseFloat(mypay) * multiple;
        $(".pay").text(pay);
        var shownum = JSON.stringify(numsarray[3]);
        shownum = shownum.replace(/\{|}/g, '');
        shownum = shownum.replace(/\"|"/g, '');
        shownum = shownum.replace(/\[|]/g, '');
        console.log(numsarray);
        $(".readybox").append("<tr class='tbtr'>\n" +
            "                                <td>" + numsarray[0].topname + ":" + numsarray[1].btmname + "</td>\n" +
            "                                <td class='openbesure'>" + "<div class='award-name'>" + shownum + "</div>" + "</td>\n" +
            "                                <td>" + numsarray[2].bet + "</td>\n" +
            "                                <td>" + multiple + "</td>\n" +
            "                                <td>" + pay + "</td>\n" +
            "                                <td>" + "<button class='deleteBtn'>删除</button>"+ "</td>\n" +
            "                            </tr>");
    }
});

function chooseball() {
    numsarray = [{}, {}, {}, {}, {}, {}];
    for (i = 0; i < $(".nav-tabs>li>a").length; i++) {
        if ($(".nav-tabs>li").eq(i).hasClass("active")) {
            numsarray[0].topname = $(".nav-tabs>li").eq(i).find($("a")).text();
            for (j = 0; j < $(".tab-pane").eq(i).find($("button")).length; j++) {
                if ($(".tab-pane").eq(i).find($("button")).eq(j).hasClass("active")) {
                    numsarray[1].btmname = $(".tab-pane").eq(i).find($("button")).eq(j).text();
                    for (k = 0; k < $(".allgames").length; k++) {
                        if ($(".allgames").eq(k).css("display") == "block") {
                            //===============================================================================================================================五星
                            //==============================================五星复式
                            if (k == 0) {
                                wu(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * c * d * e);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================五星单式
                            if (k == 1) {
                                danshi($("#fivesig"), 5);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================五星组合
                            if (k == 2) {
                                wu(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * c * d * e * 5);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================五星组选120
                            if (k == 3) {
                                var zuxuan120 = [];
                                for (m = 0; m < 10; m++) {
                                    if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
                                        zuxuan120.push(m);
                                    }
                                }
                                if (zuxuan120.length < 5) {
                                    
                                    $(".num").removeClass("bg-fangzi");
                                    numsarray = []
                                } else {
                                    numsarray[3].组选120 = zuxuan120;
                                }
                                if (numsarray != 0) {
                                    var xx = parseInt(numsarray[3].组选120.length);
                                    var ans = Cnm(5, xx);
                                    numsarray[2].bet = parseInt(ans);
                                    console.log(numsarray)
                                }
                            }
                            //==============================================五星组选60
                            if (k == 4) {
                                chonghao(k, 1, 3);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (i = 0; i < numsarray[3].重号.length; i++) {
                                        for (j = 0; j < numsarray[3].单号.length; j++) {
                                            if (numsarray[3].重号[i] == numsarray[3].单号[j]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(3, parseInt(numsarray[3].单号.length));
                                    var v = Cnm(2, parseInt(numsarray[3].单号.length - 1));
                                    numsarray[2].bet = parseInt(x * y - v * samenum);
                                }
                            }
                            //==============================================五星组选30
                            if (k == 5) {
                                chonghao(k, 2, 1);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (i = 0; i < numsarray[3].重号.length; i++) {
                                        for (j = 0; j < numsarray[3].单号.length; j++) {
                                            if (numsarray[3].重号[i] == numsarray[3].单号[j]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(2, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(1, parseInt(numsarray[3].单号.length));
                                    var v = Cnm(1, parseInt(numsarray[3].重号.length - 1));
                                    numsarray[2].bet = parseInt(x * y - v * samenum);
                                }
                            }
                            //==============================================五星组选20
                            if (k == 6) {
                                chonghao(k, 1, 2);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (i = 0; i < numsarray[3].重号.length; i++) {
                                        for (j = 0; j < numsarray[3].单号.length; j++) {
                                            if (numsarray[3].重号[i] == numsarray[3].单号[j]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(2, parseInt(numsarray[3].单号.length));
                                    var v = Cnm(1, parseInt(numsarray[3].单号.length - 1));
                                    numsarray[2].bet = parseInt(x * y - v * samenum);
                                }
                            }
                            //==============================================五星组选10
                            if (k == 7) {
                                chonghao(k, 1, 1);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (i = 0; i < numsarray[3].重号.length; i++) {
                                        for (j = 0; j < numsarray[3].单号.length; j++) {
                                            if (numsarray[3].重号[i] == numsarray[3].单号[j]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(1, parseInt(numsarray[3].单号.length));
                                    numsarray[2].bet = parseInt(x * y - samenum);
                                }
                            }
                            //==============================================五星组选5
                            if (k == 8) {
                                chonghao(k, 1, 1);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (i = 0; i < numsarray[3].重号.length; i++) {
                                        for (j = 0; j < numsarray[3].单号.length; j++) {
                                            if (numsarray[3].重号[i] == numsarray[3].单号[j]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(1, parseInt(numsarray[3].单号.length));
                                    numsarray[2].bet = parseInt(x * y - samenum);
                                }
                            }
                            //==================================================================================================================================四星
                            //==============================================前四复式
                            if (k == 9) {
                                qiansi(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    numsarray[2].bet = parseInt(a * b * c * d);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前四单式
                            if (k == 10) {
                                danshi($("#qiansidan"), 4);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前四组合
                            if (k == 11) {
                                qiansi(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    numsarray[2].bet = parseInt(a * b * c * d * 4);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后四复式
                            if (k == 12) {
                                housi(k);
                                if (numsarray != 0) {
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(b * c * d * e);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后四单式
                            if (k == 13) {
                                danshi($("#housidan"), 4);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后四组合
                            if (k == 14) {
                                housi(k);
                                if (numsarray != 0) {
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(b * c * d * e * 4);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前四组选24
                            if (k == 15) {
                                var zuxuan24 = [];
                                for (m = 0; m < 10; m++) {
                                    if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
                                        zuxuan24.push(m);
                                    }
                                }
                                if (zuxuan24.length < 4) {
                                    
                                    $(".num").removeClass("bg-fangzi");
                                    numsarray = []
                                } else {
                                    numsarray[3].组选24 = zuxuan24;
                                }

                                if (numsarray != 0) {
                                    var xx = parseInt(numsarray[3].组选24.length);
                                    var ans = Cnm(4, xx);
                                    numsarray[2].bet = parseInt(ans);
                                    console.log(numsarray)
                                }
                            }
                            //==============================================前四组选12
                            if (k == 16) {
                                chonghao(k, 1, 2);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (w = 0; w < numsarray[3].重号.length; w++) {
                                        for (u = 0; u < numsarray[3].单号.length; u++) {
                                            if (numsarray[3].重号[w] == numsarray[3].单号[u]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(2, parseInt(numsarray[3].单号.length));
                                    var v = Cnm(1, parseInt(numsarray[3].单号.length - 1));
                                    numsarray[2].bet = parseInt(x * y - v * samenum);
                                }

                            }
                            //==============================================前四组选6
                            if (k == 17) {
                                var erchonghao = [];
                                for (m = 0; m < 10; m++) {
                                    if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
                                        erchonghao.push(m);
                                    }
                                }
                                if (erchonghao.length < 2) {
                                    
                                    $(".num").removeClass("bg-fangzi");
                                    numsarray = []
                                } else {
                                    numsarray[3].重号 = erchonghao;
                                }
                                if (numsarray.length != 0) {
                                    var x = Cnm(2, parseInt(numsarray[3].重号.length));
                                    numsarray[2].bet = parseInt(x);
                                }
                                console.log(numsarray)
                            }
                            //==============================================前四组选4
                            if (k == 18) {
                                chonghao(k, 1, 1);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (d = 0; d < numsarray[3].重号.length; d++) {
                                        for (c = 0; c < numsarray[3].单号.length; c++) {
                                            if (numsarray[3].重号[d] == numsarray[3].单号[c]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(1, parseInt(numsarray[3].单号.length));
                                    numsarray[2].bet = parseInt(x * y - samenum);
                                }
                            }
                            //==============================================后四组选24
                            if (k == 19) {
                                var zuxuan24 = [];
                                for (m = 0; m < 10; m++) {
                                    if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
                                        zuxuan24.push(m);
                                    }
                                }
                                if (zuxuan24.length < 4) {
                                    
                                    $(".num").removeClass("bg-fangzi");
                                    numsarray = []
                                } else {
                                    numsarray[3].组选24 = zuxuan24;
                                }
                                if (numsarray != 0) {
                                    var xx = parseInt(numsarray[3].组选24.length);
                                    var ans = Cnm(4, xx);
                                    numsarray[2].bet = parseInt(ans);
                                    console.log(numsarray)
                                }
                            }
                            //==============================================后四组选12
                            if (k == 20) {
                                chonghao(k, 1, 2);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (w = 0; w < numsarray[3].重号.length; w++) {
                                        for (u = 0; u < numsarray[3].单号.length; u++) {
                                            if (numsarray[3].重号[w] == numsarray[3].单号[u]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(2, parseInt(numsarray[3].单号.length));
                                    var v = Cnm(1, parseInt(numsarray[3].单号.length - 1));
                                    numsarray[2].bet = parseInt(x * y - v * samenum);
                                }
                            }
                            //==============================================后四组选6
                            if (k == 21) {
                                var erchonghao = [];
                                for (m = 0; m < 10; m++) {
                                    if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
                                        erchonghao.push(m);
                                    }
                                }
                                if (erchonghao.length < 2) {
                                    
                                    $(".num").removeClass("bg-fangzi");
                                    numsarray = []
                                } else {
                                    numsarray[3].重号 = erchonghao;
                                }
                                if (numsarray.length != 0) {
                                    var x = Cnm(2, parseInt(numsarray[3].重号.length));
                                    numsarray[2].bet = parseInt(x);
                                }
                                console.log(numsarray)
                            }
                            //==============================================后四组选4
                            if (k == 22) {
                                chonghao(k, 1, 1);
                                if (numsarray.length != 0) {
                                    var samenum = 0;
                                    for (d = 0; d < numsarray[3].重号.length; d++) {
                                        for (c = 0; c < numsarray[3].单号.length; c++) {
                                            if (numsarray[3].重号[d] == numsarray[3].单号[c]) {
                                                samenum++
                                            }
                                        }
                                    }
                                    var x = Cnm(1, parseInt(numsarray[3].重号.length));
                                    var y = Cnm(1, parseInt(numsarray[3].单号.length));
                                    numsarray[2].bet = parseInt(x * y - samenum);
                                }
                            }
                            //==================================================================================================================================前三
                            //==============================================前三复试
                            if (k == 23) {
                                var tenthousand = [];
                                var thousand = [];
                                var hundred = [];
                                qiansan(k, tenthousand, thousand, hundred);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    numsarray[2].bet = parseInt(a * b * c);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前三直选单式
                            if (k == 24) {
                                danshi($("#qszxdan"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前三组合
                            if (k == 25) {
                                var tenthousand = [];
                                var thousand = [];
                                var hundred = [];
                                qiansan(k, tenthousand, thousand, hundred);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    numsarray[2].bet = parseInt(a * b * c * 3);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前三和值
                            if (k == 26) {
                                sum(k, 28);
                            }
                            //==============================================前三跨度
                            if (k == 27) {
                                sandifference(k);
                            }
                            //==============================================前三组三复式
                            if (k == 28) {
                                zuxuan(k, 2);
                                if (numsarray.length != 0) {
                                    var x = Cnm(1, parseInt(numsarray[3].号码.length));
                                    var y = Cnm(1, parseInt(numsarray[3].号码.length - 1));
                                    numsarray[2].bet = parseInt(x * y);
                                }
                            }
                            //==============================================前三组三单式
                            if (k == 29) {
                                zusandan($("#qszuxdan"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前三组六复式
                            if (k == 30) {
                                zuxuan(k, 3);
                                if (numsarray.length != 0) {
                                    var a = Cnm(3, parseInt(numsarray[3].号码.length));
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================前三组六单式
                            if (k == 31) {
                                zuliudan($("#qszuldan"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前三组选混合
                            if (k == 32) {
                                zuliumix($("#zlmix"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前三组选和值
                            if (k == 33) {
                                zusansum(k, 27);
                            }
                            //==============================================前三组选包胆
                            if (k == 34) {
                                baodan(k);
                                if (numsarray.length != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(54 * a);
                                }

                            }
                            //==================================================================================================================================中三
                            //==============================================中三复试
                            if (k == 35) {
                                var thousand = [];
                                var hundred = [];
                                var tenbit = [];
                                zhongsan(k, thousand, hundred, tenbit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].千位.length);
                                    var b = parseInt(numsarray[3].百位.length);
                                    var c = parseInt(numsarray[3].十位.length);
                                    numsarray[2].bet = parseInt(a * b * c);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================中三直选单式
                            if (k == 36) {
                                danshi($("#qszxdan"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================中三组合
                            if (k == 37) {
                                var thousand = [];
                                var hundred = [];
                                var tenbit = [];
                                zhongsan(k, thousand, hundred, tenbit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].千位.length);
                                    var b = parseInt(numsarray[3].百位.length);
                                    var c = parseInt(numsarray[3].十位.length);
                                    numsarray[2].bet = parseInt(a * b * c * 3);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================中三和值
                            if (k == 38) {
                                sum(k, 28);
                            }
                            //==============================================中三跨度
                            if (k == 39) {
                                sandifference(k);
                            }
                            //==============================================中三组三复式
                            if (k == 40) {
                                zuxuan(k, 2);
                                if (numsarray.length != 0) {
                                    var x = Cnm(1, parseInt(numsarray[3].号码.length));
                                    var y = Cnm(1, parseInt(numsarray[3].号码.length - 1));
                                    numsarray[2].bet = parseInt(x * y);
                                }
                            }
                            //==============================================中三组三单式
                            if (k == 41) {
                                zusandan($("#zszuxdan"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================中三组六复式
                            if (k == 42) {
                                zuxuan(k, 3);
                                if (numsarray.length != 0) {
                                    var a = Cnm(3, parseInt(numsarray[3].号码.length));
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================中三组六单式
                            if (k == 43) {
                                zuliudan($("#zszldan"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================中三组选混合
                            if (k == 44) {
                                zuliumix($("#zsmix"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================中三组选和值
                            if (k == 45) {
                                zusansum(k, 27);
                            }
                            //==============================================中三组选包胆
                            if (k == 46) {
                                baodan(k);
                                if (numsarray.length != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(54 * a);
                                }
                            }
                            //==================================================================================================================================后三
                            //==============================================后三复试
                            if (k == 47) {
                                var hundred = [];
                                var tenbit = [];
                                var abit = [];
                                housan(k, hundred, tenbit, abit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].百位.length);
                                    var b = parseInt(numsarray[3].十位.length);
                                    var c = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * c);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后三直选单式
                            if (k == 48) {
                                danshi($("#hszxidan"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后三组合
                            if (k == 49) {
                                var hundred = [];
                                var tenbit = [];
                                var abit = [];
                                housan(k, hundred, tenbit, abit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].百位.length);
                                    var b = parseInt(numsarray[3].十位.length);
                                    var c = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * c * 3);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后三和值
                            if (k == 50) {
                                sum(k, 28);
                            }
                            //==============================================后三跨度
                            if (k == 51) {
                                sandifference(k);
                            }
                            //==============================================后三组三复式
                            if (k == 52) {
                                zuxuan(k, 2);
                                if (numsarray.length != 0) {
                                    var x = Cnm(1, parseInt(numsarray[3].号码.length));
                                    var y = Cnm(1, parseInt(numsarray[3].号码.length - 1));
                                    numsarray[2].bet = parseInt(x * y);
                                }
                            }
                            //==============================================后三组三单式
                            if (k == 53) {
                                zusandan($("#hszuxdan"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后三组六复式
                            if (k == 54) {
                                zuxuan(k, 3);
                                if (numsarray.length != 0) {
                                    var a = Cnm(3, parseInt(numsarray[3].号码.length));
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================后三组六单式
                            if (k == 55) {
                                zuliudan($("#hszuldan"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后三组选混合
                            if (k == 56) {
                                zuliumix($("#hxmix"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后三组选和值
                            if (k == 57) {
                                zusansum(k, 27);
                            }
                            //==============================================后三组选包胆
                            if (k == 58) {
                                baodan(k);
                                if (numsarray.length != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(54 * a);
                                }
                            }
                            //==============================================================================================前二
                            //==============================================前二直选复式
                            if (k == 59) {
                                //==========万位
                                var tenths = [];
                                //==========千位
                                var ths = [];
                                qianerxing(k, tenths, ths);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    numsarray[2].bet = parseInt(a * b);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================前二直选单式
                            if (k == 60) {
                                danshi($("#qtwozhi"), 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                }
                            }
                            //==============================================前二直选和值
                            if (k == 61) {
                                ersum(k, 19);
                            }
                            //==============================================前二直选跨度
                            if (k == 62) {
                                erdifference(k);
                            }
                            //==============================================前二组选复式
                            if (k == 63) {
                                zuxuan(k, 2);
                                if (numsarray.length != 0) {
                                    var a = Cnm(2, parseInt(numsarray[3].号码.length));
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================前二组选单式
                            if (k == 64) {
                                zuerdan($("#qtwozu"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                }
                            }
                            //==============================================前二组选和值
                            if (k == 65) {
                                zuersum(k, 17);
                            }
                            //==============================================前二组选包胆
                            if (k == 66) {
                                baodan(k);
                                if (numsarray.length != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(9 * a);
                                }
                            }
                            //==============================================================================================后二
                            //==============================================后二直选复式
                            if (k == 67) {
                                //==========万位
                                var tenbit = [];
                                //==========千位
                                var abit = [];
                                houerxing(k, tenbit, abit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].十位.length);
                                    var b = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //==============================================后二直选单式
                            if (k == 68) {
                                danshi($("#htwozhi"), 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                }
                            }
                            //==============================================后二直选和值
                            if (k == 69) {
                                ersum(k, 19);
                            }
                            //==============================================后二直选跨度
                            if (k == 70) {
                                erdifference(k);
                            }
                            //==============================================后二组选复式
                            if (k == 71) {
                                zuxuan(k, 2);
                                if (numsarray.length != 0) {
                                    var a = Cnm(2, parseInt(numsarray[3].号码.length));
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================后二组选单式
                            if (k == 72) {
                                zuerdan($("#htwozu"));
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                    console.log(numsarray);
                                }
                            }
                            //==============================================后二组选和值
                            if (k == 73) {
                                zuersum(k, 17);
                            }
                            //==============================================后二组选包胆
                            if (k == 74) {
                                baodan(k);
                                if (numsarray.length != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(9 * a);
                                }
                            }
                            //===========================================================================================定位胆
                            if (k == 75) {
                                wu(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a + b + c + d + e);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===========================================================================================不定胆
                            //==============================================前三一码
                            if (k == 76) {
                                yima(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================中三一码
                            if (k == 77) {
                                yima(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================后三一码
                            if (k == 78) {
                                yima(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //==============================================前三二码
                            if (k == 79) {
                                erma(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    var xx = Cnm(2, a);
                                    numsarray[2].bet = parseInt(xx);
                                }
                            }
                            //==============================================中三二码
                            if (k == 80) {
                                erma(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    var xx = Cnm(2, a);
                                    numsarray[2].bet = parseInt(xx);
                                }
                            }
                            //==============================================后三二码
                            if (k == 81) {
                                erma(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    var xx = Cnm(2, a);
                                    numsarray[2].bet = parseInt(xx);
                                }
                            }
                            //==============================================五星三码
                            if (k == 82) {
                                saCnma(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    var xx = Cnm(3, a);
                                    numsarray[2].bet = parseInt(xx);
                                }
                            }
                            //==============================================五星二码
                            if (k == 83) {
                                erma(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    var xx = Cnm(2, a);
                                    numsarray[2].bet = parseInt(xx);
                                }
                            }
                            //==============================================四星二码
                            if (k == 84) {
                                erma(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    var xx = Cnm(2, a);
                                    numsarray[2].bet = parseInt(xx);
                                }
                            }
                            //==============================================四星一码
                            if (k == 85) {
                                yima(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //=======================================================================================大小单双
                            //==============================================前二大小单双
                            if (k == 86) {
                                var tenthousand = [];
                                var thousand = [];
                                qianerdanshuang(k, tenthousand, thousand);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    numsarray[2].bet = parseInt(a * b);
                                }
                            }
                            //==============================================后二大小单双
                            if (k == 87) {
                                var tenbit = [];
                                var abit = [];
                                houerdanshuang(k, tenbit, abit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].十位.length);
                                    var b = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b);
                                }
                            }
                            //==============================================前三大小单双
                            if (k == 88) {
                                var tenthousand = [];
                                var thousand = [];
                                var hundred = [];
                                qiansandanshuang(k, tenthousand, thousand, hundred);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    numsarray[2].bet = parseInt(a * b * c);
                                }
                            }
                            //==============================================后三大小单双
                            if (k == 89) {
                                var hundred = [];
                                var tenbit = [];
                                var abit = [];
                                housandanshuang(k, hundred, tenbit, abit);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].百位.length);
                                    var b = parseInt(numsarray[3].十位.length);
                                    var c = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * c);
                                }
                            }
                            //=========================================================================================趣味
                            //===============================================特殊号
                            if (k == 90) {
                                var beforethree = [];
                                var middlethree = [];
                                var afterthree = [];
                                specialnum(k, beforethree, middlethree, afterthree);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].前三.length);
                                    var b = parseInt(numsarray[3].中三.length);
                                    var c = parseInt(numsarray[3].后三.length);
                                    numsarray[2].bet = parseInt(a + b + c);
                                }
                            }
                            //===============================================百家乐
                            if (k == 91) {
                                var zhuang = [];
                                var xian = [];
                                baijialenum(k, zhuang, xian);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].庄.length);
                                    var b = parseInt(numsarray[3].闲.length);
                                    numsarray[2].bet = parseInt(a + b);
                                }
                            }
                            //===============================================一帆风顺
                            if (k == 92) {
                                quwei(k, 1);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //===============================================好事成双
                            if (k == 93) {
                                quwei(k, 1);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //===============================================三星报喜
                            if (k == 94) {
                                quwei(k, 1);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //===============================================四季发财
                            if (k == 95) {
                                quwei(k, 1);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a);
                                }
                            }
                            //=========================================================================================龙虎斗
                            if (k == 96) {
                                longhu(k);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(a * b);
                                }
                            }
                            //===================================================================================================任二
                            //===============================================任二直选复式
                            if (k == 97) {
                                renyigame(k, 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * (b + c + d + e) + b * (c + d + e) + c * (d + e) + d * e);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任二直选单式
                            if (k == 98) {
                                renerzhidan(k, $("#rezhixdan"), 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(2, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任二直选和值
                            if (k == 99) {
                                renyisum(k, 18, 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].和值.length);
                                    numsarray[2].bet = parseInt(Cnm(2, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任二组选复式
                            if (k == 100) {
                                renyifu(k, 2, 2);
                                if (numsarray != 0) {
                                    var n = parseInt(numsarray[3].位置.length);
                                    var m = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(2, n)) * parseInt(Cnm(2, m));
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任二组选单式
                            if (k == 101) {
                                renerzudan(k, $("#rezuxdan"), 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(2, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任二组选和值
                            if (k == 102) {
                                renyizusum(k, 17, 2);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].和值.length);
                                    numsarray[2].bet = parseInt(Cnm(2, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //============================================================================================任三
                            //===============================================任三直选复式
                            if (k == 103) {
                                renyigame(k, 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * (c + d + e) + d * e * (a + b + c) + (d + e) * (a * c + b * c));
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三直选单式
                            if (k == 104) {
                                renerzhidan(k, $("#rszhixdan"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三直选和值
                            if (k == 105) {
                                renyisum(k, 27, 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].和值.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三组三复式
                            if (k == 106) {
                                renyifu(k, 2, 3);
                                if (numsarray != 0) {
                                    var n = parseInt(numsarray[3].位置.length);
                                    var m = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(3, n)) * parseInt(Cnm(2, m)) * 2;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三组三单式
                            if (k == 107) {
                                renzusandan(k, $("#rszuxdan"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三组六复式
                            if (k == 108) {
                                renyifu(k, 3, 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a)) * parseInt(Cnm(3, b));
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三组六单式
                            if (k == 109) {
                                renzuliudan(k, $("#rszuldan"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a) * b);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三混合
                            if (k == 110) {
                                rensaCnmix(k, $("#rszuxmix"), 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a) * b);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任三组选和值
                            if (k == 111) {
                                renyizusum(k, 26, 3);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].和值.length);
                                    numsarray[2].bet = parseInt(Cnm(3, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //=======================================================================================任四
                            //===============================================任四直选复式
                            if (k == 112) {
                                renyigame(k, 4);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].万位.length);
                                    var b = parseInt(numsarray[3].千位.length);
                                    var c = parseInt(numsarray[3].百位.length);
                                    var d = parseInt(numsarray[3].十位.length);
                                    var e = parseInt(numsarray[3].个位.length);
                                    numsarray[2].bet = parseInt(a * b * c * (d + e) + a * d * e * (b + c) + b * c * d * e);
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任四直选单式
                            if (k == 113) {
                                renerzhidan(k, $("#rsizhixdan"), 4);
                                if (numsarray != 0) {
                                    var a = parseInt(numsarray[3].位置.length);
                                    var b = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(4, a)) * b;
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任四组选24
                            if (k == 114) {
                                renyifu(k, 4, 4);
                                if (numsarray != 0) {
                                    var n = parseInt(numsarray[3].位置.length);
                                    var m = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(4, n)) * parseInt(Cnm(4, m));
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任四组选12
                            if (k == 115) {
                                rensishier(k);
                                if (numsarray.length != 0) {
                                    var samenum = parseInt(0);
                                    var c = parseInt(numsarray[3].位置.length);
                                    var v = parseInt(numsarray[3].重号.length);
                                    var b = parseInt(numsarray[3].单号.length);
                                    var bet = 0;
                                    for (p = 0; p < v; p++) {
                                        for (q = 0; q < b; q++) {
                                            if (parseInt(numsarray[3].重号[p]) == parseInt(numsarray[3].单号[q])) {
                                                samenum++
                                            }
                                            if (v < 3 && b < 3) {
                                                bet = parseInt(Cnm(1, v)) * parseInt(Cnm(2, b)) - samenum;
                                            } else {
                                                bet = parseInt(Cnm(1, v)) * parseInt(Cnm(2, b)) - parseInt(Cnm(1, b - 1)) * samenum;
                                            }
                                        }
                                    }
                                    console.log(samenum)
                                    numsarray[2].bet = parseInt(Cnm(4, c)) * bet;
                                }
                                console.log(numsarray[2].bet)
                            }
                            //===============================================任四组选6
                            if (k == 116) {
                                renyifu(k, 2, 4);
                                if (numsarray != 0) {
                                    var n = parseInt(numsarray[3].位置.length);
                                    var m = parseInt(numsarray[3].号码.length);
                                    numsarray[2].bet = parseInt(Cnm(4, n)) * parseInt(Cnm(2, m));
                                    console.log(numsarray[2].bet);
                                }
                            }
                            //===============================================任四组选4
                            if (k == 117) {
                                rensisi(k);
                                if (numsarray.length != 0) {
                                    var samenum = parseInt(0);
                                    var c = parseInt(numsarray[3].位置.length);
                                    var v = parseInt(numsarray[3].重号.length);
                                    var b = parseInt(numsarray[3].单号.length);
                                    var bet = 0;
                                    for (p = 0; p < v; p++) {
                                        for (q = 0; q < b; q++) {
                                            if (parseInt(numsarray[3].重号[p]) == parseInt(numsarray[3].单号[q])) {
                                                samenum++
                                            }
                                        }
                                    }
                                    bet = parseInt(v * b - samenum);
                                    numsarray[2].bet = parseInt(Cnm(4, c)) * bet;
                                }
                            }

                        }

                    }

                }
            }
        }

    }
}

//=======================================五星直选
function wu(k) {
    //==========万位
    var tenths = [];
    //==========千位
    var ths = [];
    //==========百位
    var hund = [];
    //==========十位
    var tenbt = [];
    //==========个位
    var abt = [];
    for (m = 0; m < 10; m++) {
        //==========万位
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenths.push(m);
        }
        //==========千位
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            ths.push(m);
        }
        //==========百位
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            hund.push(m);
        }
        //==========十位
        if ($(".allgames").eq(k).find($(".nums")).eq(3).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenbt.push(m);
        }
        //==========个位
        if ($(".allgames").eq(k).find($(".nums")).eq(4).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            abt.push(m);
        }
    }
    if (tenths.length == 0 || ths.length == 0 || hund.length == 0 || tenbt.length == 0 || abt.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = tenths;
        numsarray[3].千位 = ths;
        numsarray[3].百位 = hund;
        numsarray[3].十位 = tenbt;
        numsarray[3].个位 = abt;
    }
}

//=======================================单式
function danshi(k, q) {
    var yourString = k.val();
    var result = yourString.split(",");
    var shuru = true;
    var num = [];
    for (x = 0; x < result.length; x++) {
        if (result[x].length != q || result.length == 0) {
            shuru = false;
        } else {
            var a = (parseInt(result[x].substr(0, 1)));
            var b = (parseInt(result[x].substr(1, 1)));
            if (a==b){
                shuru=false;
            }else {
                num.push(parseInt(result[x]));
            }
        }
    }
    if (shuru) {
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
        k.val(null);
    }
}

//=============================五星组选
//p=重号 q=单号
function chonghao(k, p, q) {
    var chonghao = [];
    var danhao = [];
    var shuru = true;
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            chonghao.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            danhao.push(m);
        }
    }
    if (chonghao.length < p || danhao.length < q) {
        shuru = false;
    } else if (danhao.length == q && chonghao.length == p) {
        for (g = 0; g < danhao.length; g++) {
            for (u = 0; u < chonghao.length; u++) {
                if (chonghao[u] == danhao[g]) {
                    shuru = false;
                }
            }
        }
    }
    if (shuru) {
        numsarray[3].重号 = chonghao;
        numsarray[3].单号 = danhao;
    } else {
        numsarray = [];
        
    }
    console.log(numsarray)
}

//============================四星直选
//===================前四
function qiansi(k) {
    //==========万位
    var tenths = [];
    //==========千位
    var ths = [];
    //==========百位
    var hund = [];
    //==========十位
    var tenbt = [];
    for (m = 0; m < 10; m++) {
        //==========万位
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenths.push(m);
        }
        //==========千位
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            ths.push(m);
        }
        //==========百位
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            hund.push(m);
        }
        //==========十位
        if ($(".allgames").eq(k).find($(".nums")).eq(3).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenbt.push(m);
        }
    }
    if (tenths.length == 0 || ths.length == 0 || hund.length == 0 || tenbt.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = tenths;
        numsarray[3].千位 = ths;
        numsarray[3].百位 = hund;
        numsarray[3].十位 = tenbt;
    }
    console.log(numsarray)
}

//=================================后四
function housi(k) {
    //==========千位
    var ths = [];
    //==========百位
    var hund = [];
    //==========十位
    var tenbt = [];
    //==========个位
    var abt = [];
    for (m = 0; m < 10; m++) {
        //==========千位
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            ths.push(m);
        }
        //==========百位
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            hund.push(m);
        }
        //==========十位
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenbt.push(m);
        }
        //==========个位
        if ($(".allgames").eq(k).find($(".nums")).eq(3).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            abt.push(m);
        }
    }
    if (ths.length == 0 || hund.length == 0 || tenbt.length == 0 || abt.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].千位 = ths;
        numsarray[3].百位 = hund;
        numsarray[3].十位 = tenbt;
        numsarray[3].个位 = abt;
    }
    console.log(numsarray)
}

//=============================================前三
function qiansan(k, a, b, c) {
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            a.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            b.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            c.push(m);
        }
    }
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = a;
        numsarray[3].千位 = b;
        numsarray[3].百位 = c;
    }
    console.log(numsarray)
}//=============================================中三
function zhongsan(k, a, b, c) {
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            a.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            b.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            c.push(m);
        }
    }
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].千位 = a;
        numsarray[3].百位 = b;
        numsarray[3].十位 = c;
    }
    console.log(numsarray)
}//=============================================后三
function housan(k, a, b, c) {
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            a.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            b.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            c.push(m);
        }
    }
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].百位 = a;
        numsarray[3].十位 = b;
        numsarray[3].个位 = c;
    }
    console.log(numsarray)
}

//======================================前三直选和值
function sum(k, a) {
    var sum = [];
    var bets = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75, 75, 73, 69, 63, 55, 45, 36, 28, 21, 15, 10, 6, 3, 1];
    var betnum = 0;
    for (m = 0; m < a; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sum.push(m);
            betnum = betnum + parseInt(bets[m]);
        }

    }
    if (sum.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].和值 = sum;
        numsarray[2].bet = betnum;
    }
    console.log(numsarray)
}

//======================================二直选和值
function ersum(k, a) {
    var sum = [];
    var bets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var betnum = 0;
    for (m = 0; m < a; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sum.push(m);
            betnum = betnum + parseInt(bets[m]);
        }

    }
    if (sum.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].和值 = sum;
        numsarray[2].bet = betnum;
    }
    console.log(numsarray)
}

//======================================前三组选和值
function zusansum(k, a) {
    var sum = [];
    var bets = [1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15, 15, 14, 14, 13, 11, 10, 8, 6, 5, 4, 2, 2, 1];
    var betnum = 0;
    for (m = 0; m < a; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sum.push(parseInt(m) + 1);
            betnum = betnum + parseInt(bets[m]);
        }
    }
    if (sum.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].和值 = sum;
        numsarray[2].bet = betnum;
    }
    console.log(numsarray)
}

//======================================二组选和值
function zuersum(k, a) {
    var sum = [];
    var bets = [1, 1, 2, 2, 3, 3, 4, 4, 5, 4, 4, 3, 3, 2, 2, 1, 1];
    var betnum = 0;
    for (m = 0; m < a; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sum.push(parseInt(m) + 1);
            betnum = betnum + parseInt(bets[m]);
        }
    }
    if (sum.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].和值 = sum;
        numsarray[2].bet = betnum;
    }
    console.log(numsarray)
}

//=======================================前三跨度
function sandifference(k) {
    var difference = [];
    var bets = [10, 54, 96, 126, 144, 150, 144, 126, 96, 54];
    var betnum = 0;
    for (m = 0; m < 10; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            difference.push(m);
            betnum = betnum + parseInt(bets[m]);
        }
    }
    if (difference.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].跨度 = difference;
        numsarray[2].bet = betnum;
    }
    console.log(numsarray)
}

//=======================================二跨度
function erdifference(k) {
    var difference = [];
    var bets = [10, 18, 16, 14, 12, 10, 8, 6, 4, 2];
    var betnum = 0;
    for (m = 0; m < 10; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            difference.push(m);
            betnum = betnum + parseInt(bets[m]);
        }
    }
    if (difference.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].跨度 = difference;
        numsarray[2].bet = betnum;
    }
    console.log(numsarray)
}

//=======================================前三组选复式
function zuxuan(k, x) {
    var zuxuan = [];
    for (m = 0; m < 10; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            zuxuan.push(m);
        }
    }
    if (zuxuan.length < x) {
        
        numsarray = [];
    } else {
        numsarray[3].号码 = zuxuan;
    }
    console.log(numsarray)
}

//====================================前三组三单式
function zusandan(k) {
    var yourString = k.val();
    var result = yourString.split(",");
    var zusandan = [];
    var shuru = true;
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 3 || result.length == 0) {
            shuru = false;
            k.val(null);
        } else {
            var a = (parseInt(result[x].substr(0, 1)));
            var b = (parseInt(result[x].substr(1, 1)));
            var c = (parseInt(result[x].substr(2, 1)));
        }
        if (a == b  && b == c && a == c) {
            shuru = false;
            k.val(null);
        } else {
            zusandan.push(parseInt(result[x]))
        }
    }
    if (shuru) {
        numsarray[3].号码 = zusandan;
    } else {
        
        numsarray = []
    }
    console.log(numsarray);
}

//====================================前三组六单式
function zuliudan(k) {
    var yourString = k.val();
    var result = yourString.split(",");
    var zuliudan = [];
    var shuru = false;
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 3 || result.length == 0) {
            shuru = false;
            k.val(null);
        } else {
            var a = (parseInt(result[x].substr(0, 1)));
            var b = (parseInt(result[x].substr(1, 1)));
            var c = (parseInt(result[x].substr(2, 1)));
        }
        if (a == b || a == c || b == c) {
            shuru = false;
            k.val(null);
        } else {
            shuru = true;
            zuliudan.push(parseInt(result[x]))
        }
    }
    if (shuru) {
        numsarray[3].号码 = zuliudan;
    } else {
        
        numsarray = []
    }
    console.log(numsarray);
}

//====================================前三组六混合
function zuliumix(k) {
    var yourString = k.val();
    var result = yourString.split(",");
    var zuliumix = [];
    var shuru = false;
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 3 || result.length == 0) {
            shuru = false;
            k.val(null);
        } else {
            var a = (parseInt(result[x].substr(0, 1)));
            var b = (parseInt(result[x].substr(1, 1)));
            var c = (parseInt(result[x].substr(2, 1)));
        }
        if (a == b && b == c) {
            shuru = false;
            k.val(null);
        } else {
            shuru = true;
            zuliumix.push(parseInt(result[x]))
        }
    }
    if (shuru) {
        numsarray[3].号码 = zuliumix;
    } else {
        
        numsarray = []
    }
    console.log(numsarray);
}

//============================前三组选包胆
function baodan(k) {
    var num = [];
    for (m = 0; m < 10; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            num.push(m);
        }
    }
    if (num.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].号码 = num;
    }
    console.log(numsarray)
}

//=============================前二星
function qianerxing(k, a, b) {
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            a.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            b.push(m);
        }
    }
    if (a.length == 0 || b.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = a;
        numsarray[3].千位 = b;
    }
    console.log(numsarray)
}

//=============================后二星
function houerxing(k, a, b) {
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            a.push(m);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            b.push(m);
        }
    }
    if (a.length == 0 || b.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].十位 = a;
        numsarray[3].个位 = b;
    }
    console.log(numsarray)
}

//=============================组二单式
function zuerdan(k) {
    var yourString = k.val();
    var result = yourString.split(",");
    var zuerdan = [];
    var shuru = false;
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 2 || result.length == 0) {
            shuru = false;
            k.val(null);
        } else {
            var a = (parseInt(result[x].substr(0, 1)));
            var b = (parseInt(result[x].substr(1, 1)));
        }
        if (a == b) {
            shuru = false;
            k.val(null);

        } else {
            shuru = true;
            zuerdan.push(parseInt(result[x]))
        }
    }
    if (shuru) {
        numsarray[3].号码 = zuerdan;
    } else {
        
        numsarray = []
    }
    console.log(numsarray);
}

//============================================一码
function yima(k) {
    var yima = [];
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            yima.push(m);
        }
    }
    if (yima.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].号码 = yima;
    }
    console.log(numsarray)
}

//============================================二码
function erma(k) {
    var erma = [];
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            erma.push(m);
        }
    }
    if (erma.length < 2) {
        
        numsarray = [];
    } else {
        numsarray[3].号码 = erma;
    }
    console.log(numsarray)
}

//============================================三码
function saCnma(k) {
    var saCnma = [];
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            saCnma.push(m);
        }
    }
    if (saCnma.length < 3) {
        
        numsarray = [];
    } else {
        numsarray[3].号码 = saCnma;
    }
    console.log(numsarray)
}

//===========================================前二大小单双
function qianerdanshuang(k, a, b) {
    for (m = 0; m < 4; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                a.push("大");
            } else if (m == 1) {
                a.push("小");
            } else if (m == 2) {
                a.push("单");
            } else {
                a.push("双");
            }

        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                b.push("大");
            } else if (m == 1) {
                b.push("小");
            } else if (m == 2) {
                b.push("单");
            } else {
                b.push("双");
            }
        }
    }
    if (a.length == 0 || b.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = a;
        numsarray[3].千位 = b;
    }
    console.log(numsarray)
}

//===========================================后二大小单双
function houerdanshuang(k, a, b) {
    for (m = 0; m < 4; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                a.push("大");
            } else if (m == 1) {
                a.push("小");
            } else if (m == 2) {
                a.push("单");
            } else {
                a.push("双");
            }

        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                b.push("大");
            } else if (m == 1) {
                b.push("小");
            } else if (m == 2) {
                b.push("单");
            } else {
                b.push("双");
            }
        }
    }
    if (a.length == 0 || b.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].十位 = a;
        numsarray[3].个位 = b;
    }
    console.log(numsarray)
}

//===========================================前三大小单双
function qiansandanshuang(k, a, b, c) {
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                a.push("大");
            } else if (m == 1) {
                a.push("小");
            } else if (m == 2) {
                a.push("单");
            } else {
                a.push("双");
            }

        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                b.push("大");
            } else if (m == 1) {
                b.push("小");
            } else if (m == 2) {
                b.push("单");
            } else {
                b.push("双");
            }
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                c.push("大");
            } else if (m == 1) {
                c.push("小");
            } else if (m == 2) {
                c.push("单");
            } else {
                c.push("双");
            }
        }
    }
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = a;
        numsarray[3].千位 = b;
        numsarray[3].百位 = c;
    }
    console.log(numsarray)
}

//===========================================前三大小单双
function housandanshuang(k, a, b, c) {
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                a.push("大");
            } else if (m == 1) {
                a.push("小");
            } else if (m == 2) {
                a.push("单");
            } else {
                a.push("双");
            }

        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                b.push("大");
            } else if (m == 1) {
                b.push("小");
            } else if (m == 2) {
                b.push("单");
            } else {
                b.push("双");
            }
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                c.push("大");
            } else if (m == 1) {
                c.push("小");
            } else if (m == 2) {
                c.push("单");
            } else {
                c.push("双");
            }
        }
    }
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].百位 = a;
        numsarray[3].十位 = b;
        numsarray[3].个位 = c;
    }
    console.log(numsarray)
}

//============================================特殊号
function specialnum(k, a, b, c) {
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                a.push("豹子");
            } else if (m == 1) {
                a.push("顺子");
            } else if (m == 2) {
                a.push("对子");
            } else if (m == 3) {
                a.push("半顺");
            } else {
                a.push("杂六");
            }

        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                b.push("豹子");
            } else if (m == 1) {
                b.push("顺子");
            } else if (m == 2) {
                b.push("对子");
            } else if (m == 3) {
                b.push("半顺");
            } else {
                b.push("杂六");
            }
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                c.push("豹子");
            } else if (m == 1) {
                c.push("顺子");
            } else if (m == 2) {
                c.push("对子");
            } else if (m == 3) {
                c.push("半顺");
            } else {
                c.push("杂六");
            }
        }
    }
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].前三 = a;
        numsarray[3].中三 = b;
        numsarray[3].后三 = c;
    }
    console.log(numsarray)
}

//============================================百家乐
function baijialenum(k, a, b) {
    for (m = 0; m < 4; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                a.push("庄闲");
            } else if (m == 1) {
                a.push("豹子");
            } else if (m == 2) {
                a.push("对子");
            } else {
                a.push("天王");
            }

        }
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                b.push("庄闲");
            } else if (m == 1) {
                b.push("豹子");
            } else if (m == 2) {
                b.push("对子");
            } else {
                b.push("天王");
            }
        }

    }
    if (a.length == 0 && b.length == 0) {
        
        numsarray = [];
    } else {
        numsarray[3].庄 = a;
        numsarray[3].闲 = b;
    }
    console.log(numsarray)
}

//=======================================趣味3456
function quwei(k, x) {
    var quwei = [];
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            quwei.push(m);
        }
    }
    if (quwei.length < x) {
        
        numsarray = [];
    } else {
        numsarray[3].号码 = quwei;
    }
    console.log(numsarray)
}

//=======================================龙虎斗
function longhu(k) {
    var weizhi = [];
    var num = [];
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                weizhi.push("十个");
            } else if (m == 1) {
                weizhi.push("百个");
            } else if (m == 2) {
                weizhi.push("百十");
            } else if (m == 3) {
                weizhi.push("千个");
            } else if (m == 4) {
                weizhi.push("千十");
            } else if (m == 5) {
                weizhi.push("千百");
            } else if (m == 6) {
                weizhi.push("万个");
            } else if (m == 7) {
                weizhi.push("万十");
            } else if (m == 8) {
                weizhi.push("万百");
            } else {
                weizhi.push("万千");
            }
        }
    }
    for (m = 0; m < 3; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                num.push("龙");
            } else if (m == 1) {
                num.push("虎");
            } else {
                num.push("合");
            }
        }
    }
    if (longhu.length < 1 || longhu.length < 1) {
        
        numsarray = [];
    } else {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    }
    console.log(numsarray)
}

//=====================================================任二直选复式
function renyigame(k, a) {
    //==========万位
    var tenths = [];
    //==========千位
    var ths = [];
    //==========百位
    var hund = [];
    //==========十位
    var tenbt = [];
    //==========个位
    var abt = [];
    for (m = 0; m < 10; m++) {
        //==========万位
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenths.push(m);
        }
        //==========千位
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            ths.push(m);
        }
        //==========百位
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            hund.push(m);
        }
        //==========十位
        if ($(".allgames").eq(k).find($(".nums")).eq(3).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            tenbt.push(m);
        }
        //==========个位
        if ($(".allgames").eq(k).find($(".nums")).eq(4).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            abt.push(m);
        }
    }
    if ((parseInt(tenths.length) + parseInt(ths.length) + parseInt(hund.length) + parseInt(tenbt.length) + parseInt(abt.length)) < a) {
        
        numsarray = [];
    } else {
        numsarray[3].万位 = tenths;
        numsarray[3].千位 = ths;
        numsarray[3].百位 = hund;
        numsarray[3].十位 = tenbt;
        numsarray[3].个位 = abt;
    }
    console.log(numsarray)
}

//=================================================任二直选单式
function renerzhidan(k, a, b) {
    var weizhi = [];
    var num = [];
    var yourString = a.val();
    var result = yourString.split(",");
    var shuru = false;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (x = 0; x < result.length; x++) {
        if (result[x].length != b || result.length == 0) {
            shuru = false;
            a.val(null);
        } else {
            num.push(parseInt(result[x]));
            shuru = true;
        }
    }

    if (weizhi.length >= b && shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
        a.val(null);
    }
    console.log(numsarray);
}

//=================================================任二直选和值
function renyisum(k, a, b) {
    var weizhi = [];
    var sum = [];
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (m = 0; m < a; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sum.push(parseInt(m));
        }
    }

    if (sum.length != 0 && weizhi.length >= b) {
        numsarray[3].位置 = weizhi;
        numsarray[3].和值 = sum;
    } else {
        
        numsarray = [];
    }
    console.log(numsarray);
}

//=================================================任二组选复试
function renyifu(k, a, b) {
    var weizhi = [];
    var num = [];
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            num.push(parseInt(m));
        }
    }

    if (num.length >= a && weizhi.length >= b) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
    }
    console.log(numsarray);
}

//=================================================任二组选单式
function renerzudan(k, a, b) {
    var weizhi = [];
    var num = [];
    var yourString = a.val();
    var result = yourString.split(",");
    var shuru = false;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (x = 0; x < result.length; x++) {
        if (result[x].length != b || result.length == 0) {
            shuru = false;
            a.val(null);
        } else {
            var p = (parseInt(result[x].substr(0, 1)));
            var q = (parseInt(result[x].substr(1, 1)));
            num.push(parseInt(result[x]));
            shuru = true;
        }
    }

    if (q != p && weizhi.length >= b && shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
        a.val(null);
    }
    console.log(numsarray);
}

//=================================================任二组选和值
function renyizusum(k, a, b) {
    var weizhi = [];
    var sum = [];
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (m = 0; m < a; m++) {
        //==========和值
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sum.push(parseInt(m) + 1);
        }
    }

    if (sum.length != 0 && weizhi.length >= b) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
    }
    console.log(numsarray);
}

//===================================================任三组三单式
function renzusandan(k, a, b) {
    var weizhi = [];
    var num = [];
    var yourString = a.val();
    var result = yourString.split(",");
    var shuru = false;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 3 || result.length == 0) {
            shuru = false;
            a.val(null);
        } else {
            var p = (parseInt(result[x].substr(0, 1)));
            var q = (parseInt(result[x].substr(1, 1)));
            var r = (parseInt(result[x].substr(2, 1)));
            num.push(parseInt(result[x]));
            shuru = true;
        }
    }

    if ((p == q || p == r || q == r) && (!(p == q == r)) && weizhi.length >= b && shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
        a.val(null);
    }
    console.log(numsarray);
}

//===================================================任三组六单式
function renzuliudan(k, a, b) {
    var weizhi = [];
    var num = [];
    var yourString = a.val();
    var result = yourString.split(",");
    var shuru = false;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 3 || result.length == 0) {
            shuru = false;
            a.val(null);
        } else {
            var p = (parseInt(result[x].substr(0, 1)));
            var q = (parseInt(result[x].substr(1, 1)));
            var r = (parseInt(result[x].substr(2, 1)));
            num.push(parseInt(result[x]));
            shuru = true;
        }
    }

    if ((!(p == q && p == r && q == r)) && weizhi.length >= b && shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
        a.val(null);
    }
    console.log(numsarray);
}

//===================================================任三混合
function rensaCnmix(k, a, b) {
    var weizhi = [];
    var num = [];
    var yourString = a.val();
    var result = yourString.split(",");
    var shuru = false;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (x = 0; x < result.length; x++) {
        if (result[x].length != 3 || result.length == 0) {
            shuru = false;
            a.val(null);
        } else {
            var p = (parseInt(result[x].substr(0, 1)));
            var q = (parseInt(result[x].substr(1, 1)));
            var r = (parseInt(result[x].substr(2, 1)));
            num.push(parseInt(result[x]));
            shuru = true;
        }
    }

    if ((!(p == q == r)) && weizhi.length >= b && shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].号码 = num;
    } else {
        
        numsarray = [];
        a.val(null);
    }
    console.log(numsarray);
}

//===========================================================任四组选12
function rensishier(k) {
    var weizhi = [];
    var erchong = [];
    var dan = [];
    var shuru = true;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(m);
        }
    }
    for (n = 0; n < 10; n++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(n).hasClass("bg-fangzi")) {
            erchong.push(n);
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(n).hasClass("bg-fangzi")) {
            dan.push(n);
        }
    }
    if (erchong.length < 1 || dan.length < 2 || weizhi.length < 4) {
        shuru = false;
    } else if (dan.length == 1 && erchong.length == 2) {
        for (g = 0; g < dan.length; g++) {
            for (u = 0; u < erchong.length; u++) {
                if (erchong[u] == dan[g]) {
                    shuru = false;
                }
            }
        }
    }
    if (shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].重号 = erchong;
        numsarray[3].单号 = dan;
    } else {
        numsarray = [];
        
    }
    console.log(numsarray)
}

//===========================================================任四组选4
function rensisi(k) {
    var weizhi = [];
    var sanchong = [];
    var dan = [];
    var shuru = true;
    for (m = 0; m < 5; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(0).find($(".special-num")).eq(m).hasClass("bg-fangzi")) {
            if (m == 0) {
                n = "万"
            } else if (m == 1) {
                n = "千"
            } else if (m == 2) {
                n = "百"
            } else if (m == 3) {
                n = "十"
            } else {
                n = "个"
            }
            weizhi.push(n);
        }
    }
    for (m = 0; m < 10; m++) {
        if ($(".allgames").eq(k).find($(".nums")).eq(1).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            sanchong.push(parseInt(m));
        }
        if ($(".allgames").eq(k).find($(".nums")).eq(2).find($(".num")).eq(m).hasClass("bg-fangzi")) {
            dan.push(parseInt(m));
        }
    }
    if (sanchong.length < 1 || dan.length < 1 || weizhi.length < 4) {
        shuru = false;
    } else if (dan.length == 1 && sanchong.length == 1) {
        for (g = 0; g < dan.length; g++) {
            for (u = 0; u < sanchong.length; u++) {
                if (sanchong[u] == dan[g]) {
                    shuru = false;
                }
            }
        }
    }
    if (shuru) {
        numsarray[3].位置 = weizhi;
        numsarray[3].重号 = sanchong;
        numsarray[3].单号 = dan;
    } else {
        
        numsarray = [];
    }
    console.log(numsarray);
}


//===============================================================算法公式Cnm
// var ans;
function Cnm(n, m) {
    var xxxtop = [];
    var xxxbtm = [];
    var xxxnumtop;
    var xxxnumbtm;
    var xxxanstop = 1;
    var xxxansbtm = 1;
    var x = n;
    for (z = x; z > 0; z--) {
        xxxtop.push(parseInt(n));
        xxxbtm.push(parseInt(m));
        n--;
        m--;
        // console.log(0);
    }
    for (y = 0; y < xxxtop.length; y++) {
        xxxnumtop = xxxtop[y];
        xxxanstop = (parseInt(xxxanstop)) * (parseInt(xxxnumtop));
        // console.log(1);
    }
    for (s = 0; s < xxxbtm.length; s++) {
        xxxnumbtm = xxxbtm[s];
        xxxansbtm = (parseInt(xxxansbtm)) * (parseInt(xxxnumbtm));
        // console.log(2);
    }
    return parseInt(xxxansbtm / xxxanstop);
}

// console.log(Cnm(3,5));


//======================================================动态获取注数


$(".nav-tabs").click(function () {
    numsarray = [];
});
$(".btn-xx").click(function () {
    numsarray = [];
});




//===================================================中奖记录和历史开奖的切换
$(".historyBtn").click(function () {
    let i = $(this).index()
    // console.log(i)
    $(this).addClass('selectedBtn').removeClass('hisTitleBtn')
    $(this).siblings('button').addClass('hisTitleBtn').removeClass('selectedBtn')
    $(".hisgame1").eq(i).css({"display":"block"});
    $(".hisgame1").eq(i).siblings('.hisgame1').css({"display":"none"});

})
//===================================================中奖记录轮播效果
var firstUl = document.getElementById("firstUl");
var secondUl = document.getElementById("secondUl")
var speed = -25;
if(firstUl.style.marginTop==""&&secondUl.style.marginTop==""){
    firstUl.style.marginTop="0px"
    secondUl.style.marginTop="0px"
}
setInterval(moveUl,2000)
function moveUl() {
    // console.log(1);
    if (parseInt(firstUl.style.marginTop) > -125) {
        firstUl.style.marginTop = (parseInt(firstUl.style.marginTop) + speed) + "px"
        firstUl.style.transition = "all .3s linear"

    }
    else if (parseInt(firstUl.style.marginTop) == -125) {
        // console.log(2);
        firstUl.style.marginTop = "0px"
        firstUl.style.transition = "margin-top 0s linear"
    }
}
//===================================================展开跟过开奖记录
$(".openMore").click(function () {
    if($(".moreHistory").css("display")=="none"){
        // console.log(123)
        $(".moreHistory").css({"display":"block","transition":"all .3s linear"});
        $(this).children('img').css({"transform":"rotate(180deg)","transition":"all .3s linear"})
    }else {
        // console.log(1234)
        $(".moreHistory").css({"display":"none","transition":"all .3s linear"});
        $(this).children('img').css({"transform":"rotate(0deg)","transition":"all .3s linear"})
    }
})
//===================================================采购篮等切换效果
$(".recordItem").click(function () {
    let i = $(this).index();
    $(this).css({"background-color":"#2fc6ba","color":"white"});
    $(this).siblings('.recordItem').css({"background-color":"white","color":"black"})
    $(".recordText").eq(i).css({"display":"block"});
    $(".recordText").eq(i).siblings('.recordText').css({"display":"none"})
})
//===================================================投注按钮点击效果
$(".betbig").mousedown(function () {
    $(this).removeClass("betbig");
    $(this).addClass("betbigdown");
})
$(".betbig").mouseup(function () {
    $(this).removeClass("betbigdown");
    $(this).addClass("betbig");
})
$(".betsmall").mousedown(function () {
    $(this).removeClass("betsmall");
    $(this).addClass("betsmalldown");
})
$(".betsmall").mouseup(function () {
    $(this).removeClass("betsmalldown");
    $(this).addClass("betsmall");
})
//====================================================倒计时
var intDiff = parseInt(30);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
        var hour=0,
            minute=0,
            second=30,
            day=0;
        // 时间默认值
        if(intDiff > 0){
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        // $('#day_show').html(day+"天");
        $('.timeh').eq(0).html(hour.toString().substr(0,1));
        $('.timeh').eq(1).html(hour.toString().substr(1,1));
        $('.timem').eq(0).html(minute.toString().substr(0,1));
        $('.timem').eq(1).html(minute.toString().substr(1,1));
        $('.times').eq(0).html(second.toString().substr(0,1));
        $('.times').eq(1).html(second.toString().substr(1,1));
        intDiff--;
    }, 1000);
}
$(function(){
    timer(intDiff);
    startimer();
});
//======================================================================开奖转盘
function startimer() {
    window.setInterval(function () {
        var star1=$(".times")[0].innerHTML.substr(0,1);
        var star2=$(".times")[1].innerHTML.substr(0,1);
        var star=parseInt(star1+star2);
        // console.log(star)
        if (star==15){
            rotatestar()
        }
    },1000)
}
function rotatestar() {
    $("#zhuan").css({
        "opacity":"1",
        "transition":"all linear .5s"
    });
    $(".midjiang").css({
        "opacity":"1"
    });
    clear();
    smove();
    start();
    sstop();
    setTimeout(function () {
        $("#zhuan").css({
            "transition":""
        });
    },10000)
    setTimeout(function () {
        start();
        $("#zhuan").css({
            "opacity":"0",
            "transform":"rotate(20deg)",
            "transition":"all linear .5s"
        });
        $(".midjiang").css({
            "opacity":"0"
        });
        $(".countdownmain").eq(1).css({
            "margin-top":"20px",
            "transtion":"all linear .5s"
        });
    },20000)
};
function clear() {
    // $(".ballcir").eq(0).removeClass("animated bounceInRight");
    $(".ballcir").eq(1).removeClass("animated bounceInRight");
    $(".ballcir").eq(2).removeClass("animated bounceInRight");
    $(".ballcir").eq(3).removeClass("animated bounceInRight");
    $(".ballcir").eq(4).removeClass("animated bounceInRight")
}
//===================开奖球向右消失
function smove() {
    $(".countdownmain").eq(1).css({
        "margin-top":"50px",
        "transtion":"all linear .5s"
    });
    $(".ballcirbox").css({
        "transition":"all linear .5s",
        "margin-left":"0"
    });
    $(".ballcir").css({
        "transition":"all linear .5s",
        "margin-left":"400px"
    });
}
//===================开奖球向左显示
function sstop() {
    setTimeout(function () {
        $(".ballcirbox").css({
            "transition":"all linear .5s",
            "margin-left":"-400px"
        });
    },15000);
    setTimeout(function () {
        $(".ballcir").eq(0).css({
            "transition":"all linear .5s",
            "margin-left":"0"
        });
    },15000);
    setTimeout(function () {
        $(".ballcir").eq(1).css({
            "transition":"all linear .5s",
            "margin-left":"0"
        });
        $(".ballcir").eq(1).addClass("animated bounceInRight");
    },16100);
    setTimeout(function () {
        $(".ballcir").eq(2).css({
            "transition":"all linear .5s",
            "margin-left":"0"
        });
        $(".ballcir").eq(2).addClass("animated bounceInRight");
    },17200);
    setTimeout(function () {
        $(".ballcir").eq(3).css({
            "transition":"all linear .5s",
            "margin-left":"0"
        });
        $(".ballcir").eq(3).addClass("animated bounceInRight");
    },18300);
    setTimeout(function () {
        $(".ballcir").eq(4).css({
            "transition":"all linear .5s",
            "margin-left":"0"
        });
        $(".ballcir").eq(4).addClass("animated bounceInRight");
    },19400)
}
var div=document.getElementById("zhuan");
var rotateHTML5 = function (limit)
{
    var reg = /(rotate\([\-\+]?((\d+)(deg))\))/i;
    var wt = div.style['-webkit-transform'], wts = wt.match (reg);
    var $2 = RegExp.$2;
    // console.log ($2);
    div.style['-webkit-transform'] = wt.replace ($2, parseFloat (RegExp.$3) + limit + RegExp.$4);
};

var rotateIE = function (obj)
{
    var d = !!obj.d ? obj.d : 1;
    var r = d * Math.PI / 180;
    costheta = Math.cos (r);
    sintheta = Math.sin (r);
    obj.style.filter = "progid:DXImageTransform.Microsoft.Matrix()";
    var item = obj.filters.item (0);
    var width = obj.clientWidth;
    var height = obj.clientHeight;
    item.DX = -width / 2 * costheta + height / 2 * sintheta + width / 2;
    item.DY = -width / 2 * sintheta - height / 2 * costheta + height / 2;
    item.M11 = costheta;
    item.M12 = -sintheta;
    item.M21 = sintheta;
    item.M22 = costheta;
    obj.timer = setTimeout (function ()
    {
        var dx = d + 1;
        dx = dx > 360 ? 1 : dx;
        obj.d = dx;
        rotate (obj, dx);
    }, 30);
};

var start = function ()
{
    if (!!div.interval)
    {
        clearInterval (div.interval);
        delete div.interval;
    }
    else
    {
        div.interval = setInterval (function ()
        {
            /.*webkit.*/i.test (navigator.userAgent) ? rotateHTML5 (3) : rotateIE (div);
        }, 1);
    }
};
//菜单的显示隐藏
$(".isShowBtn").click(function () {
    $("#bigList").css({"margin-left":"-200px","transition":"all .3s linear"})
    $("#smallList").css({"left":"1px","transition":"all .3s linear"})
})
$("#smallList").click(function () {
    $("#bigList").css({"margin-left":"0px","transition":"all .3s linear"})
    $("#smallList").css({"left":"-100px","transition":"all .3s linear"})
})
//=================绑定事件实时获取注数
function shishi() {
    chooseball();
    if (numsarray.length!=0){
        $(".otherText").eq(0).html(parseInt(numsarray[2].bet));
        $(".otherText").eq(1).html(parseInt(numsarray[2].bet)* 2 * parseFloat(mypay) * multiple)
    }else{
        $(".otherText").eq(0).html(0);
        $(".otherText").eq(1).html(0)
    }
}
$(".num").bind("click",function(){
    shishi()
});
$(".num-btn").bind("click",function(){
    shishi()
});
$(".num-btn").bind("click",function(){
    shishi()
});
$("textarea").bind("keypress",function(){
    shishi()
});
$("#multiple").bind("keyup",function(){
    shishi()
});
$(".times-btn").bind("click",function(){
    shishi()
});
$("[name='money']").bind("keydown",function(){
    shishi();
});