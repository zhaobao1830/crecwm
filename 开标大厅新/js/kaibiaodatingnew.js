$(function () {
  listBottom()
  // setInterval(getDate(), 1000)
  setInterval(function () {
    getDate1()
  }, 1000)
})

function listBottom() {
  var ulList = ''
  for(var i = 0;i < 21; i++){
    if(i % 2 !== 0) {
      ulList += '<li class="hasPeople"></li>'
    } else {
      ulList += '<li class="noPeople"></li>'
    }
  }

  $(".kbdtn-bottom-ul").append(ulList)
}

function getDate() {
  Date.prototype.Format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  setInterval(
    function () {
      var hsm = new Date().Format("HH:mm:ss")

      $(".kbdtn-tr-date .time").html("").html(hsm)
      var day = new Date().getDay()
      var week = ''
      switch (day) {
        case 0:
          week = "星期日";
          break;
        case 1:
          week = "星期一";
          break;
        case 2:
          week = "星期二";
          break;
        case 3:
          week = "星期三";
          break;
        case 4:
          week = "星期四";
          break;
        case 5:
          week = "星期五";
          break;
        case 6:
          week = "星期六";
          break;
      }

      $(".kbdtn-tr-date .week").html("").html(week)
    }, 1000
  )

}


function dateFmt(date, fmt) {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


function getDate1() {
  var hsm = dateFmt(new Date(), "HH:mm:ss")
  $(".kbdtn-tr-date .time").html("").html(hsm)
  var day = new Date().getDay()
  var week = ''
  switch (day) {
    case 0:
      week = "星期日";
      break;
    case 1:
      week = "星期一";
      break;
    case 2:
      week = "星期二";
      break;
    case 3:
      week = "星期三";
      break;
    case 4:
      week = "星期四";
      break;
    case 5:
      week = "星期五";
      break;
    case 6:
      week = "星期六";
      break;
  }

  $(".kbdtn-tr-date .week").html("").html(week)
}
