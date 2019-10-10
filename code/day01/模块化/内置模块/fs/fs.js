//使用第三方模块 引入fs文件模块
const fs = require('fs');2
    //gulp把文件读取出来，然后修改，最后再写回去
// console.log(fs);
//读取文件
function readFile(){
    return new Promise((resolve,reject) =>{
            //读取
        fs.readFile('./index.js',(err,data) =>{
                //如果错误 就阻止程序的运行 把错误消息打到控制台
            if(err) throw err;
                //读出来的是二进制
            let code = data.toString();
          console.log(code);

                //正则匹配修改
            let output = code
            .replace(/console.log\([a-z0-9(0-9)]+\)/g,'')
            .replace(/const/g,'var')
            console.log(output);

            //把结果交给下一个Promise
            resolve(output)
        })
    })
}

        //把修改后的代码写入到另一个文件里
   function writeFile(output){
       return new Promise((resolve,reject) =>{
            fs.writeFile('./output.js',output,(err) =>{
                //err 如果错误 就阻止程序的运行 把错误消息打到控制台
                if(err) throw err;
                console.log('写入成功');
            })
       })
   }

        //Promise执行顺序
//    readFile().then(writeFile);

        //async await执行
   ;(async () =>{
       let output = await readFile()
       await writeFile(output)
   })()
