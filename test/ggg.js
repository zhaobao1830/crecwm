window.onload = function () {
  new Vue({
    el: '.NBcont',
    delimiters: ['((', '))'],
    data: {
      sortid: 12,
      //列表数据
      listData: {},
      listClass: {
        zbClass: 'se',
        jjClass: '',
        xjClass: '',
        chbClass: '',
        zhbClass: '',
        hgClass: ''
      },
      pangeIndex: 1,
      pangeSearchIndex: 1,
      pageSize:10
    },
    mounted: function () {
      var This = this
      this.getList(This)
      this.getSearch(This)
    },
    methods: {
      changeZB:function(){
        this.sortid = 12
        var This = this
        for(var i in this.listClass){
          this.listClass[i] = '';
        }
        this.listClass.zbClass = 'se';
        this.pangeIndex = 1;
        this.getList(This)
        this.getSearch(This)
      },
      changeJJ:function(){
        this.sortid = 14
        var This = this
        for(var i in this.listClass){
          this.listClass[i] = '';
        }
        this.listClass.jjClass = 'se';
        this.pangeIndex = 1;
        this.getList(This)
        this.getSearch(This)
      },
      changeXJ:function(){
        this.sortid = 15
        var This = this
        for(var i in this.listClass){
          this.listClass[i] = '';
        }
        this.listClass.xjClass = 'se';
        this.pangeIndex = 1;
        this.getList(This)
        this.getSearch(This)
      },
      changeCHB:function(){
        this.sortid = 16
        var This = this
        for(var i in this.listClass){
          this.listClass[i] = '';
        }
        this.listClass.chbClass = 'se';
        this.pangeIndex = 1;
        this.getList(This)
        this.getSearch(This)
      },
      changeZHB:function(){
        this.sortid = 13
        var This = this
        for(var i in this.listClass){
          this.listClass[i] = '';
        }
        this.listClass.zhbClass = 'se';
        this.pangeIndex = 1;
        this.getList(This)
        this.getSearch(This)
      },
      changeHG:function(){
        this.sortid = 18
        var This = this
        for(var i in this.listClass){
          this.listClass[i] = '';
        }
        this.listClass.hgClass = 'se';
        this.pangeIndex = 1;
        this.getList(This)
        this.getSearch(This)
      },
      getList:function(obj) {
        obj.listData = {};
        var scop;
        if (obj.sortid == 16) {
          scop = "&searchoption[156][value]=" + compid + '___';

        }
        if("12|14|15||18".indexOf(obj.sortid + "") != -1)
        {

          scop = "&searchoption[70][value]=" + compid + '___';
        }
        jQuery.ajax({
          type:"GET",
          url: 'api/mobile/index.php?version=1&module=forumdisplay&fid=2&filter=sortid' + scop,
          data: 'sortid=' + obj.sortid + '&page=' + obj.pangeIndex + '&tpp=' + obj.pageSize,
          success: function(str){
            if (str) {
              var data = str.Variables;
              obj.listData = data.forum_threadlist;
              var nowIndex = obj.pangeIndex;
              var pageSize = parseInt(obj.pageSize);
              var total = parseInt(data.maxpage) * parseInt(data.tpp);
              obj.pageNumGetList(nowIndex, pageSize, total, obj);
            }
          }
        })
      },
      pageNumGetList:function(nowIndex, pageSize, total, obj){
        //当前页数
        var smartpage = nowIndex;
        //一页内展示数据量
        var pageSize = pageSize;
        //总数据数
        var totalrecords = total;
        jQuery('#gray').smartpaginator({
          totalrecords: totalrecords, recordsperpage: pageSize, length: 6, next: '下一页', prev: '上一页', first: '首页', last: '尾页', theme: 'gray', controlsalways: true, initval: smartpage, onchange: function (newPage) {
            obj.pangeIndex = newPage;
            smartpage = newPage;
            obj.getList(obj);
          }
        });
      },
      pageNumFormSubmit:function(nowIndex, pageSize, total, obj){
        //当前页数
        var smartpage = nowIndex;
        //一页内展示数据量
        var pageSize = pageSize;
        //总数据数
        var totalrecords = total;
        jQuery('#gray').smartpaginator({
          totalrecords: totalrecords, recordsperpage: pageSize, length: 6, next: '下一页', prev: '上一页', first: '首页', last: '尾页', theme: 'gray', controlsalways: true, initval: smartpage, onchange: function (newPage) {
            obj.pangeSearchIndex = newPage;
            // jQuery(".m-select-wrapper input[name='pagenum']").val(newPage);
            smartpage = newPage;
            obj.formSubmit(obj);
          }
        });
      },
      getSearch: function (obj) {
        var scop;
        if (obj.sortid == 16) {
          scop = "&searchoption[156][value]=" + compid + '___';

        }
        if ("12|14|15||18".indexOf(obj.sortid + "") != -1) {

          scop = "&searchoption[70][value]=" + compid + '___';
        }
        jQuery.ajax({
          type:"GET",
          url: "api_creclb.php?version=1&module=forumdisplay&gaojisongsuo=gaojisongsuo&sortid=12&fid=2" + scop,
          data: 'sortid=' + obj.sortid,
          success:function(str){
            jQuery(".NBListcontent .searchContent").html(str)
            jQuery("button[name='searchsortsubmit']").on("click",obj.formSubmit)
          }
        })
      },
      formSubmit:function() {
        var _this = this
        var actionVal = jQuery("#searhsort").attr("action")+'&page=' + _this.pangeSearchIndex + '&tpp=' + _this.pageSize; // form表单的action
        var sortidVal = ''
        var actionList = []
        var data = '' // 参数
        var url = actionVal; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
        }
        sortidVal = theRequest['sortid']
        var classify = 'material'
        var _64_type = 'radio'
        var formhash = 'ddec8796'
        //  分类搜索
        var mcode = ''
        var chioceListSpan = jQuery(".chioceList span")
        for(var i=0;i<chioceListSpan.length;i++){
          if(mcode.indexOf(",") > 0){
            mcode += ','+ chioceListSpan[i]
          }else{
            mcode += chioceListSpan[i]
          }
        }
        // 区域
        var searchoption_64_value = ''
        searchoption_64_value = jQuery("select[name='searchoption[64][value]'] option:selected").val()
        jQuery("input[name='searchoption[64][value]']").val(0)
        // 招标公告
        var _12ID = [63, 64, 65, 66, 67, 75, 76]
        // 竞争性谈判
        var _14ID = [63, 64, 65, 66, 75, 76]
        // 询价采购
        var _15ID = [63, 64, 65, 66, 75, 76]
        // 澄清补遗
        var _16ID = [66, 80, 81, 155]
        // 中标公示
        var _13ID = [63, 64, 75, 76, 78, 95, 99]
        //  合格供应商招募
        var _18ID = [67, 75, 169, 170, 171]
        // 'sortid=' + obj.sortid + '&page=' + obj.pangeIndex + '&tpp=' + obj.pageSize,
        if (parseInt(sortidVal) === 12){
          data += 'classify=' + classify
          for (var i = 0; i < _12ID.length; i++) {
            data += '&searchoption['+_12ID[i]+'][value]=' + jQuery("input[name='searchoption["+_12ID[i]+"][value]']").val()
          }
        }
        if (parseInt(sortidVal) === 14){
          data += 'classify=' + classify
          for (var i = 0; i < _14ID.length; i++) {
            data += '&searchoption['+_14ID[i]+'][value]=' + jQuery("input[name='searchoption["+_14ID[i]+"][value]']").val()
          }
        }
        if (parseInt(sortidVal) === 15){
          for (var i = 0; i < _15ID.length; i++) {
            data += '&searchoption['+_15ID[i]+'][value]=' + jQuery("input[name='searchoption["+_15ID[i]+"][value]']").val()
          }
        }
        if (parseInt(sortidVal) === 16){
          for (var i = 0; i < _16ID.length; i++) {
            data += '&searchoption['+_16ID[i]+'][value]=' + jQuery("input[name='searchoption["+_16ID[i]+"][value]']").val()
          }
        }
        if (parseInt(sortidVal) === 13){
          for (var i = 0; i < _13ID.length; i++) {
            data += '&searchoption['+_13ID[i]+'][value]=' + jQuery("input[name='searchoption["+_13ID[i]+"][value]']").val()
          }
        }
        if (parseInt(sortidVal) === 18){
          for (var i = 0; i < _18ID.length; i++) {
            data += '&searchoption['+_18ID[i]+'][value]=' + jQuery("input[name='searchoption["+_18ID[i]+"][value]']").val()
          }
        }
        jQuery.ajax({
          type: "POST",
          url: actionVal,
          data: data,
          success:function (datas) {
            data = ''
            if (datas) {
              var dataJson = datas.Variables;
              _this.listData = dataJson.forum_threadlist;
              var nowIndex = _this.pangeSearchIndex;
              var pageSize = parseInt(_this.pageSize);
              var total = parseInt(dataJson.maxpage) * parseInt(dataJson.tpp);
              _this.pageNumFormSubmit(nowIndex, pageSize, total, _this);
            }
          },
          error:function (err) {
            alert(err)
          }
        })
        return false
      }
    }
  })
}
