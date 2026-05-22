const express =require("express")
const app=express()

app.get('/',(req,res)=>{
res.send("Github actions ci/cd pipeline workflow");
});


app.listen(3000,()=>{
console.log("server listening on port 3000");
});

