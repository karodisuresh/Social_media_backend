const express = require('express');
const mongoose =require('mongoose');

async function connectMongoDB(){
try{
    let mongoURI
    if (process.env.NODE_ENV === 'production') {
        mongoURI = process.env.MONGODB_URI_PROD;
        console.log(mongoURI)
    } else {
        mongoURI = process.env.MONGODB_URI_PROD;
    }
    await mongoose.connect(mongoURI,{
        // useNewParsers: true,
        // useUndefinedTopology: true
    })
    console.log('connect success to mongodb')
}catch(err){
    console.log('connect is failed  to mongodb ',err)
}

}


module.exports = connectMongoDB;