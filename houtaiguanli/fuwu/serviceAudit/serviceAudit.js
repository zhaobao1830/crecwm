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
    $(".serviceAudit").removeClass("liNoClick").addClass("liClick")

    var leftHeight=$(".left").height()
    var samContentHeight=$(".samContent").height()
    if(leftHeight>samContentHeight){
        $(".samContent").height(leftHeight)
        // 获取samCon高度
        $(".samCon").height(leftHeight-158)
    }else{
        $(".left").height(samContentHeight)
    }


    //给thead tr img绑定click事件
    $("thead tr th img").on("click",function () {
        if($(this).hasClass("thiNoClick")){
            $(this).removeClass("thiNoClick")
            $(this).attr("src","img/sau_032.png")
            $("tbody tr td img").each(function () {
                $(this).removeClass("triNoClick")
                $(this).attr("src","img/sau_042.png")
                $(this).parent().parent().addClass("trClick")
            })
        }else{
            $(this).addClass("thiNoClick")
            $(this).attr("src","img/sau_031.png")
            $("tbody tr td img").each(function () {
                $(this).addClass("triNoClick")
                $(this).attr("src","img/sau_041.png")
                $(this).parent().parent().removeClass("trClick")
            })
        }
    })
    // 给tbody下的img绑定click事件，点击的时候判断，有triNoClick就添加triClick，tr背景改变
    $("tbody tr td img").on("click",function () {
        if($(this).hasClass("triNoClick")){
            $(this).removeClass("triNoClick")
            $(this).attr("src","img/sau_042.png")
            $(this).parent().parent().addClass("trClick")
        }else{
            $(this).addClass("triNoClick")
            $(this).attr("src","img/sau_041.png")
            $(this).parent().parent().removeClass("trClick")

            $("thead tr th img").addClass("thiNoClick")
            $("thead tr th img").attr("src","img/sau_031.png")
        }
    })


    //刚进来页面，对服务框进行查询
    selectservice();

    //通过选择服务找到套餐列表
    $(".fw_opchoice").off("change");
    $(".fw_opchoice").on("change",function(){
        $(".tc_chioce").html("");
        tc_nameget($(".fw_opchoice").val());
    });

    //给查询按钮绑定事件
    $(".samSearch").on("click",serviceAuditSearch)

    //点击驳回
    $(".sh_return").off("click");
    $(".sh_return").on("click",function(){
        var check_num="";
        var sp_jg="";
        if(confirm("是否确定驳回申请？")){

            for(var i=0 ;i<$(".check_ch:checked").length;i++){
                check_num=$(".check_ch:checked").eq(i).index(".check_ch")+2;
                sp_jg=$(".se_rv_r_r tbody tr:nth-child("+check_num+") td").eq($(".se_rv_r_r tbody .tr_t td").length-1);
                sp_subid=sp_jg.attr("subid");
                sp_html=sp_jg.html();
                sp_rpass(sp_subid,"驳回",sp_jg);
            }
        }
    });

    //点击审批
    $(".sh_pass").off("click");
    $(".sh_pass").on("click",function(){

        var check_num="";
        var sp_jg="";
        for(var i=0 ;i<$(".check_ch:checked").length;i++){
            check_num=$(".check_ch:checked").eq(i).index(".check_ch")+2;
            sp_jg=$(".se_rv_r_r tbody tr:nth-child("+check_num+") td").eq($(".se_rv_r_r tbody .tr_t td").length-1);
            sp_subid=sp_jg.attr("subid");
            sp_html=sp_jg.html();
            sp_rpass(sp_subid,"审批通过",sp_jg,"审批通过");
        }
    });

    //设置金额
    $(".sh_setxianxia").off("click");
    $(".sh_setxianxia").off("click",function(){
        var check_num="";
        var sp_jg="";
        for(var i=0 ;i<$(".check_ch:checked").length;i++){
            check_num=$(".check_ch:checked").eq(i).index(".check_ch")+2;
            sp_jg=$(".se_rv_r_r tbody tr:nth-child("+check_num+") td").eq($(".se_rv_r_r tbody .tr_t td").length-1);
            sp_subid=sp_jg.attr("subid");
            sp_html=sp_jg.html();
            var price=$(".text").val();
            sh_setxianxia(sp_subid,price,sp_jg,"setpriceok");
        }
    });
})

//查询
function serviceAuditSearch() {
    alert("ttt")
    var sql_data="";
    //申请时间
    if($(".sq_fromt").val()!=""){
        sql_data="createtime >'"+$(".sq_fromt").val()+"'";
    }
    else{
        sql_data="1=1"
    }
    if($(".sq_endt").val()!=""){
        sql_data=sql_data+" and"+" createtime <'"+$(".sq_endt").val()+"'";
    }else{
        sql_data=sql_data+" and"+" 1=1";
    }
    //付费时间
    if($(".pay_fromt").val()!=""){
        sql_data=sql_data+" and"+" payovertime >'"+$(".pay_fromt").val()+"'";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }

    if($(".pay_endt").val()!=""){
        sql_data=sql_data+" and"+" payovertime <'"+$(".pay_endt").val()+"'";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }

    //服务名
    if($(".fw_opchoice").val()!=""){
        sql_data=sql_data+" and"+" serviceid <'"+$(".fw_opchoice").val()+"'";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }

    //套餐
    var se_name_l="";
    for(var l_length=0;l_length<$(".se_name input").length ; l_length++){
        if($(".se_name input").eq(l_length).get(0).checked){
            se_name_l=se_name_l+","+$(".se_name input").eq(l_length).val();
        };
    }

    if(se_name_l.substring(1)!=""){
        sql_data=sql_data+" and"+" servicetypeid in ("+se_name_l.substring(1)+")";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }
    //是否付费
    if($(".se_fufei_ch").val()!=""){
        sql_data=sql_data+" and"+" paystatus ='"+$(".se_fufei_ch").val()+"'";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }

    //是否审批
    if($(".se_sp_ch").val()!=""){
        sql_data=sql_data+" and"+" approvalstatus ='"+$(".se_sp_ch").val()+"'";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }

    //客户名称
    if($(".kehu_name").val()!=""){
        sql_data=sql_data+" and"+" company like '%"+$(".kehu_name").val()+"%'";
    }
    else{
        sql_data=sql_data+" and"+" 1=1";
    }

    $.ajax({
        type:"POST",
        url:"./subscribe/subscribe_api.php",
        data:"interface=selectSub&sql="+sql_data,
        success:function(fwsh_l){
            var rel_n=/null/g;
            fwsh_l=fwsh_l.replace(rel_n,'""');
            fwsh_l=JSON.parse(fwsh_l);
            var payovertime="";
            if(fwsh_l.result=="TRUE"){
                $(".sam_table tbody").html("");
                var a =1
                for(var i in fwsh_l.detail){
                    if(fwsh_l.detail[i].payovertime){
                        payovertime=fwsh_l.detail[i].payovertime.split(" ")[0];
                    }
                    else{
                        payovertime="";
                    }
                    $(".sam_table tbody").append('<tr>'+
                        '<td class="line1"><input type="checkbox" class="check_ch" /></td>'+
                        '<td class="line1111">'+a+++'</td>'+
                        '<td class="line2">'+fwsh_l.detail[i].createtime.split(" ")[0]+'</td>'+
                        '<td class="line3">'+fwsh_l.detail[i].gsuser+'</td>'+
                        '<td class="line3">'+fwsh_l.detail[i].company+'</td>'+
                        '<td class="line4" serviceid="'+fwsh_l.detail[i].serviceid+'">'+fwsh_l.detail[i].servicename+'</td>'+
                        '<td class="line5" servicetypeid="'+fwsh_l.detail[i].servicetypeid+'">'+fwsh_l.detail[i].servicetypename+'</td>'+
                        '<td class="line6">'+fwsh_l.detail[i].ordercount+'</td>'+
                        '<td class="line6">'+fwsh_l.detail[i].ordertime+'</td>'+
                        '<td class="line7">'+fwsh_l.detail[i].sourcefrom+'</td>'+
                        '<td class="line8">'+fwsh_l.detail[i].paystatus+'</td>'+
                        '<td class="line9">'+fwsh_l.detail[i].paystyle+'</td>'+
                        '<td class="line10">'+fwsh_l.detail[i].actualpayments+'</td>'+
                        '<td class="line11">'+fwsh_l.detail[i].amountpayable+'</td>'+
                        '<td class="line12">'+payovertime+'</td>'+
                        '<td class="line13" subid="'+fwsh_l.detail[i].subid+'">'+fwsh_l.detail[i].approvalstatus+'</td>'+
                        '</tr>');
                }

            }
            else{
                $(".sam_table tbody").html("");
                alert("查询数据为空！")
            }
        },
        error:function(){
            //alert("请求失败！");
        }

    });
}

//服务查询
function selectservice() {
    $.ajax({
        type:"POST",
        url:"./subscribe/subscribe_api.php",
        data:"interface=selectservice",
        dataType:"JSON",
        success:function(fw_list){
            if(fw_list.result=="TRUE"){
                for(var i in fw_list.detail){
                    $(".fw_opchoice").append('<option value="'+i+'">'+fw_list.detail[i]+'</option>');
                }
                $(".fw_opchoice").append('<option value="" selected ="selected">全部</option>');
                tc_nameget($(".fw_opchoice").val());

            }
            else{
                //alert("查询失败！");
            }
        },
        error:function(){
            //alert("请求失败！");
        }

    });
}

//获取套餐名称函数
function tc_nameget(id){
    $.ajax({
        type:"POST",
        url:"./subscribe/subscribe_api.php",
        data:"interface=selectservicetype&id="+id,
        dataType:"JSON",
        success:function(tc_list){
            if(tc_list.result=="TRUE"){
                $(".tc_chioce").html("");
                for(var i in tc_list.detail){
                    $(".tc_chioce").append('<div>'+
                        '<label>'+
                        '<input type="checkbox" name="se_name" value="'+i+'"/>'
                        +tc_list.detail[i]+
                        '</label>'+
                        '</div>');
                }
                //给label绑定click事件
                $(".tc_chioce >div>label").on("click",tc_choice)
            }
            else{
                //alert("查询失败！");
            }

        },
        error:function(){
            //alert("请求失败！");
        }

    });
};

//套餐点击
function tc_choice() {
    if($(this).hasClass("tcClick")){
        $(this).removeClass("tcClick")
        $(this).find("input").prop("checked",false)
    }else{
        $(this).addClass("tcClick")
        $(this).find("input").prop("checked",true)
    }
}

//审批函数
function sp_rpass(id,approvalstatus,obj,ps_rt){
    $.ajax({
        type:"POST",
        url:"./subscribe/subscribe_api.php",
        data:"interface=approval&subid="+id+"&approvalstatus="+approvalstatus,
        dataType:"JSON",
        success:function(tc_list){
            console.log(tc_list)
            if(tc_list.result=="TRUE"){
                obj.html(approvalstatus);
                if(ps_rt=="审批通过"){
                    alert("审批通过！");
                }




            }
            else{
                //alert("查询失败！");
            }

        },
        error:function(){
            //alert("请求失败！");
        }

    });
}

//设置金额
function sh_setxianxia(id,price,obj,ps_rt){
    $.ajax({
        type:"POST",
        url:"./subscribe/subscribe_api.php",
        data:"interface=setxianxia&subid="+id+"&setxianxia="+price,
        dataType:"JSON",
        success:function(tc_list){
            console.log(tc_list)
            if(tc_list.result=="TRUE"){
                //obj.html(ps_rt);
                if(ps_rt=="setpriceok"){
                    alert("setpriceok！");
                }
            }
            else{
                //alert("查询失败！");
            }

        },
        error:function(){
            //alert("请求失败！");
        }

    });
}