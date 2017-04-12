//最少要四张图
//保存图片列表的className,通过className来给图片赋值相应的css
(function () {
    function showList() {}

    var cArr=[];
    var liList; //图片列表
    var index=0;
    var listLastIndex; //获取列表的最大index值
    showList.prototype.init=function ($liList) {
        console.log($liList.$liList)
        liList=$("."+$liList.$liList+" ul li")
        liList.each(function () {
            cArr.push($(this).attr("class"))
        })
        listLastIndex=cArr.length-1

        $(".next").click(
            function(){
                this.nextimg();
            }
        )
        $(".prev").click(
            function(){
                this.previmg();
            }
        )


//点击class为p1的元素触发上一张照片的函数
        $(".p1").on("click",this.previmg())

//点击class为p3的元素触发下一张照片的函数
        $(document).on("click",".p3",function(){
            showList.nextimg();
        });
    }
    
    //上一张
    showList.prototype.previmg=function (){
        cArr.unshift(cArr[listLastIndex]);
        cArr.pop();
        //i是元素的索引，从0开始
        //e为当前处理的元素
        //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
        $(".sl-con ul li").each(function(i,e){
            $(e).removeClass().addClass(cArr[i]);
        })
        index--;
        if (index<0) {
            index=listLastIndex;
        }
    }

    //上一张
    showList.prototype.nextimg=function(){
        cArr.push(cArr[0]);
        cArr.shift();
        $(".sl-con ul li").each(function(i,e){
            $(e).removeClass().addClass(cArr[i]);
        })
        index++;
        if (index>listLastIndex) {
            index=0;
        }
    }
    var showList = new showList();

    window["showList"]=showList;
})()



// //下一张
// function nextimg(){
//     cArr.push(cArr[0]);
//     cArr.shift();
//     $(".sl-con ul li").each(function(i,e){
//         $(e).removeClass().addClass(cArr[i]);
//     })
//     index++;
//     if (index>listLastIndex) {
//         index=0;
//     }
// }

// //点击class为p1的元素触发上一张照片的函数
// $(document).on("click",".p1",function(){
//     previmg();
// });
//
// //点击class为p3的元素触发下一张照片的函数
// $(document).on("click",".p3",function(){
//     nextimg();
// });


// //			进入页面自动开始定时器
// var timer=setInterval(nextimg,4000);
// //			鼠标移入showList时清除定时器
// $(".showList").mouseover(function(){
//     clearInterval(timer);
// })
//
// //			鼠标移出showList时开始定时器
// $(".showList").mouseleave(function(){
//     timer=setInterval(nextimg,4000);
// })
