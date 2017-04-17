$(function () {
    var clickId //点击的元素的id
    var clickClass //点击的元素的class
    $(".management").on("click",function () {
        console.log("tt")
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
