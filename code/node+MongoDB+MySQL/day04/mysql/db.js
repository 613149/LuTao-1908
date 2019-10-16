var mysql = require('mysql');
//初始化链接
var connection = mysql.createConnection({
    //域名
    host: '127.0.0.1',
    port: '',
    //用户名
    user: 'root',
    //密码
    password: '',
    //数据库
    database: '1908'
});

connection.connect();
connection.query('SELECT * FROM students',function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].name);
});
connection.end();

