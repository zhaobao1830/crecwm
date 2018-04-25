/**
 * Created by zb on 2018/4/25.
 */
$(function () {
  // 控制全部课程
  $(".allCourses").on('mouseover', function () {
    $(".allCoursesList").removeClass('displayNone').addClass('displayBlock')
  })
  $(".allCourses").on('mouseout', function () {
    $(".allCoursesList").removeClass('displayBlock').addClass('displayNone')
  })
})
