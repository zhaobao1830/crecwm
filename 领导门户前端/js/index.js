$(function(){
    $(".toptit").click(function(){
        $(this).parent().toggleClass("sublistShow")
        $(this).find(".rarrow").toggleClass("rarrow-trans");
        // 修改数字控制速度， slideUp(500)控制卷起速度
        $(this).next(".sublist").slideToggle(500).siblings(".sublist").slideUp(500);
    })
    $(".sub-item").click(function(){
        // 清除所有的圆点样式
        $(".sub-item").removeClass("sub-item-a");
        $(this).addClass("sub-item-a");
    })
    $(".navtoggle").click(function(){
        $(".navmodal").toggle();
    })
    $(".toggleButtonShow").click(function () {
      $(this).toggleClass("toggleButtonShow").toggleClass("toggleButtonHidden")
      $(".toggleShrink").toggleClass("toggleShrink-trans")
      if ($(this).find("span").text() === "收起") {
        $(this).find("span").text("展开")
        $(".sidebar").animate({left:'-16.666667%'})
        $(".main-ct").toggleClass("col-md-10").toggleClass("col-lg-10")
      } else {
        $(this).find("span").text("收起")
        $(".sidebar").animate({left:'0'})
        $(".main-ct").toggleClass("col-md-10").toggleClass("col-lg-10")
      }
    })
})

