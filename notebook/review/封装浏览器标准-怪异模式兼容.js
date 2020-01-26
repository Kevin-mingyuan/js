function getViewportSize(){
    if(window.innerWidth){
        return {
            width:window.innerWidth,
            height:window.innerHeight,
        }
    }else{
        //如果是怪异模式
        if(document.compatMode === "BackCompat"){
            return{
                width:document.body.clientWidth,
                height:document.body.clientHeight,
            }
        }else{
            return {
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientWidth,
            }
        }
    };
}