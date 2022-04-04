const x = 'x';

function c(){
    const y = 'y';
    console.log('c function');
    // debugger; 로 브라우저에 있는 js Call Stack을 확인할 수 있음
}


function a(){
    const x  = 'x';
    console.log('a')
    function b(){
        const z = 'z';
        console.log('b');
        c();
    }
    b();
}

a();
c();

