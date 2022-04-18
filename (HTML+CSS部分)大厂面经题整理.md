***目录部分***
- 1.css选择器的优先级

- 2.css选择器有哪些？它们的权重
  
- 3.说一下盒模型

- 4.flex:1什么意思

- 5.哪些方法可以实现水平垂直居中

- 6.Flex相关

- 7.除了flex布局还有哪些布局

- 8.transform介绍一下

- 9.介绍position
  
- 10.img src为什么不能为空 应该用什么

- 11.页面适配的方法有哪些

- 12.form表单包括哪些

- 13.html标签一些共有的属性有哪些

- 14.html5的新特性


### 1.css选择器优先级
- css选择器的种类
> 1.标签选择器(如：body,div,p,ul,li)

> 2.类选择器(如：class="head"class="head_logo")

> 3.ID选择器(如：id="name",id="name_txt")

> 4.全局选择器(如：*号)

> 5.组合选择器(如：.head .head_logo,注意两选择器用空格键分开)

> 6.后代选择器 (如：#head .nav ul li 从父集到子孙集的选择器)

> 7.群组选择器 div,span,img {color:Red} 即具有相同样式的标签分组显示

> 8.继承选择器(如：div p,注意两选择器用空格键分开)

> 9.伪类选择器(如：就是链接样式,a元素的伪类，4种不同的状态：link、visited、active、hover。)

> 10.字符串匹配的属性选择符(^ $ *三种，分别对应开始、结尾、包含)

> 11.子选择器 (如：div>p ,带大于号>)12.CSS 相邻兄弟选择器器 (如：h1+p,带加号+)

- css选择器的优先级
> !important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

### 2.css选择器有哪些？他们的权重
- 内联样式，如: style="..."，权值为1000。
- ID选择器，如：#content，权值为0100。
- 类，伪类、属性选择器，如.content，权值为0010。
- 类型选择器、伪元素选择器，如div p，权值为0001。
- 通配符、子选择器、相邻选择器等。如* > +，权值为0000。
- 继承的样式没有权值

### 3.说一下盒模型
https://www.cnblogs.com/qianguyihao/p/7256371.html
> 盒子模型，英文即box model。无论是div、span、还是a都是盒子。但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。

> 一个盒子中主要的属性就5个：width、height、padding、border、margin,宽度和真实占有宽度，不是一个概念,这是因为还要加上padding、border，真实的大小是margin border padding content的大小和，height、width指的都是content的大小

> 在标准盒子模型中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。IE盒子模型中，width 和 height 指的是内容区域+border+padding的宽度和高度。

> 综合属性的写法：(上、右、下、左)（顺时针方向，用空格隔开。margin的道理也是一样的）

### 4.flex:1什么意思

- CSDN收藏夹：flex:1 == flex:1 1 auto

- flex的三个属性

1.flex-grow:默认为0，指定了flex容器中剩余空间的多少应该被分配给项目

2.flex-shrink:默认为1，仅在默认宽度之和大于容器宽度的时候才会收缩。

3.flex-basis:指定了flex元素在主轴方向上的大小，如果不用box-sizing改变盒模型，这个属性就决定了flex元素的内容尺寸，如果设置了flex-basis,那么元素占用的空间就为这个值，没有设置或auto那么元素占用的就是元素的width/height值

### 5.哪些方法可以实现水平垂直居中
> 1.块元素的特点：
a.总是在新行上开始；
b.高度、行高以及外边距和内边距都可控制；
c.宽度默认是它容器的100%，除非设定一个宽度；
d.他可以容纳内联元素和其他块元素。
2.内联元素的特点：
a.和其他元素都在同一行；
b.高，行高及外边距和内边距不可改变；
c.宽度就是它的文字和图片的宽度，不可改变；
d.内联元素只能容纳文本或者其他内联元素。

**水平居中**
- 1) 若是行内元素, 给其父元素设置 text-align:center,即可实现行内元素水平居中.
  
- 2) 若是块级元素, 该元素设置 margin:0 auto即可.

- 3) 若子元素包含 float:left 属性, 为了让子元素水平居中, 则可让父元素宽度设置为fit-content,并且配合margin, 作如下设置:
.parent{
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width:fit-content;
    margin:0 auto;
}
fit-content是CSS3中给width属性新加的一个属性值,它配合margin可以轻松实现水平居中, 目前只支持Chrome 和 Firefox浏览器.

- 4) 使用flex 2012年版本布局, 可以轻松的实现水平居中, 子元素设置如下:
```
.son{
    display: flex;
    justify-content: center;
}
```

- 5) 使用CSS3中新增的transform属性, 子元素设置如下:
```
.son{
    position:absolute;
    left:50%;
    transform:translate(-50%,0);
}
```

- 6) 使用绝对定位方式, 以及负值的margin-left, 子元素设置如下:
```
.son{
    position:absolute;
    width:固定;
    left:50%;
    margin-left:-0.5宽度;
}
```

- 7) 使用绝对定位方式, 以及left:0;right:0;margin:0 auto; 子元素设置如下:
```
.son{
    position:absolute;
    width:固定;
    left:0;
    right:0;
    margin:0 auto;
}
```

**垂直居中**

单行文本
- 1) 若元素是单行文本, 则可设置 line-height 等于父元素高度

行内块级元素

- 2) 若元素是行内块级元素, 基本思想是使用display: inline-block, vertical-align: middle(该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐)和一个伪元素让内容块处于容器中央.
```
.parent::after, .son{
    display:inline-block;
    vertical-align:middle;
}
.parent::after{
    content:'';
    height:100%;
}
```

- 3) 可用 vertical-align 属性, 而vertical-align只有在父层为 td 或者 th 时, 才会生效, 对于其他块级元素, 例如 div、p 等, 默认情况是不支持的. 为了使用vertical-align, 我们需要设置父元素display:table, 子元素 display:table-cell;vertical-align:middle;

优点

> 元素高度可以动态改变, 不需再CSS中定义, 如果父元素没有足够空间时, 该元素内容也不会被截断.

缺点

> IE6~7, 甚至IE8 beta中无效.

- 4) 可用 Flex 2012版, 这是CSS布局未来的趋势. Flexbox是CSS3新增属性, 设计初衷是为了解决像垂直居中这样的常见布局问题
父元素做如下设置即可保证子元素垂直居中:
```
.parent {
  display: flex;
  align-items: center;
}
```
优点

> 内容块的宽高任意, 优雅的溢出.
可用于更复杂高级的布局技术中.

缺点

> IE8/IE9不支持
需要浏览器厂商前缀
渲染上可能会有一些问题

- 5) 使用flex 2009版.
```
.parent {
    display: box;
    box-orient: vertical;
    box-pack: center;
}
```
优点

> 实现简单, 扩展性强

缺点

> 兼容性差, 不支持IE

- 6) 可用 transform , 设置父元素相对定位(position:relative), 子元素如下css样式:
```
.son{
    position:absolute;
    top:50%;
    -webkit-transform: translate(-50%,-50%); 
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
```

优点

> 代码量少

缺点

> IE8不支持, 属性需要追加浏览器厂商前缀, 可能干扰其他 transform 效果, 某些情形下会出现文本或元素边界渲染模糊的现象.

元素高度固定

- 7) 设置父元素相对定位(position:relative), 子元素如下css样式:
```
.son{
    position:absolute;
    top:50%;
    height:固定;
    margin-top:-0.5高度;
}
```

优点

> 适用于所有浏览器.

缺点

> 父元素空间不够时, 子元素可能不可见(当浏览器窗口缩小时,滚动条不出现时).如果子元素设置了overflow:auto, 则高度不够时, 会出现滚动条.

- 8) 设置父元素相对定位(position:relative), 子元素如下css样式:
```
.son{
    position:absolute;
    height:固定;
    top:0;
    bottom:0;
    margin:auto 0;
}
```

优点

> 简单

缺点

> 没有足够空间时, 子元素会被截断, 但不会有滚动条.

总结

水平居中较为简单, 共提供了8种方法, 一般情况下 text-align:center,marin:0 auto; 足矣

> ① text-align:center;
② margin:0 auto;
③ width:fit-content;
④ flex
⑤ 盒模型
⑥ transform
⑦ ⑧ 两种不同的绝对定位方法
垂直居中, 共提供了8种方法.

> ① 单行文本, line-height
② 行内块级元素, 使用 display: inline-block, vertical-align: middle; 加上伪元素辅助实现
③ vertical-align
④ flex
⑤ 盒模型
⑥ transform
⑦ ⑧ 两种不同的绝对定位方法

我们发现, flex, 盒模型, transform, 绝对定位, 这几种方法同时适用于水平居中和垂直居中.

### 6.Flex相关
https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
- flex是FlexibleBox的缩写意思为弹性布局，用来为盒状模型提供最大的灵活性，flex布局子元素的float、clear、vertical-align属性失效

- 属性值

1.**flex-direction**：决定项目的排列方向包括==row|row-reverse|column|column-reverse==

2.**flex-wrap**：默认为一条线，它定义如果拍不下如何换行包括==nowrap|wrap|wrap-reverse(第一行在下方)==

3.**flex-flow**：是前两个的简写形式即<flex-direction> || <flex-wrap>

4.**justify-content**：项目在主轴上的对齐方式包括==flex-start|flex-end|center|space-between|space-around(元素之间的间隔比与边框之间的间隔大一倍)==

5.**align-items**：定义项目在交叉轴（一根轴线）上如何对齐==flex-start|flex-end|center|baseline(平均在一条线上)|strech==

6.**align-content**：*多根轴线*的对齐方式，只有一根不起作用包括==flex-start|flex-end|center|space-between|space-around（每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍）|strech==

7.**order**：定义项目的排列顺序，数值越小越靠前默认为0

8.**flex**：==flex-grow|flex-shrink|flex-basis==默认1 0 auto，三个属性值可单独写但不推荐，auto:1 1 auto(即自动铺满),none:0 0 auto(不能伸缩)

9**align-self**：允许单个和其他的项目不一样的对齐方式，可以覆盖align-items，默认auto，值与align-items一样

### 7.除了flex布局还有哪些布局
- flex只兼容ie10以上的浏览器(最大痛点),而且老版的flex的写法还不一样，一会儿display:box,一会儿display:flex,还要做兼容处理。
- table布局

### 8.transform介绍一下
http://www.divcss5.com/css3-style/c55513.shtml
> Transform字面上就是变形，改变的意思。在CSS3中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。
```
//transform中使用多个属性时却需要有空格隔开
transform ： none | <transform-function> [ <transform-function> ]* 

transform: rotate | scale | skew | translate |matrix;
```
- 1.rotate(<angle>) ：通过指定的角度参数对原元素指定一个2D rotation（2D 旋转），需先有transform-origin属性的定义。transform-origin定义的是旋转的基点，其中angle是指旋转角度，如果设置的值为正数表示顺时针旋转，如果设置的值为负数，则表示逆时针旋转。如：transform:rotate(30deg)
```
//使元素围绕X轴、Y轴、Z轴旋转
transform：rotateX（45deg）；
 
transform：rotateY（45deg）；
 
transform：rotateZ（45deg）；
 
transform：rotateX（45deg）rotateY（45deg）rotateZ（45deg）；
 
transform：scale（0.5）rotateY（45deg）rotateZ（45deg）；
```

- 2.translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）；translateX(x)仅水平方向移动（X轴移动）；translateY(Y)仅垂直方向移动（Y轴移动）
```
transform：translate（50px，50px）；//水平方向上移动50px，垂直方向上移动50px
transform：translate（50px）；//这种情况下视为只在水平方向上移动，垂直方向上不移动。
//使元素在X轴、Y轴、Z轴方向上进行移动
transform：translateX（50px）;
transform：translateY（50px）;
transform：translateZ（50px）;
```

- 3.transform：scale（0.5，2）；//水平方向缩小一半，垂直方向放大一倍。
``` 
transform：scale（0.5）；//缩小一半
transform：scale（0.5，2）；//水平方向缩小一半，垂直方向放大一倍。
//按X轴、Y轴、Z轴进行缩放
transform：scaleX（0.5）；
transform：scaleY（1）；
transform：scaleZ（2）；
transform：scaleX（0.5）scaleY（1）；
transform：scale（0.5）rotateY（45deg）；
```

- 4.使用skew方法实现文字或图像的倾斜处理，在参数中分别指定水平方向上的倾斜角度与垂直方向上的倾斜角度。
```
transform：skew（30deg，30deg）；//水平方向上倾斜30度，垂直方向上倾斜30度。
transform：skew（30deg）//这种情况下视为只在水平方向上进行倾斜，垂直方向上不倾斜。
transform：skewX（45deg）；
transform：skewY（45deg）；
```

- 5.对一个元素使用多种变形的方法
```
transform：translate（150px，200px）rotate（45deg）scale（1.5）；
```

- 6.指定变形的基准点(在使用transform方法进行文字或图像变形的时候，是以元素的中心点为基准点进行变形的。)
```
transform：rotate（45deg）；
transform-origin：leftbottom；//把基准点修改为元素的左下角
//基准点在元素水平方向上的位置：left、center、right
//基准点在元素垂直方向上的位置：top、center、bottom
```

### 9.介绍position
> CSS position属性用于指定一个元素在文档中的定位方式。top、right、bottom、left 属性则决定了该元素的最终位置。

> 窗体自上而下分成一行一行，并在每行中按从左至右的顺序排放元素；每个非浮动块级元素都独占一行， 浮动元素则按规定浮在行的一端，若当前行容不下，则另起新行再浮动；内联元素也不会独占一行，几乎所有元素(包括块级，内联和列表元素）均可生成子行，用于摆放子元素；有三种情况将使得元素脱离normal flow而存在，分别是 float，absolute ，fixed，但是在IE6中浮动元素也存在于normal flow中。

- position: static(默认)
> 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top、right、bottom、left 属性无效。

- position: relative
> 该关键字下，元素先放置在未添加定位时的位置，再**在不改变页面布局的前提下调整元素位置**（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。

- position: absolute
> 不为元素预留空间，通过指定元素相对于最近的**非 static 定位祖先元素的偏移**，来确定元素位置。绝对定位的元素可以设置外边距（margin），且不会与其他边距合并。

- position: fixed
> 不为元素预留空间，而是通过指定元素**相对于屏幕视口（viewport）的位置来指定元素位置**。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed属性会创建新的层叠上下文。当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先。个人理解：fixed相对于window固定，滚动浏览器窗口并不会使其移动，会脱离normal flow。

- position: sticky
> 盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky对 table元素的效果与 position: relative 相同。

- position: inherit
> 规定应该从父元素继承 position 属性的值。

### 10.img src为什么不能用空 应该用什么
**img标签src为空的陷阱**

**出现一次这样的标签会导致向你的服务器多做一次请求。**

- 在IE中，这样做会请求一次当前页面所在的目录。如在http://playgoogle.com/demo/a.html 中出现这种空src的标签，会导致重新请求一次://playgoogle.com/demo/
 
- 在Safari 和 Chrome中，将请求当前页面本身。
 
- 在Firefox 3.5以前的版本中，有和Safari同样的问题，但是在3.5中修正了这个BUG。
 
- 在Opera 中，不会做额外的请求。
 
 > 在一个访问量不高的网站中，多一个这样的请求也无所谓（甚至可以让你的网站浏览看上去翻番），但在一个千万级访问量甚至更高的WEB站点里，这样会导致你的服务器和带宽的成本显著增加。 另外一个隐患是，重新请求某个页面可能会导致用户的一些信息被无意中修改，例如cookies，或者ajax操作。

 > 其他的标签中的空src会不会导致这样的问题？ 好消息是，在IE中只有image标签有这个问题。坏消息是，在Chrome, Safari, 和 Firefox中\<script src=""\> 和\<link href=""\>都会导致出现一个新的请求。

 > 如何解决这个问题？ 可以从两方面着手，一是尽量避免这种坏的编程方式，不要出现空的src标签。另外，可以从服务器端着手，在发现时这种无意义的请求时不要返回任何东西给客户端。

### 边距塌陷的解决方法
会导致外边距塌陷的两种情况

- 情况一：两个兄弟盒子，上面的盒子设置了margin-bottom,下面的盒子设置了margin-top,实际中会取值较大的那个属性值显示在网页中。这种情况一般较为少见。这两个属性只设置一个即可解决。

- 情况二：嵌套盒子（父元素与子元素）间的外边距塌陷（发生在垂直方向上的外边距合并，注意是垂直方向）

> 解决情况二的外边距塌陷一共有三种方法
方法一：给父元素加边框border
方法二：给父元素加内边距padding以达到类似效果
方法三：给父元素设置overflow:hidden;

### 11.页面适配的方法有哪些？
- 一、固定布局（pc端）（静态布局）
> 以像素作为页面的基本单位，不管设备和浏览器宽度，只设计一套尺寸（这种不太现实）

- 根据不同根据不同的分辨率，加载不同的CSS样式文件（可切换的固定布局）自适应布局
```
<script>
	// 分辨率大于等于1680，大部分为1920的范围情况下，调用此css
	if(window.screen.width >= 1680){
		document.write('<link rel="stylesheet" href="css/index_1920.css">');
	}
	// 分辨率在1600-1680这个范围的情况下，调用此css
	else if(window.screen.width >= 1600){
		document.write('<link rel="stylesheet" href="css/index_1600.css">');
	}
	// 分辨率小于1600的范围情况下，调用此css
	else{
		document.write('<link rel="stylesheet" href="css/index.css">');
	}
</script>
```
- 媒体查询
> 媒体查询可以让我们根据设备显示器的特性（如视口宽度、屏幕比例、设备方向：横向或纵向）为其设定CSS样式，媒体查询由媒体类型和一个或多个检测媒体特性的条件表达式组成。
```
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

/* 大屏幕 */
@media only screen and (min-width:1200px) {
}
/* 中等屏幕 */
@media only screen and (min-width: 992px)and (max-width: 1199px) {
}
/* 小屏幕 */

页面大于 768px， 小于 991px 时显示的样式效果

@media only screen and (min-width: 768px)and (max-width: 991px) {
}
/* 手机端显示 */
屏幕小于 767px 时的样式
@media only screen and (max-width: 767px) {
}
```
- 响应式布局
> 用百分比去写元素的宽度不要写绝对宽度，让子元素撑起父元素的高度不写绝对高度，字体使用相对大小em或rem
```
h1 {
    font-size: 2rem;
}

1.浏览器默认字体为 16px ，2rem 即 2 * 16px = 32px
2.em（font size of the element）是指相对于父元素的字体大小的单位，如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸，因此 em 的大小并不是固定的
3.rem是指相对于根元素的字体大小的单位,目前，除了IE8及更早版本外，所有浏览器均已支持rem。
对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。
这些浏览器会忽略用rem设定的字体大小。
h1 {
    font-size: 32px;
    font-size: 2rem;
}

```

### 12.form表单包括哪些
- 普通文本框：
```
　　<input type="text"name="名称"value="值"value="不写value默认为空"/>
```
 
- 密码框：
```
　　<input type="password"name="名称"value="值"value="不写value默认为空"/>
```
- 单选按钮：
```
　　<input type="radio"name="一组名称"value="值"/>
```
- 多选框：
```
　　<input type="select"name="一组名称"value="值"/>
``` 
- 下拉菜单：
```
　　<selectname=”名称”>
　　<optionvalue=”值”>描述</option>
　　<optionvalue=”值”>描述</option>
　　</select>
```
- 按钮：
```
　　//提交按钮：
　　<input type=”submit”value=”显示到按钮上的名称”/>
　　//图片提交：
　　<input type=”imaget”src=”图片地址”value=””/>
　　//普通按钮：没有任何意义的按钮，和js关联使用
　　<input type=”button”name=”值”value=”值”>
　　//重置按钮：
　　<input type=”reset”name=”值”value=”名称”/>
　　//隐藏域：在浏览器中看不到的传递数据表单
　　<input type=”hidden”name=”值”value=”值”/>
　　//多行文本域：
　　<textarearows=”行”cols=”列”value=”值”name=”值”></textarea>
```

### 13.html标签的一些共有的属性有哪些
- id：用来给标签取一个唯一的名称。id名称在一个网页必须是唯一的。

- class：用来给标签取一个类名。

- style：用来设置该标签的行内样式。

- title：当鼠标移到该标签，所显示的提示内容

### 14.html5的新特性
- 语义化标签（为页面提供了更好的页面结构。）
```
<header></header>	 //定义文档的头部区域
<footer></footer>	//定义文档的尾部区域
<nav></nav>	//定义文档的导航区域
<section></section>	//定义文档的段落
<article></article>	//定义页面独立的内容区域
<aside></aside>	//定义页面侧边栏内容
<command></command>	//定义命令按钮
<details></details>	//标签包含 details 元素的标题
<dialog></dialog>	//定义对话框
```
- 增强型表单(多个新的表单输入类型)
```
//类型
color	//主要用于选取颜色
date	//从一个日期选择器选择一个日期
datetime	//选择一个日期（UTC 时间）
datetime-local	//选择一个日期和时间 (无时区)
email	//包含 e-mail 地址的输入域
month	//选择一个月份
number	//数值的输入域
range	//一定范围内数字值的输入域
search	//用于搜索域
tel	//定义输入电话号码字段
time	//选择一个时间
url	 //URL 地址的输入域
week	//选择周和年

//新的表单属性
//1.placehoder 属性，简短的提示在用户输入值前会显示在输入域上。即我们常见的输入框默认提示，在用户输入后消失。
//2、required  属性，是一个 boolean 属性。要求填写的输入域不能为空
//3、pattern 属性，描述了一个正则表达式用于验证<input> 元素的值。
//4、min 和 max 属性，设置元素最小值与最大值。
//5、step 属性，为输入域规定合法的数字间隔。
//6、height 和 width 属性，用于 image 类型的 <input> //标签的图像高度和宽度。
//7、autofocus 属性，是一个 boolean 属性。规定在页面加//载时，域自动地获得焦点。
//8、multiple 属性 ，是一个 boolean 属性。规定<input> 元素中可选择多个值。
```
- 音频和视频
```
<audio controls>
  <source src="xxx.ogg" type="audio/ogg">
  <source src="xxx.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>

<video width="500" height="300" controls>
  <source src="xxx.mp4" type="video/mp4">
  <source src="xxx.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```
- canvas 绘图
(见canvas绘图相关)

- SVG 绘图（可伸缩的矢量图形）
> SVG 是一种使用 XML 描述 2D 图形的语言。Canvas 通过 JavaScript 来绘制 2D 图形。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
- 地理定位（Geolocation用于定位用户的位置）
```
window.navigator.geolocation {
    getCurrentPosition:  fn  用于获取当前的位置数据
    watchPosition: fn  监视用户位置的改变
    clearWatch: fn  清除定位监视
}　　　

navigator.geolocation.getCurrentPosition(
    function(pos){
　　　　console.log('用户定位数据获取成功')
　　　　//console.log(arguments);
　　　　console.log('定位时间：',pos.timestamp)
　　　　console.log('经度：',pos.coords.longitude)
　　　　console.log('纬度：',pos.coords.latitude)
　　　　console.log('海拔：',pos.coords.altitude)
　　　　console.log('速度：',pos.coords.speed)

},    //定位成功的回调
function(err){ 
　　　　console.log('用户定位数据获取失败')
　　　　//console.log(arguments);

}        //定位失败的回调
)
```
- 拖放API(任何元素都能够拖放)
> 在HTML5中，拖拽(draganddrop)成为了标准操作，任何元素都支持。
```
//设置元素可拖放
<img draggable="true" />
//拖动什么 - ondragstart 和 setData()
function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}
//放到何处 - ondragover
event.preventDefault()
//进行放置 - ondrop
function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}
//拖放(Drag 和 Drop)各属性生命周期
//拖动开始	ondragstart	script
//拖动过程中	ondrag	script
//拖动过程中	ondragenter	script
//拖动过程中	ondragover	script
//拖动过程中	ondragleave	script	
//拖动结束	ondrop	script	
//拖动结束	ondragend

//写在哪呢？
//被拖放的元素
<span draggable="true" id="Span1" ondragstart="fooDragStart(this, event)" ondrag="fooDrag(this, event)" ondragend="fooDragEnd(this, event)">
<img src="../images/yjj_1.png"></span>
//目标元素
<div  id="div1" ondrop="fooDrop(this, event)"
                            ondragenter="fooDragEnter(this, event)" ondragleave="fooDragLeave(this, event)"
                            ondragover="fooDragOver(this,event)">
                        </div>
```
- Web Storage
```
//localStorage ：没有时间限制的数据存储
//sessionStorage ： 针对一个 session 的数据存储, 当用户关闭浏览器窗口后，数据会被删除。
//常用的API
//1、保存数据：localStorage.setItem(key,value);
//2、读取数据：localStorage.getItem(key);
//3、删除单个数据：localStorage.removeItem(key);
//4、删除所有数据：localStorage.clear();
//5、得到某个索引的key：localStorage.key(index);
```
- WebSocket
> WebSocket 是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

> 浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

> 当你获取 Web Socket 连接后，你可以通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。
```
<!DOCTYPE HTML>
<html>
   <head>
   <meta charset="utf-8">
   <title>W3Cschool教程(w3cschool.cn)</title>
    
      <script type="text/javascript">
         function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               alert("您的浏览器支持 WebSocket!");
               // 打开一个 web socket
               var ws = new WebSocket("ws://localhost:9998/echo");
               ws.onopen = function()
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send("发送数据");
                  alert("数据发送中...");
               };
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  alert("数据已接收...");
               };
               ws.onclose = function()
               { 
                  // 关闭 websocket
                  alert("连接已关闭..."); 
               };
            }
            else
            {
               // 浏览器不支持 WebSocket
               alert("您的浏览器不支持 WebSocket!");
            }
         }
      </script>
   </head>
   <body>
      <div id="sse">
         <a href="javascript:WebSocketTest()">运行 WebSocket</a>
      </div>
   </body>
</html>
```