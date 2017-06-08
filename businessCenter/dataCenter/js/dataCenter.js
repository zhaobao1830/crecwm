$(function () {
  $('.dccSearch > div > a').on('click',function () {
    if(!$(this).hasClass('aClick')){
      $(this).siblings().removeClass('aClick')
      $(this).addClass('aClick')
    }
  })

  getData()
})

function getData() {
  /**
   2
   * Highcharts 在 4.2.0 开始已经不依赖 jQuery 了，直接用其构造函数既可创建图表
   3
   **/
  $.ajax({
    url:'',
    type:'post',
    data:{}, //参数
    // dataType:"json",  如果是json格式的，就加这个
    success:function (data) {
      var categories=[]
      categories.push(data.ss)
    }
  })
  var chart = new Highcharts.Chart('dcResult-show', {
    title: {
    text: '销售总金额（元）'
  },
  colors: ['#cb2a2d','#000'],
  xAxis: {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月','13']
  },
  yAxis: {
    title: {
      text: ''
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    valueSuffix: 'K'
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [
    {
    name: '东京',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6, 10],
    },
    {
      name: '柏林',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,11]
    }
  ]
});
}