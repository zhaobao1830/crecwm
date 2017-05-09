$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#service").parent().addClass("liShow")
    $("#service").find("i").removeClass("iNoClick").addClass("iClick")
    $("#service").find("p").removeClass("pNoClick").addClass("pClick")
    $(".service").removeClass("displayNone").addClass("displayBlock")
    $(".serviceInvoice").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var sinContentHeight=$(".sinContent").height()
    if(leftHeight>sinContentHeight){
        $(".sinContent").height(leftHeight)
        // 获取sregCon高度
        $(".sinCon").height(leftHeight-158)
    }else{
        $(".left").height(sinContentHeight)
    }
})