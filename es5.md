# JavaScript(ECMAScript5.1) 教程 
[链接](https://wangdoc.com/javascript/)


## 一 入门篇 

### 1 导论

1. 什么是javascript语言？
* 1.1 概述
   嵌入式embedded脚本(script language)语言  
   本身没有任何io， api 需要宿主host提供  
   常见宿主：浏览器、服务器、nodejs项目  

* 1.2 样式和构成
   js常用语数学和逻辑运算  
   是一种“对象模型”语言 但又支持其他编程范式-函数式编程  
   所以一个问题 往往有多个解决方法  

  构成：语法(操作符 控制结构 语句)、标准库(Array Date Math) 宿主Api 
  
* 1.3 浏览器api：  
   浏览器控制  
   DOM类：操作网页元素
   Web类：互联网功能

* 1.4 服务器宿主api：
   操作系统api：文件 网络


2. 为什么学习js？
   使用面广 浏览器占据日常交互大部分场合  
   nodejs项目丰富  语言本身一直在更新换代  

* 2.1 操控浏览器的能力  
  所有浏览器都只支持js 用于呈现效果或互动

* 2.2 广泛的使用领域  
* 2.2.1 浏览器平台化
    h5推动浏览器支持更多设备功能：本地文件 图片 摄像头 麦克风 振动
* 2.2.2 NodeJs
    可开发服务器和客户端
* 2.2.3 数据库操作
    NoSQL基于json扩张 运行js直接操作
* 2.2.4 移动平台开发
    传统：安卓java ios object-C swift  
    [PhoneGap](https://github.com/phonegap)让js和j5打包为容器 同时运行在ios和安卓  好像停更了
    facebook的react native 可将js写的逐渐编译为原生组件
    Firefox OS直接将js做完操作系统平台语言 可惜项目没成功
    google chrome os ？
* 2.2.5 内嵌脚本语言
    adobe的pdf  
    linux的gnome3
* 2.2.6 跨平台的桌面应用程序
    chrominum os
    [chorome app](https://developer.chrome.com/docs/apps/overview/)
    [electronjs](https://www.electronjs.org/)


* 2.3 易学性  
    环境简单：浏览器 无需ide
    js本身语法简单 但是语言本身有缺陷  
  缺点：  
    扩张出：coffescript typescript dart
    大量外部api 五花八门 数量庞大

* 2.4 强大的性能
    语法灵活 表达力强：支持c的过程式编程 支持函数式编程  
    所有值都是对象 带来灵活和便利  
    解释型语言  
    webassembly为js的中间码格式 二进制代码  
    支持别的语言c/c++ 通过编译为wasm 在浏览器运行  
    采用事件驱动 而非阻塞式  
    服务器端适合高并发

* 2.5 开放性
    ECMA-262国际标准  
    主要实现v8和spidermonkey都是开源引擎  
    所有浏览器都支持 兼容性好

* 2.6 社区支持和就业机会
  


3. 实验环境
    chrome浏览器 ctrl+shift+j 或者 F12 开启控制台  
    可以直接在console输入代码  



### 2. js的历史

#### 2.1 诞生
* 1990年 欧洲核能研究组织CERN 科学家在互联网上发明了万维网World Wide Web  最初只能在终端里浏览 用命令行操作  
* 1992年 美国国家超级电脑应用中心NCSA 开发了一个独立的浏览器Mosaic 人类第一个浏览器 网页可在图形界面上浏览
* 1994年10月 NCSA的一个程序员Marc Andreessen 找到风头Jim Clark 成立了Mosaic通信公司 后改名为Netscape 开发新一代面向普通用户的浏览器Netscape Navigator
* 1994年12月 Navigator1.0 市场份额90%
* js诞生原因：网速慢 若用户信息填错 发到服务器 再发现就晚了。 浪费了服务器时间 浪费了传输相应时间。 所以想嵌入网页的脚本语言 来控制浏览器行为。在用户端完成部分简单的判断。
* 最初的设定：语法简单 易学 易部署 功能无需太强。正巧Sun公司推出的Java获得成功，Netscape公司打算合作一下，在浏览器中嵌入java小程序(java applet)。但对语言有争议，java太“重”，最后决定简化的语法，类java，而且浏览器也支持java，排除了当时流行的perl python tcl。
* 1995年 Netscape雇佣了程序员Brendan Eich开发这种网页脚本语言。这哥们有很强的函数式编程背景，希望以scheme语言(函数式编程lisp的一种分支)为蓝本。
* 1995年5月，只用了10天就设计完第一版，是一个大杂烩，语法来源很多：
    * a. 基础语法来源c和java
    * b. 数据结构借鉴java，将值分为原始值和对象两大类
    * c. 函数：借鉴scheme和awk，做完第一等公民，引入闭包
    * d. 原型继承模式：借鉴self语言(smalltalk的一种变种)
    * e. 正则表达式：借鉴perl
    * f. 字符串和数组：借鉴python
* 由于为了保持简单 又混杂了很多语法 留了一些坑：
    * a. 不支持块级作用域 模块 子类型，但可通过现有方式找到解决方案
    * b. 学习js 不仅仅语言本身 还要额外学 各种特殊情况的解决方案
    * c. js的编程风格：函数式和面向对象的混杂体

*　命名：Mocha　1995.9月改名LiveScript 12月改名JavaScript，在sun的允许下。而此时js和java已经没任何关系。后期想通过js作为胶水，让java可以运行在浏览器中，做完java语言的一种插件方式，最终还是失败了，js反而发扬光大。
* 1995.12.4 Netscape与Sun联合发布JavaScript，声称是java的补充，属于轻量级java，专门用来操作网页。
* 1996.3 Navigator2.0发布 正式内嵌js


#### 2.2 js和java的关系
    * js的基本语法和对象 借鉴了java的设计
    * js没有Java的静态类型和静态函数
    * js的函数基于原型对象prototype的继承链 更自由
    * js是解释执行动态语言 java是编译执行静态语言

#### 2.3 js和ECMAScript的关系
    * 1996.8 微软模型js 开发了一个类似的JScript的语言 内置于ie3.0 
    * 1996.11 Netscape决定将js提交给国际标准化组织ECMA(European Computer Manufacturers Association)来维护 来的抵抗微软 
    * 1997.7 ECMA发布262号文件 规定了浏览器脚本的语言标准1.0
    * ECMA用来标准化js的语法结构 其部署环境比如dom由其他标准制w3c组织

#### 2.4 js的版本
    * 1997.7 ECMAScript1.0
    * 1998.6 ECMAScript2.0
    * 1999.12 ECMAScript3.0
    * 2007.10 4.0 由于改动大 很多大公司反对
    * 2008.7 废弃了4.0版本 保留部分改善的功能 定义为3.1 后改名为5.0
    * 2009.12 5.0 新功能一分为二 新的特性定为js.next 后演变为6.0 更新的定为js.next.next
    * 2011.6 5.1 且成为iso国标到2012底 所有主流浏览器都支持
    * 2013.3 6.0 结案 不再加新功能 
    * 2013.12 6.0草案 12个月的讨论期
    * 2015.6 6.0正式发布 更名为ECMAScript2015 且规定每年一次版本 后面就有了2016 2017等版本

#### 2.5 周边大事记
    * 1996 样式表标准css1.0
    * 1997 dhtml(dynamic html)发布 允许动态改变网页内容 标志dom(document object model文档对象模型)模式正式应用
    * 1998 netscape开源浏览器 导致了Mozilla项目的诞生 几个月后美国在线AOL并购Netscape
    * 1999 ie5部署了XMLHttpRequest接口 运行js发出http请求 为了Ajax应用创造条件
    * 2000 KDE项目重写KHTMl 为后人WebKi他和Blink引擎打下基础
    * 2001 微软发布ie6 当时最先进的浏览器 统治整个市场多年
    * 2001 Douglas Crockford提出json格式 取代XML格式 进行服务器和网页数据交换 且js原生就支持
    * 2002 Mozilla发布1.0 后改名Firefox
    * 2003 苹果发布Safari1.0
    * 2004 google发布gmail 促成互联网应用程序的概念诞生
    * 2004 Dojo框架诞生 为不同浏览器提供统一接口 方便开发调用 标志js框架时代的到来
    * 2004 WHATWG组织成立 致力于加速html语言的标准进化
    * 2005 苹果在KHTML的基础上 创建了WebKit引擎
    * 2005 Ajax(Asynchronous JavaScript and XML)诞生 由Jesse James Garrett发明这个词汇  google maps大量采用改方法 促成web2.0时代的到来
    * 2005 Appache基金会发布CouchDB数据库 基于json格式 可用js函数定义视图和索引 本质上区别传统的关系数据库 标识NoSQL类型数据库的诞生
    * 2006 JQuery函数库诞生 作者John Resig  为操作网页DOM结构 提供了非常强大易用的接口  且让js的应用难度大大降低  推动了js的流行
    * 2006 微软ie7发布 重新开启浏览器的开发 距离6.0 5年
    * 2006 google推出google web tookit项目GWT 提供java编译成js的功能 开创其他语言转js的先河
    * 2007 Webkit引擎在iphone上应用，最初基于2000年KDE项目重写的KHTML引擎，2003年被苹果采用，2005年开源。标志着js开用在手机中得到应用。
    * 2007 Douglas Crockford发表《JavaScript:The good parts》 
    * 2008 V8引擎诞生 google为chrome浏览器而开发 目的让js运行得更快 提高了js的性能 推动语法的改进和标准化。而且v8是开源的 
    * 2009 Node.js诞生 创始人Ryan Dahl，标志着js可用于服务器端编程，前后端统一开发语言。并且nodejs可承受很大的并发量，支持大规模互联网应用。
    * 2009 Jeremy Ashkenas发布CoffeeScript 可转为js，但语法更简洁
    * 2009 PhoneGap项目诞生 将h5和js引入移动设备应用开发 主要针对ios android
    * 2009 chrome os发布 基于浏览器的操作系统 可用js编写应用程序 类似的还有Mozilla的Firefox OS
    * 2010 3个重要的项目诞生 NPM BackboneJS RequireJS 标志着js进入模块化开发的时代
    * 2011 window8发布 将js作为应用程序的开发语言之一 直接支持
    * 2011 google发布Dart语言 为了结束js在浏览器的垄断 提供了更合理 更强大的语法和功能。且在chormium浏览器内置了Dart虚拟机。Dart也可被编译成js程序运行
    * 2011 微软工程师Scott Hanselman提出js将是互联网的汇编语言 其他语言可被转化为js 在浏览器中运行
    * 2012 单页面应用程序框架崛起 AngularJS Ember项目诞生
    * 2012 微软发布TypeScript 是js的超级 支持所有js程序 新增了语法特性 为了开发大型程序而设计 被转译成js来运行
    * 2012 Mozilla基金提出asm.js规格 也是js的子集 特点：语法严格限定 可快速编译成良好的机器码。同时发起了Emscripten项目 将其他语言比如llvm的位代码转为js代码 来在浏览器中运行 大部分都是c/c++代码。LLJS项目 可将js转为c代码。共有40中语言支持转为js
    * 2013 Mozilla基金会发布Firefox OS操作系统 整个用户界面都是用js开发
    * 2013 ECMA推出json国标
    * 2013.5 facebook发布ui框架库react 引入了新的jsx语法 使得ui成可以用组件开发 引入网页应用状态机概念
    * 2014 微软推出js的windows库WinJS 标志微软的windows全面支持js
    * 2014.11 由于部分程序员对Joyent公司垄断Node项目 以及项目进展缓慢不满 一部分核心人员离职 成立io.js项目 更开发 更新更快。3个月后 Joyent公司宣布放弃对Node的控制 交给Node基金会 随后io.js宣布回归node 且合并两个项目
    * 2015.3 facebook发布react native项目，将react框架移植到手机端，可开发手机app。将js转为object-c 或java
    * 2015.4 Angular2.0 将基于TypeScript开发
    * 2015.5 Node模块数量成为所有语言之最
    * 2015.5 google发布Polymer1.0 目标将WebComponent组件应用与项目中 
    * 2015.6 ECMAScript6发布 也称为ECMAScript2015 js正式成为企业级 大规模应用开发语言  这个标准用了10年才确定 js也诞生了20年
    * 2015.6 Mozilla在asm.js的基础上 发布了WebAssembly项目 是一种js引擎的中间码格式 全部都是二进制 类似java的字节码 速度可提高20倍  意味着将来的软件会发js的二进制包
    * 2016.6 ECMAScript2016标准  只加了两个小特性
    * 2017.6 ECMA2017标准 引入async函数
    * 2017.11 所有主流浏览器都支持WebAssembly 意味着任何语言都可编译成js在浏览器运行

#### 2.6参考
  [链接1](https://www.oreilly.com/library/view/the-past-present/9781449343545/) 
  [链接2](http://creativejs.com/2013/06/the-race-for-speed-part-4-the-future-for-javascript/) 
  [链接3](https://2ality.com/2013/06/basic-javascript.html) 
  [链接4](https://www.balena.io/blog/happy-18th-birthday-javascript/)



### 3 基本语法

#### 3.1 语句
1. js的执行单位：行   
    语句statement：为了某种任务的操作 以;结尾。 赋值语句 var a = 1+3;
    表达式expression：返回值的计算式 1+3  
    一行可有多个语句


#### 3.2 变量
1. 概念：对值的具名引用  var a = 1;
    只声明没赋值：默认undefined 表示无定义
    不带var 会产生全局变量  
    未声明直接用 会报错：x is not defined
    可同时声明多个变量  var a,b;  
    js是动态类型语言 变量类型没限制 且可中途修改  
    不可重复定义变量  
2. 变量的提升  
    js引擎执行时 先解析代码 获得所有变量 再逐行执行  
    导致所有变量声明被提升到代码头部 也叫变量提升hoisting
    ```
    console.log(a);
    var a = 1;
    -----
    不会报错 但会变成 =》
    var a;
    console.log(a);  得到undefined
    a = 1;
    ```


#### 3.3标识符identifier
    用来识别各种值的合法名称 最常用就是变量名 函数名  
    大小写敏感  
    第一个字符：可以是任意unicode字母(英文字母+其他语言的字母 比如π)、美元、下划线
    第二个字符和后续：额外+数字  
    中文名是合法的标识符(注意：文件需要utf8格式)  
    保留字不能用于标识符  
```
    arguments       
    const var let void delete new false true null undefined
    import export eval with throw package
    enum function yield async await
    if else switch case default
    do while for in of break return continue
    try catch finally 
    typeof instanceof
    public protected private static
    class this extends implements interface super
    debugger 
```

#### 3.4 注释
    单行：//
    多行: /*  */
    历史兼容html <!--  -->只能在新行首

#### 3.5 区块 block {}
    注意：对var function名无效  
    一般用于复杂语法结构组成部分 for if while function  
    switch case内对部分混淆工具有效 可防止变量名和外部冲突  

#### 3.6 条件语句
    if结构  注意内部用== 而非= 得到一个布尔值  
    switch 结构  内部采用===做严格判断   
    三元运算符  ?:  

#### 3.7 循环语句
    while {}  
    do {} while();  
    for (initialize;condition test;increment)
    break continue  
    标签label 相当于定位符 用于跳转 可用于break continue跳出当前的循环 到外层   
```
    top:
    for(var i = 0; ...)
        for (var j = 0; ..)
            if (i==1) break top;  跳出两层循环
            if (i==2) continue top: 跳出当前层 继续上一层循环


    top: {
        ....
        break top;  跳出本块
    }

```

#### 3.8 参考链接
  [链接1](https://2ality.com/2013/06/basic-javascript.html)







## 二 数据类型


### 2.1 概述
1. 简介：  
    js的每一个值都是一种数据类型 共6种 es6新增了Symbol类型  
    * 数值number：整数 小数
    * 字符串string：文本
    * 布尔值boolean：true false
    * undefined：未定义  是一种类型 本身没任何值
    * null：并非类型之一 某一特定值的object对象 表示空值 类似c中的NULL
    * 函数function： 是一种类型 可赋值 为函数式编程奠定了基础
    * object：对象 值组成的集合 数组array也算对象 {} []  
null最初1995第一版中没有 只当作object的一种特殊值，后来null独立作为一种单独的数据类型，为了兼容旧代码，typeof null返回object不变


2. typeof运算符  
    3种方法确定值的类型：  
    * typeof:得到 number string boolean function undefined object
    * instanceof
    * Object.prototype.toString
[参考链接](http://www.2ality.com/2011/11/improving-typeof.html)


### 2.2 null undefined boolean
1. 概述  
    null和undefined都可以表示“空”  
    变量定义和if判断上 没啥区别 都会自动转换为false 
    且 undefined == null  但是 undefined !== null  
    js的代替品Dart就取消了undefined  

    早期js只有null 表示“无” 根据c语言传统 可自动转换为0  
    Number(null) == 0  
    5 + null = 5  

    后来作者Brendan Eich决定null当作对象的特殊值 并不能很好体现“无”   
    其次 那是js不含错误处理机制 转为0 不容易发现问题  
    所以加了undefined  

2. 区别  
    * null 表示“空”对象 可转为0  是一种特殊对象
    * undefined表示“未定义” 可转为数值NaN  是一种数据类型

3. boolean  
    只有true和false  
    特殊的自动转换 false：  
      * undefined
      * null
      * 0
      * NaN
      * ""  ''
    其他情况都为true




### 2.3 数值



### 2.4 字符串


### 2.5 对象




### 2.6 函数



### 2.7 数组







## 七 异步操作

### 7.1 概述
1. 单线程模型
    js在单线程上运行 早期是避免浏览器太复杂 避开共享资源 资源锁问题  
    优点：实现简单  
    缺点：重任务会拖累相应时间 导致页面和渲染卡顿  
      js本身不慢 慢的是读写外部数据 io 网络收发  
    注意：js引擎是多线程的

    * 事件循环机制：为了加快执行速度 避免等待io 先执行队列后续任务  
    * web worker：h5扩展的多线程功能 创建多个子线程 但不能操作dom  
            只有部分功能 比如：并行运算

2. 同步和异步任务
    同步任务：不会被引擎挂起 顺序执行 等前一个执行完毕  
    异步任务：执行后被引擎挂起 继续后续任务 等待某个时机 采用回调函数方式重新激活进入主线程执行  

3. 任务队列和事件循环
    js主线程运行同步任务 引擎同时维护了多个异步任务队列(根据类型)  
    单同步任务执行完毕时 会去检查异步队列 若满足条件 就转移的到同步任务中执行(通过回调函数方式 若无回调也不会进入异步任务)  
    这个不断检测的过程就叫事件循环

4. 异步操作的模式
    * 4.1 回调函数
        优点：主流程清晰 简单
        缺点：高耦合 多嵌套易使程序结构混乱
    * 4.2 事件监听
        优点：弱耦合 易理解 可多个回调  
        缺点：运行流程不清晰 难以看出主流程  
    * 4.3 发布/订阅 (观察者模式)
        事件的特殊版本 有个中心负责订阅和转发  
        优点：通过查看中心 统计多个信号 多少订阅者 方便监控程序  
        缺点：容易让中心功能变得很杂 数量多了也有性能问题  

5. 异步操作的流程控制  
    * 5.1 多个异步串行执行 总时间不变  
        用一个数组存参数 另一个数组存结果  
        每次执行数组shfit一次 直到为空 表示结束 
    * 5.2 并行执行 时间取最长者  
        一次全部执行 还是通过收集回调的方式 来判断是否结束  
    * 5.3 并行和串行结合 设置最大并行数 防止占用太多资源

### 7.2 定时器
1. setTimeout(f, time, ...args)
    n毫秒后执行(默认0秒) 返回定时器id  
    可传回调函数的参数  
    注意：函数执行的环境是全局环境 可通过bind解决

2. setInterval
    使用同上 无限次执行  
    注意：时间按本次执行开始计算 若函数本身占用的时间比较多  
    则下次执行速度会加快 可通过结束时调用wetTimeout来保证   
    两次执行的时间间隔  

3. clearTimeout clearInterval
4. 案例：debounce函数 防抖动 用定时器限制连续执行的节奏 
5. 运行机制    
    移到异步任务中 等待本轮同步任务执行完毕 下一轮事件循环前期 再开始判断  

6. setTimeout(f,0)
   * 6.1 含义：本轮同步任务结束后执行  
        实际不止0ms 比如edge充电时16ms 非当前tab 1000ms  
    * 6.2 应用：调整顺序 尤其在事件链上  
            分批执行 尤其改变dom元素 



### 7.3 Promise对象

1. 概述
    js的异步解决方案 统一异步操作接口 起到异步与回调的中介代理作用  
    设计思想：所有异步任务都返回一个Promise实例 每个实例都有一个then方法 来制定下一步的回调函数  
    ```
    new Promise(step1)
        .then(step2)
        .then(step3)
    ```

2. Promise对象的状态
    3种状态：  
    * pending 未完成
    * fulfilled 成功
    * rejected 失败
    后两者合并就叫resolved已定型  
    状态改变只有两种 一旦确定无法改变 只会发生一次

3. Promise构造函数
    成功：传回一个值  fulfilled
    失败：抛出一个错误 rejected
    ```
    new Promise((resolve, reject) {
        if (成功)
            resolve(value)
        else 
            reject(new Error())
    })
    ```

4. Promise.prototype.then()
    成功和失败的两个回调  

    ```
    p.then(console.log, console.error)
    ```
    then链：状态会往后传递
5. then()用法
    ```
    p.then(function () {
        return f2()
    }).then(console.log)  得到f2的返回值

    p.then(function () {
        return f2()
    }).then(console.log)  得到undefined

    p.then(f2()).then(console.log) 得到f2的返回值

    p.then(f2).then(console.log)  f2会得到p中resolve值
    ```

6. 实例：图片加载
    ```
    var preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload  = resolve;
        image.onerror = reject;
        image.src = path;
    });
    };

    preloadImage('https://example.com/my.jpg')
        .then(function (e) { document.body.append(e.target) })
        .then(function () { console.log('加载成功') })
    ```

7. 小结
    优点：回调转为规范的链式写法 流程更清晰  
        状态缺点后永不改变 任何时候都可再次then获得调用  
        不会像事件一样错过发送的时机  
    缺点：写法 理解 更难  

8. 微任务
    内部的所有回调都是异步任务 除了构造函数 立刻执行属于同步任务  
    ```
    new Promise(function (resolve, reject) {
        log(1)
        resolve(3);
    }).then(console.log);  异步任务

    console.log(2);
    得到：1 2 3
    ```
    区别于普通异步 属于微任务microtask 在本轮事件循环 同步任务后执行
    常规的异步在下一轮事件循环的开始执行

9.  参考链接
[Sebastian Porto](https://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/)
[Rhys Brett-Bowen, Promises/A+ - understanding the spec through implementation](https://modernjavascript.blogspot.com/2013/08/promisesa-understanding-by-doing.html)
[Marc Harter, Promise A+ Implementation](https://gist.github.com//wavded/5692344)
[Bryan Klimt, What’s so great about JavaScript Promises?](https://blog.parseplatform.org/)
[Jake Archibald, JavaScript Promises There and back again](https://web.dev/learn/)
[Mikito Takada, 7. Control flow, Mixu's Node book](http://book.mixu.net/node/ch7.html)



















