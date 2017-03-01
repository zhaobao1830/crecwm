/**
 * Created by zb on 2017/3/1.
 */
$(function () {
   $(".rl_title span").on("click",function () {
       console.log("rr")
       if($(this).hasClass("spanNoClick")){
           $(".rl_title span").removeClass("spanClick").addClass("spanNoClick")
           $(this).removeClass("spanNoClick").addClass("spanClick")

           var conCli=$(".spanClick").attr("con")
           console.log(conCli)
           var conNoCli=$(".spanNoClick").attr("con")

           $("."+conCli+"Infor").removeClass("displayNone").addClass("displayBlock")
           $("."+conNoCli+"Infor").removeClass("displayBlock").addClass("displayNone")
       }
   })
})
