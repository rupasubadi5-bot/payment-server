const express = require("express");
const app = express();

app.use(express.json());

let db = [];

app.post("/payment",(req,res)=>{
  db.push(req.body);
  res.send({ok:true});
});

app.get("/list",(req,res)=>{
  res.send(db);
});

app.post("/update",(req,res)=>{
  let {index,status}=req.body;
  db[index].status=status;
  res.send({ok:true});
});

app.listen(3000,()=>console.log("running"));
