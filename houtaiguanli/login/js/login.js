$(function () {
    $(".remPass label").on("click",function () {
        if($(".remPass label").hasClass("isChecked")){
            $(".remPass label").addClass().removeClass("isChecked")
            $(".remPass label i").css("backgroundPosition","0 0")
            $(".remPassword").attr("checked",false)
        }else{
            $(".remPass label").addClass("isChecked")
            $(".remPass label i").css("backgroundPosition","0 -23px")
            $(".remPassword").attr("checked",true)
        }
    })
    var flag=true
    $(".username").on("blur",function () {
        var username=$(".username").val()   //用户名
        if(username){
            flag=true
            $(".error-name").removeClass("displayBlock").addClass("displayNone")
        }
    })
})
//验证用户名
function verName() {
    var flag=true
    var username=$(".username").val()   //用户名
    if(username){
        $(".error-name").removeClass("displayBlock").addClass("displayNone")
        flag=verPassword()
    }else{
        $(".error-name").removeClass("displayNone").addClass("displayBlock")
        flag=false
        $(".username").focus()
    }
    return flag
}
//验证密码
function verPassword() {
    var flag=true
    var password=$(".password").val() //密码
    if(password){
        flag=true

        $(".error-password").removeClass("displayBlock").addClass("displayNone")
    }else{
        flag=false
        $(".error-password").removeClass("displayNone").addClass("displayBlock")
        $(".password").focus()
    }
    return flag
}
//登录
function login() {
    var flag
    flag=verName()
    if(flag){
        console.log("提交")
    }
}


