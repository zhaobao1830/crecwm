$(function () {
    $(".busNedds li").on("click",function () {
        if($(this).hasClass("liChecked")){
            $(this).removeClass("liChecked");
            $(this).find('i').removeClass("iChecked");
            $(this).find('p').removeClass("pChecked");
        }else{
            $(this).addClass("liChecked");
            $(this).find('i').addClass("iChecked");
            $(this).find('p').addClass("pChecked");
        }
    })
})

// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
// 验证手机号
function isEmailNo(email) {
    var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return pattern.test(email);
}
function formSubmit() {
    var nameVal = $(".name-input").val(),  //公司全称
        contactsVal = $(".contacts").val(),  //联系人
        telephoneVal = $(".telephone").val(), //手机号
        emailVal = $(".email").val(), //邮箱
        addressVal = $(".prov option:selected").val()+"-"+$(".city option:selected").val(), //所在地区
        bussNedds = [], //业务需求
        busDescription = $(".busDescription").val() //业务描述
       //获取选择的业务需求
        $(".busNedds li").each(function () {
            if($(this).hasClass("liChecked")){
                bussNedds.push($(this).find("p").text().trim())
            }
        })
    console.log(bussNedds)
    var flag = true;
    //判断公司全称是否为空
    if(nameVal){
        flag = true;
        $(".name-pro").removeClass("proShow").addClass("proHide");
    }else{
        flag = false;
        $(".name-pro").removeClass("proHide").addClass("proShow");
    }
    //判断联系人是否为空
    if(contactsVal){
        flag = true;
        $(".contacts-pro").removeClass("proShow").addClass("proHide");
    }else{
        flag = false;
        $(".contacts-pro").removeClass("proHide").addClass("proShow");
    }
    //判断手机号是否为空
    if(telephoneVal){
        flag = true;
        $(".tel-pro").removeClass("proShow").addClass("proHide");
        if(isPhoneNo($.trim($(".telephone").val()))) {
            flag = true;
            $(".tel-pro1").removeClass("proShow").addClass("proHide");
        }else{
            flag = false;
            $(".telephone").focus()
            $(".tel-pro1").removeClass("proHide").addClass("proShow");
        }
    }else{
        flag = false;
        $(".tel-pro").removeClass("proHide").addClass("proShow");
    }
    //判断邮箱是否为空
    if(emailVal){
        flag = true;
        $(".email-pro").removeClass("proShow").addClass("proHide");
        if(isEmailNo($.trim($(".email").val()))) {
            flag = true;
            $(".email-pro1").removeClass("proShow").addClass("proHide");
        }else{
            flag = false;
            $(".telephone").focus()
            $(".email-pro1").removeClass("proHide").addClass("proShow");
        }
    }else{
        flag = false;
        $(".email-pro").removeClass("proHide").addClass("proShow");
    }
    if(flag) {
        $.ajax({
            url: "",
            type: "post",
            data: {nameVal:nameVal,contactsVal:contactsVal,telephoneVal:telephoneVal,emailVal:emailVal,addressVal:addressVal,addressVal:addressVal,bussNedds:bussNedds,busDescription:busDescription},
            success: function (data) {

            }

        })
    }
}

//手机号失去焦点
function telBulr() {
    if($(".telephone").val()){
        if(isPhoneNo($.trim($(".telephone").val()))){
            $(".tel-pro1").removeClass("proShow").addClass("proHide");
        }else{
            $(".tel-pro1").removeClass("proHide").addClass("proShow");
        }
    }else{
        $(".tel-pro1").removeClass("proShow").addClass("proHide");
    }
}