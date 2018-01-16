$(function () {
  searchReceivable()
})
function olSearch(goPage) {
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
        for (var i = 0;i < dataJsonList.length;i++){
            for (var j = 0;j <  dataJsonList[i].runOrderList.length; j++) {
              tbodyList += "<tr>"
                if (j === 0) {
                  tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"'><input type='checkbox' name='orderLists' class='"+dataJsonList[i].id+"' onclick='checkOrderLists("+dataJsonList[i].id+")'></td>"
                  tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"' title='"+dataJsonList[i].paycode+"'>"+dataJsonList[i].paycode+"</td>"
                  tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"' title='"+dataJsonList[i].codeamount+"'>"+dataJsonList[i].codeamount+"</td>"
                  tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"' title='"+dataJsonList[i].creator+"'>"+dataJsonList[i].creator+"</td>"
                }
                if (ifJudgeState(dataJsonList[i].runOrderList[j].pubstate)) {
                  tbodyList += "<td><input type='checkbox' name='runOrderLists' class='"+dataJsonList[i].id+"_true "+dataJsonList[i].runOrderList[j].orderNO+"'></td>"
                } else {
                  tbodyList += "<td><input type='checkbox' disabled='disabled' name='runOrderLists' class='"+dataJsonList[i].runOrderList[j].orderNO+"'></td>"
                }
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].orderNO+"'>"+dataJsonList[i].runOrderList[j].orderNO+"</td>"
                tbodyList += "<td title='"+judgeState(dataJsonList[i].runOrderList[j].pubstate)+"'>"+judgeState(dataJsonList[i].runOrderList[j].pubstate)+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].orderNO+"'>"+dataJsonList[i].runOrderList[j].amount+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].orderDate+"'>"+dataJsonList[i].runOrderList[j].orderDate+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].invoiceTitle+"'>"+dataJsonList[i].runOrderList[j].invoiceTitle+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].recvGoName+"'>"+dataJsonList[i].runOrderList[j].recvGoName+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].recvMobile+"'>"+dataJsonList[i].runOrderList[j].recvMobile+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].invoiceRecvName+"'>"+dataJsonList[i].runOrderList[j].invoiceRecvName+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].invoiceRecvMobile+"'>"+dataJsonList[i].runOrderList[j].invoiceRecvMobile+"</td>"
                tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].businessNotes+"' onclick=editNotes('"+dataJsonList[i].runOrderList[j].orderNO+"')>"+dataJsonList[i].runOrderList[j].businessNotes+"</td>"
              tbodyList += "</tr>"
            }
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

// 通过传入的值，判断状态
function judgeState(id) {
  if (id === 1) {
    return '代付款'
  } else if (id === 2){
    return '交易取消'
  } else if (id === 3) {
    return '待审核'
  } else if (id === 4) {
    return '审核不通过'
  } else if (id === 5) {
    return '已收款'
  }
}

// 判断订单状态是否为待收款及审核不通过
function ifJudgeState(id) {
  // 如果鼎泰状态为待收款以及审核不通过，返回true，否则返回false
  if (id === 3 || id === 4) {
    return true
  } else {
    return false
  }
}

// 点击父input，选中自己以及子类的input
function checkOrderLists(id) {
  var fInputCheck = $("."+id).prop("checked")
  if (fInputCheck) {
    $("."+id+"_true").prop("checked", true)
  } else {
    $("."+id+"_true").prop("checked", false)
  }
}
// 打开业务备注
function editNotes(id) {
  $(".editBusinessNotes").removeClass("displayNone").addClass("displayBlock")
  $(".businessNotesId").val(id)
}
// 关闭业务备注
function closeEbnc() {
  $(".editBusinessNotes").removeClass("displayBlock").addClass("displayNone")
}
// 保存业务备注
function ebncSave() {
  closeEbnc()
  var id = $(".businessNotesId").val()
  var businessNotesVal = $(".addOrUpdateBusinessNotes").val() // 添加或修改的业务备注新内容
  var data = {
    id: id,
    businessNotesVal: businessNotesVal
  }
  $.ajax({
    url: '',
    type: 'post',
    dataType: 'json',
    contentType:"application/json",
    data: data,
    success: function (data) {
      //不知道该如何写
      console.log('保存成功')
      closeEbnc()
      olSearch()
    }
  })
}
// 取消添加/修改业务备注
function ebncCancel() {
  $(".addOrUpdateBusinessNotes").html()
  closeEbnc()
}