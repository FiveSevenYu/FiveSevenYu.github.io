/**
 * Created by Yu on 2016/10/19.
 */
//跨浏览器取得窗口距屏幕左边和上边的位置。
var leftPos = (typeof  window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof  window.screenTop == "number") ? window.screenTop : window.screenY;
//获得页面视口的大小
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

if(typeof  pageWidth != 'number'){
    if(document.compatMode == "CSS1Compat"){
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    }else{
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
//调整浏览器窗口的大小
window.resizeTo(100,100);
//打开一个新窗口
window.open("http://www.wrox.com","topFrame");
//超时调用和间歇调用
setTimeout(function(){},1000);
setInterval(function () {},1000);
//location对象
// location.hostname 返回web主机的域名
// location.pathname  返回当前页面的路径和文件名
//location.poat 返回主机的端口号
//location.protocol 返回所使用的web协议（http://或 https://)
//location.href 返回当前页面的URL
//location.assign 加载新的文档

//screen对象  availHeight屏幕的像素高减掉系统部件高度之后的值  availWidth 屏幕的像素宽度减掉系统不见宽度之后的值
//屏幕的高和宽  screen.Height screen.Width
window.resizeTo(screen.availWidth,screen.availHeight);