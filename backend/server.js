const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

let posts=[{id:1,title:'Welcome',content:'First blog'}];
let comments=[];

app.get('/posts',(req,res)=>res.json(posts));

app.post('/posts',(req,res)=>{
const p={id:Date.now(),...req.body};
posts.push(p);
res.json(p);
});

app.post('/comments',(req,res)=>{
comments.push(req.body);
res.json({message:'Comment added'});
});

app.listen(3000,()=>console.log('Server running'));
