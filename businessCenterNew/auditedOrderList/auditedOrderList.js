function aoSearch(goPage) {
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
    url: '../json/11.json',
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
        for (var i = 0;i < dataJsonList.length; i++) {
          for (var j = 0;j < dataJsonList[i].runOrderList.length; j++) {
            tbodyList += "<tr>"
            if (j === 0) {
              tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"'><input type='checkbox' name='auditedOrderLists' class='"+dataJsonList[i].id+"' onclick='checkAuditedOrderLists("+dataJsonList[i].id+")'></td>"
              tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"' title='"+dataJsonList[i].paycode+"'>"+dataJsonList[i].paycode+"</td>"
              tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"' title='"+dataJsonList[i].codeamount+"'>"+dataJsonList[i].codeamount+"</td>"
              tbodyList += "<td rowspan='"+dataJsonList[i].runOrderList.length+"' title='"+dataJsonList[i].creator+"'>"+dataJsonList[i].creator+"</td>"
            }
            if (ifJudgeState(dataJsonList[i].runOrderList[j].pubstate)) {
              tbodyList += "<td><input type='checkbox' name='runOrderLists' pubstate='"+dataJsonList[i].runOrderList[j].pubstate+"' class='"+dataJsonList[i].id+"_true "+dataJsonList[i].runOrderList[j].orderNO+"'></td>"
            } else {
              tbodyList += "<td><input type='checkbox' disabled='disabled' name='runOrderLists' class='"+dataJsonList[i].runOrderList[j].orderNO+"'></td>"
            }
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].orderNO+"'>"+dataJsonList[i].runOrderList[j].orderNO+"</td>"
            if(dataJsonList[i].runOrderList[j].pubstate === 4) {
              tbodyList += "<td title='"+judgeState(dataJsonList[i].runOrderList[j].pubstate)+"' onclick=toExamineNoAdoptDesc('"+dataJsonList[i].runOrderList[j].orderNO+"')>"+judgeState(dataJsonList[i].runOrderList[j].pubstate)+"</td>"
            } else {
              tbodyList += "<td title='"+judgeState(dataJsonList[i].runOrderList[j].pubstate)+"'>"+judgeState(dataJsonList[i].runOrderList[j].pubstate)+"</td>"
            }
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].amount+"'>"+dataJsonList[i].runOrderList[j].amount+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].orderDate+"'>"+dataJsonList[i].runOrderList[j].orderDate+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].invoiceTitle+"'>"+dataJsonList[i].runOrderList[j].invoiceTitle+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].recvGoName+"'>"+dataJsonList[i].runOrderList[j].recvGoName+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].recvMobile+"'>"+dataJsonList[i].runOrderList[j].recvMobile+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].invoiceRecvName+"'>"+dataJsonList[i].runOrderList[j].invoiceRecvName+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].invoiceRecvMobile+"'>"+dataJsonList[i].runOrderList[j].invoiceRecvMobile+"</td>"
            tbodyList += "<td title='"+dataJsonList[i].runOrderList[j].businessNotes+"'>"+dataJsonList[i].runOrderList[j].businessNotes+"</td>"
            tbodyList += "</tr>"
          }
        }
        $('.auditedOrderListTbody').html('')
        $('.auditedOrderListTbody').append(tbodyList)
        $('.auditedOrderListCurrentPage').html(page+"/"+countPage)
        $('.auditedOrderList_table_button').removeClass('displayNone').addClass('displayBlock')
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

// 判断订单状态是否为待审核
function ifJudgeState(id) {
  // 如果订单状态为待审核，返回true，否则返回false
  if (id === 3) {
    return true
  } else {
    return false
  }
}

// 审核不通过理由显示
function toExamineNoAdoptDesc(orderNO) {
  var toExamineNoAdoptDesc = '' //审核不通过理由
  $(".toExamineNoAdoptDesc").removeClass("displayNone").addClass("displayBlock")
  $.ajax({
    url: '',
    type:'post',
    dataType: 'json',
    contentType:"application/json",
    data: {orderNO: orderNO},
    success: function (data) {
      toExamineNoAdoptDesc = data
      $(".tenadCon p").html('')
      $(".tenadCon p").html(toExamineNoAdoptDesc)
      $(".toExamineNoAdoptDesc").removeClass("displayNone").addClass("displayBlock")
    }
  })
}

// 通过传入的值，判断状态
function judgeState(id) {
  if (id === 1) {
    return '待付款'
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

// 审核
function toExamine() {
  if ($("input[name=runOrderLists]:checked").length > 0) {
    if ($("input[name=runOrderLists]:checked").length > 1) {
      alert('每次只能审核一条，请重新选择！')
      $("input[name=auditedOrderLists]").prop("checked",false)
      $("input[name=runOrderLists]").prop("checked",false)
    } else {
      var pubstate = $("input[name=runOrderLists]:checked").attr("pubstate")
      if (pubstate === '3') {
        $(".toExamineShow").removeClass("displayNone").addClass("displayBlock")
      }else {
        alert('订单状态必须为待审核状态，请重新选择！')
        $("input[name=auditedOrderLists]").prop("checked",false)
        $("input[name=runOrderLists]").prop("checked",false)
      }
    }
  } else {
    alert("请至少选择一条")
  }
}

// 点击父input，选中自己以及子类的input
function checkAuditedOrderLists(id) {
  var fInputCheck = $("."+id).prop("checked")
  if (fInputCheck) {
    $("."+id+"_true").prop("checked", true)
  } else {
    $("."+id+"_true").prop("checked", false)
  }
}

//通过审核
function adoptToExamine() {
  var orderNO = $("input[name=runOrderLists]:checked").attr("orderNO")
  $.ajax({
    url: '',
    type:'post',
    dataType: 'json',
    contentType:"application/json",
    data: {orderNO: orderNO},
    success: function (data) {
      aoSearch()
      closeToExamine()
      $("input[name=auditedOrderLists]").prop("checked",false)
      $("input[name=runOrderLists]").prop("checked",false)
    }
  })
}
// 不通过审核
function noAdoptToExamine() {
  var orderNO = $("input[name=runOrderLists]:checked").attr("orderNO") // 订单编号
  var addToExamine = $(".addToExamine").val() // 审核意见
  if (addToExamine) {
    $.ajax({
      url: '',
      type:'post',
      dataType: 'json',
      contentType:"application/json",
      data: {orderNO: orderNO,addToExamine: addToExamine},
      success: function (data) {
        $(".addToExamine").html('')
        olSearch()
        closeToExamine()
        $("input[name=auditedOrderLists]").prop("checked",false)
        $("input[name=runOrderLists]").prop("checked",false)
      }
    })
  } else {
    alert('审核不通过时，审核意见必须填写！')
  }
}
// 关闭审核弹出框
function closeToExamine() {
  $(".toExamineShow").removeClass("displayBlock").addClass("displayNone")
}
// 关闭审核不通过理由页面
function closeTenad() {
  $(".toExamineNoAdoptDesc").removeClass("displayBlock").addClass("displayNone")
}