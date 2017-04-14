$(function () {
    var clickId //点击的元素的id
    var clickClass //点击的元素的class
    $(".management").on("click",function () {
        clickId=$(this).attr("id")
        clickClass=$("."+clickId)
        if(clickClass.hasClass("displayNone")){
            clickClass.removeClass("displayNone").addClass("displayBlock")
        }else{
            clickClass.removeClass("displayBlock").addClass("displayNone")
        }
    })
})
