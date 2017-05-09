$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#shortMessage").parent().addClass("liShow")
    $("#shortMessage").find("i").removeClass("iNoClick").addClass("iClick")
    $("#shortMessage").find("p").removeClass("pNoClick").addClass("pClick")
    $(".shortMessage").removeClass("displayNone").addClass("displayBlock")
    $(".smsSendDetails").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var ssdContentHeight=$(".ssdContent").height()
    if(leftHeight>ssdContentHeight){
        $(".ssdContent").height(leftHeight)
        // 获取ssdCon高度
        $(".ssdCon").height(leftHeight-158)
    }else{
        $(".left").height(ssdContentHeight)
    }
})
