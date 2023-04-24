const express = require ('express'); 
const mongoose = require('mongoose'); 
const app = express(); 
const ejs = require('ejs'); 

app.set('view engine', 'ejs'); 

 mongoose.connect('mongodb+srv://admin-brandon:test123@cluster0.7drueob.mongodb.net/Docket'); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')

})

 app.listen(4000, function(){

  console.log('server is running'); 
 })

