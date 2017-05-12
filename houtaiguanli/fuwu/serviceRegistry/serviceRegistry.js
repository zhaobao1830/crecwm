$(function () {
    //给Li添加liShow，是为了在left.js里面，用$("liShow")进行操作
    $(".left ul > li").removeClass("liShow")
    $(".management").find("i").removeClass("iClick").addClass("iNoClick")
    $(".management").find("p").removeClass("pClick").addClass("pNoClick")
    $(".management_list").removeClass("displayBlock").addClass("displayNone")

    $("#service").parent().addClass("liShow")
    $("#service").find("i").removeClass("iNoClick").addClass("iClick")
    $("#service").find("p").removeClass("pNoClick").addClass("pClick")
    $(".service").removeClass("displayNone").addClass("displayBlock")
    $(".serviceRegistry").removeClass("liNoClick").addClass("liClick")


    var leftHeight=$(".left").height()
    var sregContentHeight=$(".sregContent").height()
    if(leftHeight>sregContentHeight){
        $(".sregContent").height(leftHeight)
        // 获取sregCon高度
        $(".sregCon").height(leftHeight-158)
    }else{
        $(".left").height(sregContentHeight)
    }

    //页面刚打开，调用查询方法
    serviceList()
    //调用类型查询方法
    xgflTypeSearch()
    //给删除按钮绑定click事件
    $(".regist_del").on("click",registDel)

    //更新按钮绑定click事件
    $(".regist_up").off("click");
    $(".regist_up").on("click",registUp);

    //添加按钮绑定click事件
    $(".regist_add").off("click");
    $(".regist_add").on("click",registAdd)
})

//开启添加框
function addShow() {
    $(".add_con").removeClass("displayNone").addClass("displayBlock")
}
//关闭添加框
function addClose() {
    $(".add_con").removeClass("displayBlock").addClass("displayNone")
}

//查询列表
function serviceList() {
    $.ajax({
        type:"POST",
        url:"../../../subscribe/subscribe_api.php",
        data:"interface=selectserviceD",
        success:function(str){
            var rel=/null,/g;
            var data_list=str.replace(rel,'"",');
            var rel=/(^\s*)|(\s*$)/g;
            data_json=str;
            var data_json=JSON.parse(data_list);
            var index=0;
            if(data_json.result=="TRUE"){
                for(var i in data_json.detail){
                    if(data_json.detail[i].ico.replace(rel,"")){
                        var tu_ico='<a href='+data_json.detail[i].ico+' >图</a>';
                    }
                    else{
                        var tu_ico='-';
                    }
                    index=index+1
                    $(".se_regist_r_b tbody").append('<tr class="">'+
                        '<td class="line0"><input type="checkbox" class="select_sd"/><img class="thiNoClick" src="img/sre_031.png"></td>'+
                        '<td class="line">'+index+'</td>'+
                        '<td class="line1">'+data_json.detail[i].createtime.split(" ")[0]+'</td>'+
                        '<td class="line2">'+data_json.detail[i].serviceid+'</td>'+
                        '<td class="line3">'+data_json.detail[i].parentid+'</td>'+
                        '<td class="line4">'+data_json.detail[i].servicename+'</td>'+
                        '<td class="line5">'+data_json.detail[i].description+'</td>'+
                        '<td class="line6">'+tu_ico+'</td>'+
                        '<td class="line7">'+data_json.detail[i].peoplecount+'</td>'+
                        '<td class="line8">'+data_json.detail[i].typecount+'</td>'+
                        '<td class="line9">'+data_json.detail[i].subscribeurl+'</td>'+
                        '<td class="line10">'+data_json.detail[i].setupurl+'</td>'+
                        '<td class="line11">'+data_json.detail[i].checkmode+'</td>'+
                        '</tr>');
                }
                //给thead tr img绑定click事件
                $("thead tr th img").on("click",function () {
                    if($(this).hasClass("thiNoClick")){
                        $(this).removeClass("thiNoClick")
                        $(this).attr("src","img/sre_032.png")
                        $("tbody tr td img").each(function () {
                            $(this).removeClass("triNoClick")
                            $(this).attr("src","img/sre_042.png")
                            $(this).parent().parent().addClass("trClick")
                            $(this).parent().find("input").prop("checked",true)
                        })
                    }else{
                        $(this).addClass("thiNoClick")
                        $(this).attr("src","img/sre_031.png")
                        $("tbody tr td img").each(function () {
                            $(this).addClass("triNoClick")
                            $(this).attr("src","img/sre_041.png")
                            $(this).parent().parent().removeClass("trClick")
                            $(this).parent().find("input").prop("checked",false)
                        })
                    }
                })
                // 给tbody下的img绑定click事件，点击的时候判断，有triNoClick就添加triClick，tr背景改变
                $("tbody tr td img").on("click",function () {
                    if($(this).hasClass("triNoClick")){
                        $(this).removeClass("triNoClick")
                        $(this).attr("src","img/sre_042.png")
                        $(this).parent().parent().addClass("trClick")
                        $(this).parent().find("input").prop("checked",true)
                    }else{
                        $(this).addClass("triNoClick")
                        $(this).attr("src","img/sre_041.png")
                        $(this).parent().parent().removeClass("trClick")
                        $(this).parent().find("input").prop("checked",false)

                        $("thead tr th img").addClass("thiNoClick")
                        $("thead tr th img").attr("src","img/sre_031.png")
                    }
                })
            }
            else{
                alert("数据为空!")
            }

        },
        error:function(){
            //alert("请求失败！");
        }
    });
}

//查询类型
function xgflTypeSearch() {
    $.ajax({
        type:"POST",
        url:"../../../subscribe/subscribe_api.php",
        data:"interface=selectmainservice",
        dataType:"JSON",
        success:function(list){
            for(var i in list.detail){
                $(".xgfl_type").append('<option value="'+i+'">'+list.detail[i]+'</option>');
            }
        },
        error:function(){
            //alert("请求失败！");
        }
    });
}

//删除
function registDel() {
    var msg = "您真的确定要删除吗？";
    if (confirm(msg)==true){
            var rel=/(^\s*)|(\s*$)/g;
            var tr_num="";
            var server_ID="";
            var del_id="";
            for(var i=0 ;i<$(".select_sd:checked").length;i++){
                tr_num=$(".select_sd:checked").eq(i).index(".select_sd")+2;
                server_ID=$(".se_regist_r_b table tr:nth-child("+tr_num+") td").eq(2).html();
                del_id=del_id+","+server_ID;
            }
            $.ajax({
                type:"POST",
                url:"../../../subscribe/subscribe_api.php",
                data:"interface=deleteservice&id="+encodeURIComponent(del_id.substring(1)),
                dataType:"json",
                success:function(d_str){

                    if(d_str.result){
                        for(var i=0 ;i<$(".select_sd:checked").length;i++){
                            check_num=$(".select_sd:checked").eq(i).index(".select_sd")+1;
                            $(".se_regist_r_b tbody tr").eq(check_num).remove();
                        }
                        alert("删除成功！");
                    }
                    else{
                        alert("删除失败！");
                    }


                },
                error:function(){
                    //alert("请求失败！");
                }
            });
            return true;
        }else{
       return false;
    }
}
//编辑
function registUp() {
    $(".xgfl_upd").removeClass("displayNone").addClass("displayBlock");
    $(".regist_add").removeClass("displayBlock").addClass("displayNone");
    if($(".select_sd:checked").length==0){
        alert("请选择一个项目编辑！");
    }
    else{
        if($(".select_sd:checked").length>1){
            alert("只能选择1个项目进行修改！");
        }
        else{
            var val_count=[];
            var rel=/(^\s*)|(\s*$)/g;
            var tr_num=$(".select_sd:checked").index(".select_sd")+1; //第二版
            for(var i=1; i<$(".tr_t td").length ;i++){
                val_count.push($(".se_regist_r_b tr:nth-child("+tr_num+") td").eq(i).html().replace(rel, ""));
            }
            for(var l_length=0;l_length<$(".addCon .xgfl_type option").length ; l_length++){
                if($(".addCon .xgfl_type option").eq(l_length).html()==val_count[2]){
                    $(".addCon .xgfl_type option").eq(l_length).get(0).selected=true;
                }
            }

            $(".addCon .fwcname").attr("value",val_count[3]);
            $(".addCon .xgfl_bewrite").attr("value",val_count[4]);
            $(".addCon .xgfl_tb").attr("value",val_count[5]);
            $(".addCon .xgfl_dgurl").attr("value",val_count[8]);
            $(".addCon .xgfl_seturl").attr("value",val_count[9]);

            if(val_count[10]!=""){
                $(".addCon .xgfl_sh").attr("value",val_count[10]);
            }
            $(".xgfl_upd").off("click");
            $(".xgfl_upd").on("click",xgflUpd)
        }
    }
}

//编辑框保存
function xgflUpd() {
    var tr_num=$(".select_sd:checked").index(".select_sd")+2;
    var upd_id=$(".se_regist_r_b table tr:nth-child("+tr_num+") td").eq(2).html();
    var upd_xm=encodeURIComponent("parentid='"+$(".xg_form_list .xgfl_type").val()+
        "',servicename='"+$(".xg_form_list .fwcname").val()+
        "',description='"+$(".xg_form_list .xgfl_bewrite").val()+
        "',ico='"+$(".xg_form_list .xgfl_tb").val()+
        "',subscribeurl='"+$(".xg_form_list .xgfl_dgurl").val()+
        "',setupurl='"+$(".xg_form_list .xgfl_seturl").val()+
        "',checkmode='"+$(".xg_form_list .xgfl_sh").val()+"'");
    $(".xg_form_list").css({"display":"block"});
    $(".xgfl_upd").css({"display":"inline-block"});


    $.ajax({
        type:"POST",
        url:"../../../subscribe/subscribe_api.php",
        data:"interface=updateservice&sql_itemAndValue="+upd_xm+"&id="+upd_id,
        dataType:"json",
        success:function(up_str){
            if(up_str.result=="TRUE"){
                alert("更新成功！");
                console.log(upd_xm);
                //window.location.reload();
            }
            else{
                alert("更新失败！")

            }

            $(".xg_form_list").css({"display":"none"});
            $(".xgfl_upd").css({"display":"none"});

        },
        error:function(){
            alert("请求失败！");
        }
    }); /* */
}

//添加方法
function registAdd() {
    $(".regist_add").removeClass("displayNone").addClass("displayBlock");
    $(".xgfl_upd").removeClass("displayBlock").addClass("displayNone");
    $(".xg_form_list li input").val("");
    $(".xgfl_in").bind("click",function(){
        var parentid=encodeURIComponent($(".xg_form_list .xgfl_type").val());
        var servicename=encodeURIComponent($(".xg_form_list .fwcname").val());
        var description=encodeURIComponent($(".xg_form_list .xgfl_bewrite").val());
        var ico=encodeURIComponent($(".xg_form_list .xgfl_tb").val());
        var subscribeurl=encodeURIComponent($(".xg_form_list .xgfl_dgurl").val());
        var setupurl=encodeURIComponent($(".xg_form_list .xgfl_seturl").val());
        var checkmode=encodeURIComponent($(".xg_form_list .xgfl_sh").val());
        $.ajax({
            type:"POST",
            url:"./subscribe/subscribe_api.php",
            data:"interface=addService&parentid="+parentid+"&servicename="+servicename+"&des="+description+"&ico="+ico+"&subscribeurl="+subscribeurl+"&setupurl="+setupurl+"&checkmode="+checkmode,
            dataType:"json",
            success:function(up_str){
                if(up_str.result=="TRUE"){
                    alert("插入成功！");
                    window.location.reload();
                }
                else{
                    alert("插入失败！");
                }
            },
            error:function(){
                alert("请求失败！");
            }
        });
    })

}


