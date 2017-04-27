$(function () {
    var leftHeight=$(".left").height()
    var mmlContentHeight=$(".mmlContent").height()
    if(leftHeight>mmlContentHeight){
        $(".mmlContent").height(leftHeight)
        // 获取mmlCon高度
        $(".mmlCon").height(leftHeight-158)
    }else{
        $(".left").height(mmlContentHeight)
    }
})
