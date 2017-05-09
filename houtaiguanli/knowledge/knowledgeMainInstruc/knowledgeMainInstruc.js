$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#knowledgeBase").parent().addClass("liShow")
    $("#knowledgeBase").find("i").removeClass("iNoClick").addClass("iClick")
    $("#knowledgeBase").find("p").removeClass("pNoClick").addClass("pClick")
    $(".knowledgeBase").removeClass("displayNone").addClass("displayBlock")
    $(".knowledgeMainInstruc").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var kmisContentHeight=$(".kmisContent").height()
    if(leftHeight>kmisContentHeight){
        $(".kdmContent").height(leftHeight)
        // 获取kmisCon高度
        $(".kmisCon").height(leftHeight-158)
    }else{
        $(".left").height(kmisContentHeight)
    }
})

