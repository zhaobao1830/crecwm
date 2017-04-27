$(function () {
    var clickId //点击的元素的id
    var clickClass //点击的元素的class
    $(".left ul li div").on("click",function () {
        console.log("rr")
        // $(".left ul li").each(function () {
       // console.log($(this).siblings())
        // })
        $(this).parent().siblings().find("i").removeClass("iClick").addClass("iNoClick")
        $(this).parent().siblings().find("p").removeClass("pClick").addClass("pNoClick")
        $(this).parent().siblings().find("ul").removeClass("displayBlock").addClass("displayNone")

        clickId=$(this).attr("id")
        console.log(clickId)
        clickClass=$("."+clickId)
        console.log(clickClass)
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
