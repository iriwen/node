//node操作文件都是通过原生模块fs实现的，fs中的多数api来说，node都提供了同步和异步两个版本
// xxxsync 是同步方法
const fs = require('fs');
fs.readFile('package2.json', 'utf-8',  (error, data)=> {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});