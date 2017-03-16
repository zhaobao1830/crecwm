/**
 * Created by zb on 2017/2/23.
 */
$(function () {
    $(".ri_nav ul li").on("click",function () {
        if(!$(this).hasClass("liClick")){
            $(this).siblings().removeClass("liClick")
            $(this).addClass("liClick")

            //点击不包含liClick的，触发相应方法
        }
    })
})