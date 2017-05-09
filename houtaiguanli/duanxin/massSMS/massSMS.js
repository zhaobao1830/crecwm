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
    $(".massSMS").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var massSmsContentHeight=$(".massSmsContent").height()
    if(leftHeight>massSmsContentHeight){
        $(".massSmsContent").height(leftHeight)
        // 获取massSmsCon高度
        $(".massSmsCon").height(leftHeight-158)
    }else{
        $(".left").height(massSmsContentHeight)
    }
})