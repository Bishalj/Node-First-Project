var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.listen(1337, function(){
    console.log("Server listening at 1337");
});

app.get('/',function(request, response){
    response.send("api routing working");
});

app.get('/home',function(request, response){
    response.sendFile('index.html',{root: path.join(__dirname,'./files')
    });
});


app.get('/name',function(request, response){
    var resp = "Hello "+request.query.firstName
    response.end(resp);
});


app.post('/name',function(request, response){
    console.log(request.body.userName);
    response.end(JSON.stringify(request.body));
});