const util =require("util");

const obj = {
     name: 'zhangsan',
     age:26,
     married: false,
     getAge: function(){
         return this.age;
     }
}
//设置颜色显示 
const objStr= util.inspect(obj,{
    'colors':true
});
console.log(objStr);
