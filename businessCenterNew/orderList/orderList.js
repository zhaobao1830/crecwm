$(function () {
  searchReceivable()
})
function olSearch(goPage) {
  var bzNum = 0
  var nowPage = Number($('.orderListPage').val()) // 当前页数
  var page=1 //第几页
  var pageSize = 10 // 每页显示的条数
  var count= 0 //总数
  var countPage = Number($(".orderListCountPage").val()) // 总页数
  var goPageVal = 0 // 跳转到第几页
  if (goPage === 'first') {
    page = 1
  } else if (goPage === 'pre'){
    if (nowPage === 1) {
      return
    } else {
      page = nowPage - 1
    }
  } else if (goPage === 'next') {
    if (nowPage === countPage) {
      return
    } else {
      page = nowPage + 1
    }
  } else if (goPage === 'end') {
    page = countPage
  } else if (goPage === 'goPage') {
    goPageVal = $('.apPages').val()
    if (goPageVal > countPage || goPageVal < 1) {
      return
    } else {
      page = goPageVal
    }
  }
  $('.orderListPage').val(page)

  // 剩余金额
  var restAmount = $(".restamount").val()
  // 付款码
  var paycode = $('.paycode').val()
  // 订单编号
  var orderNO = $('.orderNO').val()
  // 订单金额
  var orderAmountStart = $('.orderAmountStart').val()
  var orderAmountEnd = $('.orderAmountEnd').val()
  // 发票抬头
  var invoiceTitle = $('.invoiceTitle').val()
  // 订单状态
  var pubstate = $('.pubstate option:selected').val()
  //下单时间
  var orderDateStart = $('.orderDateStart').val()
  var orderDateEnd = $(".orderDateEnd").val()
  // 用户账号
  var  creator = $('.creator').val()
  // 收货人
  var recvGoName = $('.recvGoName').val()
  // 付款码金额
  var codeAmountStart = $('.codeAmountStart').val()
  var codeAmountEnd = $('.codeAmountEnd').val()
  // 收货人电话
  var recvMobile = $('.recvMobile').val()
  // 收票人
  var invoiceRecvName = $('.invoiceRecvName').val()
  // 收票人电话
  var invoiceRecvMobile = $('.invoiceRecvMobile').val()
  var data = {
    restAmount: restAmount,
    paycode: paycode,
    orderNO: orderNO,
    orderAmountStart: orderAmountStart,
    orderAmountEnd: orderAmountEnd,
    invoiceTitle: invoiceTitle,
    pubstate: pubstate,
    orderDateStart: orderDateStart,
    orderDateEnd: orderDateEnd,
    creator: creator,
    recvGoName: recvGoName,
    codeAmountStart: codeAmountStart,
    codeAmountEnd: codeAmountEnd,
    recvMobile: recvMobile,
    invoiceRecvName: invoiceRecvName,
    invoiceRecvMobile: invoiceRecvMobile
  }
  var dataJsonList = ''
  var tbodyList=""
  $.ajax({
    url: '../json/orderList.json',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: data,
    success: function (data) {
      dataJsonList = data.confirmMoneyList
      count = Number(data.totalPage)
      countPage = Math.ceil(count / pageSize)
      $(".orderListCountPage").val(countPage)
      if (dataJsonList.length > 0){
        for (var i =0;i<dataJsonList.length;i++){
          bzNum= Number((page-1)*10+1+i)
          tbodyList += "<tr>"
          tbodyList += "<td>"+bzNum+"</td>"
          tbodyList += "<td>"+dataJsonList[i].paycode+"</td>"
          tbodyList += "<td>"+dataJsonList[i].codeamount+"</td>"
          tbodyList += "<td>"+dataJsonList[i].creator+"</td>"
          tbodyList += "</tr>"
        }
        $('.orderListTbody').html('')
        $('.orderListTbody').append(tbodyList)
        $('.orderListCurrentPage').html(page+"/"+countPage)
        $('.orderList_table_button').removeClass('displayNone').addClass('displayBlock')
      } else {
        $(".orderListTbody").html("")
        $(".orderListTbody").append("<p class='bodyP'>没有相应数据</p>")
        $('.orderList_table_button').removeClass('displayBlock').addClass('displayNone')
      }
    }
  })
}
function olResert() {
  $('.olSearchForm')[0].reset()
}

function searchReceivable() {
  var id = getUrlParam('id')
  var dataJson = ''
  $.ajax({
    url: '../json/33.json',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: {id: id},
    success: function (data) {
      dataJson = data.pubTransfer
      $(".orderdate").html(dataJson.orderdate) // 交易时间
      $(".opAccountName").html(dataJson.opAccountName) // 对方户名
      $(".restamount").html(dataJson.restamount) // 剩余金额
      $(".amount").html(dataJson.amount) // 期初金额
      $(".remark").html(dataJson.remark) // 汇款备注
    }
  })
}
//获取url中的参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}
