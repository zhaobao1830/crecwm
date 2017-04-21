$(function () {
    var samContent_height=$(".left").height()
    // 获取samContent高度
    $(".samContent").height(samContent_height)
    // 获取samCon高度
    var samCon_height=samContent_height-158
    $(".samCon").height(samCon_height)



    //给thead tr img绑定click事件
    $("thead tr th img").on("click",function () {
        if($(this).hasClass("thiNoClick")){
            $(this).removeClass("thiNoClick").addClass("thiClick")
            $(this).attr("src","img/sau_032.png")
            $("tbody tr td img").each(function () {
                $(this).removeClass("triNoClick").addClass("triClick")
                $(this).attr("src","img/sau_042.png")
                $(this).parent().parent().addClass("trClick")
            })
        }else{
            $(this).removeClass("thiClick").addClass("thiNoClick")
            $(this).attr("src","img/sau_031.png")
            $("tbody tr td img").each(function () {
                $(this).removeClass("triClick").addClass("triNoClick")
                $(this).attr("src","img/sau_041.png")
                $(this).parent().parent().removeClass("trClick")
            })
        }
    })
    // 给tbody下的img绑定click事件，点击的时候判断，有triNoClick就添加triClick，tr背景改变
    $("tbody tr td img").on("click",function () {
        if($(this).hasClass("triNoClick")){
            $(this).removeClass("triNoClick").addClass("triClick")
            $(this).attr("src","img/sau_042.png")
            $(this).parent().parent().addClass("trClick")
        }else{
            $(this).removeClass("triClick").addClass("triNoClick")
            $(this).attr("src","img/sau_041.png")
            $(this).parent().parent().removeClass("trClick")
        }
    })

})
