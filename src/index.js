const express = require('express');
// const bodyParser = require('body-parser');
const app = require(express);
const PORT = process.env.PORT;

// //middleware
// app.use(bodyParser.json());

//routes
app.get('/:brendaniscool', (req,res)=> {
    const param = req.param.brendaniscool;
    const paramRev = param.split('').reverse().join('');
    res.send(paramRev);
});


//port
app.listen( PORT, () =>{
    console.log('Now listening on port ' + PORT);
});