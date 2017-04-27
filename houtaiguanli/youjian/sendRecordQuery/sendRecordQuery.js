$(function () {
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