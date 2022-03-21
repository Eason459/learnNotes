## 基本语法
### \<script>
#### 属性
\<script>定义了下列 6 个属性。
- **async**：可选。async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与 defer不同的是，标记为 async 的脚本并不保证按照指定它们的先后顺序执行。
- charset：可选。表示通过 src 属性指定的代码的字符集。由于大多数浏览器会忽略它的值，
因此这个属性很少有人用。
- **defer**：可选。这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在\<script>元素中设置
defer 属性，相当于告诉浏览器立即下载，但延迟执行。
- language：已废弃。原来用于表示编写代码使用的脚本语言（如 JavaScript、JavaScript1.2
或 VBScript）。大多数浏览器会忽略这个属性，因此也没有必要再用了。
- src：可选。表示包含要执行代码的外部文件。
- type：可选。可以看成是 language 的替代属性；表示编写代码使用的脚本语言的内容类型（也
称为 MIME 类型）

#### 注意
> 所有\<script>元素都会按照它们在页面中出现的先后顺序依次被解析。在不使用 defer 和
async 属性的情况下，只有在解析完前面\<script>元素中的代码之后，才会开始解析后面
\<script>元素中的代码。

### \<noscript>元素
```
<html> 
 <head> 
 <title>Example HTML Page</title> 
 <script type="text/javascript" defer="defer" src="example1.js"></script> 
 <script type="text/javascript" defer="defer" src="example2.js"></script> 
 </head> 
 <body> 
<noscript> 
 <p>本页面需要浏览器支持（启用）JavaScript。
 </noscript> 
 </body> 
</html>
```
### 变量
- 基本数据类型：Undefined、Null、Boolean、Number和String
```
function test(){
    var test = ‘hi’; //局部变量
    test1 = 'hi'; //全局变量
    var test2; //undefined
    var test3=undefined; //不推荐
    var test4 = null //为了存储对象的初始化
}
```
> - 用 var 操作符定义的变量将成为定义该变量的作用域中的**局部变量**。也就是说，如果在函数中使用 var 定义一个变量，那么这个变量在函数退出后就会被销毁。
> - 省略了 var 操作符，就成了**全局变量**。这样，这个变量就有了定义，就可以在函数外部的任何地方被访问到。
> - **Undefined 类型**只有一个值，即特殊的 undefined。在使用 var 声明变量但未对其加以初始化时，这个变量的值就是 undefined。
> - 如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为 **null** 而不是其他值。这样一来，只要直接检查 null 值就可以知道相应的变量是否已经保存了一个对象的引用，
> - **Number**浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数。例如，0.1 加 0.2
的结果不是 0.3，而是 0.30000000000000004。这个小小的舍入误差会导致无法测试特定的浮点数值。
> - **Nan**,即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数
未返回数值的情况（这样就不会抛出错误了）。例如，在其他编程语言中，任何数值除以 0都会导致错误，从而停止代码执行。但在 ECMAScript中，任何数值除以 0会返回 NaN①，因此不会影响其他代码的执行。NaN 本身有两个非同寻常的特点。首先，任何涉及 NaN 的操作（例如 NaN/10）都会返回 NaN，这个特点在多步计算中有可能导致问题。其次，NaN 与任何值都不相等，包括 NaN 本身。
```
alert(isNaN("10")); //false（可以被转换成数值 10）
alert(isNaN(true)); //false（可以被转换成数值 1）
var num1 = parseInt("1234blue"); // 1234 
var num2 = parseInt(""); // NaN 
var num3 = parseInt("0xA"); // 10（十六进制数）
var num4 = parseInt(22.5); // 22 
var num5 = parseInt("070"); // 56（八进制数）
var num6 = parseInt("70"); // 70（十进制数）
var num7 = parseInt("0xf"); // 15（十六进制数）
var num1 = parseInt("AF", 16); //175 
var num2 = parseInt("AF"); //NaN

var num1 = Number("Hello world!"); //NaN 
var num2 = Number(""); //0 
var num3 = Number("000011"); //11 
var num4 = Number(true); //1

var num1 = parseFloat("1234blue"); //1234 （整数）
var num2 = parseFloat("0xA"); //0 
var num3 = parseFloat("22.5"); //22.5 
var num4 = parseFloat("22.34.5"); //22.34 
var num5 = parseFloat("0908.5"); //908.5 
var num6 = parseFloat("3.125e7"); //31250000

//toString()不能处理null和undefined的情况，但Stirng()方法可以处理
var num = 10; 
alert(num.toString()); // "10" 
alert(num.toString(2)); // "1010" 
alert(num.toString(8)); // "12" 
alert(num.toString(10)); // "10" 
alert(num.toString(16)); // "a"

var value1 = 10; 
var value2 = true; 
var value3 = null; 
var value4; 
alert(String(value1)); // "10" 
alert(String(value2)); // "true" 
alert(String(value3)); // "null" 
alert(String(value4)); // "undefined"
```

### 操作符
```
var s1 = "2"; 
var s2 = "z"; 
var b = false; 
var f = 1.1; 
var o = { 
 valueOf: function() { 
 return -1; 
 } 
}; 
s1++; // 值变成数值 3 
s2++; // 值变成 NaN 
b++; // 值变成数值 1 
f--; // 值变成 0.10000000000000009（由于浮点舍入错误所致）
o--; // 值变成数值-2

var s1 = "01"; 
var s2 = "1.1"; 
var s3 = "z"; 
var b = false; 
var f = 1.1; 
var o = { 
 valueOf: function() { 
 return -1; 
 } 
}; 
s1 = -s1; // 值变成了数值-1 
s2 = -s2; // 值变成了数值-1.1 
s3 = -s3; // 值变成了 NaN 
b = -b; // 值变成了数值 0 
f = -f; // 变成了-1.1 
o = -o; // 值变成了数值 1

//位操作符
//按位非NOT
var num1 = 25; // 二进制 00000000000000000000000000011001 
var num2 = ~num1; // 二进制 11111111111111111111111111100110 
alert(num2); // -26

//按位与AND
var result = 25 & 3; 
alert(result); //1

//按位或OR
var result = 25 | 3; 
alert(result); //27

//按位异或XOR 不相同即为1
var result = 25 ^ 3; 
alert(result); //26

//左移
var oldValue = 2; // 等于二进制的 10 
var newValue = oldValue << 5; // 等于二进制的 1000000，十进制的 64

//有符号右移
var oldValue = 64; // 等于二进制的 1000000 
var newValue = oldValue >> 5; // 等于二进制的 10 ，即十进制的 2

//无符号右移
var oldValue = 64; // 等于二进制的 1000000 
var newValue = oldValue >>> 5; // 等于二进制的 10 ，即十进制的 2

//逻辑非
alert(!false); // true 
alert(!"blue"); // false 
alert(!0); // true 
alert(!NaN); // true 
alert(!""); // true 
alert(!12345); // false

//减法
var result1 = 5 - true; // 4，因为 true 被转换成了 1 
var result2 = NaN - 1; // NaN 
var result3 = 5 - 3; // 2 
var result4 = 5 - ""; // 5，因为"" 被转换成了 0 
var result5 = 5 - "2"; // 3，因为"2"被转换成了 2 
var result6 = 5 - null; // 5，因为 null 被转换成了 0

//比较操作中的注意点
//由于字母"a"不能转换成合理的数值，因此就被转换成了 NaN。根据规则，任何操作数与 NaN 进行关系比较，结果都是 false。于是，就出现了下面这个有意思的现象：
var result1 = NaN < 3; //false 
var result2 = NaN >= 3; //false

//==为相等与不想等（强制转换相同类型后再进行比较）
//如果有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true。重要提示：即使两个操作数都是 NaN，相等操作符也返回 false；因为按照规则，NaN 不等于 NaN。
//===为全等与不全等
```

### 语句
- for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性，通过 for-in 循环输出的属性名的顺序是不可预测的。具体来讲，所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异。
- label语句
```
var num = 0;
outermost:
for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        console.log('i',i,'j',j,'num',num)
        if(i == 5 && j ==5){
            console.log('等于5了')
            break outermost;
        }
        num++;
    }
}
console.log(num); //55
```

- break:直接退出当前循环；continue:直接开启下一轮循环（均不执行当前循环的break和continue后面的语句）
- with语句
> with 语句的作用是将代码的作用域设置到一个特定的对象中
```
var qs = location.search.substring(1); 
var hostName = location.hostname; 
var url = location.href;

//用with语句简化
with(location){ 
 var qs = search.substring(1); 
 var hostName = hostname; 
 var url = href; 
}
```
- switch
```
//一个特别用法
var num = 25; 
switch (true) { 
 case num < 0: 
 alert("Less than 0."); 
 break; 
 case num >= 0 && num <= 10: 
 alert("Between 0 and 10."); 
 break; 
 case num > 10 && num <= 20: 
 alert("Between 10 and 20."); 
 break; 
 default: 
 alert("More than 20."); 
}
```

### 函数
- 参数
可以把 ECMAScript 函数的参数想象成局部变量。
> ECMAScript 函数不介意传递进
来多少个参数，也不在乎传进来参数是什么数据类型。也就是说，即便你定义的函数只接收两个参数，
在调用这个函数时也未必一定要传递两个参数。可以传递一个、三个甚至不传递参数，而解析器永远不
会有什么怨言。之所以会这样，原因是 ECMAScript 中的参数在内部是用一个数组来表示的。函数接收
到的始终都是这个数组，而不关心数组中包含哪些参数（如果有参数的话）。如果这个数组中不包含任
何元素，无所谓；如果包含多个元素，也没有问题。实际上，在函数体内可以通过 arguments 对象来
访问这个参数数组，从而获取传递给函数的每一个参数。sayHi()函数的第一个参数的名字叫
name，而该参数的值也可以通过访问 arguments[0]来获取。即**命名的参数只提供便利，但不是必需的**
```
//对象的注意点
function setName(obj) { 
 obj.name = "Nicholas"; 
} 
var person = new Object(); 
setName(person); 
alert(person.name); //"Nicholas"

//当在函数内部重写 obj 时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。
function setName(obj) { 
 obj.name = "Nicholas"; 
 obj = new Object(); 
 obj.name = "Greg"; 
} 
var person = new Object(); 
setName(person); 
alert(person.name); //"Nicholas"
```

### instanceof操作符
> 通常，我们并不是想知道某个值是对象，而是想知道它是什么类型的对象。为此，ECMAScript
提供了 instanceof 操作符
```
alert(person instanceof Object); // 变量 person 是 Object 吗？
alert(colors instanceof Array); // 变量 colors 是 Array 吗？
alert(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？
//在检测一个引用类型值和 Object 构造
函数时，instanceof 操作符始终会返回 true。当然，如果使用 instanceof 操作符检测基本类型的
值，则该操作符始终会返回 false，因为基本类型不是对象。
```

### 作用域
```
//没有块级作用域的情况，，if 语句中的变量声明会将变量添加到当前的执行环境（在这里是全局环境）中。在使用 for 语句时尤其要牢记这一差异
if (true) { 
 var color = "blue"; 
} 
alert(color); //"blue"

for (var i=0; i < 10; i++){ 
 doSomething(i); 
} 
alert(i); //10
```

### 优化内存
- 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
- 引用类型的值是对象，保存在堆内存中；
- 而优化内存占用的最佳方式，就是为执行
中的代码只保存必要的数据。一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个
做法叫做解除引用（dereferencing）。这一做法适用于大多数全局变量和全局对象的属性。局部变量会在
它们离开执行环境时自动被解除引用

### 引用类型
```
//如果属性名中包含会导致语法错误的字符，或者属性名使用的是关键字或保留字，也可以使用方括号表示法。例如：
person["first name"] = "Nicholas";

//判定value是否为数组
if (Array.isArray(value)){ 
 //对数组执行某些操作
}

var colors = ["red", "green", "blue"]; 
alert(colors.join(",")); //red,green,blue 
alert(colors.join("||")); //red||green||blue

//对数组进行栈和队列的操作
//栈：push pop
//队列：unshift shift

//数组反转
var values = [1, 2, 3, 4, 5]; 
values.reverse(); 
alert(values); //5,4,3,2,1

//数组排序（默认）
var values = [0, 1, 5, 10, 15]; 
values.sort(); 
alert(values); //0,1,10,15,5

//数组排序（指定比较方法）
function compare(value1, value2) { 
 if (value1 < value2) { 
 return -1; 
 } else if (value1 > value2) { 
 return 1; 
 } else { 
 return 0; 
 } 
}
//如果是数值类型
function compare(value1, value2){ 
 return value2 - value1; 
}

var values = [0, 1, 5, 10, 15]; 
values.sort(compare);
alert(values); //0,1,5,10,15

//添加数组concat
var colors = ["red", "green", "blue"]; 
var colors2 = colors.concat("yellow", ["black", "brown"]); 
alert(colors); //red,green,blue 
alert(colors2); //red,green,blue,yellow,black,brown

//数组切片slice
var colors = ["red", "green", "blue", "yellow", "purple"]; 
var colors2 = colors.slice(1); 
var colors3 = colors.slice(1,4); 
alert(colors2); //green,blue,yellow,purple 
alert(colors3); //green,blue,yellow
//注意：如果 slice()方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置。例如，在一个包含 5 项的数组上调用 slice(-2,-1)与调用 slice(3,4)得到的
结果相同。如果结束位置小于起始位置，则返回空数组。

//数组的删除插入和替换 splice()
var colors = ["red", "green", "blue"]; 
var removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue 
alert(removed); // red，返回的数组中只包含一项
removed = colors.splice(1, 0, "yellow", "orange"); // 从位置 1 开始插入两项
alert(colors); // green,yellow,orange,blue 
alert(removed); // 返回的是一个空数组
removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
alert(colors); // green,red,purple,orange,blue 
alert(removed); // yellow，返回的数组中只包含一项
//注意：splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）

//数组的位置
var numbers = [1,2,3,4,5,4,3,2,1]; 
alert(numbers.indexOf(4)); //3
alert(numbers.lastIndexOf(4)); //5 
alert(numbers.indexOf(4, 4)); //5 
alert(numbers.lastIndexOf(4, 4)); //3 
var person = { name: "Nicholas" }; 
var people = [{ name: "Nicholas" }]; 
var morePeople = [person]; 
alert(people.indexOf(person)); //-1 
alert(morePeople.indexOf(person)); //0

//数组的迭代
/*every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。  filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
以上方法都不会修改数组中的包含的值。*/
var numbers = [1,2,3,4,5,4,3,2,1]; 
var everyResult = numbers.every(function(item, index, array){ 
 return (item > 2); 
}); 
alert(everyResult); //false 

var someResult = numbers.some(function(item, index, array){ 
 return (item > 2); 
}); 
alert(someResult); //true

var numbers = [1,2,3,4,5,4,3,2,1]; 
var filterResult = numbers.filter(function(item, index, array){ 
 return (item > 2); 
}); 
alert(filterResult); //[3,4,5,4,3]

var numbers = [1,2,3,4,5,4,3,2,1]; 
var mapResult = numbers.map(function(item, index, array){ 
 return item * 2; 
}); 
alert(mapResult); //[2,4,6,8,10,8,6,4,2]

var numbers = [1,2,3,4,5,4,3,2,1]; 
numbers.forEach(function(item, index, array){ 
 //执行某些操作
});

//数组归并
//使用 reduce()方法可以执行求数组中所有值之和的操作，比如：
var values = [1,2,3,4,5]; 
var sum = values.reduce(function(prev, cur, index, array){ 
 return prev + cur; 
}); 
alert(sum); //15
//第一次执行回调函数，prev 是 1，cur 是 2。第二次，prev 是 3（1 加 2 的结果），cur 是 3（数组
的第三项）。这个过程会持续到把数组中的每一项都访问一遍，最后返回结果。
//reduceRight()的作用类似，只不过方向相反而已。来看下面这个例子。
var values = [1,2,3,4,5]; 
var sum = values.reduceRight(function(prev, cur, index, array){ 
 return prev + cur; 
}); 
alert(sum); //15 
```

### RegExp类型
> g:全局，即应用于所有字符串而非仅第一个匹配项；i：不区分大小写；m：多行模式，即第一行查完接着下一行查找
```
//匹配字符串中所有"at"的实例
var pattern1 = /at/g; 
//匹配第一个"bat"或"cat"，不区分大小写
var pattern2 = /[bc]at/i; 
var pattern2 = new RegExp("[bc]at", "i");
//匹配所有以"at"结尾的 3 个字符的组合，不区分大小写
var pattern3 = /.at/gi; 

//模式中使用的所有元字符都必须转义

//匹配第一个" [bc]at"，不区分大小写
var pattern2 = /\[bc\]at/i; 
//匹配所有以"at"结尾的 3 个字符的组合，不区分大小写
var pattern3 = /.at/gi; 
//匹配所有".at"，不区分大小写
var pattern4 = /\.at/gi;

//实例问题
var re = null, 
 i; 
for (i=0; i < 10; i++){ 
 re = /cat/g; 
 re.test("catastrophe"); 
} //第二次从上次查找成功的3位置开始，如果到末尾了会重新从头开始
for (i=0; i < 10; i++){ 
 re = new RegExp("cat", "g"); 
 re.test("catastrophe"); 
}//这个每次返回都是true 每次都创建一个新实例
//实例属性
var pattern1 = /\[bc\]at/i; 
alert(pattern1.global); //false 
alert(pattern1.ignoreCase); //true 
alert(pattern1.multiline); //false 
alert(pattern1.lastIndex); //0 
alert(pattern1.source); //"\[bc\]at" 
var pattern2 = new RegExp("\\[bc\\]at", "i"); 
alert(pattern2.global); //false 
alert(pattern2.ignoreCase); //true 
alert(pattern2.multiline); //false 
alert(pattern2.lastIndex); //0 
alert(pattern2.source); //"\[bc\]at"

//实例方法exec
var text = "mom and dad and baby"; 
var pattern = /mom( and dad( and baby)?)?/gi; 
var matches = pattern.exec(text); 
alert(matches.index); // 0 
alert(matches.input); // "mom and dad and baby" 
alert(matches[0]); // "mom and dad and baby" 
alert(matches[1]); // " and dad and baby" 
alert(matches[2]); // " and baby"

//返回匹配项问题
var text = "cat, bat, sat, fat"; 
var pattern1 = /.at/; 
var matches = pattern1.exec(text); 
alert(matches.index); //0 
alert(matches[0]); //cat 
alert(pattern1.lastIndex); //0 
matches = pattern1.exec(text); 
alert(matches.index); //0 
alert(matches[0]); //cat 
alert(pattern1.lastIndex); //0 

var pattern2 = /.at/g; 
var matches = pattern2.exec(text); 
alert(matches.index); //0 
alert(matches[0]); //cat 
alert(pattern2.lastIndex); //3
matches = pattern2.exec(text); 
alert(matches.index); //5 
alert(matches[0]); //bat 
alert(pattern2.lastIndex); //8

//实例方法test
var text = "000-00-0000"; 
var pattern = /\d{3}-\d{2}-\d{4}/; 
if (pattern.test(text)){ 
 alert("The pattern was matched."); 
}

var pattern = new RegExp("\\[bc\\]at", "gi"); 
alert(pattern.toString()); // /\[bc\]at/gi 
alert(pattern.toLocaleString()); // /\[bc\]at/gi
```
构造函数属性：
input $_ 最近一次要匹配的字符串。Opera未实现此属性

lastMatch $& 最近一次的匹配项。Opera未实现此属性

lastParen $+ 最近一次匹配的捕获组。Opera未实现此属
性
leftContext $` input字符串中lastMatch之前的文本

multiline $* 布尔值，表示是否所有表达式都使用多行模式。IE和Opera未实现此属性

rightContext $' Input字符串中lastMatch之后的文本
```
//RegExp构造函数属性
var text = "this has been a short summer"; 
var pattern = /(.)hort/g; 

if (pattern.test(text)){ 
 alert(RegExp.input); // this has been a short summer 
 alert(RegExp.leftContext); // this has been a 
 alert(RegExp.rightContext); // summer 
 alert(RegExp.lastMatch); // short 
 alert(RegExp.lastParen); // s 
 alert(RegExp.multiline); // false 
}
if (pattern.test(text)){ 
 alert(RegExp.$_); // this has been a short summer 
 alert(RegExp["$`"]); // this has been a 
 alert(RegExp["$'"]); // summer 
 alert(RegExp["$&"]); // short 
 alert(RegExp["$+"]); // s 
 alert(RegExp["$*"]); // false 
}
var text = "this has been a short summer"; 
var pattern = /(..)or(.)/g; 
if (pattern.test(text)){ 
 alert(RegExp.$1); //sh 
 alert(RegExp.$2); //t 
}
```


### Function类型
- 函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。由于函
数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。
```
function sum (num1, num2) { 
 return num1 + num2; 
}

var sum = function(num1, num2){ 
 return num1 + num2; 
};

var sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐

function sum(num1, num2){ 
 return num1 + num2; 
} 
alert(sum(10,10)); //20 
var anotherSum = sum; 
alert(anotherSum(10,10)); //20 
sum = null; 
alert(anotherSum(10,10)); //20
```

- 函数名只是个指针也就可以理解为什么没有重载
```
function addSomeNumber(num){ 
 return num + 100; 
} 
function addSomeNumber(num) { 
 return num + 200; 
} 
var result = addSomeNumber(100); //300

//相当于
var addSomeNumber = function (num){ 
 return num + 100; 
}; 
addSomeNumber = function (num) { 
 return num + 200; 
}; 
var result = addSomeNumber(100); //300
```

- 函数的声明顺序问题
```
//即使声明函数的代码在调用它的代码后面，JavaScript 引擎也能把函数声明提升到顶部

//正常
alert(sum(10,10)); 
function sum(num1, num2){ 
 return num1 + num2; 
}

//错误
alert(sum(10,10)); 
var sum = function(num1, num2){ 
 return num1 + num2; 
};//原因在于函数位于一个初始化语句中，而不是一个函数声明。换句话说，在执行到函数所在的语句之前，变量 sum 中不会保存有对函数的引用；
```

- 可以将一个函数作为另一个函数的结果返回
```
function callSomeFunction(someFunction, someArgument){ 
 return someFunction(someArgument); 
} 
function add10(num){ 
 return num + 10; 
} 
var result1 = callSomeFunction(add10, 10); 
alert(result1); //20 
function getGreeting(name){ 
 return "Hello, " + name; 
} 
var result2 = callSomeFunction(getGreeting, "Nicholas"); 
alert(result2); //"Hello, Nicholas"
```

//返回函数
```
function createComparisonFunction(propertyName) { 
    return function(object1, object2){ 
        var value1 = object1[propertyName]; 
        var value2 = object2[propertyName]; 
        if (value1 < value2){ 
            return -1; 
        } else if (value1 > value2){ 
            return 1; 
        } else { 
            return 0; 
        } 
    }; 
}
var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}]; 
data.sort(createComparisonFunction("name")); 
alert(data[0].name); //Nicholas 
data.sort(createComparisonFunction("age")); 
alert(data[0].name); //Zachary
```

#### 函数内部属性
- argument
```
function factorial(num){ 
 if (num <=1) { 
 return 1; 
 } else { 
 return num * factorial(num-1) 
 } 
}

function factorial(num){ 
 if (num <=1) { 
 return 1; 
 } else { 
 return num * arguments.callee(num-1) 
 } //在这个重写后的 factorial()函数的函数体内，没有再引用函数名 factorial。这样，无论引用函数时使用的是什么名字，都可以保证正常完成递归调用
}
//实例
var trueFactorial = factorial; 
factorial = function(){ 
 return 0; 
}; 
alert(trueFactorial(5)); //120 
alert(factorial(5)); //0
```
- this
> this引用的是函数据以执行的环境对象——或者也可以说是 this 值（当在网页的全局作用域中调用函数时，
this 对象引用的就是 window）
```
window.color = "red"; 
var o = { color: "blue" }; 
function sayColor(){ 
 alert(this.color); 
} 
sayColor(); //"red" 
o.sayColor = sayColor; 
o.sayColor(); //"blue"
```

- caller
> 这个属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为 null。
```
//inner.caller 就指向 outer()
function outer(){ 
 inner(); 
} 
function inner(){ 
 alert(inner.caller); 
} 
outer();
//或者这么写
function outer(){ 
 inner(); 
} 
function inner(){ 
alert(arguments.callee.caller); 
} 
outer();

```

#### 函数属性和方法
- length属性
> length 属性表示函数希望接收的命名参数的个数
```
function sayName(name){ 
 alert(name); 
} 
function sum(num1, num2){ 
 return num1 + num2; 
} 
function sayHi(){ 
 alert("hi"); 
} 
alert(sayName.length); //1 
alert(sum.length); //2 
alert(sayHi.length); //0
```

-  prototype属性
> prototype 是保存它们所有实例方法的真正所在。换句话说，诸如toString()和 valueOf()等方法实际上都保存在 prototype 名下，只不过是通过各自对象的实例访
问罢了。

- apply()方法
> apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是 Array 的实例，也可以是arguments 对象
```
function sum(num1, num2){ 
 return num1 + num2; 
} 
function callSum1(num1, num2){ 
 return sum.apply(this, arguments); // 传入 arguments 对象
} 
function callSum2(num1, num2){ 
 return sum.apply(this, [num1, num2]); // 传入数组
} 
alert(callSum1(10,10)); //20 
alert(callSum2(10,10)); //20
```

- call()方法
> call()方法与 apply()方法的作用相同，它们的区别仅在于接收参数的方式不同。对于 call()
方法而言，第一个参数是 this 值没有变化，变化的是其余参数都直接传递给函数。换句话说，在使用
call()方法时，传递给函数的参数必须逐个列举出来
```
function sum(num1, num2){ 
 return num1 + num2; 
} 
function callSum(num1, num2){ 
 return sum.call(this, num1, num2); 
} 
alert(callSum(10,10)); //20
```

- bind()方法
> 这个方法会创建一个函数的实例，其 this 值会被绑
定到传给 bind()函数的值。
```
window.color = "red"; 
var o = { color: "blue" }; 
function sayColor(){ 
 alert(this.color); 
} 
var objectSayColor = sayColor.bind(o); 
objectSayColor(); //blue
```

- 方法的作用
```
//能够扩充函数赖以运行的作用域
window.color = "red"; 
var o = { color: "blue" }; 
function sayColor(){ 
 alert(this.color); 
} 
sayColor(); //red 
sayColor.call(this); //red 
sayColor.call(window); //red 
sayColor.call(o); //blue
```

#### 基本包装类型
```
//第二行创建的 String 对象在执行第三行代码时已经被销毁了。
var s1 = "some text"; 
s1.color = "red"; 
alert(s1.color); //undefined

var obj = new Object("some text"); 
alert(obj instanceof String); //true

//转型函数
var value = "25"; 
var number = Number(value); //转型函数
alert(typeof number); //"number" 
var obj = new Number(value); //构造函数
alert(typeof obj); //"object"
```
- Boolean类型
> 建议是永远不要使用 Boolean 对象。
```
var falseObject = new Boolean(false); 
var result = falseObject && true; 
alert(result); //true  布尔表达式中的所有对象都会被转换为 true
var falseValue = false; 
result = falseValue && true; 
alert(result); //false
```

- Number类型
```
var num = 10; 
alert(num.toString()); //"10" 
alert(num.toString(2)); //"1010" 
alert(num.toString(8)); //"12" 
alert(num.toString(10)); //"10" 
alert(num.toString(16)); //"a"
var num = 10; 
alert(num.toFixed(2)); //"10.00"
var num = 10.005; 
alert(num.toFixed(2)); //"10.01"
var num = 10; 
alert(num.toExponential(1)); //"1.0e+1"
var num = 99; 
alert(num.toPrecision(1)); //"1e+2" 因为一位数无法准确地表示 99，因此 toPrecision()就将它向上舍入为 100
alert(num.toPrecision(2)); //"99" 
alert(num.toPrecision(3)); //"99.0"
```

- String类型
> String 对象的方法也可以在所有基本的字符串值中访问到
```
var stringValue = "hello world"; 
alert(stringValue.length); //"11"即使字符串中包
含双字节字符（不是占一个字节的 ASCII 字符），每个字符也仍然算一个字符。

//字符方法
var stringValue = "hello world"; 
alert(stringValue.charAt(1)); //"e"
var stringValue = "hello world"; 
alert(stringValue.charCodeAt(1)); //输出"101"
var stringValue = "hello world"; 
alert(stringValue[1]); //"e"

//操作方法
//不会修改字符串本身的值——它们只是返回一个基本类型的字符串值，对原始字符串没有任何影响
var stringValue = "hello "; 
var result = stringValue.concat("world"); 
alert(result); //"hello world" 
alert(stringValue); //"hello"

var stringValue = "hello "; 
var result = stringValue.concat("world", "!"); 
alert(result); //"hello world!" 
alert(stringValue); //"hello"

var stringValue = "hello world"; 
alert(stringValue.slice(3)); //"lo world" 
alert(stringValue.substring(3)); //"lo world" 
alert(stringValue.substr(3)); //"lo world" 
alert(stringValue.slice(3, 7)); //"lo w" 
alert(stringValue.substring(3,7)); //"lo w" 
alert(stringValue.substr(3, 7)); //"lo worl"

//为-3 会被转换为 8（字符串长度加参数 11+(3)=8），
var stringValue = "hello world"; 
alert(stringValue.slice(-3)); //"rld" 
alert(stringValue.substring(-3)); //"hello world" 将-3 转换成了 0。
alert(stringValue.substr(-3)); //"rld" 
alert(stringValue.slice(3, -4)); //"lo w" 
alert(stringValue.substring(3, -4)); //"hel" 
alert(stringValue.substr(3, -4)); //""（空字符串）

//位置方法
var stringValue = "hello world"; 
alert(stringValue.indexOf("o")); //4 
alert(stringValue.lastIndexOf("o")); //7

var stringValue = "hello world"; 
alert(stringValue.indexOf("o", 6)); //7 
alert(stringValue.lastIndexOf("o", 6)); //4

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit"; 
var positions = new Array(); 
var pos = stringValue.indexOf("e"); 
while(pos > -1){ 
 positions.push(pos); 
 pos = stringValue.indexOf("e", pos + 1); 
} 
alert(positions); //"3,24,32,35,52"

//trim()方法。这个方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果。
var stringValue = " hello world "; 
var trimmedStringValue = stringValue.trim(); 
alert(stringValue); //" hello world " 
alert(trimmedStringValue); //"hello world"

//大小写转换
var stringValue = "hello world"; 
alert(stringValue.toLocaleUpperCase()); //"HELLO WORLD" 
alert(stringValue.toUpperCase()); //"HELLO WORLD" 
alert(stringValue.toLocaleLowerCase()); //"hello world" 
alert(stringValue.toLowerCase()); //"hello world" 
StringTypeCaseMethodExample01.htm 
以上代码调用的 toLocaleUpperCase()和 toUpperCase()都返回了"HELLO WORLD"，就像调用

//模式匹配
var text = "cat, bat, sat, fat"; 
var pattern = /.at/; 
//与 pattern.exec(text)相同
var matches = text.match(pattern); 
alert(matches.index); //0 
alert(matches[0]); //"cat" 
alert(pattern.lastIndex); //0

var text = "cat, bat, sat, fat"; 
var pos = text.search(/at/); 
alert(pos); //1

var text = "cat, bat, sat, fat"; 
var result = text.replace("at", "ond"); 
alert(result); //"cond, bat, sat, fat" 
result = text.replace(/at/g, "ond"); 
alert(result); //"cond, bond, sond, fond"

var text = "cat, bat, sat, fat"; 
result = text.replace(/(.at)/g, "word ($1)"); 
alert(result); //word (cat), word (bat), word (sat), word (fat)

function htmlEscape(text){ 
 return text.replace(/[<>"&]/g, function(match, pos, originalText){ 
 switch(match){ 
 case "<": 
 return "&lt;"; 
 case ">": 
 return "&gt;"; 
 case "&": 
 return "&amp;"; 
 case "\"": 
 return "&quot;"; 
 } 
 }); 
} 
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>")); 
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

var colorText = "red,blue,green,yellow"; 
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"] 
var colors2 = colorText.split(",", 2); //["red", "blue"] 
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]

//比较方法
var stringValue = "yellow"; 
alert(stringValue.localeCompare("brick")); //1 
alert(stringValue.localeCompare("yellow")); //0 
alert(stringValue.localeCompare("zoo")); //-1

//编码转字符串
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"//

//URI编码
var uri = "http://www.wrox.com/illegal value.htm#start"; 
//"http://www.wrox.com/illegal%20value.htm#start" 
alert(encodeURI(uri)); 
//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start" 
alert(encodeURIComponent(uri));
```

- eval()方法
> 它只接受一个参数，即要执行的 ECMAScript（或 JavaScript）
字符串

> 能够解释代码字符串的能力非常强大，但也非常危险。因此在使用 eval()时必须极为谨慎，特别是在用它执行用户输入数据的情况下。否则，可能会有恶意用户输入威胁你的站点或应用程序安全的代码（即所谓的代码注入）。

- 随机数问题
```
//值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
var num = Math.floor(Math.random() * 10 + 1);
```


## 面向对象
- 构造函数模式
```
function Person(name, age, job){ 
 this.name = name; 
 this.age = age; 
 this.job = job; 
 this.sayName = function(){ 
 alert(this.name); 
 }; 
} 
var person1 = new Person("Nicholas", 29, "Software Engineer"); 
var person2 = new Person("Greg", 27, "Doctor");

// 当作构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer"); 
person.sayName(); //"Nicholas" 
// 作为普通函数调用
Person("Greg", 27, "Doctor"); // 添加到 window 
window.sayName(); //"Greg" 
// 在另一个对象的作用域中调用
var o = new Object(); 
Person.call(o, "Kristen", 25, "Nurse"); 
o.sayName(); //"Kristen"
```

- 原型模式
> 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法
```
function Person(){ 
} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function(){ 
 alert(this.name); 
}; 
var person1 = new Person(); 
person1.sayName(); //"Nicholas" 
var person2 = new Person();
person2.sayName(); //"Nicholas" 
alert(person1.sayName == person2.sayName); //true
```
- __proto__属性个连接存在于实例与构造函数的原型对象之间
> Person.prototype.constructor 又指回了 Person
```
alert(Person.prototype.isPrototypeOf(person1)); //true 
alert(Person.prototype.isPrototypeOf(person2)); //true
```
> 调用 person1.sayName()的时候，会先后执行两次搜索。首先，解析器会问：“实例 person1 有 sayName 属性吗？”答：“没有。”然后，它继续搜索，再问：“person1 的原型有 sayName 属性吗？”答：“有。”于是，它就读取那个保存在原型对象中的函数
```
delete person1.name; 
alert(person1.name); //"Nicholas"——来自原型
alert(person1.hasOwnProperty("name")); //false
```
> 同时使用 hasOwnProperty()方法和 in 操作符，就可以确定该属性到底是存在于对象中，还是存在于原型中
- 原声对象的原型
```
//通过原生对象的原型，不仅可以取得所有默认方法的引用，而且也可以定义新方法。可以像修改自定义对象的原型一样修改原生对象的原型，因此可以随时添加方法。下面的代码就给基本包装类型String 添加了一个名为 startsWith()的方法。
String.prototype.startsWith = function (text) { 
 return this.indexOf(text) == 0; 
}; 
var msg = "Hello world!"; 
alert(msg.startsWith("Hello")); //true

//引用类型有些问题
function Person(){ 
} 
Person.prototype = { 
 constructor: Person, 
 name : "Nicholas", 
 age : 29, 
 job : "Software Engineer", 
 friends : ["Shelby", "Court"], 
 sayName : function () { 
 alert(this.name); 
 } 
}; 
var person1 = new Person(); 
var person2 = new Person(); 
person1.friends.push("Van"); 
alert(person1.friends); //"Shelby,Court,Van" 
alert(person2.friends); //"Shelby,Court,Van" 
alert(person1.friends === person2.friends); //true
```

### 组合使用构造函数模式和原型模式(使用最广泛)
```
function Person(name, age, job){ 
 this.name = name; 
 this.age = age; 
 this.job = job; 
 this.friends = ["Shelby", "Court"]; 
} 
Person.prototype = { 
 constructor : Person, 
 sayName : function(){ 
 alert(this.name); 
 } 
} 
var person1 = new Person("Nicholas", 29, "Software Engineer"); 
var person2 = new Person("Greg", 27, "Doctor"); 
person1.friends.push("Van"); 
alert(person1.friends); //"Shelby,Count,Van" 
alert(person2.friends); //"Shelby,Count" 
alert(person1.friends === person2.friends); //false 
alert(person1.sayName === person2.sayName); //true
```

##继承
- 实现原型链
```
function SuperType(){ 
 this.property = true; 
}
SuperType.prototype.getSuperValue = function(){ 
 return this.property; 
}; 
function SubType(){ 
 this.subproperty = false; 
} 
//继承了 SuperType 
SubType.prototype = new SuperType(); 
SubType.prototype.getSubValue = function (){ 
 return this.subproperty; 
}; 
var instance = new SubType(); 
alert(instance.getSuperValue()); //true

//借用构造函数
 this.colors = ["red", "blue", "green"]; 
} 
function SubType(){ 
 //继承了 SuperType 
 SuperType.call(this); 
} 
var instance1 = new SubType(); 
instance1.colors.push("black"); 
alert(instance1.colors); //"red,blue,green,black" 
var instance2 = new SubType(); 
alert(instance2.colors); //"red,blue,green"

//优势是可以向超类传递参数
function SuperType(name){ 
 this.name = name; 
} 
function SubType(){ 
 //继承了 SuperType，同时还传递了参数
 SuperType.call(this, "Nicholas"); 
 //实例属性
 this.age = 29; 
} 
var instance = new SubType(); 
alert(instance.name); //"Nicholas"; 
alert(instance.age); //29
```

- 组合继承
```
function SuperType(name){ 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function(){ 
 alert(this.name);
}; 
function SubType(name, age){ 
 //继承属性
 SuperType.call(this, name); 
 this.age = age; 
} 
//继承方法
SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){ 
 alert(this.age); 
}; 
var instance1 = new SubType("Nicholas", 29); 
instance1.colors.push("black"); 
alert(instance1.colors); //"red,blue,green,black" 
instance1.sayName(); //"Nicholas"; 
instance1.sayAge(); //29 
var instance2 = new SubType("Greg", 27); 
alert(instance2.colors); //"red,blue,green" 
instance2.sayName(); //"Greg"; 
instance2.sayAge(); //27
```
- 原型继承
```
var person = { 
name: "Nicholas", 
friends: ["Shelby", "Court", "Van"] 
}; 
var anotherPerson = Object.create(person); 
anotherPerson.name = "Greg"; 
anotherPerson.friends.push("Rob"); 
var yetAnotherPerson = Object.create(person); 
yetAnotherPerson.name = "Linda"; 
yetAnotherPerson.friends.push("Barbie"); 
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"
```
- 寄生继承
```
 var clone = object(original); //通过调用函数创建一个新对象
 clone.sayHi = function(){ //以某种方式来增强这个对象
 alert("hi"); 
 }; 
 return clone; //返回这个对象
}
var person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
var anotherPerson = createAnother(person); 
anotherPerson.sayHi(); //"hi"
```
- 寄生组合继承
```
function inheritPrototype(subType, superType){ 
 var prototype = object(superType.prototype); //创建对象
 prototype.constructor = subType; //增强对象
 subType.prototype = prototype; //指定对象
}
function SuperType(name){ 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function(){ 
 alert(this.name); 
}; 
function SubType(name, age){ 
 SuperType.call(this, name); 
 this.age = age; 
} 
inheritPrototype(SubType, SuperType); 
SubType.prototype.sayAge = function(){ 
 alert(this.age); 
};
```

## 函数表达式
```
//函数声明
function functionName(arg0, arg1, arg2) { 
 //函数体
}
//函数表达式(这种情况下创建的函数叫做匿名函数（anonymous function），因为 function 关键字后面没有标识符。)
var functionName = function(arg0, arg1, arg2){ 
 //函数体
};

//递归函数arguments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数的递归调用，
function factorial(num){ 
 if (num <= 1){ 
 return 1; 
 } else { 
 return num * arguments.callee(num-1); 
 } 
}
```

- 闭包
> 闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数
```
function createComparisonFunction(propertyName) { 
 return function(object1, object2){ 
 var value1 = object1[propertyName]; 
 var value2 = object2[propertyName]; 
 if (value1 < value2){ 
 return -1; 
 } else if (value1 > value2){ 
 return 1; 
 } else { 
 return 0; 
 } 
 }; 
}
```
> 由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。过度使用闭包可能会导致内存占用过多.函数在执行完毕后，其活动对象也不会被销毁，因为匿名函数的作用域链仍然在引用这个活动对象。换
句话说，当 createComparisonFunction()函数返回后，其执行环境的作用域链会被销毁，但它的活动对象仍然会留在内存中；直到匿名函数被销毁后，createComparisonFunction()的活动对象才会被销毁

- 闭包变量问题
```
//实际上，每个函数都返回 10。因为每个函数的作用域链中都保存着 createFunctions() 函数的活动对象，所以它们引用的都是同一个变量 i
function createFunctions(){ 
 var result = new Array(); 
 for (var i=0; i < 10; i++){ 
 result[i] = function(){ 
 return i; 
 }; 
 } 
 return result; 
}
//解决方案 创建另一个匿名函数
function createFunctions(){ 
 var result = new Array(); 
 for (var i=0; i < 10; i++){ 
 result[i] = function(num){ 
 return function(){ 
 return num; 
 }; 
 }(i);
 } 
 return result; 
}

//关于this的一点注意
var name = "The Window"; 
var object = { 
 name : "My Object", 
 getNameFunc : function(){ 
 return function(){ 
 return this.name; 
 }; 
 } 
}; 
alert(object.getNameFunc()()); //"The Window"（在非严格模式下）

var name = "The Window"; 
var object = { 
 name : "My Object", 
 getNameFunc : function(){
      var that = this; 
 return function(){ 
 return that.name; 
 }; 
 } 
}; 
alert(object.getNameFunc()()); //"My Object"
```

**一个经典的例子**
```
//object.getName 和(object.getName)的定义是相同的
var name = "The Window"; 
var object = { 
 name : "My Object", 
getName: function(){ 
return this.name; 
} 
};
object.getName(); //"My Object" 
(object.getName)(); //"My Object" 
(object.getName = object.getName)(); //"The Window"，在非严格模式下
//第三行代码先执行了一条赋值语句，然后再调用赋值后的结果。因为这个赋值表达式的值是函数本身，所以 this 的值不能得到维持，结果就返回了"The Window"。
```

- 块级作用域
```
function(){ 
 //这里是块级作用域
}(); //出错！
//这段代码会导致语法错误，是因为 JavaScript 将 function 关键字当作一个函数声明的开始，而函数声明后面不能跟圆括号。然而，函数表达式的后面可以跟圆括号。要将函数声明转换成函数表达式，只要像下面这样给它加上一对圆括号即可。
(function(){ 
 //这里是块级作用域
})();

function outputNumbers(count){ 
 (function () { 
 for (var i=0; i < count; i++){ 
 alert(i); 
 } 
 })(); 
 alert(i); //导致一个错误！
}

//我们把有权访问私有变量和私有函数的公有方法称为特权方法（privileged method）。有两种在对象上创建特权方法的方式。第一种是在构造函数中定义特权方法，基本模式如下。
function MyObject(){ 
 //私有变量和私有函数
 var privateVariable = 10; 
 function privateFunction(){ 
 return false; 
 } 
 //特权方法
 this.publicMethod = function (){ 
 privateVariable++; 
 return privateFunction(); 
 }; 
}
```

- 模块模式
```
var singleton = { 
 name : value, 
 method : function () { 
 //这里是方法的代码
 } 
};
var singleton = function(){ 
 //私有变量和私有函数
 var privateVariable = 10; 
 function privateFunction(){ 
 return false; 
 }
 //特权/公有方法和属性
 return { 
 publicProperty: true, 
 publicMethod : function(){ 
 privateVariable++; 
 return privateFunction(); 
 } 
 };
 }();
```

## BOM
> 由于 window 对象同时扮演着 ECMAScript 中 Global 对象的角色，因此所有在全局作用域中声明的变量、函数都会变成 window 对象的属性和方法。

- 窗口位置
```
//将窗口移动到屏幕左上角
window.moveTo(0,0); 
//将窗向下移动 100 像素
window.moveBy(0,100); 
//将窗口移动到(200,300) 
window.moveTo(200,300); 
//将窗口向左移动 50 像素
window.moveBy(-50,0);
```

- 窗口大小
```
//通过检查document.compatMode（这个属性将在第 10 章全面讨论）来确定页面是否处于标准模式。如果是，则分别使用 document.documentElementclientWidth 和 document.documentElement.clientHeight 的值。否则，就使document.body.clientWidth 和 document.body.clientHeight 的值。

var pageWidth = window.innerWidth, 
 pageHeight = window.innerHeight; 
if (typeof pageWidth != "number"){ 
 if (document.compatMode == "CSS1Compat"){ 
 pageWidth = document.documentElement.clientWidth; 
 pageHeight = document.documentElement.clientHeight; 
 } else { 
 pageWidth = document.body.clientWidth; 
 pageHeight = document.body.clientHeight; 
 } 
}

//调整大小
//调整到 100×100 
window.resizeTo(100, 100); 
//调整到 200×150 
window.resizeBy(100, 50); 
//调整到 300×300 
window.resizeTo(300, 300);
```

- 打开新窗口
```
//这行代码会打开一个新的可以调整大小的窗口，窗口初始大小为 400×400 像素，并且距屏幕上沿和左边各 10 像素。
window.open("http://www.wrox.com/","wroxWindow", 
 "height=400,width=400,top=10,left=10,resizable=yes");

 //也可以这样使用
 var wroxWin = window.open("http://www.wrox.com/","wroxWindow", 
 "height=400,width=400,top=10,left=10,resizable=yes"); 
//调整大小
wroxWin.resizeTo(500,500); 
//移动位置
wroxWin.moveTo(100,100); 
//调用 close()方法还可以关闭新打开的窗口。
wroxWin.close();
 ```
 > 对于浏览器的主窗口，如果没有得到用户的允许是不能关闭它的。不过，弹出窗口倒是可以调用 top.close()在不经用户允许的情况下关闭自己。弹出窗口关闭之后，窗口的引用仍然还在

 - 间歇调用和超时调用
```
//不建议传递字符串！
setTimeout("alert('Hello world!') ", 1000); 
//推荐的调用方式
setTimeout(function() { 
 alert("Hello world!"); 
}, 1000);

//设置超时调用
var timeoutId = setTimeout(function() { 
 alert("Hello world!"); 
}, 1000); 
//注意：把它取消
clearTimeout(timeoutId);

//间歇调用 过一段时间就会调用一次
//不建议传递字符串！
setInterval ("alert('Hello world!') ", 10000); 
//推荐的调用方式
setInterval (function() { 
 alert("Hello world!"); 
}, 10000);

var num = 0; 
var max = 10; 
var intervalId = null; 
function incrementNumber() { 
 num++; 
 //如果执行次数达到了 max 设定的值，则取消后续尚未执行的调用
 if (num == max) { 
 clearInterval(intervalId); 
 alert("Done"); 
 } 
} 
intervalId = setInterval(incrementNumber, 500);

//使用超时调用来取代间歇调用（推荐）
var num = 0; 
var max = 10; 
function incrementNumber() { 
 num++; 
 //如果执行次数未达到 max 设定的值，则设置另一次超时调用
 if (num < max) { 
 setTimeout(incrementNumber, 500); 
 } else { 
 alert("Done"); 
 } 
} 
setTimeout(incrementNumber, 500);
```

- 系统对话框
> alert()(OK) confirm()(Ok和cancel) prompt()(含输入框 OK cancel) print() find()两个都是异步显示

- location对象
> 它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。
```
//假设初始 URL 为 http://www.wrox.com/WileyCDA/ 
//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1" 
location.hash = "#section1"; 
//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript" 
location.search = "?q=javascript"; 
//将 URL 修改为"http://www.yahoo.com/WileyCDA/" 
location.hostname = "www.yahoo.com"; 
//将 URL 修改为"http://www.yahoo.com/mydir/" 
location.pathname = "mydir"; 
//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/" 
location.port = 8080;

//如果将这个页面加载到浏览器中，浏览器就会在 1 秒钟后重新定向到 www.wrox.com。然后，“后退”按钮将处于禁用状态
location.replace("http://www.wrox.com/");
```

- navigator 对象
```
//插件检测
//检测插件（在 IE 中无效）
function hasPlugin(name){ 
 name = name.toLowerCase(); 
 for (var i=0; i < navigator.plugins.length; i++){ 
 if (navigator. plugins [i].name.toLowerCase().indexOf(name) > -1){ 
 return true; 
 } 
 } 
 return false; 
} 
//检测 Flash 
alert(hasPlugin("Flash")); 
//检测 QuickTime 
alert(hasPlugin("QuickTime"));
```

- screen对象
```
//不太常用的对象
window.resizeTo(screen.availWidth, screen.availHeight);
```

- history对象
```
//后退一页
history.go(-1); 
//前进一页
history.go(1); 
//前进两页
history.go(2);
//跳转到最近的 wrox.com 页面
history.go("wrox.com"); 
//跳转到最近的 nczonline.net 页面
history.go("nczonline.net");
//后退一页
history.back(); 
//前进一页
history.forward();
if (history.length == 0){ 
 //这应该是用户打开窗口后的第一个页面
}
```

## 客户端检测
```
//基本模式
if (object.propertyInQuestion){ 
 //使用 object.propertyInQuestion 
}
//例子
function getElement(id){ 
 if (document.getElementById){ 
 return document.getElementById(id); 
 } else if (document.all){ 
 return document.all[id];
 } else { 
 throw new Error("No way to retrieve element!"); 
 } 
}
//这样更好：检查 sort 是不是函数 sort有可能是个属性名但不是想要的
function isSortable(object){ 
return typeof object.sort == "function"; 
}
```

- 用户代理
> 五大呈现引擎：IE、Gecko、WebKit、KHTML 和 Opera
**用户代理检测是客户端检测的最后一个选择。只要可能，都应该优先采用能力检测和怪癖检测**
```
//Netscape Communications 公司介入浏览器开发领域后，遂将自己产品的代号定名为 Mozilla（Mosaic Killer 的简写，意即 Mosaic 杀手）。该公司第一个公开发行版
//Safari 的呈现引擎叫 WebKit
//Chrome 浏览器以 WebKit 作为呈现引擎，但使用了不同的 JavaScript 引擎
//移动操作系统 iOS 和 Android 默认的浏览器都基于 WebKit，而且都像它们的桌面版一样，共享相同的基本用户代理字符串格式
if (ieVer >=6){ 
 //代码
}

//识别呈现引擎
var client = function(){ 
 var engine = { 
 //呈现引擎
 ie: 0, 
 gecko: 0, 
 webkit: 0, 
 khtml: 0, 
 opera: 0, 
 //具体的版本号
 ver: null 
 }; 
 //在此检测呈现引擎、平台和设备
 return { 
 engine : engine 
 }; 
}();
```

## DOM
> NodeList 对象的
独特之处在于，它实际上是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映
在 NodeList 对象中。

- cloneNode()方法
> 用于创建调用这个方法的节点
的一个完全相同的副本。cloneNode()方法接受一个布尔值参数，表示是否执行深复制。在参数为 true的情况下，执行深复制，也就是复制节点及其整个子节点树；在参数为 false 的情况下，执行浅复制，即只复制节点本身。
```
var deepList = myList.cloneNode(true); 
alert(deepList.childNodes.length); //3（IE < 9）或 7（其他浏览器）
var shallowList = myList.cloneNode(false); 
alert(shallowList.childNodes.length); //0
```
- document节点
> documentElement、firstChild 和 childNodes[0]的值相同，都指向<html>
元素。
```
var body = document.body; //取得对<body>的引用
var doctype = document.doctype; //取得对<!DOCTYPE>的引用
//取得完整的 URL
var url = document.URL; 
//取得域名
var domain = document.domain; 
//取得来源页面的 URL
var referrer = document.referrer;

//假设页面来自于 p2p.wrox.com 域
document.domain = "wrox.com"; //松散的（成功）
document.domain = "p2p.wrox.com"; //紧绷的（出错！）
```
> 于跨域安全限制，来自不同子域的页面无法通过 JavaScript 通信。而通过将每个页面的document.domain 设置为相同的值，这些页面就可以互相访问对方包含的JavaScript 对象了。例如，假设有一个页面加载自 www.wrox.com，其中包含一个内嵌框架，框架内的页面加载自 p2p.wrox.com。由于 document.domain 字符串不一样，内外两个页面之间无法相互访问对方的 JavaScript 对象。但如果将这两个页面的 document.domain 值都设置为"wrox.com"，它们之间就可以通信了。

- 查找元素
> 如果页面中多个元素的 ID 值相同，getElementById()只返回文档中第一次出现的元素
```
//对命名的项也可以使用方括号语法来访问
var myImage = images["myImage"];];
```

- DOM一致性检测
> 由于 DOM 分为多个级别，也包含多个部分，因此检测浏览器实现了 DOM 的哪些部分就十分必要了
```
var hasXmlDom = document.implementation.hasFeature("XML", "1.0");
```

- 文档写入
```
<html> 
<head> 
 <title>document.write() Example</title> 
</head> 
<body> 
 <p>The current date and time is: 
 <script type="text/javascript"> 
 document.write("<strong>" + (new Date()).toString() + "</strong>"); 
 </script> 
 </p> 
</body> 
</html>

<html> 
<head> 
 <title>document.write() Example 2</title> 
</head> 
<body> 
 <script type="text/javascript"> 
 //错误表达
 document.write("<script type=\"text/javascript\" src=\"file.js\">" + 
 "</script>"); 
 //正确表达
 document.write("<script type=\"text/javascript\" src=\"file.js\">" + 
 "<\/script>");
 </script> 
</body> 
</html>
```

- Element类型
```
//特性的名称是不区分大小写的
//自定义特性应该加上 data-前缀以便验证。
//style中的属性名（由于 style 属性是用于以编程方式访问元素样式的）以及onclick这种类型的会返回一个JS函数，由于存在这些差异，开发人员经常不使用getAttribute()而是只使用对象的属性，只有在取得自定义特征值的情况下才会使用getAttribute（）方法
var div = document.getElementById("myDiv"); 
alert(div.getAttribute("id")); //"myDiv" 
alert(div.getAttribute("class")); //"bd" 
alert(div.getAttribute("title")); //"Body text" 
alert(div.getAttribute("lang")); //"en" 
alert(div.getAttribute("dir")); //"ltr"]

div.setAttribute("id", "someOtherId"); 
div.setAttribute("class", "ft"); 
div.setAttribute("title", "Some other text"); 
div.setAttribute("lang","fr"); 
div.setAttribute("dir", "rtl");

//attributes属性
var id = element.attributes.getNamedItem("id").nodeValue;
var id = element.attributes["id"].nodeValue;

//如果想要遍历元素的特性，attributes 属性倒是可以派上用场
function outputAttributes(element){ 
 var pairs = new Array(), 
 attrName, 
 attrValue, 
 i, 
 len; 
 for (i=0, len=element.attributes.length; i < len; i++){ 
 attrName = element.attributes[i].nodeName; 
 attrValue = element.attributes[i].nodeValue; 
 pairs.push(attrName + "=\"" + attrValue + "\""); 
 } 
 return pairs.join(" "); 
}

//利用specified属性改进一下，这个属性表示在HTML中指定了相应特征
if (element.attributes[i].specified) { 
 pairs.push(attrName + "=\"" + attrValue + "\""); 
 }

 //创建节点
 var div = document.createElement("<div id=\"myNewDiv\" class=\"box\"></div >");

```

- 文本节点
> 文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容.如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，中间不会有空格
```
//normalize()方法
var element = document.createElement("div"); 
element.className = "message"; 
var textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
var anotherTextNode = document.createTextNode("Yippee!"); 
element.appendChild(anotherTextNode); 
document.body.appendChild(element); 
alert(element.childNodes.length); //2 
element.normalize(); 
alert(element.childNodes.length); //1 
alert(element.firstChild.nodeValue); // "Hello world!Yippee!"

//相反的splitText()方法
var newNode = element.firstChild.splitText(5); 
alert(element.firstChild.nodeValue); //"Hello" 
alert(newNode.nodeValue); //" world!" 
alert(element.childNodes.length); //2
```

- Comment类型
> 注释,Comment 类型与 Text 类型继承自相同的基类，因此它拥有除 splitText()之外的所有字符串操作方法。与 Text 类型相似，也可以通过 nodeValue 或 data 属性来取得注释的内容。
```
//document.createComment()并为其传递注释文本也可以创建注释节点
var comment = document.createComment("A comment ");
```

- CDATASection类型
> 只针对基于 XML 的文档，表示的是 CDATA 区域。与 Comment 类似，CDATASection 类型继承自 Text 类型，因此拥有除 splitText()之外的所有字符串操作方法。

- DocumentType类型
> 包含着与文档的 doctype 有关的所有信息
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd"> 
//DocumentType 的 name 属性中保存的就是"HTML"：
alert(document.doctype.name); //"HTML"
```

- DocumentFragment类型
> 在所有节点类型中，只有 DocumentFragment 在文档中没有对应的标记,DOM 规定文档片段（document fragment）是一种“轻量级”的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源
```
//虽然不能把文档片段直接添加到文档中，但可以将它作为一个“仓库”来使用，即可以在里面保存将来可能会添加到文档中的节点。要创建文档片段，可以使用 document.createDocumentFragment()方法
var fragment = document.createDocumentFragment();

//实例
var fragment = document.createDocumentFragment(); 
var ul = document.getElementById("myList"); 
var li = null; 
for (var i=0; i < 3; i++){ 
 li = document.createElement("li"); 
 li.appendChild(document.createTextNode("Item " + (i+1))); 
 fragment.appendChild(li); 
} 
ul.appendChild(fragment);

//动态渲染
var style = document.createElement("style"); 
style.type = "text/css"; 
style.appendChild(document.createTextNode("body{background-color:red}")); 
var head = document.getElementsByTagName("head")[0]; 
head.appendChild(style);

//通用解决方案
function loadStyleString(css){ 
 var style = document.createElement("style");
  style.type = "text/css"; 
 try{ 
 style.appendChild(document.createTextNode(css)); 
 } catch (ex){ 
 style.styleSheet.cssText = css; 
 } 
 var head = document.getElementsByTagName("head")[0]; 
 head.appendChild(style); 
}

loadStyleString("body{background-color:red}");
```

- 操作表格
> 为了方便构建表格，HTML DOM 还为<table>、<tbody>和<tr>元素添加了一些属性和方法。
```
//创建 table 
var table = document.createElement("table"); 
table.border = 1; 
table.width = "100%"; 
//创建 tbody 
var tbody = document.createElement("tbody"); 
table.appendChild(tbody); 
//创建第一行
tbody.insertRow(0); 
tbody.rows[0].insertCell(0); 
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1")); 
tbody.rows[0].insertCell(1); 
tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1")); 
//创建第二行
tbody.insertRow(1); 
tbody.rows[1].insertCell(0); 
tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2")); 
tbody.rows[1].insertCell(1); 
tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2")); 
//将表格添加到文档主体中
document.body.appendChild(table);
```

- NodeList
> NamedNodeMap HTMLCollectinon NodeLIst三个集合都是“动态的”,每当文档结构发生变化时它们都会得到革新**应该尽量减少访问 NodeList 的次数。因为每次访问 NodeList，都会运行一次基于文档的查询。所以，可以考虑将从 NodeList 中取得的值缓存起来。特别是for循环访问**

## DOM扩展
```
//通过 Document 类型调用 querySelector()方法时，会在文档元素的范围内查找匹配的元素。而通过 Element 类型调用 querySelector()方法时，只会在该元素后代元素的范围内查找匹配的元素。
//取得 body 元素
var body = document.querySelector("body"); 
//取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv"); 
//取得类为"selected"的第一个元素
var selected = document.querySelector(".selected"); 
//取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");

//只要传给 querySelectorAll()方法的 CSS 选择符有效，该方法都会返回一个 NodeList 对象，而不管找到多少匹配的元素
//取得某<div>中的所有<em>元素（类似于 getElementsByTagName("em")）
var ems = document.getElementById("myDiv").querySelectorAll("em"); 
//取得类为"selected"的所有元素
var selecteds = document.querySelectorAll(".selected"); 
//取得所有<p>元素中的所有<strong>元素
var strongs = document.querySelectorAll("p strong");

//这里的len=strongs.length是避免无限循环
var i, len, strong; 
for (i=0, len=strongs.length; i < len; i++){ 
 strong = strongs[i]; //或者 strongs.item(i) 
 strong.className = "important"; 
}

//这个方法接收一个参数，即 CSS 选择符，如果调用元素与该选择符匹配，返回true；否则，返回 false，但是各浏览器基本都不支持，但是都有自己独立的方法
function matchesSelector(element, selector){ 
 if (element.matchesSelector){ 
 return element.matchesSelector(selector); 
 } else if (element.msMatchesSelector){ 
 return element.msMatchesSelector(selector); 
 } else if (element.mozMatchesSelector){ 
 return element.mozMatchesSelector(selector); 
 } else if (element.webkitMatchesSelector){ 
 return element.webkitMatchesSelector(selector); 
 } else { 
 throw new Error("Not supported."); 
 } 
} 
if (matchesSelector(document.body, "body.page1")){ 
 //执行操作
}

//元素遍历
var i, 
 len, 
 child = element.firstElementChild; 
while(child != element.lastElementChild){ 
 processChild(child); //已知其是元素
 child = child.nextElementSibling; 
}
```

## HTML5拓展
- 操作标签的类
```
//删除一个标签类名列表中的某个类 classList
//删除"disabled"类
div.classList.remove("disabled"); 
//添加"current"类
div.classList.add("current"); 
//切换"user"类
div.classList.toggle("user"); 
//确定元素中是否包含既定的类名
if (div.classList.contains("bd") && !div.classList.contains("disabled")){ 
 //执行操作
) 
//迭代类名
for (var i=0, len=div.classList.length; i < len; i++){ 
 doSomething(div.classList[i]); 
}
```
- 焦点管理
> 是 document.activeElement 属性，这个属性始终会引用 DOM 中当前获得了焦点的元素。元素获得焦点的方式有页面加载、用户输入（通常是通过按 Tab 键）和在代码中调用 focus()方法。
```
var button = document.getElementById("myButton"); 
button.focus(); 
alert(document.activeElement === button); //true

//默认情况下，文档刚刚加载完成时，document.activeElement 中保存的是document.body 元素的引用。文档加载期间，document.activeElement 的值为 null。
//查询是否获得焦点(通过检测文档是否获得了焦点，可以知道用户是不是正在与页面交互)
var button = document.getElementById("myButton");
button.focus(); 
alert(document.hasFocus()); //true
```

- HTMLDocument的变化
```
//document.readyState 的最恰当方式，就是通过它来实现一个指示文档已经加载完成的指示器
if (document.readyState == "complete"){ 
 //执行操作
}

//渲染页面的模式分为标准的和混杂的（在标准模式下，document.compatMode 的
值等于"CSS1Compat"，而在混杂模式下，document.compatMode 的值等于"BackCompat"）

//自定义标签属性
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
var div = document.getElementById("myDiv"); 
//取得自定义属性的值
var appId = div.dataset.appId; 
var myName = div.dataset.myname; 
//设置值
div.dataset.appId = 23456; 
div.dataset.myname = "Michael";

//在设置 innerHTML 或 outerHTML 时，就会创建一个 HTML解析器，所以应当减少使用这两个属性，特别是在循环中，最好一次性就传递给属性，而不要使用属性进行拼接。
//innerHTML属性
//outerHTML属性（outerHTML会根据指定的 HTML 字符串创建新的 DOM 子树，然后用这个 DOM 子树完全替换调用元素。）
div.outerHTML = "<p>This is a paragraph.</p>";
//等价于。结果，就是新创建的<p>元素会取代 DOM 树中的<div>元素。
var p = document.createElement("p"); 
p.appendChild(document.createTextNode("This is a paragraph.")); 
div.parentNode.replaceChild(p, div);

//innerText 属性（结果会删除元素的所有子节点，插入包含相应文本值的文本节点。）有时候可以使用textContent属性
//outerText 属性（除了作用范围扩大到了包含调用它的节点之外，outerText 与 innerText 基本上没有多大区别。在读取文本值时，outerText 与 innerText 的结果完全一样。）

//insertAdjacentHTML()方法
//作为前一个同辈元素插入
element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>"); 
//作为第一个子元素插入
element.insertAdjacentHTML("afterbegin", "<p>Hello world!</p>"); 
//作为最后一个子元素插入
element.insertAdjacentHTML("beforeend", "<p>Hello world!</p>"); 
//作为后一个同辈元素插入
element.insertAdjacentHTML("afterend", "<p>Hello world!</p>");

//scrollIntoView()方法（如果给这个方法传入 true 作为参数，或者不传入任何参数，那么窗口滚动之后会让调用元素的顶部与视口顶部尽可能平齐。如果传入 false 作为参数，调用元素会尽可能全部出现在视口中，（可能的话，调用元素的底部会与视口顶部平齐。）不过顶部不一定平齐），实际上，为某个元素设置焦点也会导致浏览器滚动并显示出获得焦点的元素

//children属性
var childCount = element.children.length; 
var firstChild = element.children[0];

//contains()方法
alert(document.documentElement.contains(document.body)); //true
//compareDocumentPosition()也能够确定节点间的关系

//滚动
//将页面主体滚动 5 行
document.body.scrollByLines(5);
//在当前元素不可见的时候，让它进入浏览器的视口
document.images[0].scrollIntoViewIfNeeded(); 
//将页面主体往回滚动 1 页
document.body.scrollByPages(-1);
```

## DOM2和DOM3
```
//命名空间的变化
//混合了 XHTML 和 SVG 语言的文档
<html xmlns="http://www.w3.org/1999/xhtml"> 
 <head> 
 <title>Example XHTML page</title> 
 </head> 
 <body> 
 <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
 viewBox="0 0 100 100" style="width:100%; height:100%"> 
 <rect x="0" y="0" width="100" height="100" style="fill:red"/> 
 </svg> 
 </body> 
</html>
//对于<html>元素来说，它的 localName 和 tagName 是"html"，namespaceURI 是"http://www. w3.org/1999/xhtml"，而 prefix 是 null。对于<s:svg>元素而言，它的 localName 是"svg"，tagName 是"s:svg"，namespaceURI 是"http://www.w3.org/2000/svg"，而 prefix 是"s"。

//Document类型的变化
//创建一个新的 SVG 元素
var svg = document.createElementNS("http://www.w3.org/2000/svg","svg"); 
//创建一个属于某个命名空间的新特性
var att = document.createAttributeNS("http://www.somewhere.com", "random"); 
//取得所有 XHTML 元素
var elems = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "*");

//Element类型的变化
getAttributeNS(namespaceURI,localName)
getAttributeNodeNS(namespaceURI,localName)
getElementsByTagNameNS(namespaceURI, tagName)
hasAttributeNS(namespaceURI,localName)
removeAttriubteNS(namespaceURI,localName)
setAttributeNS(namespaceURI,qualifiedName,value)
setAttributeNodeNS(attNode)

//node类型的变化
var div1 = document.createElement("div"); 
div1.setAttribute("class", "box"); 
var div2 = document.createElement("div"); 
div2.setAttribute("class", "box"); 
alert(div1.isSameNode(div1)); //true 
alert(div1.isEqualNode(div2)); //true 
alert(div1.isSameNode(div2)); //false

//针对DOM节点添加额外数据引入了新方法，并且第三个参数可以是任何数据类型
document.body.setUserData("name", "Nicholas", function(){});

//框架的变化
//框架和内嵌框架分别用 HTMLFrameElement 和 HTMLIFrameElement 表示，它们在 DOM2级中都有了一个新属性，名叫 contentDocument。这个属性包含一个指针，指向表示框架内容的文档对象。在此之前，无法直接通过元素取得这个文档对象（只能使用 frames 集合）
var iframe = document.getElementById("myIframe"); 
var iframeDoc = iframe.contentDocument; //在 IE8 以前的版本中无效
//contentWindow 的属性，该属性返回框架的 window 对象，而这个 window 对象又有一个 document 属性。要想在上述所有浏览器中访问内嵌框架的文档对象
var iframe = document.getElementById("myIframe"); 
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
```

- 样式上的变化
```
myDiv.style.cssText = "width: 25px; height: 100px;background-color: green"; 
alert(myDiv.style.cssText);

for (var i=0, len=myDiv.style.length; i < len; i++){ 
 alert(myDiv.style[i]); //或者 myDiv.style.item(i) 
}

var prop, value, i, len; 
for (i=0, len=myDiv.style.length; i < len; i++){ 
 prop = myDiv.style[i]; //或者 myDiv.style.item(i) 
 value = myDiv.style.getPropertyValue(prop); 
 alert(prop + " : " + value); 
}

//cssValueType 属性则是一个数值常量，表示值的类型：0 表示继承的值，1 表示基本的值，2 表示值列表，3 表示自定义的值
var prop, value, i, len; 
for (i=0, len=myDiv.style.length; i < len; i++){ 
prop = myDiv.style[i]; //或者 myDiv.style.item(i) 
 value = myDiv.style.getPropertyCSSValue(prop); 
 alert(prop + " : " + value.cssText + " (" + value.cssValueType + ")"); 
}

//在不确定某个给定的 CSS 属性拥有什么默认值的情况下，就可以使用这个方法。只要移除相应的属性，就可以为元素应用默认值。
myDiv.style.removeProperty("border");

//计算的样式(要记住所有计算的样式都是只读的；不能修改计算后样式对象中的 CSS 属性)
<style type="text/css"> 
 #myDiv { 
 background-color: blue; 
 width: 100px; 
 height: 200px; 
 } 
 </style>
 <div id="myDiv" style="background-color: red; border: 1px solid black"></div>
var myDiv = document.getElementById("myDiv"); 
var computedStyle = document.defaultView.getComputedStyle(myDiv, null); 
alert(computedStyle.backgroundColor); // "red" 
alert(computedStyle.width); // "100px" 
alert(computedStyle.height); // "200px" 
alert(computedStyle.border); // 在某些浏览器中是"1px solid black"
```
- 操作样式表
> 所有浏览器都会包含\<style>元素和rel特性被设置成"stylesheet"的\<link>元素引入的样式表
```
//例子代码可以输出文档中使用的每一个样式表的href属性，其中由<style>元素包含的样式表是没有href属性的
var sheet = null; 
for (var i=0, len=document.styleSheets.length; i < len; i++){
    sheet = document.styleSheets[i]; 
 alert(sheet.href); 
}

//取得第一个<link/>元素引入的样式表
var link = document.getElementsByTagName("link")[0]; 
var sheet = getStylesheet(link);

//其实写的样式表中的每一条都可以对应一条规则，如果想要更改某个规则（即更改某个css中的样式条例)可以使用以下方法来获取并修改对应的样式（规则）
var sheet = document.styleSheets[0]; 
var rules = sheet.cssRules || sheet.rules; //取得规则列表
var rule = rules[0]; //取得第一条规则
rule.style.backgroundColor = "red"

//创建规则
sheet.insertRule("body { background-color: silver }", 0); //DOM 方法

//删除规则
sheet.deleteRule(0); //DOM 方法
```

- 元素大小
```
//以下两个函数就可以用于分别取得元素的左和上的偏移量
function getElementLeft(element){ 
 var actualLeft = element.offsetLeft; 
 var current = element.offsetParent; 
 while (current !== null){ 
 actualLeft += current.offsetLeft; 
 current = current.offsetParent; 
 } 
 return actualLeft; 
}
function getElementTop(element){ 
 var actualTop = element.offsetTop; 
 var current = element.offsetParent; 
 while (current !== null){ 
 actualTop += current. offsetTop; 
 current = current.offsetParent; 
 } 
 return actualTop; 
}

//客户区的大小（指元素内容以及其内边距所占用的空间的大小）
function getViewport(){ 
//确定浏览器是否运行在混杂模式
 if (document.compatMode == "BackCompat"){ 
 return { 
 width: document.body.clientWidth, 
 height: document.body.clientHeight 
 }; 
 } else { 
 return { 
 width: document.documentElement.clientWidth, 
 height: document.documentElement.clientHeight 
 }; 
 } 
}
```
**滚动大小**
> scrollHeight：在没有滚动条的情况下，元素内容的总高度。

> scrollWidth：在没有滚动条的情况下，元素内容的总宽度。

> scrollLeft：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置。

> scrollTop：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。

```
//再确定文档的总高度时必须取得四个值中的最大值才能保证到精确的结果
var docHeight = Math.max(document.documentElement.scrollHeight, 
 document.documentElement.clientHeight); 
var docWidth = Math.max(document.documentElement.scrollWidth, 
 document.documentElement.clientWidth);

//检测并返回到页面的顶部
//两个值的初始值均为0只有在元素被滚动了之后才会增加，其中scrollTop表示元素上方不可见内容的像素高度，scrollLeft类似。
function scrollToTop(element){ 
 if (element.scrollTop != 0){ 
 element.scrollTop = 0; 
 } 
}

function getBoundingClientRect(element){ 
 if (typeof arguments.callee.offset != "number"){ 
 var scrollTop = document.documentElement.scrollTop; 
 var temp = document.createElement("div"); 
 temp.style.cssText = "position:absolute;left:0;top:0;"; 
 document.body.appendChild(temp); 
 arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop; 
 document.body.removeChild(temp); 
 temp = null; 
 } 
 var rect = element.getBoundingClientRect(); 
 var offset = arguments.callee.offset; 
 return { 
 left: rect.left + offset, 
 right: rect.right + offset, 
 top: rect.top + offset, 
 bottom: rect.bottom + offset 
 }; 
}
```

## 遍历
> DOM 遍历是深度优先的 DOM 结构遍历，也就是说，移动的方向至少有两个（取决
于使用的遍历类型）
```
//NodeIterator遍历
var div = document.getElementById("div1");
//创建一个将简单的遍历器
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, 
 null, false); 
var node = iterator.nextNode(); 
while (node !== null) { 
 alert(node.tagName); //输出标签名
 node = iterator.nextNode(); 
}

//指定返回某个特定的标签名
var div = document.getElementById("div1"); 
var filter = function(node){ 
 return node.tagName.toLowerCase() == "li" ? 
 NodeFilter.FILTER_ACCEPT : 
 NodeFilter.FILTER_SKIP; 
}; 
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, 
 filter, false); 
var node = iterator.nextNode(); 
while (node !== null) { 
 alert(node.tagName); //输出标签名
 node = iterator.nextNode(); 
}

//TreeWalker遍历
var div = document.getElementById("div1"); 
var filter = function(node){ 
 return node.tagName.toLowerCase() == "li"? 
 NodeFilter.FILTER_ACCEPT : 
 NodeFilter.FILTER_SKIP; 
}; 
var walker= document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, 
 filter, false); 
var node = iterator.nextNode(); 
while (node !== null) { 
 alert(node.tagName); //输出标签名
 node = iterator.nextNode(); 
}

var div = document.getElementById("div1"); 
var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false); 
walker.firstChild(); //转到<p> 
walker.nextSibling(); //转到<ul> 
var node = walker.firstChild(); //转到第一个<li> 
while (node !== null) { 
 alert(node.tagName); 
 n
//修改遍历的起点
var node = walker.nextNode(); 
alert(node === walker.currentNode); //true 
walker.currentNode = document.body; //修改起点
```
- 范围
```
<!DOCTYPE html> 
<html> 
 <body> 
 <p id="p1"><b>Hello</b> world!</p> 
 </body> 
</html>
var range1 = document.createRange(); 
 range2 = document.createRange(); 
 p1 = document.getElementById("p1"); 
range1.selectNode(p1); 
range2.selectNodeContents(p1);
```

## 事件
> 通过 HTML 指定事件处理程序的最后一个缺点是 HTML 与 JavaScript 代码紧密耦合。如果要更换事件处理程序，就要改动两个地方：HTML 代码和 JavaScript 代码。而这正是许多开发人员摒弃 HTML 事件处理程序，转而使用 JavaScript 指定事件处理程序的原因所在。

**通用的事件对象 EventUtil(跨浏览器的事件对象)**
```
var EventUtil = { 
 addHandler: function(element, type, handler){ 
 //省略的代码
 }, 
 getEvent: function(event){ 
 return event ? event : window.event; 
 }, 
 getTarget: function(event){ 
 return event.target || event.srcElement; 
 }, 
 preventDefault: function(event){ 
 if (event.preventDefault){ 
 event.preventDefault(); 
 } else { 
 event.returnValue = false; 
 } 
 }, 
 removeHandler: function(element, type, handler){ 
 //省略的代码
 }, 
 stopPropagation: function(event){
      if (event.stopPropagation){ 
 event.stopPropagation(); 
 } else { 
 event.cancelBubble = true; 
 } 
 } 
};
```

```
//可以通过event变量直接访问事件对象不必进行自己定义和查找，在函数的内部可以直接用this来代表事件的目标对象
<!-- 输出 "Click Me" --> 
<input type="button" value="Click Me" onclick="alert(this.value)">

//扩展作用域
function(){ 
 with(document){ 
 with(this){ 
 //元素属性值
 } 
 } 
}
<!-- 输出 "Click Me" --> 
<input type="button" value="Click Me" onclick="alert(value)">

//展示为form表单结构进行扩展作用域
function(){ 
 with(document){ 
with(this.form){ 
 with(this){ 
 //元素属性值
 } 
}
 } 
}
<form method="post"> 
 <input type="text" name="username" value=""> 
 <input type="button" value="Echo Username" onclick="alert(username.value)"> 
</form>

//DOM2级事件处理
var btn = document.getElementById("myBtn"); 
btn.addEventListener("click", function(){ 
 alert(this.id); 
}, false);

//使用 DOM2 级方法添加事件处理程序的主要好处是可以添加多个事件处理序。
var btn = document.getElementById("myBtn"); 
btn.addEventListener("click", function(){ 
 alert(this.id); 
}, false); 
btn.addEventListener("click", function(){ 
 alert("Hello world!"); 
}, false);

//通过 addEventListener()添加的事件处理程序只能使用removeEventListener()来移除；移
除时传入的参数与添加处理程序时使用的参数相同。这也意味着通过 addEventListener()添加的匿名函数将无法移除
var btn = document.getElementById("myBtn"); 
btn.addEventListener("click", function(){ 
 alert(this.id);
 }, false);
 btn.removeEventListener("click", function(){ //没有用！
 alert(this.id); 
}, false);

//解决方法对于事件处理函数不使用匿名函数
var btn = document.getElementById("myBtn"); 
var handler = function(){ 
 alert(this.id); 
}; 
btn.addEventListener("click", handler, false); 
//这里省略了其他代码
btn.removeEventListener("click", handler, false); //有效！

//IE中的事件绑定
//与 DOM方法不同的是，这些事件处理程序不是以添加它们的顺序执行，而是以相反的顺序被触发。单击这个例子中的按钮，首先看到的是"Hello world!"，然后才是"Clicked"
var btn = document.getElementById("myBtn"); 
btn.attachEvent("onclick", function(){ 
 alert("Clicked"); 
}); 
btn.attachEvent("onclick", function(){ 
 alert("Hello world!"); 
});
//IE中的事件移除
var btn = document.getElementById("myBtn"); 
var handler = function(){ 
 alert("Clicked"); 
}; 
btn.attachEvent("onclick", handler); 
//这里省略了其他代码
btn.detachEvent("onclick", handler);

//跨浏览器中使用事件绑定
var EventUtil = { 
 addHandler: function(element, type, handler){ 
 if (element.addEventListener){ 
 element.addEventListener(type, handler, false); 
 } else if (element.attachEvent){ 
 element.attachEvent("on" + type, handler); 
 } else { 
 element["on" + type] = handler; 
 } 
 }, 
 removeHandler: function(element, type, handler){ 
 if (element.removeEventListener){ 
 element.removeEventListener(type, handler, false); 
 } else if (element.detachEvent){ 
 element.detachEvent("on" + type, handler); 
 } else { 
 element["on" + type] = null; 
 } 
 } 
};

var btn = document.getElementById("myBtn"); 
var handler = function(){ 
 alert("Clicked"); 
}; 
EventUtil.addHandler(btn, "click", handler); 
//这里省略了其他代码
EventUtil.removeHandler(btn, "click", handler);
```

- 事件对象
```
var btn = document.getElementById("myBtn"); 
btn.onclick = function(event){ 
 alert(event.currentTarget === this); //true 
 alert(event.target === this); //true 
}

//事件对象的一个好用的使用
var btn = document.getElementById("myBtn"); 
var handler = function(event){
switch(event.type){ 
 case "click": 
 alert("Clicked"); 
 break; 
 case "mouseover": 
 event.target.style.backgroundColor = "red"; 
 break; 
 case "mouseout": 
 event.target.style.backgroundColor = ""; 
 break; 
 } 
}; 
btn.onclick = handler; 
btn.onmouseover = handler; 
btn.onmouseout = handler;

//阻止事件的默认行为，比如对于链接的跳转的默认行为进行阻止
var link = document.getElementById("myLink"); 
link.onclick = function(event){ 
 event.preventDefault(); 
};

//eventPhase属性
//事件对象的 eventPhase 属性，可以用来确定事件当前正位于事件流的哪个阶段。如果是在捕获阶段调用的事件处理程序，那么 eventPhase 等于 1；如果事件处理程序处于目标对象上，则eventPhase 等于 2；如果是在冒泡阶段调用的事件处理程序，eventPhase 等于 3。这里要注意的是，尽管“处于目标”发生在冒泡阶段，但 eventPhase 仍然一直等于 2。
//示例
var btn = document.getElementById("myBtn"); 
btn.onclick = function(event){ 
 alert(event.eventPhase); //2 
}; 
document.body.addEventListener("click", function(event){ 
 alert(event.eventPhase); //1 
}, true); 
document.body.onclick = function(event){ 
 alert(event.eventPhase); //3 
};

//在事件处理中，处理程序的作用域是根据指定他的方式来确定的，所以不能一直相信this会等于事件目标，所以最好还是使用event.srcElement比较保险
var btn = document.getElementById("myBtn"); 
btn.onclick = function(){ 
 alert(window.event.srcElement === this); //true 
}; 
btn.attachEvent("onclick", function(event){ 
 alert(event.srcElement === this); //false 
});
```
- UI事件
```
//load事件
EventUtil.addHandler(window, "load", function(event){ 
 alert("Loaded!"); 
});
var image = document.getElementById("myImage"); 
EventUtil.addHandler(image, "load", function(event){ 
 event = EventUtil.getEvent(event); 
 alert(EventUtil.getTarget(event).src); 
});

//unload事件
//这个事件在文档被完全卸载后触发。只要用户从一个页面切换到另一个页面，就会发生 unload 事件。
EventUtil.addHandler(window, "unload", function(event){ 
 alert("Unloaded"); 
});

//resize 事件
EventUtil.addHandler(window, "resize", function(event){ 
 alert("Resized"); 
});

//scroll 事件
//代码指定的事件处理程序会输出页面的垂直滚动位置——根据呈现模式不同使用了不同的元素
EventUtil.addHandler(window, "scroll", function(event){ 
 if (document.compatMode == "CSS1Compat"){ 
 alert(document.documentElement.scrollTop); 
 } else { 
 alert(document.body.scrollTop); 
 } 
});
```
- 焦点事件
```
//可以使用类似下列代码取得鼠标事件的客户端坐标信息：
var div = document.getElementById("myDiv"); 
EventUtil.addHandler(div, "click", function(event){ 
 event = EventUtil.getEvent(event); 
 alert("Client coordinates: " + event.clientX + "," + event.clientY); 
});

//以下代码可以取得鼠标事件在页面中的坐标：
var div = document.getElementById("myDiv"); 
EventUtil.addHandler(div, "click", function(event){ 
 event = EventUtil.getEvent(event); 
 alert("Page coordinates: " + event.pageX + "," + event.pageY); 
});
//在页面没有滚动的情况下，pageX 和 pageY 的值与 clientX 和 clientY 的值相等。

//可以使用类似下面的代码取得鼠标事件的屏幕坐标：
var div = document.getElementById("myDiv"); 
EventUtil.addHandler(div, "click", function(event){ 
 event = EventUtil.getEvent(event); 
 alert("Screen coordinates: " + event.screenX + "," + event.screenY); 
});

// beforeunload 事件
//为了让开发人员有可能在页面卸载前
阻止这一操作。这个事件会在浏览器卸载页面之前触发，可以通过它来取消卸载并继续使用原有页面。但是，不能彻底取消这个事件，因为那就相当于让用户无法离开当前页面了
EventUtil.addHandler(window, "beforeunload", function(event){ 
 event = EventUtil.getEvent(event); 
 var message = "I'm really going to miss you if you go."; 
 event.returnValue = message; 
 return message; 
});

// DOMContentLoaded 事件
DOMContentLoaded 事件则在形成完整的 DOM 树之后就会触发，不理会图像、JavaScript 文件、CSS 文件或其他资源是否已经下载完毕。与 load 事件不同，DOMContentLoaded 支持在页面下载的早期添加事件处理程序，这也就意味着用户能够尽早地与页面进行交互。

//hashchange 事件
//在 Ajax 应用中，开发人员经常要利用 URL 参数列表来保存状态或导航信息
EventUtil.addHandler(window, "hashchange", function(event){ 
 alert("Old URL: " + event.oldURL + "\nNew URL: " + event.newURL); 
});
```
- 设备事件
```
//orientationchange 事件
//window.orientation 属性中可能包含 3 个值：0 表示肖像模式，90 表示向左旋转的横向模式（“主屏幕”按钮在右侧），-90 表示向右旋转的横向模式（“主屏幕”按钮在左侧）。相关文档中还提到一个值，即 180 表示 iPhone 头朝下；
EventUtil.addHandler(window, "load", function(event){ 
 var div = document.getElementById("myDiv"); 
 div.innerHTML = "Current orientation is " + window.orientation;
  EventUtil.addHandler(window, "orientationchange", function(event){ 
 div.innerHTML = "Current orientation is " + window.orientation; 
 }); 
});

//deviceorientation 事件
//deviceorientation 事件的意图是告诉开发人员设备在空间中朝向哪儿，而
不是如何移动
EventUtil.addHandler(window, "deviceorientation", function(event){ 
 var output = document.getElementById("output"); 
 output.innerHTML = "Alpha=" + event.alpha + ", Beta=" + event.beta + 
 ", Gamma=" + event.gamma + "<br>"; 
});
EventUtil.addHandler(window, "deviceorientation", function(event){ 
 var arrow = document.getElementById("arrow"); 
 arrow.style.webkitTransform = "rotate(" + Math.round(event.alpha) + "deg)"; 
});

//触摸与手势
function handleTouchEvent(event){ 
 //只跟踪一次触摸
 if (event.touches.length == 1){ 
 var output = document.getElementById("output"); 
 switch(event.type){ 
 case "touchstart": 
 output.innerHTML = "Touch started (" + event.touches[0].clientX + 
 "," + event.touches[0].clientY + ")"; 
 break; 
 case "touchend": 
 output.innerHTML += "<br>Touch ended (" + 
 event.changedTouches[0].clientX + "," + 
 event.changedTouches[0].clientY + ")"; 
 break; 
 case "touchmove": 
 event.preventDefault(); //阻止滚动
 output.innerHTML += "<br>Touch moved (" + 
 event.changedTouches[0].clientX + "," + 
 event.changedTouches[0].clientY + ")"; 
 break; 
 } 
 } 
} 
EventUtil.addHandler(document, "touchstart", handleTouchEvent); 
EventUtil.addHandler(document, "touchend", handleTouchEvent); 
EventUtil.addHandler(document, "touchmove", handleTouchEvent);
//发生的顺序
(1) touchstart 
(2) mouseover 
(3) mousemove（一次）
(4) mousedown 
(5) mouseup 
(6) click 
(7) touchend

//手势事件
function handleGestureEvent(event){ 
 var output = document.getElementById("output"); 
 switch(event.type){ 
 case "gesturestart": 
 output.innerHTML = "Gesture started (rotation=" + event.rotation + 
 ",scale=" + event.scale + ")"; 
 break; 
 case "gestureend": 
 output.innerHTML += "<br>Gesture ended (rotation=" + event.rotation + 
 ",scale=" + event.scale + ")"; 
 break; 
 case "gesturechange":
  output.innerHTML += "<br>Gesture changed (rotation=" + event.rotation + 
 ",scale=" + event.scale + ")"; 
 break; 
 } 
} 
document.addEventListener("gesturestart", handleGestureEvent, false); 
document.addEventListener("gestureend", handleGestureEvent, false); 
document.addEventListener("gesturechange", handleGestureEvent, false);
```

## 内存与性能
- 事件委托
> 对“事件处理程序过多”问题的解决方案就是事件委托。事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。
```
var list = document.getElementById("myLinks"); 
EventUtil.addHandler(list, "click", function(event){ 
 event = EventUtil.getEvent(event); 
 var target = EventUtil.getTarget(event); 
 switch(target.id){ 
 case "doSomething": 
 document.title = "I changed the document's title"; 
 break; 
 case "goSomewhere": 
 location.href = "http://www.wrox.com"; 
 break; 
 case "sayHi": 
 alert("hi"); 
 break; 
 } 
});
```

- 移除事件处理程序
```
<div id="myDiv"> 
 <input type="button" value="Click Me" id="myBtn"> 
</div> 
<script type="text/javascript"> 
 var btn = document.getElementById("myBtn"); 
 btn.onclick = function(){ 
 //先执行某些操作
 document.getElementById("myDiv").innerHTML = "Processing..."; //麻烦了！
 }; 
</script>
//应该在innerHTML之前
//先执行某些操作
 btn.onclick = null; //移除事件处理程序
```

- 模拟事件
```
//鼠标事件
var btn = document.getElementById("myBtn"); 
//创建事件对象
var event = document.createEvent("MouseEvents"); 
//初始化事件对象
event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, 
 false, false, false, false, 0, null); 
//触发事件
btn.dispatchEvent(event);

//键盘事件
//这个例子模拟的是按住 Shift 的同时又按下 A 键
if (document.implementation.hasFeature("KeyboardEvents", "3.0")){ 
 event = document.createEvent("KeyboardEvent"); 
 //初始化事件对象
 event.initKeyboardEvent("keydown", true, true, document.defaultView, "a",
  0, "Shift", 0); 
} 
//触发事件
textbox.dispatchEvent(event);

//其他事件
var event = document.createEvent("MutationEvents"); 
event.initMutationEvent("DOMNodeInserted", true, false, someNode, "","","",0); 
target.dispatchEvent(event);

//自定义DOM事件
//这个例子创建了一个冒泡事"myevent"
var div = document.getElementById("myDiv"), 
 event; 
EventUtil.addHandler(div, "myevent", function(event){ 
 alert("DIV: " + event.detail); 
}); 
EventUtil.addHandler(document, "myevent", function(event){ 
 alert("DOCUMENT: " + event.detail); 
}); 
if (document.implementation.hasFeature("CustomEvents", "3.0")){ 
 event = document.createEvent("CustomEvent"); 
 event.initCustomEvent("myevent", true, false, "Hello world!"); 
 div.dispatchEvent(event); 
}
```

## 表单
- 表单的提交
```
//阻止表单的提交
var form = document.getElementById("myForm"); 
EventUtil.addHandler(form, "submit", function(event){ 
 //取得事件对象
 event = EventUtil.getEvent(event); 
 //阻止默认事件
 EventUtil.preventDefault(event); 
});

//提交的特殊情况
//在以调用 submit()方法的形式提交表单时，不会触发 submit 事件，因此要记得在调用此方法之前先验证表单数据。
form.submit();

//存在的问题
//提交表单时可能出现的最大问题，就是重复提交表单。在第一次提交表单后，如果长时间没有反应，用户可能会变得不耐烦。这时候，他们也许会反复单击提交按钮。结果往往很麻烦（因为服务器要处理重复的请求），或者会造成错误（如果用户是下订单，那么可能会多订好几份）。解决这一问题的办法有两个：在第一次提交表单后就禁用提交按钮，或者利用onsubmit 事件处理程序取消后续的表单提交操作。

//重置表单操作reset与submit操作相类似
```
- 表单字段
```
//elements 集合是一个有序列表，其中包含着表单中的所有字段
var form = document.getElementById("form1"); 
//取得表单中的第一个字段
var field1 = form.elements[0]; 
//取得名为"textbox1"的字段
var field2 = form.elements["textbox1"]; 
//取得表单中包含的字段的数量
var fieldCount = form.elements.length;

<form method="post" id="myForm"> 
 <ul> 
 <li><input type="radio" name="color" value="red">Red</li> 
 <li><input type="radio" name="color" value="green">Green</li> 
 <li><input type="radio" name="color" value="blue">Blue</li> 
 </ul> 
</form>

var form = document.getElementById("myForm"); 
var colorFields = form.elements["color"]; 
alert(colorFields.length); //3 
var firstColorField = colorFields[0]; 
var firstFormField = form.elements[0]; 
alert(firstColorField === firstFormField); //true

//加载完成后把焦点给第一个字段
//与 focus()方法相对的是 blur()方法
EventUtil.addHandler(window, "load", function(event){ 
 document.forms[0].elements[0].focus(); 
});

//HTML5 为表单字段新增了一个 autofocus 属性。在支持这个属性的浏览器中，只要设置这个属性，不用 JavaScript 就能自动把焦点移动到相应字段。
<input type="text" autofocus>
```
- 文本框
```
<input type="text" size="25" maxlength="50" value="initial value">
<textarea rows="25" cols="5">initial value</textarea>

//选择文本
//只要文本框获得焦点，就会选择其中所有的文本。这种技术能够较大幅度地提升表单的易用性。
EventUtil.addHandler(textbox, "focus", function(event){ 
 event = EventUtil.getEvent(event); 
 var target = EventUtil.getTarget(event); 
 target.select(); 
});

//要取得用户在文本框中选择的文本
function getSelectedText(textbox){ 
 return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd); 
}

//选择部分文本
//要看到选择的文本，必须在调用 setSelectionRange()之前或之后立即将焦点设置到文本框
textbox.value = "Hello world!" 
//选择所有文本
textbox.setSelectionRange(0, textbox.value.length); //"Hello world!" 
//选择前 3 个字符
textbox.setSelectionRange(0, 3); //"Hel" 
//选择第 4 到第 6 个字符
textbox.setSelectionRange(4, 7); //"o w"

textbox.value = "Hello world!"; 
var range = textbox.createTextRange(); 
//选择所有文本
range.collapse(true); 
range.moveStart("character", 0); 
range.moveEnd("character", textbox.value.length); //"Hello world!" 
range.select(); 
//选择前 3 个字符
range.collapse(true); 
range.moveStart("character", 0); 
range.moveEnd("character", 3); 
range.select(); //"Hel" 
//选择第 4 到第 6 个字符
range.collapse(true); 
range.moveStart("character", 4); 
range.moveEnd("character", 3); 
range.select(); //"o w"

//过滤输入
//只允许用户输入数值
//其中过滤了字符以及特殊符号并且确保了用户可以进行Ctrl的组合键
EventUtil.addHandler(textbox, "keypress", function(event){ 
 event = EventUtil.getEvent(event); 
 var target = EventUtil.getTarget(event); 
 var charCode = EventUtil.getCharCode(event); 
 if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && 
 !event.ctrlKey){ 
 EventUtil.preventDefault(event); 
 } 
});

//操作剪切板
//例子展示了确定剪切板中的值是否有效，如果无效则取消默认的行为
EventUtil.addHandler(textbox, "paste", function(event){ 
 event = EventUtil.getEvent(event); 
 var text = EventUtil.getClipboardText(event); 
 if (!/^\d*$/.test(text)){ 
 EventUtil.preventDefault(event); 
 } 
});
```
- 约束验证
```
//必填字段
<input type="text" name="username" required>

//其它约束
<input type="email" name ="email"> 
<input type="url" name="homepage">

//约束数值范围
<input type="number" min="0" max="100" step="5" name="count">
//递增和递减
input.stepUp(); //加 1 
input.stepUp(5); //加 5 
input.stepDown(); //减 1 
input.stepDown(10); //减 10

//输入模式
//pattern 属性。这个属性的值是一个正则表达式，用于匹配文本框中的值
<input type="text" pattern="\d+" name="count">

//有效性检测
if (document.forms[0].elements[0].checkValidity()){ 
 //字段有效，继续
} else { 
 //字段无效
}
if(document.forms[0].checkValidity()){ 
 //表单有效，继续
} else { 
 //表单无效
}

//novalidate 属性禁用验证
<form method="post" action="signup.php" novalidate> 
 <!--这里插入表单元素--> 
</form>
```

- 选择框脚本
```
//由于<option>中没有指定 value 特性，则选择框的值就是"Australia"。
<select name="location" id="selLocation"> 
 <option value="Sunnyvale, CA">Sunnyvale</option> 
 <option value="Los Angeles, CA">Los Angeles</option> 
 <option value="Mountain View, CA">Mountain View</option> 
 <option value="">China</option> 
 <option>Australia</option> 
</select>

var selectbox = document.forms[0]. elements["location"]; 
//推荐
var text = selectbox.options[0].text; //选项的文本
var value = selectbox.options[0].value; //选项的值

//选择选项
var selectedOption = selectbox.options[selectbox.selectedIndex];

//添加选项
var newOption = new Option("Option text", "Option value"); 
selectbox.appendChild(newOption); //在 IE8 及之前版本中有问题
var newOption = new Option("Option text", "Option value"); 
selectbox.add(newOption, undefined); //最佳方案

//要清除选择框中所有的项，需要迭代所有选项并逐个移除它们，如下面的例子所示：
function clearSelectbox(selectbox){ 
 for(var i=0, len=selectbox.options.length; i < len; i++){ 
 selectbox.remove(i); 
 } 
}//由于移除第一个选项后，所有后续选项都会自动向上移动一个位置，因此重复移除第一个选项就可以移除所有选项了

//要在选择框中向前移动一个选项的位置，可以使用以下代码：
var optionToMove = selectbox.options[1]; 
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index-1]);
```

- 表单序列化
> serialize()函数会以查询字符串的格式输出序列化之后的字符串。当然，要序列化成其他格式，也不是什么困难的事

- 富文本编辑
```
//在页面中看到一个类似文本框的可编辑区字段。这个区字段具有与其他网页相同的默认样式；不过，通过为空白页面应用 CSS 样式，可以修改可编辑区字段的外观。
<!DOCTYPE html> 
<html> 
 <head> 
 <title>Blank Page for Rich Text Editing</title> 
 </head> 
 <body> 
 </body> 
</html>
<iframe name="richedit" style="height:100px;width:100px;" src="blank.htm"></iframe> 
<script type="text/javascript"> 
EventUtil.addHandler(window, "load", function(){ 
 frames["richedit"].document.designMode = "on"; 
}); 
</script>

//转换粗体文本
frames["richedit"].document.execCommand("bold", false, null); 
//转换斜体文本
frames["richedit"].document.execCommand("italic", false, null); 
//创建指向 www.wrox.com 的链接
frames["richedit"].document.execCommand("createlink", false, 
 "http://www.wrox.com"); 
//格式化为 1 级标题
frames["richedit"].document.execCommand("formatblock", false, "<h1>");
```

## 使用Canvas绘图
```
//基本使用
//中间的内容是后备信息，如果浏览器不支持此元素，则就会显示这些信息
<canvas id="drawing" width=" 200" height="200">A drawing of something.</canvas>

//取得上下文对象的引用
var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){
    var context = drawing.getContext("2d"); 
//更多代码
}

//取得画布中的一幅PNG格式的图像
var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){ 
 //取得图像的数据 URI 
 var imgURI = drawing.toDataURL("image/png"); 
 //显示图像
 var image = document.createElement("img"); 
 image.src = imgURI; 
 document.body.appendChild(image); 
}

//大多数 2D 上下文操作都会细分为填充和描边两个操作，而操作结果取决于两个属性fillStyle和strokeStyle
var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){ 
 var context = drawing.getContext("2d"); 
 context.strokeStyle = "red"; 
 context.fillStyle = "#0000ff"; 
}

//绘制矩形
//首先将 fillStyle 设置为红色，然后从(10,10)处开始绘制矩形，矩形的宽和高均为 50 像素
var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){ 
 var context = drawing.getContext("2d"); 
 /* 
 * 根据 Mozilla 的文档
 * http://developer.mozilla.org/en/docs/Canvas_tutorial:Basic_usage 
 */ 
 //绘制红色矩形
 context.fillStyle = "#ff0000"; 
 context.fillRect(10, 10, 50, 50); 
 //绘制半透明的蓝色矩形
 context.fillStyle = "rgba(0,0,255,0.5)"; 
 context.fillRect(30, 30, 50, 50); 
}

var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){ 
 var context = drawing.getContext("2d"); 
 /* 
 * 根据 Mozilla 的文档
 * http://developer.mozilla.org/en/docs/Canvas_tutorial:Basic_usage 
 */ 
 //绘制红色描边矩形
 context.strokeStyle = "#ff0000"; 
 context.strokeRect(10, 10, 50, 50); 
 //绘制半透明的蓝色描边矩形
 context.strokeStyle = "rgba(0,0,255,0.5)"; 
 context.strokeRect(30, 30, 50, 50); 
}

//清除指定的矩形区域
var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){ 
 var context = drawing.getContext("2d");
 //绘制红色矩形
 context.fillStyle = "#ff0000"; 
 context.fillRect(10, 10, 50, 50); 
 //绘制半透明的蓝色矩形
 context.fillStyle = "rgba(0,0,255,0.5)"; 
 context.fillRect(30, 30, 50, 50); 
 //在两个矩形重叠的地方清除一个小矩形
 context.clearRect(40, 40, 10, 10); 
}

//绘制路径
//例子绘制一个不带数字的时钟表盘
var drawing = document.getElementById("drawing"); 
//确定浏览器支持<canvas>元素
if (drawing.getContext){ 
 var context = drawing.getContext("2d"); 
 //开始路径
 context.beginPath(); 
 //绘制外圆
context.arc(100, 100, 99, 0, 2 * Math.PI, false); 
//绘制内圆
context.moveTo(194, 100); 
context.arc(100, 100, 94, 0, 2 * Math.PI, false); 
//绘制分针
context.moveTo(100, 100); 
context.lineTo(100, 15); 
//绘制时针
context.moveTo(100, 100); 
context.lineTo(35, 100); 
 //描边路径
 context.stroke(); 
}

//在路径被关闭之前确定画布上的某一点是否位于路径上
if (context.isPointInPath(100, 100)){ 
 alert("Point (100, 100) is in the path."); 
}
```

- 绘制文本
```
context.font = "bold 14px Arial"; 
context.textAlign = "center"; //文本水平和垂直中点的坐标，可以换成start或end
context.textBaseline = "middle"; 
context.fillText("12", 100, 20);

//从100像素的字体大小开始递减最终找到合适的字体大小
var fontSize = 100; 
context.font = fontSize + "px Arial"; 
while(context.measureText("Hello world!").width > 140){ 
 fontSize--; 
 context.font = fontSize + "px Arial"; 
} 
context.fillText("Hello world!", 10, 10); 
context.fillText("Font size is " + fontSize + "px", 10, 50);

//变换
//rotate(angle)：围绕原点旋转图像 angle 弧度
var drawing = document.getElementById("drawing"); 
//scale(scaleX, scaleY)：缩放图像，在 x 方向乘以 scaleX，在 y 方向乘以 scaleY。scaleX和 scaleY 的默认值都是 1.0
//translate(x, y)：将坐标原点移动到(x,y)。执行这个变换之后，坐标(0,0)会变成之前由(x,y)表示的点。
//确定浏览器支持<canvas>元素
if (drawing.getContext){
 var context = drawing.getContext("2d"); 
 //开始路径
 context.beginPath(); 
 //绘制外圆
 context.arc(100, 100, 99, 0, 2 * Math.PI, false); 
 //绘制内圆
 context.moveTo(194, 100); 
 context.arc(100, 100, 94, 0, 2 * Math.PI, false); 
 //变换原点
 context.translate(100, 100); 
 //绘制分针
 context.moveTo(0,0); 
 context.lineTo(0, -85); 
 //绘制时针
 context.moveTo(0, 0); 
 context.lineTo(-65, 0); 
 //描边路径
 context.stroke(); 
}、

//保存变化和属性等状态save和restore
context.fillStyle = "#ff0000"; 
context.save(); 
context.fillStyle = "#00ff00"; 
context.translate(100, 100); 
context.save(); 
context.fillStyle = "#0000ff"; 
context.fillRect(0, 0, 100, 200); //从点(100,100)开始绘制蓝色矩形
context.restore(); 
context.fillRect(10, 10, 100, 200); //从点(110,110)开始绘制绿色矩形
context.restore();
context.fillRect(0, 0, 100, 200); //从点(0,0)开始绘制红色矩形
```

- 绘制图像
```
//绘制出来的图像大小会变成 20×30 像素
context.drawImage(image, 50, 10, 20, 30);

// 个参数：要绘制的图像、源图像的 x 坐标、源图像的 y 坐标、源图像的宽度、源图像的高度、目标图像的 x 坐标、目标图像的 y 坐标、目标图像的宽度、目标图像的高度
context.drawImage(image, 0, 10, 50, 50, 0, 100, 40, 60);

//如果图像来自其他域，调用
toDataURL()会抛出一个错误。打个比方，假如位于 www.example.com 上的页面绘制的图像来自于www.wrox.com，那当前上下文就会被认为“不干净”，因而会抛出错误。
```

- 绘制阴影
```
var context = drawing.getContext("2d"); 
//设置阴影
context.shadowOffsetX = 5; 
context.shadowOffsetY = 5; 
context.shadowBlur = 4; 
context.shadowColor = "rgba(0, 0, 0, 0.5)"; 
//绘制红色矩形
context.fillStyle = "#ff0000"; 
context.fillRect(10, 10, 50, 50); 
//绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
```

- 绘制渐变
```
//个从画布上点(30,30)到点(70,70)的渐变。起点的色标是白色，终点的色标是黑色
var gradient = context.createLinearGradient(30, 30, 70, 70); 
gradient.addColorStop(0, "white"); 
gradient.addColorStop(1, "black");
//绘制红色矩形
context.fillStyle = "#ff0000"; 
context.fillRect(10, 10, 50, 50); 
//绘制渐变矩形
context.fillStyle = gradient; 
context.fillRect(30, 30, 50, 50);
```

- 模式
> 模式其实就是重复的图像，可以用来填充或描边图形。要创建一个新模式，可以调用
createPattern()方法并传入两个参数：一个 HTML \<img>元素和一个表示如何重复图像的字符串。其中，第二个参数的值与 CSS 的 background-repeat 属性值相同，包括"repeat"、"repeat-x"、"repeat-y"和"no-repeat"
```
var image = document.images[0], 
 pattern = context.createPattern(image, "repeat"); 
//绘制矩形
context.fillStyle = pattern; 
context.fillRect(10, 10, 150, 150);
```

- 使用图像数
```
var imageData = context.getImageData(10, 5, 50, 50);
//分别表示红、绿、蓝和透明度值，可以修改图像数据
var data = imageData.data, 
 red = data[0], 
 green = data[1], 
 blue = data[2], 
 alpha = data[3];
```

- 合成
```
//绘制红色矩形
context.fillStyle = "#ff0000"; 
context.fillRect(10, 10, 50, 50); 
//修改全局透明度
context.globalAlpha = 0.5; 
//绘制蓝色矩形
context.fillStyle = "rgba(0,0,255,1)"; 
context.fillRect(30, 30, 50, 50); 
//重置全局透明度
context.globalAlpha = 0;
```

- WebGL
> WebGL 是针对 Canvas 的 3D 上下文
```
//类型化数组
//视图
//基于整个缓冲器创建一个新视图
var view = new DataView(buffer); 
//创建一个开始于字节 9 的新视图
var view = new DataView(buffer, 9); 
//创建一个从字节 9 开始到字节 18 的新视图
var view = new DataView(buffer, 9, 10);
//DataView 对象会把字节偏移量以及字节长度信息分别保存在 byteOffset 和byteLength 属性中。

var buffer = new ArrayBuffer(20), 
 view = new DataView(buffer), 
 value; 
view.setUint16(0, 25); 
view.setUint16(2, 50); //不能从字节 1 开始，因为 16 位整数要用 2B 
value = view.getUint16(0);

//准备绘图
//码把清理颜色缓冲区的值设置为黑色，然后调用了 clear()方法，这个方法与 OpenGL 中的glClear()等价
gl.clearColor(0,0,0,1); //black 
gl.clear(gl.COLOR_BUFFER_BIT);

//定义视口大小
//视口是<canvas>左下角的四分之一区域
gl.viewport(0, 0, drawing.width/2, drawing.height/2); 
//视口是<canvas>左上角的四分之一区域
gl.viewport(0, drawing.height/2, drawing.width/2, drawing.height/2); 
//视口是<canvas>右下角的四分之一区域
gl.viewport(drawing.width/2, 0, drawing.width/2, drawing.height/2);
```

## HTML5脚本编程
- 跨文档消息传递(XDM)
> 指的是在来自不同域的页面间传递消息
```
//注意：所有支持 XDM 的浏览器也支持 iframe 的 contentWindow 属性
var iframeWindow = document.getElementById("myframe").contentWindow; 
iframeWindow.postMessage("A secret", "http://www.wrox.com");
```

- 原生拖放
> 1.依次触发事件(1) dragstart 
(2) drag 
(3) dragend
2.当某个元素被拖动到一个有效的放置目标上时依次触发事件(1) dragenter 
(2) dragover 
(3) dragleave 或 drop
```
//自定义放置目标
//以上代码执行后，你就会发现当拖动着元素移动到放置目标上时，光标变成了允许放置的符号。当然，释放鼠标也会触发 drop 事件。
var droptarget = document.getElementById("droptarget"); 
EventUtil.addHandler(droptarget, "dragover", function(event){ 
 EventUtil.preventDefault(event); 
}); 
EventUtil.addHandler(droptarget, "dragenter", function(event){ 
 EventUtil.preventDefault(event); 
});

//dataTransfer对象
//事件对象的一个属性，用于从被拖动元素向放置目标传递字符串格式的数据。
event.dataTransfer.setData("text", "some text"); 
var text = event.dataTransfer.getData("text"); 
//设置和接收 URL 
event.dataTransfer.setData("URL", "http://www.wrox.com/"); 
var url = event.dataTransfer.getData("URL");

//可拖动
<!-- 让这个图像不可以拖动 --> 
<img src="smile.gif" draggable="false" alt="Smiley face"> 
<!-- 让这个元素可以拖动 --> 
<div draggable="true">...</div>
```

- 媒体元素
```
<!-- 嵌入视频 --> 
<video src="conference.mpg" id="myVideo">Video player not available.</video> 
<!-- 嵌入音频 --> 
<audio src="song.mp3" id="myAudio">Audio player not available.</audio>

//不同的媒体来源
<!-- 嵌入视频 --> 
<video id="myVideo"> 
 <source src="conference.webm" type="video/webm; codecs='vp8, vorbis'"> 
 <source src="conference.ogv" type="video/ogg; codecs='theora, vorbis'"> 
 <source src="conference.mpg"> 
 Video player not available. 
</video> 
<!-- 嵌入音频 --> 
<audio id="myAudio"> 
 <source src="song.ogg" type="audio/ogg"> 
 <source src="song.mp3" type="audio/mpeg"> 
 Audio pl

 //检测编解码器的支持情况
 var audio = document.getElementById("audio-player"); 
//很可能"maybe" 
if (audio.canPlayType("audio/mpeg")){ 
 //进一步处理
} 
//可能是"probably" 
if (audio.canPlayType("audio/ogg; codecs=\"vorbis\"")){ 
 //进一步处理
}
```

## 错误处理与调试
```
//调用这个函数只能返回 0
function testFinally(){ 
 try { 
 return 2; 
 } catch (error){ 
 return 1; 
 } finally { 
 return 0; 
 } 
}//如果提供 finally 子句，则 catch 子句就成了可选的（catch 或 finally 有一个即可）
```
- 错误类型

1.Error (基类型，其他错误类型都继承自该类型)

2.EvalError 

3.RangeError 

4.ReferenceError 

5.SyntaxError 

6.TypeError 

7.URIError
```
throw new SyntaxError("I don’t like your syntax."); 
throw new TypeError("What type of variable do you take me for?"); 
throw new RangeError("Sorry, you just don’t have the range."); 
throw new EvalError("That doesn’t evaluate."); 
throw new URIError("Uri, is that you?"); 
throw new ReferenceError("You didn’t cite your references properly.");

function process(values){ 
 if (!(values instanceof Array)){ 
 throw new Error("process(): Argument must be an array."); 
 } 
 values.sort(); 
 for (var i=0, len=values.length; i < len; i++){ 
 if (values[i] > 100){ 
 return values[i]; 
 } 
 } 
 return -1; 
}

//不安全的函数，任何非数组值都会导致错误
//任何会转换为 true 的非数组值都会导致错误
function reverseSort(values){ 
 if (values){ //绝对不要这样!!! 
 values.sort(); 
 values.reverse(); 
 } 
}

//不安全的函数，任何非数组值都会导致错误
//要确保传入的值有效，仅检测 null 值是不够的
function reverseSort(values){ 
 if (values != null){ //绝对不要这样!!! 
 values.sort(); 
 values.reverse(); 
 } 
}

//还是不安全，任何非数组值都会导致错误
function reverseSort(values){ 
 if (typeof values.sort == "function"){ //绝对不要这样!!! 
 values.sort(); 
 values.reverse(); 
 } 
}

//安全，非数组值将被忽略
function reverseSort(values){ 
 if (values instanceof Array){ //问题解决了
 values.sort(); 
 values.reverse(); 
 } 
}
```
- 通信错误
```
//不正确的URL格式
http://www.yourdomain.com/?redir=http://www.someotherdomain.com?a=b&c=d
//通过encodeURIComponent()进行编码后得到的正确字符串
http://www.yourdomain.com/?redir=http%3A%2F%2Fwww.someotherdomain.com%3Fa%3Db%26c%3Dd
 
function addQueryStringArg(url, name, value){ 
 if (url.indexOf("?") == -1){ 
 url += "?"; 
 } else { 
 url += "&"; 
 } 
 url += encodeURIComponent(name) + "=" + encodeURIComponent(value); 
 return url; 
}
var url = "http://www.somedomain.com"; 
var newUrl = addQueryStringArg(url, "redir", 
 "http://www.someotherdomain.com?a=b&c=d"); 
alert(newUrl);
```
- 错误处理
```
//任何模块初始化时出错，都不会影响其他模块的初始化。在重写的代码中，如果有错误发生，相应的错误将会得到独立的处理，并不会影响到用户的体验
for (var i=0, len=mods.length; i < len; i++){ 
 try { 
 mods[i].init(); 
 } catch (ex) { 
 //在这里处理错误
 } 
}

//记录错误日志
function logError(sev, msg){ 
 var img = new Image(); 
 img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + 
 encodeURIComponent(msg); 
}
//使用（使用了 Image 对象来发送请求，所有浏览器都支持 Image 对象）
for (var i=0, len=mods.length; i < len; i++){ 
 try { 
 mods[i].init(); 
 } catch (ex){ 
 logError("nonfatal", "Module init failed: " + ex.message); 
 } 
}
```
- 模仿console开辟区域记录
```
function log(message){ 
 var console = document.getElementById("debuginfo"); 
 if (console === null){ 
 console = document.createElement("div"); 
 console.id = "debuginfo"; 
 console.style.background = "#dedede"; 
 console.style.border = "1px solid silver"; 
 console.style.padding = "5px"; 
 console.style.width = "400px"; 
 console.style.position = "absolute"; 
 console.style.right = "0px"; 
 console.style.top = "0px"; 
 document.body.appendChild(console); 
 } 
 console.innerHTML += "<p>" + message + "</p>"; 
}
```
- 抛出错误
```
//assert()函数
function assert(condition, message){ 
 if (!condition){ 
 throw new Error(message); 
 } 
}
//函数使用
function divide(num1, num2){ 
 assert(typeof num1 == "number" && typeof num2 == "number", 
 "divide(): Both arguments must be numbers."); 
 return num1 / num2; 
}
```

## E4X（ECMAScript for XML）
>  ECMAScript 增加一项扩展，以便在这门语言中添加原生的 XML 支持

## JSON（JavaScript Object Notation，JavaScript 对象表示法 一种数据格式）
> JSON 是一个轻量级的数据格式，可以简化表示复杂数据结构的工作量。JSON 使用 JavaScript 语法的子集表示对象、数组、字符串、数值、布尔值和 null
- JavaScript 字符串与 JSON 字符串的最大区别在于，JSON 字符串必须使用双引号

- 版本支持问题
> 对于较早版本的浏览器，可以使用一个 shim：https://github.com/douglascrockford/JSON-js。在旧版本的浏览器中，使用 eval()对 JSON 数据结构求值存在风险，因为可能会执行一些恶意代码。对于不能原生支持 JSON 解析的浏览器，使用这个 shim 是最佳选择。

- 深入JSON序列化
```
//过滤结果
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011 
 }; 
var jsonText = JSON.stringify(book, ["title", "edition"]);
//在返回的结果字符串中，就只会包含这两个属性
{"title":"Professional JavaScript","edition":3}

//如果键为"authors"，就将数组连接为一个字符串；如果键为"year"，则将其值设置为 5000；如果键为"edition"，通过返回 undefined 删除该属性。最后，一定要提供 default 项，此时返回传入的值，以便其他值都能正常出现在结果中。
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011 
 }; 
var jsonText = JSON.stringify(book, function(key, value){ 
 switch(key){ 
 case "authors": 
 return value.join(",") 
 case "year": 
 return 5000; 
 case "edition": 
 return undefined; 
 default: 
 return value; 
 } 
});
//结果
{"title":"Professional JavaScript","authors":"Nicholas C. Zakas","year":5000}

//字符串的缩进
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011
  }; 

//最大缩进空格数为 10
var jsonText = JSON.stringify(book, null, 4);

//保存的字符串为
{ 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 "edition": 3, 
 "year": 2011 
}

var jsonText = JSON.stringify(book, null, " - -");
//结果为
{ 
--"title": "Professional JavaScript", 
--"authors": [ 
----"Nicholas C. Zakas" 
--], 
--"edition": 3, 
--"year": 2011 
}

//toJSON()方法
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011, 
 toJSON: function(){
      return this.title; 
 } 
 }; 
var jsonText = JSON.stringify(book);

//序列化对象的顺序
//(1) 如果存在 toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，返回对//象本身。
//(2) 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第(1)步返回的//值。
//(3) 对第(2)步返回的每个值进行相应的序列化。
//(4) 如果提供了第三个参数，执行相应的格式化。

//解析选项（还原函数）
//代码先是为 book 对象新增了一个 releaseDate 属性，该属性保存着一个 Date 对象。这个对象在经过序列化之后变成了有效的 JSON 字符串，然后经过解析又bookCopy 中还原为一个 Date对象
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011, 
 releaseDate: new Date(2011, 11, 1) 
 }; 
var jsonText = JSON.stringify(book); 
var bookCopy = JSON.parse(jsonText, function(key, value){ 
 if (key == "releaseDate"){ 
 return new Date(value); 
 } else { 
 return value; 
 }
 }); 
alert(bookCopy.releaseDate.getFullYear());
```

### Ajax与Comet
> Ajax 技术的核心是 XMLHttpRequest 对象（简称 XHR）,能够以异步方式从服务器取得更多信息，意味着用户单击后，可以不必刷新页面也能取得新数据。
- XMLHttpRequest 对象
```
var xhr = new XMLHttpRequest();

//使用
//用 open()方法并不会真正发送请求，而只是启动一个请求以备发送。
xhr.open("get", "example.php", false);

//发送特定请求
xhr.open("get", "example.txt", false); 
xhr.send(null);、

//取消异步请求
xhr.abort();
```
- HTTP头部信息
```
//Accept：浏览器能够处理的内容类型。
//Accept-Charset：浏览器能够显示的字符集。
//Accept-Encoding：浏览器能够处理的压缩编码。
//Accept-Language：浏览器当前设置的语言。
//Connection：浏览器与服务器之间连接的类型。
//Cookie：当前页面设置的任何 Cookie。 
//Host：发出请求的页面所在的域 。
//Referer：发出请求的页面的 URI。注意，HTTP 规范将这个头部字段拼写错了，而为保证与规
范一致，也只能将错就错了。（这个英文单词的正确拼法应该是 referrer。）
//User-Agent：浏览器的用户代理字符串。

//自定义头部信息，send之前
xhr.setRequestHeader("MyHeader", "MyValue");

//获取头部信息
var myHeader = xhr.getResponseHeader("MyHeader"); 
var allHeaders = xhr.getAllResponseHeaders();
```
- GET
```
//向现有 URL 的末尾添加查询字符串参数
function addURLParam(url, name, value) { 
 url += (url.indexOf("?") == -1 ? "?" : "&"); 
 url += encodeURIComponent(name) + "=" + encodeURIComponent(value); 
 return url; 
}
```
- POST
> POST 请求应该把数据作为请求的主体提交，而 GET 请求传统上不是这样。POST 请求的主体可以包含非常多的数据，而且格式不限，从性能角度来看，以发送相同的数据计，GET 请求的速度最多可达到 POST 请求的两倍。
```
//初始化
xhr.open("post", "example.php", true);

//Content-Type 头部信息设置为 application/x-www-form-urlencoded，也就是表单提交时的内容类型

//完整使用
xhr.open("post", "postexample.php", true);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
 var form = document.getElementById("user-info"); 
 xhr.send(serialize(form));
```

- XHR2
```
//FormData,为序列化表单以及创建与表单格式相同的数据（用于通过 XHR 传输）提供了便利
var data = new FormData(); 
data.append("name", "Nicholas");
//也可以直接使用表单元素进行初始化
var data = new FormData(document.forms[0]);
xhr.send(new FormData(form));

//超时设定
xhr.timeout = 1000; //将超时设置为 1 秒钟（仅适用于 IE8+）
xhr.ontimeout = function(){ 
 alert("Request did not return in a second."); 
};

//overrideMimeType()方法（用于重写 XHR 响应的 MIME 类型，返回响应的 MIME 类型决定了 XHR 对象如何处理它，所以提供一种方法能够重写服务器返回的 MIME 类型是很有用的
xhr.overrideMimeType("text/xml");
```

- 进度事件
loadstart：在接收到响应数据的第一个字节时触发。

progress：在接收响应期间持续不断地触发。

error：在请求发生错误时触发。

abort：在因为调用 abort()方法而终止连接时触发。

load：在接收到完整的响应数据时触发。

loadend：在通信完成或者触发 error、abort 或 load 事件后触发。
```
//progress事件(调用 open()方法之前添加)
xhr.onprogress = function(event){ 
 var divStatus = document.getElementById("status"); 
 if (event.lengthComputable){ 
 divStatus.innerHTML = "Received " + event.position + " of " + 
 event.totalSize +" bytes"; 
 } 
};
```

- 跨源资源共享
> CORS（Cross-Origin Resource Sharing，跨源资源共享）是 W3C 的一个工作草案，定义了在必须访问跨源资源时，浏览器与服务器应该如何沟通。CORS 背后的基本思想，就是使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败。比如一个简单的使用 GET 或 POST 发送的请求，它没有自定义的头部，而主体内容是 text/plain。在发送该请求时，需要给它附加一个额外的 Origin 头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部信息来决定是否给予响应。下面是 Origin 头部的一个示例：
```
Origin: http://www.nczonline.net
//如果服务器认为这个请求可以接受则回发
Access-Control-Allow-Origin: http://www.nczonline.net

//WebKit 都通过 XMLHttpRequest对象实现了对 CORS 的原生支持，在尝试打开不同来源的资源时，无需额外编写代码就可以触发这个行为。要请求位于另一个域中的资源，使用标准的 XHR 对象并在 open()方法中传入绝对 URL 即可
xhr.open("get", "http://www.somewhere-else.com/page/", true); 
xhr.send(null);

//一些限制
//不能使用 setRequestHeader()设置自定义头部。
//不能发送和接收 cookie。 
//调用 getAllResponseHeaders()方法总会返回空字符串。

//XMLHttpRequest 对象一些有用的属性和方法
//abort()：用于停止正在进行的请求。
//onerror：用于替代 onreadystatechange 检测错误。
//onload：用于替代 onreadystatechange 检测成功。
//responseText：用于取得响应内容。
//send()：用于发送请求。
```

- 一些其他的跨域技术
图像Ping
> 使用\<img\>标签。我们知道，一个网页可以从任何网页中加载图像，不用担心跨域不跨域。这也是在线广告跟踪浏览量的主要方式。图像 Ping 最常用于跟踪用户点击页面或动态广告曝光次数。图像 Ping 有两个主要的缺点，一是只能发送 GET 请求，二是无法访问服务器的响应文本。因此，图像 Ping 只能用于浏览器与服务器间的单向通信。
```
var img = new Image(); 
img.onload = img.onerror = function(){ 
 alert("Done!"); 
}; 
img.src = "http://www.example.com/test?name=Nicholas";
```
JSONP
> JSON with padding（填充式 JSON 或参数式 JSON）的简写，是应用 JSON 的一种新方法,JSONP 由两部分组成：回调函数和数据。回调函数是当响应到来时应该在页面中调用的函数。回调函数的名字一般是在请求中指定的，与图像 Ping 相比，它的优点在于能够直接访问响应文本，支持在浏览器与服务器之间双向通信
```
//典型的JSONP请求
http://freegeoip.net/json/?callback=handleResponse
//使用（通过动态<script>元素）
function handleResponse(response){ 
 alert("You’re at IP address " + response.ip + ", which is in " + 
 response.city + ", " + response.region_name); 
} 
var script = document.createElement("script"); 
script.src = "http://freegeoip.net/json/?callback=handleResponse"; 
document.body.insertBefore(script, document.body.firstChild);
```

- Comet
> 指的是一种更高级的 Ajax 技术（经常也有人称为“服务器推送”）。Ajax 是一种从页面向服务器请求数据的技术，而 Comet 则是一种服务器向页面推送数据的技术。Comet 能够让信息近乎实时地被推送到页面上，非常适合处理体育比赛的分数和股票报价。

- Web Sockets
> Web Sockets 的目标是在一个单独的持久连接上提供全双工、双向通信。在 JavaScript 中创建了 Web Socket 之后，会有一个 HTTP 请求发送到浏览器以发起连接。在取得服务器响应后，建立的连接会使用 HTTP 升级从 HTTP 协议交换为 Web Socket 协议。也就是说，使用标准的 HTTP 服务器无法实现 Web Sockets，只有支持这种协议的专门服务器才能正常工作。由于 Web Sockets 使用了自定义的协议，所以 URL 模式也略有不同。未加密的连接不再是 http://，而是 ws://；加密的连接也不是 https://，而是 wss://。在使用 Web Socket URL 时，必须带着这个模式，因为将来还有可能支持其他模式。
```
//Web Socket的使用（同源策略对 Web Sockets 不适用，因此可以通过它打开到任何站点的连接）
var socket = new WebSocket("ws://www.example.com/server.php");
//readyState属性
//WebSocket.OPENING (0)：正在建立连接。
//WebSocket.OPEN (1)：已经建立连接。
//WebSocket.CLOSING (2)：正在关闭连接。
//WebSocket.CLOSE (3)：已经关闭连接。

//关闭连接
socket.close();

//发送和接受数据
var socket = new WebSocket("ws://www.example.com/server.php"); 
socket.send("Hello world!");
//复杂的数据结构需要在发送之前进行序列化
var message = { 
 time: new Date(), 
 text: "Hello world!", 
 clientId: "asdfp8734rew" 
}; 
socket.send(JSON.stringify(message));
socket.onmessage = function(event){ 
 var data = event.data; 
 //处理数据
};

//对象的其他事件
//open：在成功建立连接时触发。
//error：在发生错误时触发，连接不能持续。
//close：在连接关闭时触发。
var socket = new WebSocket("ws://www.example.com/server.php"); 
socket.onopen = function(){ 
 alert("Connection established."); 
}; 
socket.onerror = function(){ 
 alert("Connection error."); 
}; 
socket.onclose = function(){ 
 alert("Connection closed."); 
};
//事件对象的额外信息
socket.onclose = function(event){ 
 console.log("Was clean? " + event.wasClean + " Code=" + event.code + " Reason=" 
 + event.reason); 
};
```
- 安全性问题
> 如果是向这个 URL 发送请求，可以想象结果会返回 ID 为 23 的用户的某些数据。谁也无法保证别人不会将这个 URL 的用户 ID 修改为 24、56 或其他值。因此，getuserinfo.php 文件必须知道请求者是否真的有权限访问要请求的数据；否则，你的服务器就会门户大开，任何人的数据都可能被泄漏出去。

> 对于未被授权系统有权访问某个资源的情况，我们称之为 CSRF（Cross-Site Request Forgery，跨站点请求伪造）。未被授权系统会伪装自己，让处理请求的服务器认为它是合法的。受到 CSRF 攻击的 Ajax程序有大有小，攻击行为既有旨在揭示系统漏洞的恶作剧，也有恶意的数据窃取或数据销毁。

> 为确保通过 XHR 访问的 URL 安全，通行的做法就是验证发送请求者是否有权限访问相应的资源。

1.要求以 SSL 连接来访问可以通过 XHR 请求的资源。

2.要求每一次请求都要附带经过相应算法计算得到的验证码。

请注意，下列措施对防范 CSRF 攻击不起作用。

1.要求发送 POST 而不是 GET 请求——很容易改变。

2.检查来源 URL 以确定是否可信——来源记录很容易伪造。

3.基于 cookie 信息进行验证——同样很容易伪造。

### 高级技巧
- 安全的类型检测
在检测某个对象到底是原生对象还是开发人员自定义的对象的时候会有问题，这是因为浏览器开始原生支持JSON对象了。解决方式都一样，在任何值上调用Object原生的toString()方法都会返回一个[object NativeConstructorName]格式的字符串，每个类在内部都有一个[[Class]]属性，这个属性就指定了上述字符串中的构造函数名
```
//由于原生数组的构造函数名与全局作用域无关，因此使用 toString()就能保证返回一致的值
alert(Object.prototype.toString.call(value)); //"[object Array]"
//也可以基于这一思路来测试某个值是不是原生函数或正则表达式
function isFunction(value){ 
 return Object.prototype.toString.call(value) == "[object Function]"; 
} 
function isRegExp(value){ 
 return Object.prototype.toString.call(value) == "[object RegExp]"; 
}
//这一技巧也广泛应用于检测原生 JSON 对象。Object 的 toString()方法不能检测非原生构造函数的构造函数名。因此，开发人员定义的任何构造函数都将返回[object Object]。
```
- 作用域安全的构造函数
> 注意构造函数是要在使用new时进行调用，这时的构造函数内用到的this对象会只想新创建的对象实例
```
function Person(name, age, job){ 
 this.name = name; 
 this.age = age; 
 this.job = job; 
} 
var person = new Person("Nicholas", 29, "Software Engineer");

//如果不使用new操作符进行初始化则会很危险
var person = Person("Nicholas", 29, "Software Engineer"); 
alert(window.name); //"Nicholas" 
alert(window.age); //29 
alert(window.job); //"Software Engineer"

//解决方式是使用作用域安全的构造函数
function Person(name, age, job){ 
 if (this instanceof Person){ 
 this.name = name; 
 this.age = age; 
 this.job = job; 
 } else { 
 return new Person(name, age, job); 
 } 
} 
var person1 = Person("Nicholas", 29, "Software Engineer"); 
alert(window.name); //"" 
alert(person1.name); //"Nicholas" 
var person2 = new Person("Shelby", 34, "Ergonomist"); 
alert(person2.name); //"Shelby"

//如果使用这种作用域安全的构造函数则锁定了可以调用构造函数的环境，如果你使用构造函数窃取模式的继承但是不是用原型链则这个继承很有可能被破坏
function Polygon(sides){ 
 if (this instanceof Polygon) { 
 this.sides = sides; 
 this.getArea = function(){
      return 0; 
 }; 
 } else { 
 return new Polygon(sides); 
 } 
} 
function Rectangle(width, height){ 
//这里期望通过call来继承Polygon的side属性但是this对象并非是Polygon实例，所以会创建一个新的Polygon对象，故rectangle构造函数中的this对象并没有得到增长
 Polygon.call(this, 2); 
 this.width = width; 
 this.height = height; 
 this.getArea = function(){ 
 return this.width * this.height; 
 }; 
} 
var rect = new Rectangle(5, 10); 
alert(rect.sides); //undefined

//但是如果构造函数窃取结合使用原型链活着寄生组合则可以解决这个问题
function Polygon(sides){ 
 if (this instanceof Polygon) { 
 this.sides = sides; 
 this.getArea = function(){ 
 return 0; 
 }; 
 } else { 
 return new Polygon(sides); 
 } 
} 
function Rectangle(width, height){ 
 Polygon.call(this, 2); 
 this.width = width; 
 this.height = height; 
 this.getArea = function(){ 
 return this.width * this.height; 
 }; 
} 
//这里会导致Rectangle实例也同时是一个Polygon实例
Rectangle.prototype = new Polygon(); 
var rect = new Rectangle(5, 10); 
alert(rect.sides); //2
```
- 惰性载入函数
> 第一种实现方式就是在函数被调用的时候再处理函数，在第一次调用的过程中该函数会被覆盖为另一个按合适方式执行的函数，这样任何对原函数的调用都不用再经过执行的分支了。
```
//使用惰性载入重写createXHR()每个分支都会为createXHR变量赋值有效的覆盖了原有的函数
function createXHR(){ 
 if (typeof XMLHttpRequest != "undefined"){ 
createXHR = function(){
    return new XMLHttpRequest(); 
}; 
 } else if (typeof ActiveXObject != "undefined"){ 
createXHR = function(){ 
if (typeof arguments.callee.activeXString != "string"){ 
var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", 
"MSXML2.XMLHttp"], 
i, len; 
for (i=0,len=versions.length; i < len; i++){ 
try { 
 new ActiveXObject(versions[i]); 
 arguments.callee.activeXString = versions[i]; 
break; 
} catch (ex){ 
//skip 
} 
} 
} 
return new ActiveXObject(arguments.callee.activeXString); 
 }; 
 } else { 
createXHR = function(){ 
throw new Error("No XHR object available."); 
}; 
 } 
return createXHR(); 
}
```
> 第二种实现的方式是在声明函数的时候就指定适当的函数，这样第一次调用函数就不会损失性能了，但是在代码首次加载的时候会损失一些性能。
```
//这个例子使用的技巧是创建一个匿名、自执行的函数，用以确定应该使用哪个函数实现
var createXHR = (function(){ 
if (typeof XMLHttpRequest != "undefined"){ 
 return function(){ 
return new XMLHttpRequest(); 
}; 
} else if (typeof ActiveXObject != "undefined"){ 
 return function(){ 
if (typeof arguments.callee.activeXString != "string"){ 
var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", 
"MSXML2.XMLHttp"], 
i, len; 
for (i=0,len=versions.length; i < len; i++){ 
try { 
new ActiveXObject(versions[i]); 
arguments.callee.activeXString = versions[i]; 
break; 
} catch (ex){ 
//skip 
} 
}
} 
return new ActiveXObject(arguments.callee.activeXString); 
}; 
} else { 
 return function(){ 
throw new Error("No XHR object available."); 
}; 
} 
})();
```

- 函数绑定
> 可以将函数绑定到指定环境的函数，这个函数一般都叫bind()
```
//这个问题在于没有保存handler.handleClick()的环境，所以 this 对象最后是指向了 DOM 按钮而非 handler
var handler = { 
 message: "Event handled", 
 handleClick: function(event){ 
 alert(this.message); 
 } 
}; 
var btn = document.getElementById("my-btn"); 
EventUtil.addHandler(btn, "click", handler.handleClick);//undefined

//使用闭包来对问题进行修正
var handler = { 
 message: "Event handled", 
 handleClick: function(event){ 
 alert(this.message); 
 } 
}; 
var btn = document.getElementById("my-btn"); 
EventUtil.addHandler(btn, "click", function(event){ 
 handler.handleClick(event); 
});//使用一个闭包直接调用handler.handleClick()
```

```
//bind函数接受一个函数和一个环境并返回一个在给定环境中调用给定函数的函数并且将所有参数原封不动的传递过去
//在bind()中创建了一个闭包再使用apply()调用传入的参数并给apply()传递context对象和参数
function bind(fn, context){
    return function(){
        return fn.apply(context, arguments)
    }
}

//使用
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler))

//ES5给所有函数定义了一个原声的bind()方法
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));
```

- 函数柯里化
```
//直观的展示概念
function add(num1, num2){
    return num1+num2;
}
function curriedAdd(num2){
    return add(5,num2)
}

//创建柯里化的通用方式
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs)
    }
}

//使用
function add(num1, num2){
    return num1+num2;
}
var curriedAdd = curry(add, 5);
alert(curriedAdd(3)); //8
var curriedAdd2 = curry(add, 5, 12);
alert(curriedAdd2()); //17
```
- 防篡改对象
> 一旦把对象定义为防篡改，就无法撤销了
```
//不可扩展对象
var person = {
    name:"Nicholas"
};
Object.preventExtensions(person)
person.age = 29;
alear(person.age); //undefined
//检查对象是否可扩展
object.isExtensible(person)

//密封的对象（不可扩展而且[[Configurable]]特性被设置为false 也就是不能删除属性和方法
var person = { name: "Nicholas" }; 
Object.seal(person); 
person.age = 29; 
alert(person.age); //undefined 
delete person.name; 
alert(person.name); //"Nicholas"
//检查对象是否被密封
object.isSealed(person)

//冻结的对象（最严格，不可扩展，密封，[[Writable]]为false
var person = { name: "Nicholas" }; 
Object.freeze(person); 
person.age = 29; 
alert(person.age); //undefined 
delete person.name; 
alert(person.name); //"Nicholas" 
person.name = "Greg"; 
alert(person.name); //"Nicholas"
//综合检测
var person = { name: "Nicholas" }; 
alert(Object.isExtensible(person)); //true 
alert(Object.isSealed(person)); //false 
alert(Object.isFrozen(person)); //false 
Object.freeze(person); 
alert(Object.isExtensible(person)); //false 
alert(Object.isSealed(person)); //true 
alert(Object.isFrozen(person)); //true
```

- 高级定时器
```
//确保在前一个定时器代码执行完之前不会向队列插入新的定时器代码，确保不会有任何缺失的间隔
setTimeout(function(){ 
 //处理中
 setTimeout(arguments.callee, interval); 
}, interval);
```

## 离线应用与客户端存储
- 离线检测
```
//navigator.onLine属性，这个属性值为 true 表示设备能上网，值为 false 表示设备离线

//两个事件可以检测网络是否可用 online和offline
EventUtil.addHandler(window, "online", function(){ 
 alert("Online"); 
}); 
EventUtil.addHandler(window, "offline", function(){ 
 alert("Offline"); 
});
```
- 应用缓存
> HTML5 的应用缓存（application cache），或者简称为 appcache，是专门为开发离线 Web 应用而设计的。Appcache 就是从浏览器的缓存中分出来的一块缓存区。要想在这个缓存中保存数据，可以使用一个描述文件（manifest file），列出要下载和缓存的资源
```
CACHE MANIFEST 
#Comment 
file.js 
file.css

//页面关联离线文件
<html manifest="/offline.manifest">
```
- 页面刷新的状态以及一些状态改变事件

0：无缓存，即没有与页面相关的应用缓存。

1：闲置，即应用缓存未得到更新。

2：检查中，即正在下载描述文件并检查更新。

3：下载中，即应用缓存正在下载描述文件中指定的资源。

4：更新完成，即应用缓存已经更新了资源，而且所有资源都已下载完毕，可以通过 swapCache()来使用了。

5：废弃，即应用缓存的描述文件已经不存在了，因此页面无法再访问应用缓存


checking：在浏览器为应用缓存查找更新时触发。

error：在检查更新或下载资源期间发生错误时触发。

noupdate：在检查描述文件发现文件无变化时触发。

downloading：在开始下载应用缓存资源时触发。

progress：在文件下载应用缓存的过程中持续不断地触发。

updateready：在页面新的应用缓存下载完毕且可以通过 swapCache()使用时触发。

cached：在应用缓存完整可用时触发。
> 一般来讲，这些事件会随着页面加载按上述顺序依次触发。不过，通过调用 update()方法也可以手工干预，让应用缓存为检查更新而触发上述事件
```
applicationCache.update();

//如果触发了 updateready 事件，则说明新版本的应用缓存已经可用，而此时你需要调用 swapCache()来启用新应用缓存

EventUtil.addHandler(applicationCache, "updateready", function(){ 
 applicationCache.swapCache(); 
});
```

- 数据存储
```
//Cookie
//服务器响应头
HTTP/1.1 200 OK 
Content-type: text/html 
Set-Cookie: name=value 
Other-header: other-header-value

//通过为每个请求添加 Cookie HTTP 头将信息发送回服务器
GET /index.html HTTP/1.1 
Cookie: name=value 
Other-header: other-header-value

```
Cookie的构成

1.名称：一个唯一确定 cookie 的名称。cookie 名称是不区分大小写的

2.值：储存在 cookie 中的字符串值。值必须被 URL 编码。

3.域：cookie 对于哪个域是有效的。所有向该域发送的请求中都会包含这个 cookie 信息。

4.路径：对于指定域中的那个路径，应该向服务器发送 cookie。

5.失效时间：表示 cookie 何时应该被删除的时间戳

6.安全标志：指定后，cookie 只有在使用 SSL 连接的时候才发送到服务器
```
//设置cookie
var CookieUtil = { 
 get: function (name){ 
 var cookieName = encodeURIComponent(name) + "=", 
 cookieStart = document.cookie.indexOf(cookieName), 
 cookieValue = null; 
 if (cookieStart > -1){ 
 var cookieEnd = document.cookie.indexOf(";", cookieStart); 
 if (cookieEnd == -1){ 
 cookieEnd = document.cookie.length; 
 } 
 cookieValue = decodeURIComponent(document.cookie.substring(cookieStart 
 + cookieName.length, cookieEnd)); 
 } 
 return cookieValue; 
 }, 
 set: function (name, value, expires, path, domain, secure) { 
 var cookieText = encodeURIComponent(name) + "=" + 
 encodeURIComponent(value); 
 if (expires instanceof Date) { 
 cookieText += "; expires=" + expires.toGMTString(); 
 } 
 if (path) { 
 cookieText += "; path=" + path; 
 }
  if (domain) { 
 cookieText += "; domain=" + domain; 
 } 
 if (secure) { 
 cookieText += "; secure"; 
 } 
 document.cookie = cookieText; 
 }, 
 unset: function (name, path, domain, secure){ 
 this.set(name, "", new Date(0), path, domain, secure); 
 } 
};

//没有删除已有 cookie 的直接方法。所以，需要使用相同的路径、域和安全选项再次设置 cookie，并将失效时间设置为过去的时间。CookieUtil.unset()方法可以处理这种事情

//使用方法
//设置 cookie 
CookieUtil.set("name", "Nicholas"); 
CookieUtil.set("book", "Professional JavaScript"); 
//读取 cookie 的值
alert(CookieUtil.get("name")); //"Nicholas" 
alert(CookieUtil.get("book")); //"Professional JavaScript" 
//删除 cookie 
CookieUtil.unset("name"); 
CookieUtil.unset("book");
//设置 cookie，包括它的路径、域、失效日期
CookieUtil.set("name", "Nicholas", "/books/projs/", "www.wrox.com", 
 new Date("January 1, 2010")); 
//删除刚刚设置的 cookie 
CookieUtil.unset("name", "/books/projs/", "www.wrox.com"); 
//设置安全的 cookie 
CookieUtil.set("name", "Nicholas", null, null, null, true);

//子cookie
name=name1=value1&name2=value2&name3=value3&name4=value4&name5=value5

var SubCookieUtil = { 
 get: function (name, subName){ 
 var subCookies = this.getAll(name); 
 if (subCookies){ 
 return subCookies[subName]; 
 } else { 
 return null; 
 } 
 }, 
 getAll: function(name){ 
 var cookieName = encodeURIComponent(name) + "=", 
 cookieStart = document.cookie.indexOf(cookieName), 
 cookieValue = null, 
 cookieEnd, 
 subCookies, 
 i, 
 parts, 
 result = {}; 
 if (cookieStart > -1){ 
 cookieEnd = document.cookie.indexOf(";", cookieStart); 
 if (cookieEnd == -1){ 
 cookieEnd = document.cookie.length; 
 } 
 cookieValue = document.cookie.substring(cookieStart +
  cookieName.length, cookieEnd); 
 if (cookieValue.length > 0){ 
 subCookies = cookieValue.split("&"); 
 for (i=0, len=subCookies.length; i < len; i++){ 
 parts = subCookies[i].split("="); 
 result[decodeURIComponent(parts[0])] = 
 decodeURIComponent(parts[1]); 
 } 
 return result; 
 } 
 } 
 return null; 
 }, 
 //省略了更多代码
};

//使用子cookie的方式
//假设 document.cookie=data=name=Nicholas&book=Professional%20JavaScript 
//取得全部子 cookie 
var data = SubCookieUtil.getAll("data"); 
alert(data.name); //"Nicholas" 
alert(data.book); //"Professional JavaScript" 
//逐个获取子 cookie 
alert(SubCookieUtil.get("data", "name")); //"Nicholas" 
alert(SubCookieUtil.get("data", "book")); //"Professional JavaScript"
```

- IndexedDB
> 在浏览器中保存结构化数据的一种数据库。IndexedDB 就是一个数据库，与 MySQL 或 Web SQL Database 等这些你以前可能用过的数据库类似。IndexedDB 最大的特色是使用对象保存数据，而不是使用表来保存数据。一个 IndexedDB 数据库，就是一组位于相同命名空间下的对象的集合。
```
var request, database; 
request = indexedDB.open("admin"); 
request.onerror = function(event){ 
 alert("Something bad happened while trying to open: " + 
 event.target.errorCode); 
}; 
request.onsuccess = function(event){ 
 database = event.target.result; 
};

if (database.version != "1.0"){ 
 request = database.setVersion("1.0"); 
 request.onerror = function(event){ 
 alert("Something bad happened while trying to set version: " + 
 event.target.errorCode); 
 }; 
 request.onsuccess = function(event){ 
 alert("Database initialization complete. Database name: " + database.name + 
 ", Version: " + database.version); 
 }; 
} else { 
 alert("Database already initialized. Database name: " + database.name + 
 ", Version: " + database.version); 
}

//使用对象存储空间
//想要保存的记录对象
var user = { 
 username: "007", //可以指定为键
 firstName: "James", 
 lastName: "Bond", 
 password: "foo" 
};

//创建对象存储空间
//其中的第二个参数username即为指定的存储空间的键
var store = db.createObjectStore("users", { keyPath: "username" });
//users 中保存着一批用户对象
var i=0, 
 request, 
 requests = [], 
 len = users.length; 
while(i < len){ 
 request = store.add(users[i++]); 
 request.onerror = function(){ 
 //处理错误
 }; 
 request.onsuccess = function(){ 
 //处理成功
 }; 
 requests.push(request); 
}

//事务
var transaction = db.transaction();
//只加载user存储空间中的数据
var transaction = db.transaction("users");
//访问多个存储空间
var transaction = db.transaction(["users", "anotherStore"]);
//读写
var request = db.transaction("users").objectStore("users").get("007"); 
request.onerror = function(event){ 
 alert("Did not get the object!"); 
}; 
request.onsuccess = function(event){ 
 var result = event.target.result; 
 alert(result.firstName); //"James" 
};
transaction.onerror = function(event){ 
 //整个事务都被取消了
}; 
transaction.oncomplete = function(event){ 
 //整个事务都成功完成了
};

//使用事务可以直接通过已知的键来检索单个对象，需要检索多个对象的情况下需要在事务内创建游标
request.onsuccess = function(event){ 
 var cursor = event.target.result, 
 value,
  updateRequest; 
 if (cursor){ //必须要检查
 if (cursor.key == "foo"){
 value = cursor.value; //取得当前的值
 value.password = "magic!"; //更新密码
 updateRequest = cursor.update(value); //请求保存更新
 updateRequest.onsuccess = function(){ 
 //处理成功
 }; 
 updateReqeust.onerror = function(){ 
 //处理失败
 }; 
 } 
 } 
};
//移动游标
request.onsuccess = function(event){ 
 var cursor = event.target.result; 
 if (cursor){ //必须要检查
 console.log("Key: " + cursor.key + ", Value: " + 
 JSON.stringify(cursor.value)); 
 cursor.continue(); //移动到下一项
 } else { 
 console.log("Done!");
  } 
};
```

- 新兴的API
> 这类API大多带有特定于浏览器的前缀，比如微软的ms前缀以及Chrome和Safari的webkit前缀，去掉前缀之后的部分在所有浏览器中都是一致的
```
//检查用户当前是否在与页面进行交互或者说实际的页面是否已经隐藏
function isHiddenSupported(){ 
 return typeof (document.hidden || document.msHidden || 
 document.webkitHidden) != "undefined"; 
}
//可以侦听用户的visibilitychange时间就是在页面从可见与不可见之间的状态发生变化时收到通知
function handleVisibilityChange(){ 
 var output = document.getElementById("output"), 
 msg; 
 if (document.hidden || document.msHidden || document.webkitHidden){ 
 msg = "Page is now hidden. " + (new Date()) + "<br>"; 
 } else { 
 msg = "Page is now visible. " + (new Date()) + "<br>"; 
 } 
 output.innerHTML += msg; 
} 
//要为两个事件都指定事件处理程序
EventUtil.addHandler(document, "msvisibilitychange", handleVisibilityChange); 
EventUtil.addHandler(document, "webkitvisibilitychange", handleVisibilityChange);

//Geolocation API(地理定位)
navigator.geolocation.getCurrentPosition(function(position){ 
 drawMapCenteredAt(position.coords.latitude, positions.coords.longitude); 
});
navigator.geolocation.getCurrentPosition(function(position){ 
drawMapCenteredAt(position.coords.latitude, positions.coords.longitude); 
}, function(error){ 
 console.log("Error code: " + error.code); 
 console.log("Error message: " + error.message); 
}, { 
 enableHighAccuracy: true, 
 timeout: 5000, 
 maximumAge: 25000 
});

//File API
//通过侦听change事件并读取files集合就可以知道选择的每个文件的信息
var filesList = document.getElementById("files-list"); 
EventUtil.addHandler(filesList, "change", function(event){
     var files = EventUtil.getTarget(event).files, 
 i = 0, 
 len = files.length; 
 while (i < len){ 
 console.log(files[i].name + " (" + files[i].type + ", " + files[i].size + 
 " bytes) "); 
 i++; 
 } 
});
//FileReader类型
//读取表单字段中选择的文件并将其内容显示在页面中
var filesList = document.getElementById("files-list"); 
EventUtil.addHandler(filesList, "change", function(event){ 
 var info = "", 
 output = document.getElementById("output"), 
 progress = document.getElementById("progress"), 
 files = EventUtil.getTarget(event).files, 
 type = "default", 
 reader = new FileReader(); 
 if (/image/.test(files[0].type)){ 
 reader.readAsDataURL(files[0]); 
 type = "image"; 
 } else { 
 reader.readAsText(files[0]); 
 type = "text"; 
 } 
 reader.onerror = function(){ 
 output.innerHTML = "Could not read file, error code is " + 
 reader.error.code; 
 }; 
 reader.onprogress = function(event){ 
 if (event.lengthComputable){ 
 progress.innerHTML = event.loaded + "/" + event.total; 
 } 
 }; 
 reader.onload = function(){ 
 var html = ""; 
 switch(type){ 
 case "image": 
 html = "<img src=\"" + reader.result + "\">"; 
 break; 
 case "text": 
 html = reader.result; 
 break; 
 } 
 output.innerHTML = html; 
 }; 
});
//读取部分内容（例子读取了文件的32B的内容）
var filesList = document.getElementById("files-list"); 
EventUtil.addHandler(filesList, "change", function(event){ 
 var info = "", 
 output = document.getElementById("output"), 
 progress = document.getElementById("progress"), 
 files = EventUtil.getTarget(event).files, 
 reader = new FileReader(), 
blob = blobSlice(files[0], 0, 32); 
 if (blob){ 
reader.readAsText(blob); 
 reader.onerror = function(){ 
 output.innerHTML = "Could not read file, error code is " + 
 reader.error.code; 
 }; 
 reader.onload = function(){ 
 output.innerHTML = reader.result; 
 }; 
 } else { 
 alert("Your browser doesn' t support slice()."); 
 } 
}); 

//对象url（file blob）
//消除命名差异的构造对象，返回的是一个字符串指向一块内存地址
function createObjectURL(blob){ 
 if (window.URL){ 
 return window.URL.createObjectURL(blob); 
 } else if (window.webkitURL){ 
 return window.webkitURL.createObjectURL(blob); 
 } else { 
 return null; 
 } 
}
//以下代码可以在页面中显示一个图像文件（直接把对象 URL 放在<img>标签中，就省去了把数据先读到 JavaScript 中的麻烦）
 var info = "", 
 output = document.getElementById("output"), 
 progress = document.getElementById("progress"), 
 files = EventUtil.getTarget(event).files, 
 reader = new FileReader(), 
url = createObjectURL(files[0]); 
 if (url){ 
 if (/image/.test(files[0].type)){ 
output.innerHTML = "<img src=\"" + url + "\">"; 
 } else { 
 output.innerHTML = "Not an image."; 
 } 
 } else { 
 output.innerHTML = "Your browser doesn't support object URLs."; 
 } 
});
//只要有代码在引用对象URL，内存就不会释放就需要手工释放内存
function revokeObjectURL(url){ 
 if (window.URL){ 
 window.URL.revokeObjectURL(url); 
 } else if (window.webkitURL){ 
 window.webkitURL.revokeObjectURL(url); 
 } 
}
//读取拖放的文件
var droptarget = document.getElementById( "droptarget"); 
function handleEvent(event){ 
 var info = "", 
 output = document.getElementById("output"), 
 files, i, len; 
 EventUtil.preventDefault(event); 
 if (event.type == "drop"){ 
files = event.dataTransfer.files; 
 i = 0; 
 len = files.length; 
 while (i < len){ 
 info += files[i].name + " (" + files[i].type + ", " + files[i].size + 
 " bytes)<br>"; 
 i++; 
 } 
 output.innerHTML = info; 
 } 
} 
EventUtil.addHandler(droptarget, "dragenter", handleEvent); 
EventUtil.addHandler(droptarget, "dragover", handleEvent); 
EventUtil.addHandler(droptarget, "drop", handleEvent);
//使用XHR上传文件（通过创建FormData对象的方法调用append（）方法实现）
var droptarget = document.getElementById("droptarget"); 
function handleEvent(event){ 
 var info = "", 
 output = document.getElementById("output"), 
 data, xhr, 
 files, i, len; 
 EventUtil.preventDefault(event); 
 if (event.type == "drop"){ 
data = new FormData(); 
 files = event.dataTransfer.files; 
 i = 0; 
 len = files.length; 
 while (i < len){ 
data.append("file" + i, files[i]); 
 i++; 
 } 
 xhr = new XMLHttpRequest(); 
 xhr.open("post", "FileAPIExample06Upload.php", true); 
 xhr.onreadystatechange = function(){ 
 if (xhr.readyState == 4){ 
 alert(xhr.responseText); 
 } 
 }; 
xhr.send(data); 
 } 
} 
EventUtil.addHandler(droptarget, "dragenter", handleEvent); 
EventUtil.addHandler(droptarget, "dragover", handleEvent); 
EventUtil.addHandler(droptarget, "drop", handleEvent);

//剩余参数运算符
function sum(num1, num2, ...nums){ 
 var result = num1 + num2; 
 for (let i=0, len=nums.length; i < len; i++){ 
 result += nums[i]; 
 } 
 return result; 
} 
var result = sum(1, 2, 3, 4, 5, 6);
var result = sum(...[1, 2, 3, 4, 5, 6]);
var result = sum.apply(this, [1, 2, 3, 4, 5, 6]);
```

- 数组以及其他结构
```
//迭代器
var person = { 
 name: "Nicholas", 
 age: 29 
}; 
var iterator = new Iterator(person); 
try { 
 while(true){ 
 let value = iterator.next(); 
 document.write(value.join(":") + "<br>"); 
 } 
} catch(ex){ 
 //有意没有写代码
}
name:Nicholas 
age:29 //结果

var colors = ["red", "green", "blue"]; 
var iterator = new Iterator(colors); 
try { 
 while(true){ 
 let value = iterator.next(); 
 document.write(value.join(":") + "<br>");
  } 
} catch(ex){ 
}
//代码输出
0:red 
1:green 
2:blue

var iterator = new Iterator(colors, true); //在这样创建的迭代器上每次调用 next()方法，只会返回数组中每个值的索引，而不会返回包含索引和值数组。
```
> 如果想为自定义类型创建迭代器，需要定义一个特殊的方法__iterator__()，这个方法应该返回一个包含 next()方法的对象。当把自定义类型传给 Iterator 构造函数时，就会调用那个特殊的方法。
```
//数组领悟
//原始数组
var numbers = [0,1,2,3,4,5,6,7,8,9,10]; 
//把所有元素复制到新数组
var duplicate = [i for each (i in numbers)]; 
//只把偶数复制到新数组
var evens = [i for each (i in numbers) if (i % 2 == 0)]; 
//把每个数乘以 2 后的结果放到新数组中
var doubled = [i*2 for each (i in numbers)]; 
//把每个奇数乘以 3 后的结果放到新数组中
var tripledOdds = [i*3 for each (i in numbers) if (i % 2 > 0)];

//解构赋值（从一组值中挑出一个或多个值然后把它们分别赋值给独立的变量）
```

- 新对象类型（如代对象proxy）
```
//代理对象
var proxy = Proxy.create(handler); 
//创建一个以 myObject 为原型的代理对象
var proxy = Proxy.create(handler, myObject);
//你想保证人们只使用 push()、pop()和 length。在这种情况下，就可以基于数组创建一个代理对象，只对外公开这三个对象成员
var Stack = (function(){ 
 var stack = [], 
 allowed = ["push", "pop", "length" ]; 
 return Proxy.create({ 
 get: function(receiver, name){; 
 if (allowed.indexOf(name) > -1){ 
 if(typeof stack[name] == "function"){ 
 return stack[name].bind(stack); 
 } else { 
 return stack[name]; 
 } 
 } else { 
 return undefined; 
 } 
 } 
 }); 
}); 
var mystack = new Stack(); 
mystack.push("hi"); 
mystack.push("goodbye"); 
console.log(mystack.length); //1 
console.log(mystack[0]); //未定义
console.log(mystack.pop()); //"goodbye"

//映射与集合
var map = new Map(); 
map.set("name", "Nicholas"); 
map.set("book", "Professional JavaScript"); 
console.log(map.has("name")); //true 
console.log(map.get("name")); //"Nicholas" 
map.delete("name");
var set = new Set(); 
set.add("name"); 
console.log(set.has("name")); //true 
set.delete("name"); 
console.log(set.has("name")); //false

//weakmapz(键必须是对象，而在对象已经不存在时，相关的键值对儿就会从 WeakMap 中被删除)
var key = {}, 
 map = new WeakMap(); 
map.set(key, "Hello!"); 
//解除对键的引用，从而删除该值
key = null;
```
