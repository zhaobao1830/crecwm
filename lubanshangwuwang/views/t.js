/**
 * Created by zb on 2018/6/7.
 */
new function() {
  this.width = 750; //默认宽度
  this.fontSize = 75; //默认字体大小
  this.widthProportion = () => {
    var p = (document.getElementsByTagName("html")[0].offsetWidth) / this.width;
    return p;
  };
  this.changePage = () => {
    var a = this.widthProportion() * this.fontSize;
    document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + a + "px")
  }
  this.changePage();
  window.addEventListener('resize', () => {
    this.changePage();
  }, false);
};
