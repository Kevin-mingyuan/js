function getScrollSize(){
    if(document.body.scrollWidth){
        return {
            width:document.body.scrollWidth,
            height:document.body.scrollHeight,
        }
    }else{
        return {
            width:document.documentElement.scrollWidth,
            height:document.documentElement.scrollHeight,
        }
    }
}