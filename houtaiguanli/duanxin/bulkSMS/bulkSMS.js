$(function () {
    var leftHeight=$(".left").height()
    var bulkSmsContentHeight=$(".bulkSmsContent").height()
    if(leftHeight>bulkSmsContentHeight){
        $(".bulkSmsContent").height(leftHeight)
        // 获取bulkSmsCon高度
        $(".bulkSmsCon").height(leftHeight-158)
    }else{
        $(".left").height(bulkSmsContentHeight)
    }
})