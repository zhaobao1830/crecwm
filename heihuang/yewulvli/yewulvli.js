$(function () {
    choice_click()
})


//con-choice ul li点击的时候，改变css，并向后台发送请求
function choice_click() {
    $(".con-choice ul li").on("click",function () {
        $(this).addClass("liClick");
        $(this).siblings().removeClass("liClick")
    })
}
