$(function () {
    searchClick()
    deleteItem()
})

//点击查询条件，把点击的p值放到全部结果中
function searchClick() {
    var pVal="" //当前点击的P值
    $(".select-list ul li").on("click",function () {
        pVal=$(this).find("p").text()
        var item="<div class='select-set-item'><p>"+pVal+"</p><i></i></div>"
        $(".select-set-itemList").append(item)
    })
}
//点击结果列表，删除选中项
function deleteItem() {
    $(".select-set-itemList").on("click",".select-set-item",function () {
        console.log("ttt")
        $(this).remove()
    })
}