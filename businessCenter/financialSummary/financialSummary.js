$(function () {
  //页面刚打开时调用查询方法
  searchResult()

  $(".fscSearch > div >a").on("click",function () {
    var clickId=''
    if($(this).hasClass("searchANoclick")){
      $(this).siblings().removeClass("searchAclick").addClass("searchANoclick")
      $(this).removeClass("searchANoclick").addClass("searchAclick")
      clickId=$(this).prop('id')
      $(".createCode_date_start").val('')
      $("."+clickId+'_date').removeClass('displayNone').addClass('displayBlock')
      $("."+clickId+'_date').siblings().removeClass('displayBlock').addClass('displayNone')
      $(".datePickerImg").removeClass("displayNone").addClass("displayBlock")
    }
    //点击日汇总、月汇总后调用查询方法
    searchResult()
  })
})
//选择日期后触发的事件
function dayChange(val) {
  if(val){
    //执行方法
    searchResult()
  }
}
//请求后台数据
function searchResult() {
  var classFica='' //判断现在选择的是日汇总还是月汇总
  classFica=$(".searchAclick").text().trim()
  var date='' //通过不同的classFica选择不同的时间
  var checkDate='' //当前选择的时间
  checkDate=$("#"+$(".searchAclick").attr('id')+'_date').val()
  var myDate = new Date()
  if(checkDate){
    date=checkDate
  }else{
    if($(".searchAclick").attr('id') === 'daily'){
      date=myDate.getFullYear()+'-'+(myDate.getMonth()+1)
    }else{
      date=myDate.getFullYear()
    }
  }
  $.ajax({
    url:'',
    data:{classFica:classFica,date:date},
    type:'post',
    contentType:"application/json",
    dataType:"json",
    success:function (data) {

    }
  })
}
