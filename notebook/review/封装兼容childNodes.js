//过滤只留下元素节点

function elemChildren(node){
    var arr = [],
        children = node.childNodes;//缓存一下

    for(var i = 0; i < children.length; i++){
        var childItem = children[i];

        if(childItem.nodeType === 1){
            arr.push(childItem);
        };
    };
    return arr;
}

function newElemChildren(node){
    let children = node.childNodes;
    
    let arr = [] = Array.from(children).filter((item) => {
        if(item.nodeType === 1){
            return item;
        }
    });

    return arr;
}

//类数组实现过滤元素节点
function objElemChildren(node){
    var temp = {
        'length':0,
        'push':Array.prototype.push, //继承Array方法
        'splice':Array.prototype.splice, //长得和数组一样
    };

    let len = node.childNodes.length;

    for(let i = 0; i < len; i++){
        var childItem = node.childNodes[i];

        if(childItem.nodeType === 1){
            temp[temp['length']] = childItem; //value temp[0] -> temp[1] -> temp[2]
            temp['length']++; //key length = 1 length = 2 length = 3
            console.log(temp['length']);
            // temp.push(childItem);
        }
    };
    return temp;
}