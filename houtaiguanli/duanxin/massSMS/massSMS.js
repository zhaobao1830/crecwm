$(function () {
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