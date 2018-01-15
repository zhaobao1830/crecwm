function aoSearch() {
  var bzNum = 0
  var nowPage = Number($('.auditedOrderListPage').val()) // 当前页数
  var page=1 //第几页
  var pageSize = 10 // 每页显示的条数
  var count= 0 //总数
  var countPage = Number($(".auditedOrderListCountPage").val()) // 总页数
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
    goPageVal = $('.auditedOrderListPages').val()
    if (goPageVal > countPage || goPageVal < 1) {
      return
    } else {
      page = goPageVal
    }
  }
  $('.auditedOrderListPage').val(page)

  // 付款码
  var paycode = $(".paycode").val()
  // 订单编号
  var orderNO = $(".orderNO").val()
  // 订单金额
  var orderAmountStart = $(".orderAmountStart").val()
  var orderAmountEnd = $(".orderAmountEnd").val()
  // 发票抬头
  var invoiceTitle = $(".invoiceTitle").val()
  // 订单状态
  var pubstate = $(".pubstate option:selected").val()
  // 下单时间
  var orderDateStart = $(".orderDateStart").val()
  var orderDateEnd = $(".orderDateEnd").val()
  // 用户账号
  var creator = $(".creator").val()
  // 收货人
  var recvGoName = $(".recvGoName").val()
  // 付款码金额
  var codeAmountStart = $(".codeAmountStart").val()
  // 收货人电话
  var recvMobile = $(".recvMobile").val()
  // 收票人
  var invoiceRecvName = $(".invoiceRecvName").val()
  // 收票人电话
  var invoiceRecvMobile = $(".invoiceRecvMobile").val()
  var data = {
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
    recvMobile: recvMobile,
    invoiceRecvName: invoiceRecvName,
    invoiceRecvMobile: invoiceRecvMobile
  }
  var dataJsonList = ''
  var tbodyList=""
  $.ajax({
    url: '',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: data,
    success: function (data) {
      dataJsonList = data.confirmMoneyList
      count = Number(data.totalPage)
      countPage = Math.ceil(count / pageSize)
      $(".auditedOrderListCountPage").val(countPage)
      if (dataJsonList.length > 0) {
      }else {
        $(".auditedOrderListTbody").html("")
        $(".auditedOrderListTbody").append("<p class='bodyP'>没有相应数据</p>")
        $('.auditedOrderList_table_button').removeClass('displayBlock').addClass('displayNone')
      }
    }
  })
}
function aoResert() {
  $('.aolSearchForm')[0].reset()
}