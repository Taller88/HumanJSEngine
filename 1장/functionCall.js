const add = (a,b)=>{ // 함수 선언
    return a+b;
} 

const add1 = (a,b) => a+b;


function calculator (func, a,b){
    return func(a,b);
}


const result = calculator(add1, 3, 5);
// const result = calculator(add1(3,5), 3, 5); --> add1(3,5) 함수 자리에 함수 호출을 넣는것

console.log(result);