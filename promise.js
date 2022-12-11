//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
log = console.log


{
    const promise = new Promise(function (resolve, reject) {  //该函数立刻执行
        if (true) {
            log("resolve")
            resolve(11)  //通过函数参数传值出去 会先存起来等下帧
        } else {
            log("reject")
            reject("err find")
        }
        log("return in promise")  //注意前面的resolve和reject操作 不会终结该函数的执行
    }).then(
        function (v) {
            log("resolve2", v)  //v:11
        }, function (err) {
            log("reject", err)  //"err find"
        }
    )

    log("hi")  //注意顺序 比promise的构造晚 比then早
}


{
    const p1 = new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('fail')), 3000)
    })

    const p2 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve(p1), 1000)  //若返回一个其他promise对象 本内状态会被废弃 用其他对象代替
    })

    p2.then(
            result => console.log(result),
            err => { console.log("rejected", err); new Error("rejected err")//无效 },
        )
      .catch(error => console.log("catch", error))
}



{  //案例1 异步加载图片
//分析：
//  a new promise的主函数 立刻new Image对象 通过.src=url来异步加载
//  b 加载回调onload onerror内通过resolve和reject 分别将成功和失败情况传出
//  c 由于函数返回promise实例 外部通过.then来获取下载后的图片对象
    function loadImageAsync(url) {
      return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
          resolve(image);
        };

        image.onerror = function() {
          reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
      });
    }
}


{  //案例2：Ajax封装的http调用
//  a、 立刻new Promise 主函数内new XMLHttpRequest对象 设置参数后send()
//  b、 通过onreadystatechange回调函数 得到http结果 并通过resolve和reject传出
//  c、 外部通过then函数获取下载的json内容 or 错误信息
    
    const getJSON = function(url) {
      const promise = new Promise(function(resolve, reject){
        const handler = function() {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        };
        //const client = new XMLHttpRequest();  //nodejs安装了xmlhttprequest后还是不行
        //client.open("GET", url);
        //client.onreadystatechange = handler;
        //client.responseType = "json";
        //client.setRequestHeader("Accept", "application/json");
        //client.send();

      });

      return promise;
    };

    getJSON("/posts.json").then(function(json) {
      console.log('Contents: ' + json);
    }, function(error) {
      console.error('出错了', error);
    });
}








