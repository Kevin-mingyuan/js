/**
 * @description 计算div宽高
 * @param {*} elem 元素节点
 * @param {*} attr 属性
 */
function getStyles(elem,attr){
    //判断是不是现代浏览器
    if(window.getComputedStyle){
        if(attr){
            return window.getComputedStyle(elem,null)[attr];
        }else{
            return window.getComputedStyle(elem,null);
        }
    }else{
        if(attr){
            return elem.currentStyle[attr];
        }else{
            return elem.currentStyle;
        }
    };
}
