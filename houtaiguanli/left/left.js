$(function () {
    var clickId //点击的元素的id
    var clickClass //点击的元素的class
    $(".left ul li div").on("click",function () {
        //每个打开的页面里面，都会给left ul li定义一个liShow，这样，在点击其他li里的div时，
        //打开的这个li就不会关闭
        $(".liShow").siblings().find("i").removeClass("iClick").addClass("iNoClick")
        $(".liShow").siblings().find("p").removeClass("pClick").addClass("pNoClick")
        $(".liShow").siblings().find("ul").removeClass("displayBlock").addClass("displayNone")

        clickId=$(this).attr("id")
        clickClass=$("."+clickId)
        if(clickClass.hasClass("displayNone")){
            $(this).find("i").removeClass("iNoClick").addClass("iClick")
            $(this).find("p").removeClass("pNoClick").addClass("pClick")
            clickClass.removeClass("displayNone").addClass("displayBlock")
        }else{
            $(this).find("i").removeClass("iClick").addClass("iNoClick")
            $(this).find("p").removeClass("pClick").addClass("pNoClick")
            clickClass.removeClass("displayBlock").addClass("displayNone")
        }
    })
})
