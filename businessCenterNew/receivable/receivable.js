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
function reSearch() {
  // 付款码
  var paymentCode = $('.paymentCode').val()
  // 订单编号
  var orderNumber = $('.orderNumber').val()
  // 对方姓名
  var nameOther = $('.nameOther').val()
  // 期初金额
  var InitialAmountStart = $('.InitialAmountStart').val()
  var InitialAmountEnd = $('.InitialAmountEnd').val()
  // 交易时间
  var reDataStart = $('.reDataStart').val()
  var reDataEnd = $('.reDataEnd').val()
  // 收款人
  var nameOther = $('.nameOther').val()
  // 剩余金额
  var reMoneyS = $('.reMoneyS').val()
  var reMoneyE = $('.reMoneyE').val()
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