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
  console.log(goPage)
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
    goPageVal = $('.pages').val()
    console.log(goPageVal)
    if (goPageVal > countPage || goPageVal < 1) {
      console.log('pppp')
      return
    } else {
      page = goPageVal
    }
  }
  console.log(page)
  console.log(goPageVal)
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
  var dataJsonList = ''
  var tbodyList=""
  $.ajax({
    url: '../json/receivable1.json',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: {
      page: page,
      pageSize: pageSize,
      paycode: 'paycode',
      orderNO: 'orderNO',
      opAccountName: 'opAccountName',
      amountStart: 'amountStart',
      amountEnd: 'amountEnd',
      orderAmountStart: 'orderAmountStart',
      orderAmountEnd: 'orderAmountEnd',
      recordDateStart: 'recordDateStart',
      recordDateEnd: 'recordDateEnd',
      payeeName: 'payeeName',
      restAmountStart: 'restAmountStart',
      restAmountEnd: 'restAmountEnd',
    },
    success: function (data) {
      dataJsonList = data.pubTransferList
      count = Number(data.totalPage)
      countPage = count / pageSize
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
          tbodyList += "<td><a href='javascript:;'>"+dataJsonList[i].restamount+"</a></td>"
          if (dataJsonList[i].amount === dataJsonList[i].restamount) {
            tbodyList += "<td><a href='javascript:;' onclick='showDpc()'>查看详情</a></td>"
          } else {
            tbodyList += "<td></td>"
          }
          tbodyList += "</tr>"
        }
        $('.receivablesTable').html('')
        $('.receivablesTable').append(tbodyList)
        $('.currentPage').html(page+"/"+countPage)
        $('.table_button').removeClass('displayNone').addClass('displayBlock')
      }else{
        $(".receivablesTable").html("")
        $(".receivablesTable").append("<p class='bodyP'>没有相应数据</p>")
        $('.table_button').removeClass('displayBlock').addClass('displayNone')
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
function showDpc() {
  $('.detailsPage').removeClass('displayNone').addClass('displayBlock')

}
// 关闭详情页
function closeDpc() {
  $('.detailsPage').removeClass('displayBlock').addClass('displayNone')
}