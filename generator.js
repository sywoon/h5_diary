log = console.log


{  //延迟执行
    function* f() {
      console.log('执行了！')
    }

    var generator = f();

    setTimeout(function () {
      generator.next()
    }, 1000)
}


{
    var myIterable = {};
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    log([...myIterable]) // [1, 2, 3]
}


{
    function* foo() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      return 6;
    }

    for (let v of foo()) {
      console.log(v);
    }
}


{  //斐波那契数列  代码很精炼
    function* fibonacci() {
      let [prev, curr] = [0, 1];
      for (;;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
      }
    }

    for (let n of fibonacci()) {
      if (n > 1000) break;
      console.log(n);
    }
}


{  //遍历对象 使用for ... of
    function* objectEntries(obj) {
      let propKeys = Reflect.ownKeys(obj);

      for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
      }
    }

    let jane = { first: 'Jane', last: 'Doe' };

    for (let [key, value] of objectEntries(jane)) {
      console.log(`${key}: ${value}`);
    }
    // first: Jane
    // last: Doe
}



{
    var g = function* () {
      try {
        yield;
      } catch (e) {
        console.log('内部捕获', e);
      }
    };

    var i = g();
    i.next();

    try {
      i.throw('a');
      i.throw('b');
    } catch (e) {
      console.log('外部捕获', e);
    }
    // 内部捕获 a
    // 外部捕获 b
}


{  //提前终结
    function* gen() {
      yield 1;
      yield 2;
      yield 3;
    }

    var g = gen();

    g.next()        // { value: 1, done: false }
    g.return('foo') // { value: "foo", done: true }
    g.next()        // { value: undefined, done: true }
}



{
    function* g() {}

    g.prototype.hello = function () {
      return 'hi!';
    };

    let obj = g();

    obj instanceof g // true
    obj.hello() // 'hi!'
}





























