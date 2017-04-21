$(function () {
    var sregContent_height=$(".left").height()
    // 获取sregContent高度
    $(".sregContent").height(sregContent_height)
    // 获取sregCon高度
    var sregCon_height=sregContent_height-158
    $(".sregCon").height(sregCon_height)



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
            $(this).removeClass("thiClick")
            $(this).attr("src","img/sre_031.png")
            $("tbody tr td img").each(function () {
                $(this).removeClass("triClick")
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
            $(this).removeClass("triClick")
            $(this).attr("src","img/sre_041.png")
            $(this).parent().parent().removeClass("trClick")
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