/**
 * Created by Yu on 2016/10/18.
 */
window.onload = function () {
    imgLocation('container','box')
}

function imgLocation(parent,content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor( document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText ='width:'+imgWidth*num+'px;margin:0 auto';
    var boxHeightArr= [];
    for(var i=0;i<ccontent.length;i++){
       if(i<num){
           boxHeightArr[i] = ccontent[i].offsetHeight;
       }else{
           var minHeight = Math.min.apply(null,boxHeightArr);
           var minIndex = getminheightLocation(boxHeightArr,minHeight);

           ccontent[i].style.position = 'absolute';
           ccontent[i].style.top = minHeight + 'px';
           ccontent[i].style.left = ccontent[minIndex].offsetLeft+'px';
           boxHeightArr[minIndex] =boxHeightArr[minIndex]+ccontent[i].offsetHeight;
       }

    }

}
function getminheightLocation(boxHeightArr, minHeight) {
    for(var i in boxHeightArr){
        if(boxHeightArr[i]==minHeight){
            return i;
        }
    }
}

function getChildElement(parent,content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName('*');
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}