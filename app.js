let r = 200;
let g = 50;
let b = 0;

//homework

let html = `<!DOCTYPE html><html lang="en"></html>` 

const http = require("http")


http.createServer(function (req, res) 
{
    res.writeHead(200, {"Content-Type": "text/html"});                          //http header
    res.write("<h1>Hello World! This is my first server set up!<h1>");           //write respond to the client
    res.end();                                                                  // end the response
})
.listen(8080, function() 
{
    console.log("Server listening on 8080...");                                 //to print in terminal put: node server.js
});
