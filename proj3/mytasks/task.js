exp=require("express")
rt=exp.Router()
db=require("mongojs")
conn=db("mongodb://dattu:dattu123@ds121225.mlab.com:21225/user_tbl")
rt.get("/getData",function(req,res){
    conn.login_data.find(function(err,result){
        if(err){
            res.send(err)
        }
        else{ 
            
            res.json(result)}
    })
})
rt.post("/insert",function(req,res){
    conn.login_data.save(req.body)
})
rt.delete("/del",function(req,res){
    conn.login_data.remove()
})




module.exports=rt;