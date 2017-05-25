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
  var chart = new Highcharts.Chart('dcResult-show', {
    title: {
    text: '销售总金额（元）'
  },
  colors: ['#cb2a2d'],
  xAxis: {
    categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
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
  series: [{
    name: '东京',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }]
});
}