$(function () {
    var leftHeight=$(".left").height()
    var inDisContentHeight=$(".inDisContent").height()
    if(leftHeight>inDisContentHeight){
        $(".inDisContent").height(leftHeight)
        // 获取inDisCon高度
        $(".inDisCon").height(leftHeight-158)
    }else{
        $(".left").height(inDisContentHeight)
    }
})