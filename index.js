const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
// const path = require('path');
const add = require("./sum.js");  
const count = require("./countwords.js");

app.use(express.static('html/'));


app.listen(port, () =>{
    console.log(`Server Running on port ${port}`);
})