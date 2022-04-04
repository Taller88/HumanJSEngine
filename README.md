# HumanJSEngine
JS의 특징과 동작원리를 이해하고 공부하는 respository
'제로초' 유튜브 강의를 보고 정리하는 respository


### [1-1] 함수 선언과 함수 호출의 차이 

https://www.youtube.com/watch?v=NS1cIsWlFGI

```javascript

const add = (a,b)=>{ // 함수 선언
    return a+b;
} 

const add1 = (a,b) => a+b;// 선언


function calculator (func, a,b){// 선언
    return func(a,b);
}

const test = ()=>()=>{} // 고차원함수 

const result = calculator(add1, 3, 5);
// const result = calculator(add1(3,5), 3, 5); --> add1(3,5) 함수 자리에 함수 호출을 넣는것

console.log(result);

```


### [1-3] 호출 스택 이해하기 

말그대로 호출 스택은 함수가 호출되었을때 호출 스택에 함수를 담는다.
쉽게 생각해서 위에서 아래로 선언부는 생략 호출되었을 때만 호출 스택에 담고 실행한다. 



![image](https://user-images.githubusercontent.com/48818574/161561989-1d91f16a-2a70-4b11-a853-a5c524848f59.png)
```javascript

const add = (a,b)=>{ // 함수 선언
    return a+b;
} 

const add1 = (a,b) => a+b;// 선언


function calculator (func, a,b){// 선언
    return func(a,b);
}

const test = ()=>()=>{} // 고차원함수 

const result = calculator(add1, 3, 5);
// const result = calculator(add1(3,5), 3, 5); --> add1(3,5) 함수 자리에 함수 호출을 넣는것

console.log(result);

```



### [2-1] Promise 이해하기 

ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스 기반으로 재구성되며 악명 높은 콜백 지옥을 극복했다는 평가를 받고 있다. 
강사님이 말씀하시는 Promise의 가장 큰 장점은 실행은 바로 하되 나중에 결과를 받을 수 있는 점이다. 
이를 통해 callback지옥을 해결했다는 평을 받은 것 같다..
아래 코드를 보자.


```javascript

const condition = true;
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }
    else{
        reject('실패');
    }
})
// 딴짓..
// 딴짓..
// 딴짓..

promise.then((msg)=>{
    console.log(msg);// 성공
}).catch((err)=>{
    console.log(err)//실패
});

```

간단하게 Promise객체 안에서 resolve가 호출 되면 .then()이, reject가 호출되면 catch문으로 이동하게 된다. 


정말 아쉬웠던 코드 ..

```javascript 
 const promises = [];
 for(var i = 0; i<urlList.length; i++){
     promises.push(axios.get("http://www.*******.co.kr" + urlList[i]));
 }

 const asyncResult =await Promise.all(promises);
```

강의를 보면서 굉장히 찔렸던 부분.. 나혼자 async/await쓰다가 Promise.all을 써서 속도가 굉장히 빨라졌다고 신났었다. 근데 Promise.all은 하나의 인스턴스가 에러를 보내도 전부 catch문으로 이동한다. 해서 JS개발자들이 새로 만든 함수가 allsettled이다. 아직 안써봐서 정확히 모르겠지만 하나가 에러나더라도 어느 인덱스에서 에러가 났는지 알려주고 다른 인스턴스에 영향을 안준다고 한다... 좀만 강의를 빨리 봤더라면.. 아니면 이전꺼라도 좀 더 집중하고 볼껄...ㅜㅜ 
