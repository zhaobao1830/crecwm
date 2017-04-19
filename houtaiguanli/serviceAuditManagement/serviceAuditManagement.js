$(function () {
    //给thead tr i绑定click事件
    $("thead tr i").on("click",function () {
        if($(this).hasClass("thiNoClick")){
            $(this).removeClass("thiNoClick").addClass("thiClick")
            $("tbody tr td i").each(function () {
                $(this).removeClass("triNoClick").addClass("triClick")
                $(this).parent().parent().addClass("trClick")
            })
        }else{
            $(this).removeClass("thiClick").addClass("thiNoClick")
            $("tbody tr td i").each(function () {
                $(this).removeClass("triClick").addClass("triNoClick")
                $(this).parent().parent().removeClass("trClick")
            })
        }
    })
    // 给tbody下的i绑定click事件，点击的时候判断，有triNoClick就添加triClick，tr背景改变
    $("tbody tr td i").on("click",function () {
        if($(this).hasClass("triNoClick")){
            $(this).removeClass("triNoClick").addClass("triClick")
            $(this).parent().parent().addClass("trClick")
        }else{
            $(this).removeClass("triClick").addClass("triNoClick")
            $(this).parent().parent().removeClass("trClick")
        }
    })
})
