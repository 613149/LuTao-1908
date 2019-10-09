function a() {
    /*Promise有两个参数，他们都是一个函数 
    如果执行成功就调用resolve  失败就调用reject*/
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve()
        }, 5000)
    })
}

function b() {
    /*Promise有两个参数，他们都是一个函数 
    如果执行成功就调用resolve  失败就调用reject*/
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve()
        }, 1000)
    })
}


function c() {
    /*Promise有两个参数，他们都是一个函数 
    如果执行成功就调用resolve  失败就调用reject*/
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c');
            resolve()
        }, 3000)
    })
}

/*因为异步不是按顺序执行的，如果你想让他们按顺序执行
    用.then()方法可以随心所欲的让它们按顺序执行
     这里是执行完a后 再执行b 最后再执行c
*/
a.then(b).then(c)