$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#mailServe").parent().addClass("liShow")
    $("#mailServe").find("i").removeClass("iNoClick").addClass("iClick")
    $("#mailServe").find("p").removeClass("pNoClick").addClass("pClick")
    $(".mailServe").removeClass("displayNone").addClass("displayBlock")
    $(".sendRecordQuery").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var srqContentHeight=$(".srqContent").height()
    if(leftHeight>srqContentHeight){
        $(".srqContent").height(leftHeight)
        // 获取srqCon高度
        $(".srqCon").height(leftHeight-158)
    }else{
        $(".left").height(srqContentHeight)
    }
})