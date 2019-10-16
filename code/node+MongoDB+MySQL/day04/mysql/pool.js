var mysql = require('mysql');
var config = require('./config')
var pool = mysql.createPool({
    connectionLimit: 10,
    ...config
});


let sql = (sql) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            //可以去掉链接和关闭 
            connection.query('SELECT * FROM students', function (error, results, fields) {
                if (error){
                    throw error;
                    reject(error);
                }else{
                    resolve(results);
                }
                  
                connection.release();
                // console.log(results[0]);
            });
        }); 
    })
}