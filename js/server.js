const express = require('express');

//create express app
const app = express();

app.set('view engine', 'ejs');

//----------------------------------
app.get(['/', '/:id', '/index.html'], function(req, res) {
    console.log(JSON.stringify(req.query));
    res.render('index.ejs', {userName:req.params.id , fullName:req.query});
});

app.get('/css/main.css', function(req, res) {
    res.sendFile((__dirname + '/public/css/main.css'));
});

app.get('js/main.js', function(req, res) {
    res.sendFile((__dirname + '/public/js/main.js'));
});
//-----------------------------------
