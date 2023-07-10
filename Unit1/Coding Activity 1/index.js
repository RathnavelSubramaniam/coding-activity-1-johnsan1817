const express = require('express');
const app = express();
const port = 2023;

app.get ('/',(req,res)=>{
    res.send ('Hello World!')
})

app.get ('/data',(req,res)=>{
res.send("Hello World with Data!")
})

app.listen(port,()=>{
    console.log('Example app listening on port ${port}')
})


