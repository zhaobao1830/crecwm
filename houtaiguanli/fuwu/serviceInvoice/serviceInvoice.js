$(function () {
    var leftHeight=$(".left").height()
    var sinContentHeight=$(".sinContent").height()
    if(leftHeight>sinContentHeight){
        $(".sinContent").height(leftHeight)
        // 获取sregCon高度
        $(".sinCon").height(leftHeight-158)
    }else{
        $(".left").height(sinContentHeight)
    }
})