
const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('login').value)" action="/login/" method="POST"><input id="login" type="text" name="username" placeHolder="Enter username"></input><button type="submit">Login</button></form>`)
})

router.post('/', (req,res,next)=>{
    
    res.redirect('/');
})


module.exports = router;