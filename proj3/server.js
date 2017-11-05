var exp=require("express")
var parser=require("body-parser")
var tsk=require("./mytasks/task.js")
var app=exp()
app.use(parser.json())
app.use("/api",tsk)
app.listen(4000,)
app.use(fun)
function fun(req,res){
    res.sendFile(__dirname+"/index.html")
}
console.log("server started at port no: 4000 ")