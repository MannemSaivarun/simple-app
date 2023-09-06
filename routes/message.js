const express = require('express');
const fs = require('fs');
const { setFlagsFromString } = require('v8');

const router = express.Router();

router.get('/', (req,res,next)=>{
    fs.readFile('writeMessage.txt',(err,data)=>{
        if(err){
            console.log(err)
        }
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')" ><input type="text" id='message' name="message" placeHolder="message"></input><input type="hidden" name="username" id="username"></input><button type="submit">Send</button></form>`)


    })
    
    })

router.post('/',(req,res,next)=>{
    
    fs.writeFile('writeMessage.txt', `${req.body.username}:${req.body.message}`,{flag:'a'} ,(err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/');
        }
    })
})

module.exports = router;
