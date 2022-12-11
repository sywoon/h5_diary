//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
log = console.log


{
    const promise = new Promise(function (resolve, reject) {  //�ú�������ִ��
        if (true) {
            log("resolve")
            resolve(11)  //ͨ������������ֵ��ȥ ���ȴ���������֡
        } else {
            log("reject")
            reject("err find")
        }
        log("return in promise")  //ע��ǰ���resolve��reject���� �����ս�ú�����ִ��
    }).then(
        function (v) {
            log("resolve2", v)  //v:11
        }, function (err) {
            log("reject", err)  //"err find"
        }
    )

    log("hi")  //ע��˳�� ��promise�Ĺ����� ��then��
}


{
    const p1 = new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('fail')), 3000)
    })

    const p2 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve(p1), 1000)  //������һ������promise���� ����״̬�ᱻ���� �������������
    })

    p2.then(
            result => console.log(result),
            err => { console.log("rejected", err); new Error("rejected err")//��Ч },
        )
      .catch(error => console.log("catch", error))
}



{  //����1 �첽����ͼƬ
//������
//  a new promise�������� ����new Image���� ͨ��.src=url���첽����
//  b ���ػص�onload onerror��ͨ��resolve��reject �ֱ𽫳ɹ���ʧ���������
//  c ���ں�������promiseʵ�� �ⲿͨ��.then����ȡ���غ��ͼƬ����
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


{  //����2��Ajax��װ��http����
//  a�� ����new Promise ��������new XMLHttpRequest���� ���ò�����send()
//  b�� ͨ��onreadystatechange�ص����� �õ�http��� ��ͨ��resolve��reject����
//  c�� �ⲿͨ��then������ȡ���ص�json���� or ������Ϣ
    
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
        //const client = new XMLHttpRequest();  //nodejs��װ��xmlhttprequest���ǲ���
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
      console.error('������', error);
    });
}








