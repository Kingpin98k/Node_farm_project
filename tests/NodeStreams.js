//Implementing the Streams
//In two ways :


const fs = require("fs")
const server = require("http").createServer()

server.on('request',(req,res)=>{
    //Creating a readStream from the file:
    const readable = fs.createReadStream("this_is_a_test.txt")

    //1: Using read and write
    // readable.on("data",(chunck)=>{
    //     res.write(chunck);
    // })
    // readable.on("end",()=>{
    //     res.end()
    // })
    // readable.on("error",(err)=>{
    //     console.log(err.message)
    //     res.statusCode=500;
    //     res.end("File Not Found Error !!")
    // })
    //2: Simpler Way which also Handles BackPressure as readStream reads data fatster the WriteStream can Consume the Data
    //So We use readstream.pipe(writestream)
    readable.pipe(res)
})

server.listen(8080,"127.0.0.1",()=>{
   console.log("Server Started Sexfully")
})