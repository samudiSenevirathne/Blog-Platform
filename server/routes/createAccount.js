const express = require('express');
const router = express.Router();

router.post('/createAccountSubmit',function (req,res,next){
    const requestData = req.body;
    console.log(requestData);
    res.send('Create Account Successfully');
    })

module.exports=router;