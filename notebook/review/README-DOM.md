### DOM 学习笔记

DOM 结构树
                                    Node
                                      |
    1.Document      2.CharacterData        3.Element        4.Attributes
        |               |                      |
    1.HTMLDocument  2.Text                 3.HTMLElement 
                    2.Comment                  |
                                           3.HTMLHead Element
                                           3.HTMLBody Element
                                           3.HTMLTitle Element
                                           3.HTMLParagraph Element
                                           3.HTMLInput Element
                                           3.HTMLTable Element
                                           3.HTMLOthers Element

函数内部声明变量加_ 代表私有变量

重绘 css发生改变 改变样式
回流 dom节点发生改变 重新渲染
重绘不一定回流 但 回流一点重绘

### for可以拆开写
var i = 0;
for(;i<5;){
    i++;
}

DOM -> Document Object Model 文档对象模型
DOM 对象 宿主对象
JavaScript 
3种对象
1.本地对象 Native Object
    ECMA提供 包装类
    Object Function Array String Number Boolean
    Error EvalError SyntaxError RangeError
    ReferenceError TypeError URIEError
    Date RegExp

2.内置对象 Built-in Object
    Global(属性：Infinity , NaN , undefined) Math

本地对象和内置对象都是ECMA的内部对象

3.宿主对象 Host Object
    执行JS脚本的环境提供的对象 ，又称浏览器对象（兼容性问题）
    浏览器对象Window(BOM)和document(DOM -> W3C规范)

DOM:通过浏览器提供的一套方法表示或者操作HTML和xml
DOM操作不了css 是操作节点上的style属性进行添加css样式权重高
发展历史： XML -> XHTML -> HTML


### 兼容性问题
！！！  IE8及以下 document.getElementById() 获取DOM id 不分大小写 标签上写name 此方法也会获取到节点 

### 规范
id成为钩子 模块化外层定义 能不用id就不用

### 类数组 = 对象(模拟的数组)

querySelector 参数支持css class、id 标签名 如多个class重复 或者 节点重复 选择第一个节点 可支持节点嵌套 div > span
querySelectorAll 参数支持css class、id 标签名  选择全部匹配的 可支持节点嵌套 div span
一般不用 致命缺陷 不支持实时dom操作 如删除一个节点 打印 还是原来的节点

### 节点包含元素 不等于元素 -> 元素节点 -> DOM元素

### 获取节点方法 
id -> document.getElementById()
class -> document.getElementsByClassName()
name -> document.getElementsByName()
标签名 -> document.getElementsByTagName();
id、class、标签名 （单个） -> document.querySelector();
id、class、标签名 （多个） -> document.querySelectorAll();

### 遍历DOM树 
parentNode 获取父节点 顶级null (封装兼容IE8+)
childNodes 获取子节点以下 6点 (封装兼容IE8+)
nodeType 返回以下   
1.元素节点 <div></div> = 1
2.属性节点 <div id="我是属性节点--"></div>  = 2 
3.文本节点 text 我是文本节点 (换行的空白也算文本节点) = 3
4.注释节点 <!-- --> comment = 8
5.document = 9
6.DocumentFrament/文档碎片 = 11

firstChild 获取第一个节点 
lastChild 最后一个节点

nextSibling 获取下一个兄弟节点 
previousSibling 获取上一个兄弟节点

### 遍历元素节点树
parentElement 获取父级元素节点 (IE9级以下不支持)
children 获取子节点元素 (IE7级以下不支持)
childElementCount = children.length (IE9级以下不支持)
firstElementChild 获取第一个元素节点 (IE9级以下不支持)
lastElementChild 获取最后一个元素节点 (IE9级以下不支持)
nextElementSibling 获取下一个兄弟元素节点 (IE9级以下不支持)
previousElementSibling 获取上一个兄弟元素节点 (IE9级以下不支持)


### 节点属性
nodeName 返回名字(大写) 大写 -> 小写( .toLowerCase() ) 小写 -> 大写( .toUpperCase() ) 只读
nodeValue (属性|文本->纯文字节点|注释)节点有 可写
获取元素节点属性 .getAttribute() 返回value    .getAttributeNode('name').value 返回 key=value
nodeType 返回节点对应编号 只读

### 类数组 增加对象的push方法
let obj = {
    '0':0,
    '1':1,
    'length':2,
    'push':Array.prototype.push, //继承Array方法
    'splice':Array.prototype.splice, //长得和数组一样
}

### 节点属性方法
attributes 获取节点上所有属性
getAttribute() 获取节点上单个属性
setAttribute() 设置添加节点上的一个属性
hasChildNodes() 判断一个节点有没有子节点的方法
节点.className 设置class

### 原型
document.__proto__ = HTMLDocument.prototype;
HTMLDocument.__proto__ = Documnt.prototype;  
实例document 通过__proto__ 访问上级HTMLDocument原型对象 进行原型继承

### 节点方法
appendChild() 在节点下添加尾部添加子节点 还可以剪切功能(将已有的DOM移动剪切到其他地方)  Node.prototype下
insertBefore(a,b) 在父节点下的子节点b 之前 插入a节点
removeChild(子节点) 删除父节点下的子节点 孙子以及重孙子...节点不可删除
remove() 删除当前节点
innerText()
innerHTML()

### H5新增属性访问 data-
在节点上添加以data- 标准的属性 如:data-test
可通过 节点.dataset 获取对象集合
<a href="javascript:;" data-url="biadu" /> window.open('www.baidu.com');

### 文档碎片 
let frag = document.createDocumentFragment();
frag.append('生成的节点');

### 日期对象 moment.js 时间戳网站
var date = new Date(); 实例化 new Date("1996-10-31 10:31:00") new Date("时间戳")
.getDate() 返回当月的几号 1-31
.getDay() 返回一周的第几天 0-6 周日 0 周一-周五 1-6
.getMonth() 返回是第几个月 0-11 
.getFullYear() 返回年
.getHours() 返回小时
.getMinutes() 返回分钟
.getSeconds() 返回秒
.getMilliseconds() 返回毫秒
.getTime() 时间戳 计算机纪元时间 1970年1月1日0时0分0秒 可用于倒计时 计算时间早晚

.setTime('时间戳') 返回新设置的时间
.setFullYear() 设置年
.setMonth() 设置月
.setDate() 设置日
.setHours() 设置小时
.setMinutes() 设置分钟
.setSeconds() 设置秒
.setMilliseconds() 设置毫秒

### 计时器 延时器
setInterval(()=>{},1000)  每隔多少毫秒执行一次函数
setInterval(test,1000) function test();
setInterval("test()",1000) function test();

clearInterval('var') 清除计时器

setTimeout(()=>{},1000) 延时多少毫秒执行一次
...
clearTimeout('var') 清除延时器

let timer1 = setInterval(); timer === 1
let timer2 = setInterval(); timer === 2 ...往下延续

example => 计算已经过去了多少时间
var date1 = new Date().getTime();
var date2 = new Date().getTime();
var date3 = date2 - date1; //时间之差
date3/1000/60 计算多少分钟

节点div... 增加原型对象上的方法  Element.prototype.方法 = function(){}

### 滚动条
### 查看滚动条的距离
window.pageXOffset/pageYOffset (常规方法 IE9/IE8不支持)
IE9/8及以下支持：
    document.body.scrollLeft/scrollTop
    document.documentElement.scrollLeft/scrollTop

window.scrollX/scrollY (不常见的)

### 浏览器的怪异模式和标准模式  向后兼容性 9代也会兼容前面8代一般兼容在此之前面5代
<!DOCTYPE html> 写了此行代码必须兼容w3c规范(标准模式) 否则无规范-爱咋写咋写(怪异模式)
判断什么模式 打印 document.compatMode
    ( CSS1Compat - 标准模式 )
    ( BackCompat - 怪异模式 )

### 浏览器可视区域的宽高 (窗口的宽高)
常规写法：window.innerWidth/innerHeight (es5规范的)
IE9/8及以下的方法
    标准模式下: document.documentElement.clientWidth/clientHeight
    怪异模式下: document.body.clientWidth/clientHeight

### 浏览器滚动页面 的整体距离  可视区域 + 滚动距离
document.body.scrollHeight/scrollWidth  === window.innerHeight/innerWidth + window.pageXOffset/pageYOffset
document.documentElement.scrollHeight/scrollWidth

### offsetTop offsetLeft
tips:如果有父级且有定位元素就以定位属性的div为准(子div到父级的左/上距离) 
如果层层往上找不到就以body为准(子div到body的左/上距离)

### offsetParent 找有定位的父级元素 层层往上找 如没有找到body 再上就是null

### 操作滚动条
window.scroll(x,y) window.scrollTp(x,y)  滚动到多少距离
window.scrollBy(x,y) 每次滚动多少距离

### css保留字js操作改变style  div.style.cssFloat = 'left' 需要在前面加上css

### 获取div样式全部 window.getComputedStyle(elem,null)
IE8及以下不支持 使用的是 elem.currentStyle
offsetWidth offsetHeight 存在兼容问题 会把padding计算进去
获取伪元素的宽高 window.getComputedStyle(elem,'before/after') 第二个参数后面跟伪元素名称 *** 只读

修改伪元素 新写一个class 然后新写的class后面添加伪元素
.div::after{width:50px;height:50px;background-color:red; } .div.active::after{background:blue;} className += active

