$(function () {
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

