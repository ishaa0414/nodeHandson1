const http=require("http")
const app=http.createServer((request,response)=>{
if(request.url==='/'){
    response.write(JSON.stringify({message:"NODE JS-Node JS is an open source server that runs on different platforms like Windows,Linux,etc.It uses javascript on the server."}))
    response.end();
}
else if(request.url==='/about'){
    response.write("This is about page")
    response.end();   
}
else if(request.url==='/contact'){
    response.write("This is contact page")
    response.end();   
}
})
app.listen(2400,()=>{
    console.log("Server running")
})