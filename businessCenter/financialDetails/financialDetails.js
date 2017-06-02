$(function () {
  //日期选择事件
  $('.fdcSearch > div > div > a').on('click',function () {
    if (!$(this).hasClass('aClick')) {
      $(this).siblings().removeClass('aClick')
      $(this).addClass('aClick')
    }
  })

  // 收入 退款点击事件
  $(".fdcResult-top1 > a").on('click',function () {
    if(!$(this).hasClass('top_aClick')){
      $(this).siblings().removeClass('top_aClick')
      $(this).addClass('top_aClick')
    }
  })
})