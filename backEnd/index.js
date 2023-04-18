const express = require('express');
const cors =require('cors');
const { getAllProducts, postall,deletone,putone,searchProduct} = require('../backEnd/database/index');
const port = 5002;
const app = express()
app.use(express.json())
//uncomment to use mongodb
// const db = require('./mongoDb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());



app.get('/api/product',(req,res)=> {
   getAllProducts((err,results)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(results)
   }) 
})
  
app.post('/api/product/add',(req,res)=>{
    
  postall((err,results)=>{
   if(err) res.status(500).send(err)
   else res.status(200).send(results)
  },[req.body])
})

app.delete('/api/rent/delete/:id',(req,res)=>{
  deletone((err,results)=>{
   if(err) res.status(500).send(err)
   else res.status(200).send(results)
  },[req.params.id])
})

app.put('/api/rent/update/:id',(req,res)=>{
  putone((err,results)=>{
   if(err) res.status(500).send(err)
   else res.status(200).send(results)
  },[req.body],[req.params.id])
})
app.get('/api/search',(req,res)=>{
  const query=req.query.query
  console.log(query);
  searchProduct(query,(err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  })
  
})




app.listen(port, ()=>{
console.log(`listening on ${port}`);
})