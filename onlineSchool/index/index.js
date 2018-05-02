$(function () {
  onlineDisplayChange('totalMajors')
  onlineDisplayChange('totalVideo')
  onlineDisplayChange('courseLength')
  onlineDisplayChange('totalClicks')

  // 精品课程的更多课程
  $(".moreCoursesA").on('mouseover', function () {
    $(this).find('img').attr('src','img/moreCoursesYes.png')
  })
  $(".moreCoursesA").on('mouseout', function () {
    $(this).find('img').attr('src','img/moreCoursesNo.png')
  })

  // 咨询列表 头部
  $(".informationList_left_title").on('mouseover', function () {
    $(".informationList_left_title > a > img").attr('src','img/jiantouYes.png')
  })
  $(".informationList_left_title").on('mouseout', function () {
    $(".informationList_left_title > a > img").attr('src','img/jiantouNo.png')
  })
  $(".informationList_right_title").on('mouseover', function () {
    $(".informationList_right_title > a > img").attr('src','img/jiantouYes.png')
  })
  $(".informationList_right_title").on('mouseout', function () {
    $(".informationList_right_title > a > img").attr('src','img/jiantouNo.png')
  })
})


function onlineDisplayChange(className) {
  // 使用了jquery.rotate.min插件
  $("."+className).on('mouseover',function () {
    $(".img_back_"+className).css({"backgroundImage":"url(./img/frame_1_0.png)"})
    $(".img_show_"+className).find('img').attr('src','img/'+className+'_1_1.png')
    $(".key_value_"+className).find('p').css({'color':'#398fd1'})
    $(".img_back_"+className).rotate({
      animateTo: -90
    })
  })
  $("."+className).on('mouseout',function () {
    $(".img_back_"+className).css({"backgroundImage":"url(./img/frame_2_0.png)","transform": "rotate(0)"})
    $(".img_show_"+className).find('img').attr('src','img/'+className+'_2_1.png')
    $(".key_value_"+className).find('p').css({'color':'#398fd1'})
    $(".val_"+className).css({'color':'#777777'})
    $(".key_"+className).css({'color':'#222222'})
    $(".img_back_"+className).rotate({
      animateTo: 90
    })
  })
}
