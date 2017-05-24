$(function () {
  $(".nav-right > ul > li").on('click', function () {
    if ($(this).hasClass('liNoclick')){
      $(this).siblings().removeClass('liClick').addClass('liNoclick')
      $(this).removeClass('liNoclick').addClass('liClick')
    }
  })
})