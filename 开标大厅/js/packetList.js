$(function () {
  $(".packetList li:not(.ptHasBid)").on("click", function () {
    $(".ptShowDetail").removeClass("displayNone").addClass("displayBlock")
  })

  // 给按钮绑定事件
  $(".listButtonA").on("click", function () {
    if($(this).hasClass("listButtonGoLeftA")){
      $(this).removeClass("listButtonGoLeftA").addClass("listButtonGoRightA")
      $(".packetList").width(460)
    }else{
      $(this).removeClass("listButtonGoRightA").addClass("listButtonGoLeftA")
      $(".packetList").width(1720)
    }
  })
})

/*保存*/
function dsSave() {
  $(".ptShowDetail").removeClass("displayBlock").addClass("displayNone")
}

/*取消*/
function dsCancel() {
  $(".ptShowDetail").removeClass("displayBlock").addClass("displayNone")
}

/*关闭*/
function dsClose() {
  $(".ptShowDetail").removeClass("displayBlock").addClass("displayNone")
}