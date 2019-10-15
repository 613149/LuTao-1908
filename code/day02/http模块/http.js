const http = require('http')
// console.log(http)
//创建服务器,并公开一个端口，让外部访问
//请求request 请求头和请求体 前端给我的
//响应response 响应头和响应体 后端给前端  
http.createServer((request,response)=>{
    //前端带给后端的请求参数
    console.log(request);
    //cors允许跨域           
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头 cookie 后端一般比较少去改头部
    response.setHeader('set-cookie','name=yao')
    response.statusCode = 404 ;
    //响应体
    response.write('hello world')
    response.end()
}).listen(12345)
console.log('启动服务器');
// 0~65535