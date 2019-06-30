let http = require("http");
let fs = require("fs");
let url = require("url");
let sliders = require("./index.js");

function read(cb){
    fs.readFile("./book.json","utf8",(err,data)=>{
        if(err || data.length === 0){
            console.log("读文件出错");
            cb([]);
        }else{
            cb(JSON.parse(data));
        }   
    });
}

http.createServer((req,res)=>{
  // console.log(url.parse(req.url)); 
    let {pathname,query} = url.parse(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    if(pathname == "/sliders"){
        res.setHeader("Content-Type","application/json;charset=utf8");
        res.end(JSON.stringify(sliders));
    }
    if(pathname == "/hotBooks"){
        read(function(books){
            books = books.reverse().slice(0,6);
            res.end(JSON.stringify(books));
        });
    }

    if(pathname == "/allBooks"){
        read(function(books){
            res.end(JSON.stringify(books));
        });
    }
}).listen(4000);