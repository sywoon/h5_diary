# JavaScript(ECMAScript6) 入门 
[链接](https://es6.ruanyifeng.com/#README)


## 一 前言 



## 二 ECMAScript6简介

### 1 ECMAScript和JavaScript的关系



## 十七 Promise对象

### 1. Promise的含义


### 2. 基本用法


### 3. Promise.prototype.then()


### 4. Promise.prototype.catch()

### 5. Promise.prototype.finally()

### 6. Promise.all()

### 7. Promise.race()

### 8. Promise.allSettled()

### 9. Promise.any()

### 10. Promise.resolve()

### 11. Promise.reject()

### 12. 应用

### 13. Promise.try()





## 十八 Iterator 和 for ... of


## 十九 Generator函数的语法
### 1. 简介
    一种es6提供的异步编程方案 与传统函数有很大的不同  
    是一个状态机+遍历器生成函数  
    第一调用得到一个遍历器 后续next调用得到yield和return后的内容  
    返回值：{value:xxx, done:true}  
    next(...)可传参数给 上一个yield的位置  

    yield若在表达式中 需要加括号：  
    console.log('Hello' + (yield 123)); // OK

    yield可再次调用generator函数 需要带*
    yield* flat(item);

* 与Iterator的关系
    由于对象的symbol.iterator方法 等于该对象的遍历器生成函数  
    所以可以把Generator函数传给对象 使其可以被迭代
    ```
    var myIterable = {};
    myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
    };

    [...myIterable] // [1, 2, 3]
    ```


### 2. next方法的参数
    yield表达式本身没有返回值 但是可以通过next带参数 来作为yield表达式的返回值 类似lua的协程
    注意：第一个next的参数无效 因为第一次是起调函数 而函数参数是在创建迭代器时传入的  

### 3. for ... of
    可遍历Generator生成的Iterator对象 无需next调用

### 4. Generator.prototype.throw()
    函数体外抛出错误 函数内捕获
    如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错

### 5. Generator.prototype.return()
    返回给定的值 终结遍历函数

### 6. next throw return的共同点
    都是替换yield函数 内容不同：值 throw return

### 7. yield* 表达式
    为了自动遍历另一个generator函数

### 8. 作为对象属性的Generator函数
### 9. Generator函数的this
    实例继承函数的prototype对象的方法 但是不能得到属性值
    不能和new搭配使用  

### 10. 含义
    实现状态机
    
### 11. 应用



## 二十 Generator函数的异步应用
### 1. 传统方法
### 2. 基本概念
### 3. Generator函数
### 4. Thunk函数
### 5. co模块


## 二十一 async函数
### 1. 含义
### 2. 基本用法
### 3. 语法
### 4. async函数的实现原理
### 5. 与其他异步处理方法的比较
### 6. 实例：按顺序完成异步操作
### 7. 顶层await








