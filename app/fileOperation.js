//node操作文件都是通过原生模块fs实现的，fs中的多数api来说，node都提供了同步和异步两个版本
<<<<<<< HEAD
// xxxsync 是同步方法
const fs = require('fs');
fs.readFile('package2.json', 'utf-8',  (error, data)=> {
=======
// xxxsync 是同步方法，不加sync是异步的方式，尽可能使用异步版本
const fs = require('fs');
const path = require('path');

const filePath = path.join("/home","worker","fs");

console.log(filePath);

fs.open('nodetest.txt', 'r+', (error, fd) => {
    if (error) {
        console.log("open file error occured !");
    }
    fs.close(fd, (error) => {
        if (error) {
            console.log(error);
        }
        console.log("file closed !");
    });
});

//读取文件
fs.readFile('package2.json', 'utf-8', (error, data) => {

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

//同步方式
try {
    const fileData = fs.readFile('package3.json', 'utf-8');
    console.log(fileData);
} catch (e) {
    console.log(e);
}

//追加写入
fs.writeFile('nodetest.txt', "nodejs write\n", { flag: 'a' }, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("append successful !");
    }
});
//重命名
fs.rename('nodetest.txt', "node_test2.txt", (error) => {
    if (error) {
        throw error;
    }
    console.log("rename successful !") ;
    //执行时机
    fs.stat('node_test2.txt',(error,stats)=>{
       if(error){
           throw error;
       }
       console.log(JSON.stringify(stats)) ;
    });

});

//删除
fs.unlink('nodetest.txt', (error) => {
    if (error) {
        throw error;
    }
    console.log("removed !");
})
>>>>>>> master
