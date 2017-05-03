$(function () {
    var leftHeight=$(".left").height()
    var kdsContentHeight=$(".kdsContent").height()
    if(leftHeight>kdsContentHeight){
        $(".kdsContent").height(leftHeight)
        // 获取kdsCon高度
        $(".kdsCon").height(leftHeight-158)
    }else{
        $(".left").height(kdsContentHeight)
    }
})


