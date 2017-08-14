$(function(){
  getBidPublicity()
})

// 获取中标公示列表
function getBidPublicity(){
  var bpList = "" //保存中标公示列表	
  $.ajax({
    url: "/api/mobile/index.php?version=1&module=forumdisplay&fid=2&&tpp=10&page=1&filter=sortid&sortid=12&searchoption[75][value]=%E4%B8%AD%E9%93%81%E4%B8%80%E5%B1%80",
    type: "post",
    success:function(data){
      console.log(data)
      bpList = data.Variables.forum_threadlist
      console.log(bpList)
      new Vue({
        el:".bidPublicityContent",
        delimiters: ['[[', ']]'],
        data: {
          bpLists: bpList
        }
      })
    },
    error:function(){
      console.log("uuu")
    }
  })
}

//获取供应商招募
function getSupplier(){
  var srList = "" //保存供应商招募列表
  $.ajax({
    url: "/api/mobile/index.php?version=1&module=forumdisplay&fid=2&&tpp=10&page=1&filter=sortid&sortid=18&searchoption[75][value]=%E4%B8%AD%E9%93%81%E4%B8%80%E5%B1%80",
    type: "post",
    success:function(data) {
      srList = data.Variables.forum_threadlist

      new Vue({
        el: ".srtenCon",
        delimiters: ['[[', ']]'],
        data: {
          srLists: srList
        }
      })
    }
    })
}

//获取招标公告
function getNotice(){
  var notList = "" //保存招标公告列表
  $.ajax({
    url: "/api/mobile/index.php?version=1&module=forumdisplay&fid=2&&tpp=10&page=1&filter=sortid&sortid=18&searchoption[75][value]=%E4%B8%AD%E9%93%81%E4%B8%80%E5%B1%80",
    type: "post",
    success:function(data) {
      notList = data.Variables.forum_threadlist

      new Vue({
        el: ".noticeTentCon",
        delimiters: ['[[', ']]'],
        data: {
          notLists: notList
        }
      })
    }
  })
}