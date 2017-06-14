$(function () {
  //搜索框获取焦点事件
  $(".head-search").on("focus",function () {
    $(".searchDiv").css({borderColor: "#bf0000"})
  })

  //搜索框失去焦点事件
  $(".head-search").on("blur",function () {
    $(".searchDiv").css({borderColor: "#bbbbbb"})
  })

  // searchDiv img的事件
  $(".searchDiv img").on("mouseover",function () {
    $(this).attr("src","img/searchHover.png")
  })
  $(".searchDiv img").on("mouseout",function () {
    $(this).attr("src","img/search.png")
  })
  $(".searchDiv img").on("click",function () {

  })

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
      $(this).removeClass("aNoClik").addClass("aClik");
    }
  })


  //精华主题
  $(".psTitle ul li").on("click",function () {
    var thisVal = $(this).find("a").text().trim();  //当前点击的值
    if($(this).hasClass("pcsNoclick")){
      $(".psTitle ul li").removeClass("psLiClick").addClass("pcsNoclick");
      $(this).removeClass("pcsNoclick").addClass("psLiClick");
    }
  })

  //党员新闻
  $(".nsTitle ul li").on("click",function () {
    var thisVal = $(this).find("a").text().trim();  //当前点击的值
    if($(this).hasClass("pcsNoclick")){
      $(".nsTitle ul li").removeClass("psLiClick").addClass("pcsNoclick");
      $(this).removeClass("pcsNoclick").addClass("psLiClick");
    }
  })
})