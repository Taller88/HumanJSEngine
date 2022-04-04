# HumanJSEngine
JS의 특징과 동작원리를 이해하고 공부하는 respository
'제로초' 유튜브 강의를 보고 정리하는 respository


[1-1] 함수 선언과 함수 호출의 차이 
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


[1-2] 호출 스택 이해하기 

말그대로 호출 스택은 함수가 호출되었을때 호출 스택에 함수를 담는다.
쉽게 생각해서 위에서 아래로 선언부는 생략 호출되었을 때만 호출 스택에 담고 실행한다. 



![image](https://user-images.githubusercontent.com/48818574/161561989-1d91f16a-2a70-4b11-a853-a5c524848f59.png)


