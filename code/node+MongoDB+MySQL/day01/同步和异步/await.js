

function a(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(a);
            resolve()
        },1000)
    })
}


function b(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(b);
            resolve()
        },1000)
    })
}



function c(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(c);
            resolve()
        },1000)
    })
}

console.log(0);

;(async() =>{
    //先await哪个函数就先执行哪个
    await b();
    await a();
    await c();
})()

console.log(1);