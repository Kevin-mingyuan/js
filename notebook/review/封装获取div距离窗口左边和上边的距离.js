function getElemDocPostion(el){
    var parent = el.offsetParent,//找到含有定位属性的节点
        offsetLeft = el.offsetLeft,//初始距离左边的距离
        offsetTop = el.offsetTop;

    while(parent){
        offsetLeft += parent.offsetLeft; //父有定位的div左边距离上父级div的左边距离 进行累加
        offsetTop += parent.offsetTop;
        parnet = parent.offsetParent;
    };

    return {
        left:offsetLeft,
        top:offsetTop,
    }
}