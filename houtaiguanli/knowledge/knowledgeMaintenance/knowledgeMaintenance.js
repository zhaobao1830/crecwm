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
    $(".knowledgeMaintenance").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var kdmContentHeight=$(".kdmContent").height()
    if(leftHeight>kdmContentHeight){
        $(".kdmContent").height(leftHeight)
        // 获取kdmCon高度
        $(".kdmCon").height(leftHeight-158)
    }else{
        $(".left").height(kdmContentHeight)
    }

    $(".kdmMaDele").on("mouseover mouseout",function(event){
        if(event.type =="mouseover"){
            //鼠标悬浮
            $(this).find("img").attr("src","img/km11.png")
        }else if(event.type =="mouseout"){
            //鼠标离开
            $(this).find("img").attr("src","img/km12.png")
        }
    })
})

