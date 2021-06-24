const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute.js');
const postRoute = require('./routes/postRoute.js');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/',  (req,res)=>{
    
    res.send('BlogApp');
});

app.use('/user',userRoute);
app.use('/post',postRoute);



app.listen(5000,()=>{
    console.log('Server connected at localhost:5000/ port');
})

