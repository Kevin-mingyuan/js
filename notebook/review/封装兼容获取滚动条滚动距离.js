function getScrollOffset(){
    if(window.pageXOffset){//现代浏览器具备
        return {
            left:window.pageXOffset,
            top:window.pageYOffset,
        }
    };
    
    //兼容ie低版本
    return {
        left:document.body.scrollLeft + document.documentElement.scrollLeft,
        top:document.body.scrollTop + document.documentElement.scrollTop,
    }
}