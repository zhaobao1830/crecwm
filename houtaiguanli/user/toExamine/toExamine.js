$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#userManagement").parent().addClass("liShow")
    $("#userManagement").find("i").removeClass("iNoClick").addClass("iClick")
    $("#userManagement").find("p").removeClass("pNoClick").addClass("pClick")
    $(".userManagement").removeClass("displayNone").addClass("displayBlock")
    $(".toExamine").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var toExamineContentHeight=$(".toExamineContent").height()
    if(leftHeight>toExamineContentHeight){
        $(".toExamineContent").height(leftHeight)
        // 获取samCon高度
        $(".toExamineCon").height(leftHeight-158)
    }else{
        $(".left").height(toExamineContentHeight)
    }


    //给thead tr img绑定click事件
    $("thead tr th img").on("click",function () {
        if($(this).hasClass("thiNoClick")){
            $(this).removeClass("thiNoClick")
            $(this).attr("src","img/toe_032.png")
            $("tbody tr td img").each(function () {
                $(this).removeClass("triNoClick")
                $(this).attr("src","img/toe_042.png")
                $(this).parent().parent().addClass("trClick")
            })
        }else{
            $(this).addClass("thiNoClick")
            $(this).attr("src","img/toe_031.png")
            $("tbody tr td img").each(function () {
                $(this).addClass("triNoClick")
                $(this).attr("src","img/toe_041.png")
                $(this).parent().parent().removeClass("trClick")
            })
        }
    })
    // 给tbody下的img绑定click事件，点击的时候判断，有triNoClick就添加triClick，tr背景改变
    $("tbody tr td img").on("click",function () {
        if($(this).hasClass("triNoClick")){
            $(this).removeClass("triNoClick")
            $(this).attr("src","img/toe_042.png")
            $(this).parent().parent().addClass("trClick")
        }else{
            $(this).addClass("triNoClick")
            $(this).attr("src","img/toe_041.png")
            $(this).parent().parent().removeClass("trClick")

            $("thead tr th img").addClass("thiNoClick")
            $("thead tr th img").attr("src","img/toe_031.png")
        }
    })

})
