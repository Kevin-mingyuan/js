### JavaScript 基础知识

### 1.变量 2.数据结构 3.函数 4.运算能力

### 变量
    声明：企业开发
    不能以数字开头
    能 _ 字母 $开头的
    除开头内容可以包含_ $ 字母
    关键字 保留字不可用
    语义化 结构化
    小驼峰命名

### JS的值 
    动态语言 -> 脚本语言 -> 弱类型语言(需要经过值来判断声明的变量类型)
    静态语言 -> 编译型语言 -> 强类型语言

    原始值 -> 基本类型
    Number String Boolean undefined null

    引用值
    Object Array Function Date RegExp

### 栈Stack 和 堆Heap
    栈 遵循 先入后出
    堆
    var arr1 = [1,2,3];
    var arr2 = arr1;
    arr1.push(6);//影响

    arr1 = [7,9];//不影响
    console.log(arr2)

### 逻辑运算符
    undefined null NaN "" 0 false 除这些外其他都为真

### for循环
    break用于完全结束一个循环，跳出循环体执行循环后面的语句。(后续不会循环)
    continue是跳过当次循环中剩下的语句，执行下一次循环。(跳出当前为true的循环，后续继续循环)

### 三目运算符
    var num = 5;
    if(num > 0){
        if(num > 3){
            cosnole.log('大于3')
        }else{
            console.log("小于3")
        }
    }else{
        cosnole.log('小于0')
    }

    var str = num > 0 ? ( 
                            num > 3 ? console.log("大于3") 
                                    : console.log("小于3")
                        )
                      : console.log("小于0");

---------------------------------------------------------------------
    if(num < 0){
        cosnole.log('小于0')
    }else{
        if(num > 3){
            cosnole.log('大于3')
        }else{
            console.log("小于3")
        }
    }
    var str = num < 0 ? console.log("小于0")
                      : ( 
                          num > 3 ? console.log("大于3") 
                                  : console.log("小于3") 
                        );

----------------------------------------------------------------------------
    if(num > 3 && num < 5){
        console.log('num > 3')
    }else if(num <3){
        console.log('num < 3')
    }else if(num > 6 && num < 8){
        console.log('num > 4 && num < 6')
    }else{
        console.log('hello num')
    }

    num > 3 && num < 5 ? console.log('num >3')
            : num < 3 
            ? console.log('num < 3')
            : num > 6 && num < 8 
            ? console.log('num > 4 && num < 6')
            :console.log('hello num')
              
### unicode涵盖ASSCII码 
    0-127 128-255后都是两个字节
    var str = "a"
    var pos = str.charCode(index); //传入字符串的下标

### 函数式编程
    高内聚 低耦合
    
    表达式方式定义函数是匿名函数(函数字面量)
    var test = function(){ }

### 函数的形参与实参
    arguments
    函数内部可以更改传入实参的值 不能更改未传入的实参
    function test(a,b){
        a = 3;
        b = 3;
        console.log(arguments[0]);//3
        console.log(arguments[1]);//undefined
    }
    test(1);

### 函数默认值
    保留a默认值 b实参 a传入undefined
    function test(a = 1, b){

    }
    test(undefined,2)

    es5兼容写法
    function test(a){
        var a = arguments[0] || 1;//如果arguments[0] 不存在 那就取1
    } 
    test();

### && ||
    var b = a || 12; //12 a为undefined即false 返回12
    var b = true || 12 ;// 返回true;

    var c = d && 12;//undefined d为undefined即false 返回undefined
    var c = true && 12;// 12

### 函数作用域


### 递归
    有出口 有规律值
    function fact(n){
        if(n === 1){
            return 1; //此时赋值 下面return才进行运算
        }
        return n * fact(n-1);
    }

    fact(5) = 5 * fact(4) //5*24
    fact(4) = 4 * fact(3) //4*6
    fact(3) = 3 * fact(2) //3*2
    fact(2) = 2 * fact(1) //此时的fact(1) 又返回值了1 在右边赋值 fact(2) 就是2

### 立即执行函数 IIFE
    两种方式
    (function(){

    })()
    (function(){

    }()) //w3c规范

    函数声明变成表达式的方法 在函数前 + - ! || &&
    ! function test(){ //函数名将被自动忽略
        console.log(1);
    }();
 
    function test(a){
        console.log(a)
    }(1)
    ===
    function test(a){
        console.log(a);
    }
    var num = (1);
    console.log(num , 'num')

### 逗号运算
    console.log((1,2));//返回后面的2 只会返回最后一个

### 函数的call 和 apply
    function test(){

    }
    test.call(); //隐式添加call方法

    function Car(brand, color){
        this.brand = brand;
        this.color = color;

        this.run = function (){
            console.log("run")
        }
    }
    Car.prototype.run = function (){
        return 'run'
    }

    var car = new Car();

    var newCar = {};

    Car.call(newCar, "car", "yellow");
    Car.apply(newCar, ["car", "yellow"])
    //此时的this指向了newCar, newCar有了Car的属性和方法

    example ===
    function computed(color){
        this.color = color
        this.add = function(a,b){
            console.log(a + b);
        }
    }

    function FullComputed(){
        computed.apply(this); //借用computed上的方法及属性
        this.add2 = function(a,b){
            console.log(a + b);
        }
    }

    var comp = new FullComputed();
    console.log(comp);

    方法挂载this上 改变this即获取对方的this上的方法及属性

### 预编译
    1.检查通篇的语法错误
    1.5 预编译的过程
    2.解释一行执行一行

    函数声明整体提升, 变量只有声明才提升
    赋值是不提升的

    console.log(a); //a(a){ var a = 10; a = function(){ console.log('a') } }
    function a(a){
        var a = 10;
        a = function(){
            console.log('a')
        }
    }
    a = 1;
    提升顺序 变量赋值 > 函数赋值 所以看最后赋值

    function test(){
        var a = b = 1;//b放到全局变量上了
    }
    test();

    全局变量 GO global object 
    1.找变量
    2.找函数声明
    3.执行
    GO = {
        a:undefined -> function(){}
    }
    GO === window

### 函数预编译 AO 全局变量GO === window
    活跃对象 函数上下文
    1.寻找形参和变量声明
    2.实参值赋值给形参
    3.找函数声明 赋值
    4.执行
    function test(a){
        console.log(a , 1); //a()
        var a = 2;
        console.log(a , 2); //2
        function a(){
            console.log("a");
        }
        console.log(a , 3); //2
    }
    test(1)
    AO = {
        变量1:undefined 
            -> 形参 
            -> 函数声明
            (然后执行 如果有变量1重新赋值 则再赋值上例为2)
        变量2:
    }
    只有调用函数时候前才会生成AO 并且查询变量会先查询AO后查询GO
    每个函数内都有GO

### 对象
    对象增加删除
    var obj = {};
    obj.add = 'add'; 增加
    delete obj.add; 删除

### 实例化
    this指向 new出来的实例化 而不是构造函数
    example this原理
    function Car(){
        //相当于 this = {color:'red',height:"187"} 

        this.color = "red";
        this.height = "187"

        //return this; 系统隐式返回this 如果是简单类型无视掉 如果是引用类型则返回引用类型
    }
    var car = new Car(); //new是为了改变this指向 指向car 系统自动转向this指向而已
    car.color 访问就相当于直接访问this内的属性

    //全局
    GO = {
        car:{ //指向this car
            color:...
        }
    }
    //函数预编译 放入this
    AO = {
        this = {
            color:...
        }
    }

    普通方式
    function Car1(){
        var me = {}
        me.color = "red";
        me.height = 187;

        return me;
    }
    var car1 = Car1();

### 包装类
    new Number() new String() new Boolean()
    var num = 123;
    num.len = 3;
    系统会转成对象 new Number(123).len = 3 但是这又不是一个对象 会删除key 所以undefined
    console.log(num.len) //undefined
    "str".length 包装了length

### 数组截断方法
    var arr = [1, 2, 3, 4, 5];
    arr.length = 3;
    cosnole.log(arr) //[1, 2, 3]

### 对象的链式操作
    var obj = {
        a:function(){
            console.log(1);
            return this;
        },
        b:function(){
            console.log(2)
            return this;
        }
    }

    obj.a().b();//执行

### 对象key变量拼接
    var obj = {}；
    obj[num + '1'] = 1;

### hasOwnProperty(key)
    寻找对象自身 不找

### in
    判断对象的key是否存在
    var obj = { a:1 };
    console.log('b' in obj);//false

### instanceof 判断数据类型 只要原型链父级都是true
    他的原型链上有的都返回true
    function Test(){

    }
    var t = new Test();
    console.log(t instanceof Test);//true
    console.log(t instanceof Object);//true

### call apply 
    改变this执行 借用其他函数上挂载的this属性及方法
    call 参数逗号隔开
    apply 参数放入数组

### bind
    bind 改变this指向后 返回的是一个函数并不立即执行
    var p1 = { name:'kevin',hobby:'play', play:function(sex){return this.name + '...' +  sex}}; 
    var p2 = { name:'ming', hobby:'work' };
    var fn = p1.play.bind(p2,'man'); //方法play传参
    console.log( fn() );

### 纯函数
    相同的输入得到的相同的输出,不依赖且不影响外部环境也不产生任何副作用。
    输出完全取决于输入
    副作用：只要跟函数外部环境发生了交互就是副作用(发生数据请求 改变数据 console.log DOM操作 数据的存取cookie... )

    