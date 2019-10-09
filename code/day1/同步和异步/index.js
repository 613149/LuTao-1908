function a(){
    console.log('a');
}

function b(callback){

    //一次性定时器
    setTimeout(()=>{
        console.log('b');
       
        setTimeout(()=>{
            console.log('c');
            setTimeout(()=>{
                console.log('d');
            },400)
        },1000)
    },1000)
}

b()
a()

// 回调让异步变得有意义
// 如果异步没回调，那有可能失去异步的结果
// 如果见到有回调函数，那一般这个函数是异步