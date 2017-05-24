$(function () {
  $('.dccSearch > div > a').on('click',function () {
    if(!$(this).hasClass('aClick')){
      $(this).siblings().removeClass('aClick')
      $(this).addClass('aClick')
    }
  })
})