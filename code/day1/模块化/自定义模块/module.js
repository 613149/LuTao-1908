//导入

const module2 = require('./module2.js')
const fn = require('./fn.js')

console.log(11);
module2()
console.log(fn.arr);

    //用exports导出  require导入代替script的模块规范