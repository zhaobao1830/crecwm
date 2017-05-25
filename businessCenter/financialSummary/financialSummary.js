$(function () {
  $(".fscSearch > div >a").on("click",function () {
    if($(this).hasClass("searchANoclick")){
      $(this).siblings().removeClass("searchAclick").addClass("searchANoclick")
      $(this).removeClass("searchANoclick").addClass("searchAclick")
    }
  })
})