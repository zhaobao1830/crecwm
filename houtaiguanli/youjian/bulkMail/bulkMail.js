$(function () {
    var leftHeight=$(".left").height()
    var blmConentHeight=$(".blmConent").height()
    if(leftHeight>blmConentHeight){
        $(".blmConent").height(leftHeight)
        // 获取blmCon高度
        $(".blmCon").height(leftHeight-158)
    }else{
        $(".left").height(blmConentHeight)
    }
})
