const url = require("url");

const urlStr = 'www.google.com?key=youtube';

const result = url.parse(urlStr);
console.log(result);

var urlObj = {
    protocol:"https",
    slashes:true,
    hostname:"www.qihu.com",
    pathname:"/teach/content.html"
};
console.log(url.format(urlObj));

