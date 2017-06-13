$(function () {
  //时政点击
  $(".politics-ul li a").on("click", function () {
    var thisVal = $(this).text().trim();  //当前点击的值
    if($(this).hasClass("aNoClik")){
      $(".politics-ul li a").removeClass("aClik").addClass("aNoClik");
       $(this).removeClass("aNoClik").addClass("aClik")
    }
  })

  // 思想理论
  $(".tt-ul li a").on("click", function () {
    var thisVal = $(this).text().trim();  //当前点击的值
    if($(this).hasClass("aNoClik")){
      $(".tt-ul li a").removeClass("aClik").addClass("aNoClik");
      $(this).removeClass("aNoClik").addClass("aClik")
    }
  })

  // 党建经验
  $(".party-ul li a").on("click", function () {
    var thisVal = $(this).text().trim();  //当前点击的值
    if($(this).hasClass("aNoClik")){
      $(".party-ul li a").removeClass("aClik").addClass("aNoClik");
      $(this).removeClass("aNoClik").addClass("aClik")
    }
  })
})