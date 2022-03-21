### Js的数据类型有哪些
基本类型：String、Number、Boolean、Null、Undefined、symbol（ES6）

引用类型：Object、Array、Date、Function、Error、RegExp、Math、Number、String、Boolean、Globle。

js内置类型有七种：String、Number、Boolean、Null、Undefined、Symbol（ES6）、Object

### js基本数据类型和引用类型的区别
- 声明变量时不同的内存分配：

1）原始值：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。(这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – 栈中。这样存储便于迅速查寻变量的值。)

2）引用值：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。(引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。)

- 不同的内存分配机制也带来了不同的访问机制
　　　
1）在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。

2）而原始类型的值则是可以直接访问到的。
　　
- 复制变量时的不同
　　
1）原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。

2）引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。（这里要理解的一点就是，复制对象时并不会在堆内存中新生成一个一模一样的对象，只是多了一个保存指向这个对象指针的变量罢了）。多了一个指针
　
- 参数传递的不同（把实参复制给形参的过程）

原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。

### 判断基本数据类型的方法
判断数据类型的方法一般可以通过：typeof、instanceof、constructor、Object.prototype.toString.call();四种常用方法
- typeof:（可以对基本类型（包括function）做出准确的判断，但对于引用类型，用它就有点力不从心了）,typeof 返回一个表示数据类型的字符串，返回结果包括：number、boolean、string、object、undefined、function、Symbol6种数据类型。

- instanceof（判断是否是某个类的实例）
```
//基本数据类型是没有检测出他们的类型
var str = 'hello';
alert(str instanceof String);//false
var bool = true;
alert(bool instanceof Boolean);//false
var num = 123;
alert(num instanceof Number);//false
var nul = null;
alert(nul instanceof Object);//false
var und = undefined;
alert(und instanceof Object);//false
var oDate = new Date();
alert(oDate instanceof Date);//true
var json = {};
alert(json instanceof Object);//true
var arr = [];
alert(arr instanceof Array);//true
var reg = /a/;
alert(reg instanceof RegExp);//true
var fun = function(){};
alert(fun instanceof Function);//true
var error = new Error();
alert(error instanceof Error);//true

//使用下面的方式创建num、str、boolean，是可以检测出类型
var num = new Number(123);
var str = new String('abcdef');
var boolean = new Boolean(true);
console.log(num instanceof Number)
console.log(num instanceof String)
```

- constructor：查看对象对应的构造函数
> constructor 在其对应对象的原型下面，是自动生成的。当我们写一个构造函数的时候，程序会自动添加：构造函数名.prototype.constructor = 构造函数名
```
var str = 'hello';
alert(str.constructor == String);//true
var bool = true;
alert(bool.constructor == Boolean);//true
var num = 123;
alert(num.constructor ==Number);//true
var nul = null;
//null和undefined是无效的对象，因此是不会有constructor存在的
alert(nul.constructor == Object);//报错
//var und = undefined;
//alert(und.constructor == Object);//报错
var oDate = new Date();
alert(oDate.constructor == Date);//true
var json = {};
alert(json.constructor == Object);//true
var arr = [];
alert(arr.constructor == Array);//true
var reg = /a/;
alert(reg.constructor == RegExp);//true
var fun = function(){};
alert(fun.constructor ==Function);//true
var error = new Error();
alert(error.constructor == Error);//true

//特殊情况
function Aaa(){
}
Aaa.prototype.constructor = Aaa;//程序可以自动添加，当我们写个构造函数的时候，程序会自动添加这句代码
function BBB(){}
Aaa.prototype.constructor = BBB;//此时我们就修改了Aaa构造函数的指向问题
alert(Aaa.construtor==Aaa);//false
//constructor并没有正确检测出正确的构造函数
//备注：使用Object.create()创建的js对象，没有constructor
//null和undefined没有相应的构造形式，而Date，只有相应的构造形式而没有文字形式两者相反
```

- Object.prototype.toString(可以说不管是什么类型，它都可以立即判断出)
> toString是Object原型对象上的一个方法，该方法默认返回其调用者的具体类型，更严格的讲，是 toString运行时this指向的对象类型, 返回的类型格式为[object xxx],xxx是具体的数据类型，其中包括：String,Number,Boolean,Undefined,Null,Function,Date,Array,RegExp,Error,HTMLDocument,... 基本上所有对象的类型都可以通过这个方法获取到
```
var str = 'hello';
console.log(Object.prototype.toString.cal(str));//[object String]
var bool = true;
console.log(Object.prototype.toString.cal(bool))//[object Boolean]
var num = 123;
console.log(Object.prototype.toString.cal(num));//[object Number]
var nul = null;
console.log(Object.prototype.toString.cal(nul));//[object Null]
var und = undefined;
console.log(Object.prototype.toString.cal(und));//[object Undefined]
var oDate = new Date();
console.log(Object.prototype.toString.cal(oDate));//[object Date]
var json = {};
console.log(Object.prototype.toString.cal(json));//[object Object]
var arr = [];
console.log(Object.prototype.toString.cal(arr));//[object Array]
var reg = /a/;
console.log(Object.prototype.toString.cal(reg));//[object RegExp]
var fun = function(){};
console.log(Object.prototype.toString.cal(fun));//[object Function]
var error = new Error();
console.log(Object.prototype.toString.cal(error));//[object Error]
```
其实面试官也经常喜欢让说一种最简单的判断是数组的方法，记住喽是object.prototype.toString.call()哦！

### prototype和__proto__
https://github.com/dreamapplehappy/hacking-with-javascript/blob/master/points/understand-prototype-__proto__.md
## 原型链，继承相关
### Object.defineProperty()

### 箭头函数与普通函数的区别
- this（执行上下文）指向
(1)普通函数中的this：在简单调用中，非严格模式下，指向window。严格模式下，如果this没被指定值，那么才为undefined。
```
function parent() {
    console.log(this);    
}
parent();// window。其实parent()相当于parent.call(window)
'use strict';
function parent() {
   console.log(this);
}
parent(1,2); // undefined
parent.call(1,2); // this为1
function parent() {
   console.log(this);
}
const obj = {
     name: 'ha'
}
parent.call(obj); // this指向obj对象 

//作为某个对象方法调用时，this指向该对象。当该普通函数被间接调用时，即：使用call()和apply()方法调用时，this指向call()和apply()第一个参数。注意：在非严格模式下， 当第一个参数为null或者undefined时，调用函数中的this指向window
```
（2）箭头函数中的this：没有自己的this，内部this的值，依赖于外部非箭头函数的this。箭头函数其实是更简单的函数
```
//箭头函数在定义之后，this 就不会发生改变了，无论用什么样的方式调用它，this 都不会改变；
<!-- /在箭头函数中调用 this 时，仅仅是简单的沿着作用域链向上寻找，找到最近的一个 this 拿来使用 -->
function make () {
  return ()=>{
    console.log(this);
  }
}
const testFunc = make.call({ name:'foo' });
testFunc(); //=> { name:'foo' }
testFunc.call({ name:'bar' }); //=> { name:'foo' }
```
(3)绑定住this
```
function make () {
  var self = this;
  return function () {
    console.log(self);
  }
}
//或者只绑定一个this
function make () {
  return function () {
    console.log(this);
  }.bind(this);
}
```

- 构造函数
1）普通函数可以作为构造函数来用，用new去新建对象实例。

2）箭头函数不能当做构造函数去用，并且，会报错。

- arguments对象
在普通函数中，会自动绑定上的各种局部变量，箭头函数都是十分单纯的沿着作用域链向上寻找，箭头函数更适合函数式编程，除了它更短以外，使用箭头函数也更难被那些没有显示声明的变量影响，导致你产生意料之外的计算结果；
```
function regular() {
   const arrow = (...arg) => {
        console.log(arg); // [[1,2,3], 232] 
    }
    arrow([1,2,3], 232);
}
regular(1,3);//2:[1,2,3],232
```

- 隐式return
1）普通函数：用return去返回一个函数的结果。无return语句，或者return后面无表达式，则返回undefined。
2）箭头函数：如果函数仅有一个表达式，那么该表达式的结果会被隐式返回。

- 当作为回调方法去使用时
1）普通函数:由于普通函数的this，由执行时候确定。那么当做为定时器函数或者事件监听器的回调去执行时，就有this指向的问题了。这时候，你或许需要用bind()方法去绑定this值。
2）箭头函数:箭头函数的this，由定义它的时候，外部非箭头函数中this所决定。因此，如果需要将一个函数作为回调函数去执行，并且，不希望函数中的this发生改变时。那么，非箭头函数就是把利器了。
```
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  }
}
const batman = new Hero('Batman');
setTimeout(batman.logName, 1000);   // after 1 second logs "Batman"

```
### 说说关于this
**但是不管函数是按哪种方法来调用的，请记住一点：谁调用这个函数或方法,this关键字就指向谁**
- 普通函数调用
```
//这个地方person作为window的方法来调用，在代码的一开始定义了一个全局变量name，值为xl,它相当于window的一个属性,即window.name="xl",又因为在调用person的时候this是指向window的，因此这里会输出xl.
function person(){
    this.name="xl";
    console.log(this);
    console.log(this.name);
}
person();  //输出  window  xl

var name="xl";
    function person(){
        console.log(this.name);
}
person(); //输出 xl
```
- 作为方法来调用
```
var name="XL";
    var person={
    name:"xl",
    showName:function(){
        console.log(this.name);
    }
}
person.showName();  //输出  xl
//这里是person对象调用showName方法，很显然this关键字是指向person对象的，所以会输出name
    
var showNameA=person.showName;
showNameA();    //输出  XL
//这里将person.showName方法赋给showNameA变量，此时showNameA变量相当于window对象的一个属性，因此showNameA()执行的时候相当于window.showNameA(),即window对象调用showNameA这个方法，所以this关键字指向window

var personA={
        name:"xl",
        showName:function(){
            console.log(this.name);
        }
    }
    var personB={
        name:"XL",
        sayName:personA.showName
    }
    
    personB.sayName();  //输出 XL
    //虽然showName方法是在personA这个对象中定义，但是调用的时候却是在personB这个对象中调用，因此this对象指向
```
- 作为构造函数来调用
```
function  Person(name){
        this.name=name;
    }
    var personA=Person("xl");
    console.log(personA.name); // 输出  undefined
    console.log(window.name);//输出  xl
    //上面代码没有进行new操作，相当于window对象调用Person("xl")方法，那么this指向window对象，并进行赋值操作window.name="xl".

    var personB=new Person("xl");
    console.log(personB.name);// 输出 xl
    //这部分代码的解释见下
    //下面这段代码模拟了new操作符(实例化对象)的内部过程
    function person(name){
        var o={};
        o.__proto__=Person.prototype;  //原型继承
        Person.call(o,name);
        return o;
    }
    var personB=person("xl");
    
    console.log(personB.name);  // 输出  xl

    //因此`person("xl")`返回了一个继承了`Person.prototype`对象上的属性和方法，以及拥有`name`属性为"xl"的对象，并将它赋给变量`personB`.
所以`console.log(personB.name)`会输出"xl"
```

- call/apply方法调用
```
var name="XL";
    var Person={
        name:"xl",
        showName:function(){
            console.log(this.name);
        }
    }
    Person.showName.call(); //输出 "XL"
    //这里call方法里面的第一个参数为空，默认指向window。
    //虽然showName方法定义在Person对象里面，但是使用call方法后，将showName方法里面的this指向了window。因此最后会输出"XL";
    funtion FruitA(n1,n2){
        this.n1=n1;
        this.n2=n2;
        this.change=function(x,y){
            this.n1=x;
            this.n2=y;
        }
    }

    var fruitA=new FruitA("cheery","banana");
    var FruitB={
        n1:"apple",
        n2:"orange"
    };
    fruitA.change.call(FruitB,"pear","peach");

    console.log(FruitB.n1); //输出 pear
    console.log(FruitB.n2);// 输出 peach
```
- Function.prototype.bind()方法
```
var name="XL";
    function Person(name){
        this.name=name;
        this.sayName=function(){
            setTimeout(function(){
                console.log("my name is "+this.name);
            },50)
        }
    }
    var person=new Person("xl");
    person.sayName()  //输出  “my name is XL”;
                       //这里的setTimeout()定时函数,相当于window.setTimeout(),由window这个全局对象对调用,因此this的指向为window, 则this.name则为XL

                       var name="XL";
    
    function Person(name){
        this.name=name;
        this.sayName=function(){
            setTimeout(function(){
                console.log("my name is "+this.name);
            }.bind(this),50)  //注意这个地方使用的bind()方法，绑定setTimeout里面的匿名函数的this一直指向Person对象
        }
    }
    var person=new Person("xl");
    person.sayName(); //输出 “my name is xl”;
```

### 如何更改普通函数this指向：call(),bind(),apply()以及他们的区别
### 手写bind方法 （可以不用apply或call吗）
### apply bind call区别

### 闭包
### 写一个原生伪代码new函数
### 深拷贝和浅拷贝区别
### 手写深拷贝

### map和foreach的区别
### for in for of区别
### 实现一个for循环内的setTImeout输出 也很基础 
### 类数组有什么用？跟数组有什么区别？如何转化？扩展运算符，遍历，Array.from.
### repeat问题
```
function repeat(func, times, wait){
 
  ...
 
}
 
var rp = repeat(alert, 4, 3)
 
rp('helloWorld')
 
//每隔3秒Alert一次helloWorld，总共输出4次
```
用setInterval实现出来，又要求你用另外一种方法实现，用setTimeout模拟setInterval
### 迭代器 生成器了解吗
### event loop
### 关于事件循环的看输出，解释为什么。
```
setTimeout(function(){
    setTimeout(function(){console.log(1)},100);
    console.log(2);
    setTimeout(function(){ console.log(3)}，0);
},0)
Promise.resolve(4).then(console.log);
new Promise((resolve) => { 
    console.log(5); 
    resolve(6);
)).then(res => console.log(res))
setTimeout(function(){
console.log(7)}，100)
console.log(8)
```

### js错误怎么处理？Window.error
### Ttry..catch(e){}

### 监听unhandledrejection
### on和addEventListener的区别

### 一个ul里面有很多li，点击li会弹出li的内容，怎么给li绑定事件

### 能不能追踪到Promise的错误？为什么不能，能不能错误的原因
### promise介绍一下
### 手写了一个Promise.all（）
### Promise：Promise怎么用？知道Promise.all()吗？除了这个还有什么静态方法吗？

### 跨域以及处理方法
### loader的运行原理与作用
### plugin原理 两者区别
### 正向代理与反向代理
### 手写中间件测试请求时间
### 现在不用Proxy，简单也说了一下

### 说一下es6新添加的部分
### es5 es6继承方式
### es6中的proxy了解过吗？
### ES6中的let
### ES6新语法知道哪些？
### ES6变量提升知道吗？函数提升呢？
### 变量提升和函数提升的优先级？

### async await 和Promise的关系知道吗？
### async和await源码
### async输出顺序
### set map 特点，知道weakSet weakMap吗？
### let var const 区别 以及为什么？
