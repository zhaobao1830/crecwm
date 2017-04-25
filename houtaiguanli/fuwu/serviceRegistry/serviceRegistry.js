$(function () {
    var leftHeight=$(".left").height()
    var sregContentHeight=$(".sregContent").height()
    if(leftHeight>sregContentHeight){
        $(".sregContent").height(leftHeight)
        // 获取sregCon高度
        $(".sregCon").height(leftHeight-158)
    }else{
        $(".left").height(sregContentHeight)
    }


    //给thead tr img绑定click事件
    $("thead tr th img").on("click",function () {
        if($(this).hasClass("thiNoClick")){
            $(this).removeClass("thiNoClick")
            $(this).attr("src","img/sre_032.png")
            $("tbody tr td img").each(function () {
                $(this).removeClass("triNoClick")
                $(this).attr("src","img/sre_042.png")
                $(this).parent().parent().addClass("trClick")
            })
        }else{
            $(this).addClass("thiNoClick")
            $(this).attr("src","img/sre_031.png")
            $("tbody tr td img").each(function () {
                $(this).addClass("triNoClick")
                $(this).attr("src","img/sre_041.png")
                $(this).parent().parent().removeClass("trClick")
            })
        }
    })
    // 给tbody下的img绑定click事件，点击的时候判断，有triNoClick就添加triClick，tr背景改变
    $("tbody tr td img").on("click",function () {
        if($(this).hasClass("triNoClick")){
            $(this).removeClass("triNoClick")
            $(this).attr("src","img/sre_042.png")
            $(this).parent().parent().addClass("trClick")
        }else{
            $(this).addClass("triNoClick")
            $(this).attr("src","img/sre_041.png")
            $(this).parent().parent().removeClass("trClick")

            $("thead tr th img").addClass("thiNoClick")
            $("thead tr th img").attr("src","img/srq_031.png")
        }
    })

})

//开启添加框
function addShow() {
    $(".add_con").removeClass("displayNone").addClass("displayBlock")
}
//关闭添加框
function addClose() {
    $(".add_con").removeClass("displayBlock").addClass("displayNone")
}