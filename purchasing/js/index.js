$(function () {
  $(".conTitle a").on("mousemove",function () {
    $(this).parent().parent().find(".signm").css("background-color","#2263a7")
  })
  $(".conTitle a").on("mouseout",function () {
    $(this).parent().parent().find(".signm").removeAttr("style")
  })
  bidPublicity(0)
})
}

