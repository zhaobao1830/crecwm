$(function () {
  // 待收款，已收款
  $('.ChoiceIsReceivables a').on('click', function () {
     var aClickId = ''
     if($(this).hasClass('aClick')) {
       return
     } else {
       $(this).removeClass('aNoClick').addClass('aClick')
       $(this).siblings().removeClass('aClick').addClass('aNoClick')
       aClickId = $(this).attr('id')
       if (aClickId === 'receivables') {
         $('.receivables').removeClass('displayNone').addClass('displayBlock')
         $('.alreadyPaid').removeClass('displayBlock').addClass('displayNone')
       } else {
         $('.receivables').removeClass('displayBlock').addClass('displayNone')
         $('.alreadyPaid').removeClass('displayNone').addClass('displayBlock')
       }
     }
  })
})

// 代收款查询
function reSearch(goPage) {
  var bzNum = 0
  var nowPage = Number($('.receivablesPage').val()) // 当前页数
  var page=1 //第几页
  var pageSize = 10 // 每页显示的条数
  var count= 0 //总数
  var countPage = Number($(".receivablesCountPage").val()) // 总页数
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
    goPageVal = $('.receivablesPages').val()
    if (goPageVal > countPage || goPageVal < 1) {
      return
    } else {
      page = goPageVal
    }
  }
  $('.receivablesPage').val(page)
  // 付款码
  var paycode = $('.paymentCode').val()
  // 订单编号
  var orderNO = $('.orderNumber').val()
  // 对方姓名
  var opAccountName = $('.nameOther').val()
  // 期初金额
  var amountStart = $('.InitialAmountStart').val()
  var amountEnd = $('.InitialAmountEnd').val()
  // 订单金额
  var orderAmountStart = $('.orderAmountStart').val()
  var orderAmountEnd = $('.orderAmountEnd').val()
  // 交易时间
  var recordDateStart = $('.reDataStart').val()
  var recordDateEnd = $('.reDataEnd').val()
  // 收款人
  var payeeName = $('.nameOther').val()
  // 剩余金额
  var restAmountStart = $('.reMoneyS').val()
  var restAmountEnd = $('.reMoneyE').val()
  var data = {
    page: page,
    pageSize: pageSize,
    paycode: paycode,
    orderNO: orderNO,
    opAccountName: opAccountName,
    amountStart: amountStart,
    amountEnd: amountEnd,
    orderAmountStart: orderAmountStart,
    orderAmountEnd: orderAmountEnd,
    recordDateStart: recordDateStart,
    recordDateEnd: recordDateEnd,
    payeeName: payeeName,
    restAmountStart: restAmountStart,
    restAmountEnd: restAmountEnd,
  }
  var dataJsonList = ''
  var tbodyList=""
  $.ajax({
    url: '../json/receivable1.json',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: data,
    success: function (data) {
      dataJsonList = data.pubTransferList
      count = Number(data.totalPage)
      countPage = Math.ceil(count / pageSize)
      $(".receivablesCountPage").val(countPage)
      if (dataJsonList.length > 0) {
        for (var i = 0;i < dataJsonList.length; i++) {
          bzNum= Number((page-1)*10+1+i)
          tbodyList += "<tr>"
          tbodyList += "<td>"+bzNum+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].recordDate+"'>"+dataJsonList[i].recordDate+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].opAccountNo+"'>"+dataJsonList[i].opAccountNo+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].opAccountName+"'>"+dataJsonList[i].opAccountName+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].opBranckName+"'>"+dataJsonList[i].opBranckName+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].remark+"'>"+dataJsonList[i].remark+"</td>"
          tbodyList += "<td>"+dataJsonList[i].amount+"</td>"
          if (dataJsonList[i].amount === dataJsonList[i].restamount) {
            tbodyList += "<td><a href='javascript:;' onclick=goOrderList("+dataJsonList[i].id+")>"+dataJsonList[i].restamount+"</a></td>"
          } else {
            tbodyList += "<td><p>"+dataJsonList[i].restamount+"</p></td>"
          }
          if (dataJsonList[i].amount !== dataJsonList[i].restamount) {
            tbodyList += "<td><a href='javascript:;' onclick='showDpc("+dataJsonList[i].id+")'>查看详情</a></td>"
          } else {
            tbodyList += "<td></td>"
          }
          tbodyList += "</tr>"
        }
        $('.receivablesTbody').html('')
        $('.receivablesTbody').append(tbodyList)
        $('.receivablesCurrentPage').html(page+"/"+countPage)
        $('.receivables_table_button').removeClass('displayNone').addClass('displayBlock')
      }else{
        $(".receivablesTbody").html("")
        $(".receivablesTbody").append("<p class='bodyP'>没有相应数据</p>")
        $('.receivables_table_button').removeClass('displayBlock').addClass('displayNone')
      }
    },
    error: function () {
      console.log('请求失败！')
    }
  })
}
// 重置
function reResert() {
  $('.reForm')[0].reset()
}

// 打开详情页
function showDpc(id) {
  $('.detailsPage').removeClass('displayNone').addClass('displayBlock')
  // 付款码
  var paycode = $('.paymentCode').val()
  // 订单编号
  var orderNO = $('.orderNumber').val()
  // 对方姓名
  var opAccountName = $('.nameOther').val()
  // 期初金额
  var amountStart = $('.InitialAmountStart').val()
  var amountEnd = $('.InitialAmountEnd').val()
  // 订单金额
  var orderAmountStart = $('.orderAmountStart').val()
  var orderAmountEnd = $('.orderAmountEnd').val()
  // 交易时间
  var recordDateStart = $('.reDataStart').val()
  var recordDateEnd = $('.reDataEnd').val()
  // 收款人
  var payeeName = $('.nameOther').val()
  // 剩余金额
  var restAmountStart = $('.reMoneyS').val()
  var restAmountEnd = $('.reMoneyE').val()
  var dataJsonList = ''
  var tbodyList=""
  var data = {
    pubId: id,
    paycode: paycode,
    orderNO: orderNO,
    opAccountName: opAccountName,
    amountStart: amountStart,
    amountEnd: amountEnd,
    orderAmountStart: orderAmountStart,
    orderAmountEnd: orderAmountEnd,
    recordDateStart: recordDateStart,
    recordDateEnd: recordDateEnd,
    payeeName: payeeName,
    restAmountStart: restAmountStart,
    restAmountEnd: restAmountEnd,
  }
  $.ajax({
    url: '../json/receivableDetail.json',
    data: data,
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    success: function (data) {
      dataJsonList = data.pubOrderList
      for (var i = 0;i < dataJsonList.length;i++){
        tbodyList += "<tr>"
        tbodyList += "<td>"+dataJsonList[i].paycode+"</td>"
        tbodyList += "<td>"+dataJsonList[i].orderNO+"</td>"
        tbodyList += "<td>"+dataJsonList[i].orderAmount+"</td>"
        tbodyList += "<td title='"+dataJsonList[i].businessNotes+"'>"+dataJsonList[i].businessNotes+"</td>"
        tbodyList += "<td title='"+dataJsonList[i].updateTime+"'>"+dataJsonList[i].updateTime+"</td>"
        tbodyList += "<td>"+dataJsonList[i].payeeName+"</td>"
        tbodyList += "</tr>"
      }
      $(".dpcTbody").html('')
      $(".dpcTbody").append(tbodyList)
    }
  })
}
// 关闭详情页
function closeDpc() {
  $('.detailsPage').removeClass('displayBlock').addClass('displayNone')
  $(".dpcTbody").html('')
}

// 已付款查询
function apSearch(goPage) {
  var bzNum = 0
  var nowPage = Number($('.apPage').val()) // 当前页数
  var page=1 //第几页
  var pageSize = 10 // 每页显示的条数
  var count= 0 //总数
  var countPage = Number($(".apCountPage").val()) // 总页数
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
  $('.apPage').val(page)

  // 订单编号
  var orderNO = $(".ap_orderNO").val()
  // 付款码
  var paycode = $('.ap_paycode').val()
  // 订单金额
  var orderAmountStart = $('.ap_orderAmountStart').val()
  var orderAmountEnd = $('.ap_orderAmountEnd').val()
  // 用户账号
  var creator = $(".ap_creator").val()
  // 发票抬头
  var invoiceTitle = $('.ap_invoiceTitle').val()
  // 收款时间
  var updatetimeStart = $('.ap_updatetimeStart').val()
  var updatetimeEnd = $('.ap_updatetimeEnd').val()
  // 收货人
  var recvGoName = $('.ap_recvGoName').val()
  // 收货人电话
  var recvMobile = $('.ap_recvMobile').val()
  // 付款码金额
  var codeAmountStart = $('.ap_codeAmountStart').val()
  var codeAmountEnd = $('.ap_codeAmountEnd').val()
  // 收票人
  var invoiceRecvName = $('.ap_invoiceRecvName').val()
  // 收票人电话
  var invoiceRecvMobile = $('.ap_invoiceRecvMobile').val()
  // 收款人
  var payeeName = $('.ap_payeeName').val()
  var data = {
    orderNO: orderNO,
    paycode: paycode,
    orderAmountStart: orderAmountStart,
    orderAmountEnd: orderAmountEnd,
    creator: creator,
    invoiceTitle: invoiceTitle,
    updatetimeStart: updatetimeStart,
    updatetimeEnd: updatetimeEnd,
    recvGoName: recvGoName,
    recvMobile: recvMobile,
    codeAmountStart: codeAmountStart,
    codeAmountEnd: codeAmountEnd,
    invoiceRecvName: invoiceRecvName,
    invoiceRecvMobile: invoiceRecvMobile,
    payeeName: payeeName
  }
  var dataJsonList = ''
  var tbodyList=""
  $.ajax({
    url: '../json/alreadyPaid.json',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: data,
    success:function (data) {
      dataJsonList = data.runOrderPubList
      count = Number(data.totalPage)
      countPage = Math.ceil(count / pageSize)
      $(".apCountPage").val(countPage)
      if (dataJsonList.length > 0) {
        for (var i = 0;i < dataJsonList.length; i++) {
          bzNum= Number((page-1)*10+1+i)
          tbodyList += "<tr>"
          tbodyList += "<td>"+bzNum+"</td>"
          tbodyList += "<td>"+dataJsonList[i].orderNO+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].orderAmount+"'>"+dataJsonList[i].orderAmount+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].paycode+"'>"+dataJsonList[i].paycode+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].codeamount+"'>"+dataJsonList[i].codeamount+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].orderdate+"'>"+dataJsonList[i].orderdate+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].updatetime+"'>"+dataJsonList[i].updatetime+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].payeename+"'>"+dataJsonList[i].payeename	+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].invoicetitle+"'>"+dataJsonList[i].invoicetitle+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].creator+"'>"+dataJsonList[i].creator+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].recvgoname+"'>"+dataJsonList[i].recvgoname+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].recvmobile+"'>"+dataJsonList[i].recvmobile+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].invoicerecvname+"'>"+dataJsonList[i].invoicerecvname+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].invoicerecvmobile+"'>"+dataJsonList[i].invoicerecvmobile+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].businessnotes+"'>"+dataJsonList[i].businessnotes+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].opAccountName+"'>"+dataJsonList[i].opAccountName+"</td>"
          tbodyList += "<td title='"+dataJsonList[i].opAccountNo+"'>"+dataJsonList[i].opAccountNo+"</td>"
          tbodyList += "</tr>"
        }
        $('.alreadyPaidTbody').html('')
        $('.alreadyPaidTbody').append(tbodyList)
        $('.apCurrentPage').html(page+"/"+countPage)
        $('.ap_table_button').removeClass('displayNone').addClass('displayBlock')
      } else {
        $(".alreadyPaidTbody").html("")
        $(".alreadyPaidTbody").append("<p class='bodyP'>没有相应数据</p>")
        $('.ap_table_button').removeClass('displayBlock').addClass('displayNone')
      }
    }
  })
}
// 已付款重置
function apResert() {
  $(".alreadyPaidForm")[0].reset()
}

// 跳转到订单列表
function goOrderList(id) {
  var recordDate = unescape(recordDate)
  window.location.href='http://localhost:63342/crecwm/businessCenterNew/orderList/orderList.html?id='+id
}

// 查看待审核订单
function goAuditedOrderList() {
  window.location.href='www.baidu.com'
}