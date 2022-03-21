### 1.BOM
**js语言可以用来调整Web浏览器窗口的高度宽度和位置等属性，这种设定浏览器属性的办法可以看作是BOM（浏览器对象模型）**

### 2.DHTML
DHTML是动态HTML的简称，是描述HTML CSS JS技术结合的术语

*tips:最好的做法是将script标签放到HTML文档最后，/body标签之前*

## 3.数组
- 声明数组**var beatles = Array(4)**不指定长度也可以
> var beatles = Array("","")也行

> var beatles = ["",""]也行

*其中数组元素可以是混合的数据类型，也可以是定义的变量*

- 关联数组：
> var lennon = Object()

> lennon["name"] = "John"

*但是并不推荐这么做，本质上是给lennon数组添加了name属性，理想情况下，不应该修改Array对象的属性，而应该使用通用的对象(Object)也就是使用 var lennon = Object();lennon.name = "John"；*

- 将数组也声明为对象可以对数组进行改进：
> var beatles = {};

> beatles.vocalist = lennon;

**这个赋值得到的操作是：beatles.vocalist.name得到的结果就是John**

## 4.条件判断的注意点
- 不严格相等“== ”与严格相等“===”
> var a = false;

> var b = "";

> if(a == b) alert("hello")

**在这个语句中得到的结果是会执行alert因为“ == ”并不表示严格相等，== 相等操作符会认为空字符串与false的含义相同，要进行严格比较就要使用 === 这样全等操作符会执行严格的比较，不仅会比较值还会比较变量的类型，不等也是如此，如严格不相等为!==**

- 判断是否存在时
```
if(title != null)
if(title)
```
> 以上两种表达方式得到的结果相同，但显然第二种更精明
## 5.函数中变量的作用域问题

```
function square(num){
    total = num * num;
    return total;
}
var total = 50;
var number = square(20);
alert(total);
```
这段代码的结果是打印出了400但这并不是我们的本意，我们定义的全局变量为50但是函数里的局部变量重名影响到了我们的全局变量，正确的应该是
```
function square(num){
    var total = num * num;
    return total;
}
```
==记住在定义一个函数时我们一定要把它内部的变量全部都明确的声明为局部变量(如果在某个函数中使用了var，那么这个变量九江被视为一个局部变量)，这样这个变量就只存在在这个函数中，这样就可以比避免任何形式的二义性隐患==、

## 6.几种对象的简介
- 用户定义对象
> 这个是用户利用JavaScript来创建的自己的对象，比如Person对象定义了一些属性和方法都是这个对象特有的，想要使用就必须要先创建一个对象的实例

- 内建对象
> 例如Array对象就只是诸多JavaScript内建对象中的一种，其他的还包括Math Date等等JavaScript提供的已经创建好的对象

- 宿主对象
> 还有一些已经预先定义好的对象，这些对象不是由JavaScript语言提供的而是由浏览器提供的，如Form Image Element等等 Document对象

## 7.BOM和DOM
- 一点差别
> BOM（浏览器对象模型）说是窗口对象模型似乎更贴切，其中的B是浏览器。DOM中的D是Document文档，M是Model也可以说是Map

## 8.DOM操作中的一些特别点
- 通配符*
```
document.getElementsByTagName("*").length
```
这句话可以得到某份文档中共有多少个元素节点

- 获取对象的属性方法
> object.getAttribute("attribute")

- 设置对象的属性方法
> object.setAttribute(attribute, value)
**若这个属性本身不存在，则会创建一个这个属性然后再设定对应的值。这个方法对于第一级DOM时可以直接使用object.attribute = value;但是这样还要记忆哪些是第一级DOM，所以为了直接使用setAttribute可以修改任何元素的任何属性**

- 注意

==setAttribute对文档进行修改后通过查看浏览器的远吗则无法看到对应的改变，因为DOM的工作模式是：先加载文档的静态内容，再动态刷新，而动态刷新并不会影响文档的静态内容，这也是DOM的真正威力：对页面内容进行刷新却不需要在浏览器里刷新页面==

==window.onload== = getData;这句话是在页面加载时调用getData函数(如果有多条onload语句则只有最后一条语句能被执行)
如果想要多个函数要在onload后马上执行则可以使用：
```
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
//使用
addLoadEvent(firstFunction);
addLoadEvent(secondFunction);
```
==代码意义==：如果当前onload上没有绑定函数则把传入的func绑定到onload上，如果已经有绑定函数则吧func排列在绑定函数的后面


- 对链接标签<a></a>点击事件注意点
```
<a href="images/fireworks.jpg" onClick="showPic(this);return false;"></a>
```
这个链接点击后会触发showPic方法，为了不让页面进行跳转进行return false；这样a标签会认为链接没有被点击

- nodeType属性
node(具体节点).nodeType共有12中可取值，其中只有三种有使用价值
1. 元素节点
2. 属性节点
3. 文本节点

- nodeValue属性
```
<p>你好<p>
```
获取到这个标签后的nodeValue的值是空，因为真正需要的是这个标签中所包含的文本的值，就需要按这种方式获取：
```
description.childNodes[0].nodeValue
```

## 9.JS文件与CSS文件的引入方式
JS文件只要在<script></script>标签中引入即可：
```
<script src="scripts/showPic.js"></script>
```
注意：==若不在head标签中引入而是选择在body标签的最后进行引入可以让页面变得更快，即使这样window对象的load事件依然可以执行对文档进行的各种操作==

CSS文件只要在head标签中通过link标签进行引入：
```
<link rel="stylesheet" href="styles/layout.css" media="screen" />
```

## 10.最佳实践
- **平稳退化**：==确保网页在没有JavaScript的情况下也能正常工作==
- **分离JavaScript**：==把网页的结构和内容于JavaScript脚本的动作行为分开==
- **向后兼容性**：==确保老版本的浏览器不会因为你的JavaScript脚本而死掉==
- **性能考虑**：==确定脚本执行的性能最优==
- 
## 11.javascript:伪协议
真协议如：http和ftp协议等是用来在因特网上的计算机之间传输数据包，==伪协议是一种非标准化的协议==javascript:伪协议在支持这种伪协议的浏览器中运行正常，较老的浏览器会尝试打开但是失败，禁用JavaScript的浏览器什么都不会做：
```
<a href="javascript:popUp('http://www.baidu.com/');">Example</a>
```
**为了达到平稳退化的目的，应该把代码改成：**
```
<a href="http://www.baidu.com/'" onClick="popUp(this.href;return false;">Example</a>
```
这样写的好处是：==即便用户禁用了javascript但也能正常打开链接（只不过不是按照要求打开的）并且也不设置href="#" 这样的操作是在禁用后也无法达到目的的做法==

## 12.对象检测
```
if(!getElementById) return false;
```
这句话的意义是如果监测到浏览器不支持document.getElementById()方法则返回false不继续执行了。这里要注意：==这里被检测的方法不能加函数名后的小括号()不然检测的就是这个函数的运行结果而不是函数本身是否存在了。这么做是为了让古老的浏览器不会因为脚本代码出现问题，是为了让脚本有良好的向后兼容性==

## 13.性能考虑
- 尽量减少DOM和尽量减少标记(容易增加遍历DOM树以及查找特定元素的时间)
```
if(document.getElementsByTagName("a").length>0){
    var links =  document.getElementsByTagName("a");
    //再对links进行处理
}
```
这里就浪费了一次搜索，应当改成
```
var links = document.getElementsByTagName("a");
if(links.length>0){
    //对links进行处理
}
```

- ***有些js文件加==min==字样***：

> 因为js文件中的空格和注释等等会影响下载速度，所以要进行压缩脚本，删除其中的空格和注释等，因为这样很可能会导致js代码可读性变差，所以最好有两个版本，一个是工作副本：用来修改代码并添加注释。一个是精简副本：用于放在站点上。为了好区分最好在精简副本的文件名上加上min字样

- 小心onkeypress
onkeypress是处理键盘事件的，其实用tab键移动到某个链接回车后同样也会触发onclick事件，所以最好不要使用onkeypress事件处理函数，onclick事件处理函数已经能满足需要

## 14.DOM Core和HTML-DOM
onclick属性术语HTML-DOM，它们在DOM Core出现之前很久就已经被人们所熟悉了
```
//DOM Core版本
var source = whichpic.getAttribute("href")
//HTML-DOM版本
var source = whichpic.href
```
有些地方可以使用HTML-DOM对代码进行简化

# 创建动态标记
## 一些传统方法
- document.write
这个方法将会在body标签内插入script标签进行调用才可以执行，违背了行为应该与表现分离的原则，不够优雅，应该避免在body部分乱用script标签，避免使用document.write方法

- innerHTML属性
他把对象内部的标签节点都看成了一个字符串，所以没有细节可言

## DOM方法
- createElement方法
```
var para = document.createElement("p")
```
这时的para还没插入，称为==文档碎片==

- appendChild方法
```
var para = document.createElement("p");
var testdiv = document.getElementById("testdiv");
testdiv.appendChild(para);
```

- createTextNode方法
```
var txt = document.createTextNode("Hello world");
para.appendChild(txt);
```
这样就得到了一个<p>Hello world</p>的标签

- insertBefore方法
```
parentElement.insertBefore(newElement,targetElement)
```
> 这里其实没必要非要找出父节点，可以直接用

```
targetElement.parentNode.insertBefore(newElement,targetElement)
```
效果是一样的

- insertAfter方法（本身不存在）
```
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextsibling);
    }
}
```

## Ajax
==用于概括异步加载页面内容的技术==也就是使用Ajax就可以做到只更新页面中的一小部分，其他内容都不用重新加载，就不必再次加载整个页面了

- XMLHttpRequest对象
它是Ajax技术的核心，以往的请求都由浏览器发出，而这个对象可以自己发送请求，同时也自己处理响应
```
var request = new XMLHttpRequest();
```
getNewContent.js文件：
```
function getNewContent(){
    var request = getHTTPObject();
    if(request){
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            };
            request.send(null);
        }else{
            alert("warnning")
        }
    }
}
addLoadEvent(getNewContent);
```
==几个注意点==：
- readyState属性的值

1.0表示未初始化
2.1表示正在加载
3.2表示加载完毕
4.表示完成

- responseText属性和responseXML属性

**Text是保存文本字符串形式的数据，XML属性保存Content-Type头部中指定的text/xml数据，其实是DocumentFragment对象，可以用DOM方法来处理它**

- 注意

请求不能跨域，有些浏览器还会限制ajax请求使用的协议，并且在发送请求后脚本仍在继续执行不会等待响应返回

## 渐进增强与Ajax
**从一开始就是用Ajax构建核心应用无异于使用javascript伪协议进行处理，最好的方式应该是构建常规网站再Hijax（渐进增强地使用Ajax）它。比如登陆功能，可以通过使用XMLHttpRequest请求代为发送表单请求，这样登录过程就显的更快了，如果没有启动javascript那也不会影响正常登陆，只不过是慢一点罢了**。==Ajax应用主要依赖服务端处理，而非客户端处理==

## 样式问题
- 获取中间带有分隔符的
> 如获取元素style属性中的font-family属性的值则则直接使用element.style.font-family会报错因为这里会把分隔符解释为减号。==正确的引用中间带减号的css属性时DOM要求使用驼峰命名法，即：element.style.fontFamily==

- DOM获取style
> DOM只能获取style是包含在HTML代码里用style属性声明的样式

- 类似属性
```
input[type*="text"]{
    font-size:1.2em;
}
```

- 根据元素的位置
```
p:first-of-type {
    font-size:2em;
    font-weight:bold;
}
```
CSS2有first-child和last-child等

CSS3有nth:child()和nth-of-type()等

- 网页表示层和行为层分离

JavaScript函数对classname属性进行更新不碰style属性这样确保了网页的表示层和行为层分离的更加彻底。只要有可能就应该选择更新classname属性，而不是去直接更新style对象的有关属性