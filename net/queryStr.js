
const queryString = require("querystring");

let originalStr = "name=iriwen&address=hangzhou";

let parsedUrlQuery = queryString.parse(originalStr);

console.log(parsedUrlQuery);

const obj ={
    'name':'zhangsan',
    'sex':'man'
}
const res = queryString.stringify(obj);
console.log(res);
