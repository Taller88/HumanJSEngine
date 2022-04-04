// 프로미스 정의 
// 실행됐는데 결과값을 나중에 받는다. 

// 비동기 콜백
setTimeout(()=>{
    console.log('a')
},1000);


const p1 = axios.get('서버주소1');
const p2 = axios.get('서버주소2');
const p3 = axios.get('서버주소3');
const p4 = axios.get('서버주소4');
const p5 = axios.get('서버주소5');
const p6 = axios.get('서버주소6');
const p7 = axios.get('서버주소7');


// 하나라도 에러나면 catch로 이동 -> 몇번째에서 실패했는지 모름
Promise.all([p1,p2,p3,p4,p5,p6]).then((results)=>{}).catch((err)=>{});

// 각각 Promise 인스턴스의 결과값을 알 수 잇음 -> 실패한 것만 필터링해서 다시 시도
Promise.allSettled([p1,p2,p3,p4,p5,p6]).then((results)=>{}).catch((err)=>{}).finally(()=>{});
