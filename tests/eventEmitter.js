const EventEmitter = require("events")
const http = require("http");
const { Serializer } = require("v8");
class SecureEvent extends EventEmitter{
    constructor(){
        super()
    }
}
const emt = new SecureEvent()

const server = http.createServer();

server.on("request",(req,res)=>{
   console.log("A request was Made")
   console.log("RequestURL = > ",req)
   res.writeHead(200,"OK",{ 'Content-Type': 'text/html' })
   res.write('<!DOCTYPE html><html lang="en">  <head>       <meta charset="UTF-8">        <meta name="viewport" content="width=device-width, initial-scale=1.0">        <title>Response-For-Your-Request</title>   </head>   <body>        <h1>           Ok 👍 Request received 😋       </h1>  </body> </html>')
   res.end()
})

 
server.on("close",()=>{
  console.log("Server was Closed Down !")
})

server.listen(8080,"127.0.0.1",()=>{
    console.log("Server Started Successfully")
})

