//最少要四张图
//保存图片列表的className,通过className来给图片赋值相应的css
    // function showList() {}

    $.fn.showList=function ($liList) {
        var cArr=[];
        var liList; //图片列表
        var index=0;
        var listLastIndex; //获取列表的最大index值
        liList = $("." + $liList + " ul li")
        liList.each(function () {
            cArr.push($(this).attr("class"))
        })
        listLastIndex = cArr.length - 1

        //上一张
        function previmg() {
            cArr.unshift(cArr[listLastIndex]);
            cArr.pop();
            //i是元素的索引，从0开始
            //e为当前处理的元素
            //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
            liList.each(function (i, e) {
                $(e).removeClass().addClass(cArr[i]);
            })
            index--;
            if (index < 0) {
                index = listLastIndex;
            }
        }
        //下一张
        function nextimg(){
            cArr.push(cArr[0]);
            cArr.shift();
            liList.each(function(i,e){
                $(e).removeClass().addClass(cArr[i]);
            })
            index++;
            if (index>listLastIndex) {
                index=0;
            }
        }
        $(".prev").on("click",previmg)
        $(".next").on("click",nextimg)
      //点击class为p1的元素触发上一张照片的函数
        $(".p1").on("click",function(){
            previmg
        })
       //点击class为p3的元素触发下一张照片的函数
        $(".p3").on("click",nextimg)
    }
