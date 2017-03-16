$(function () {
    //这块设想
    // 最开始遍历出select_list li的时候，给每个li加一个标志
    // 点击的时候，这个标志就会复制到select_set_item中，且添加class=clicked
    // 当点击select_set_item的时候，通过标记把select_list li的class=clicked去掉
    $(".select_list ul li").on("click",function () {
        //判断是否有clicked
        if($(this).hasClass("clicked")){
            return
        }else{
            //给当前点击的Li添加class=clicked，
            $(this).attr("class","clicked")
            var select_set_item=$("<div class='select_set_item'></div>").append($(this).html())
            $(".select_set_itemList").append(select_set_item)
        }
    })
})
