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
  $(".list_title").on('mouseover', function () {
    $(".list_title > span > img").attr('src','img/jiantouYes.png')
  })
  $(".list_title").on('mouseout', function () {
    $(".list_title > span > img").attr('src','img/jiantouNo.png')
  })
})


function onlineDisplayChange(className) {
  // 使用了jquery.rotate.min插件
  $("."+className).on('mouseover',function () {
    $(".img_back_"+className).rotate({
      animateTo: -90,
      callback: function () {
        $(this).css({"backgroundImage":"url(./img/frame_1_0.png)","transform": "rotate(0)"})
        $(".img_show_"+className).find('img').attr('src','img/'+className+'_1_1.png')
        $(".key_value_"+className).find('p').css({'color':'#398fd1'})
      }
    })
  })
  $("."+className).on('mouseout',function () {
    $(".img_back_"+className).rotate({
      animateTo: 90,
      callback: function () {
        $(this).css({"backgroundImage":"url(./img/frame_2_0.png)","transform": "rotate(0)"})
        $(".img_show_"+className).find('img').attr('src','img/'+className+'_2_1.png')
        $(".key_value_"+className).find('p').css({'color':'#398fd1'})
        $(".val_"+className).css({'color':'#777777'})
        $(".key_"+className).css({'color':'#222222'})
      }
    })
  })
}
