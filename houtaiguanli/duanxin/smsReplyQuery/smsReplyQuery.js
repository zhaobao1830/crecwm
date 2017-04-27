$(function () {
    var leftHeight=$(".left").height()
    var smsContentHeight=$(".smsContent").height()
    if(leftHeight>smsContentHeight){
        $(".smsContent").height(leftHeight)
        // 获取srqCon高度
        $(".smsCon").height(leftHeight-158)
    }else{
        $(".left").height(smsContentHeight)
    }
})
