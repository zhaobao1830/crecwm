$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#information").parent().addClass("liShow")
    $("#information").find("i").removeClass("iNoClick").addClass("iClick")
    $("#information").find("p").removeClass("pNoClick").addClass("pClick")
    $(".information").removeClass("displayNone").addClass("displayBlock")
    $(".InformationDisplay").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var inDisContentHeight=$(".inDisContent").height()
    if(leftHeight>inDisContentHeight){
        $(".inDisContent").height(leftHeight)
        // 获取inDisCon高度
        $(".inDisCon").height(leftHeight-158)
    }else{
        $(".left").height(inDisContentHeight)
    }
})