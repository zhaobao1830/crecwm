$(function () {
  $(".fscSearch > div >a").on("click",function () {
    var clickId=''
    if($(this).hasClass("searchANoclick")){
      $(this).siblings().removeClass("searchAclick").addClass("searchANoclick")
      $(this).removeClass("searchANoclick").addClass("searchAclick")
      clickId=$(this).prop('id')
      $(".createCode_date_start").val('')
      $("."+clickId+'_date').removeClass('displayNone').addClass('displayBlock')
      $("."+clickId+'_date').siblings().removeClass('displayBlock').addClass('displayNone')
    }
  })
})
//悬着日期后触发的事件
function dayChange(val) {
  if(val){
    //执行方法
  }
}