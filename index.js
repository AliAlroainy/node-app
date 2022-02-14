const server = require('http');


const serverApp = server.createServer(
    (req,res)=>{
    // x request
    // y respons
    res.setHeader("contant","ali/html");
    res.statusCode=200;

    console.log("req");
    console.log(req.url);
    console.log("res");
    console.log(res.url);


 res.write("<h1> welcome to my App Ali </h1>");
 res.write(req.method);

 res.end();
}
);

serverApp.listen("3000");

console.log("server start");
