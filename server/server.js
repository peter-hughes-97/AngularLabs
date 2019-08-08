var express = require('express');  
var app = express();
var path = require('path');
//var module = require('./routes/accountroute.js')(app,path);
var http = require('http');     // http module
var routes = require('./route.js'); // route module
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '../src/app'));
app.use(bodyParser.json()) // parse application/json
var cors = require('cors') //import the cors package.
app.use(cors());  // Add cors middleware to the express application


http.createServer(routes.handleRequest).listen(3000);

app.listen(3000, '127.0.0.1',function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server has been started at : ' + n + ':' +m);
});

app.get('/'),function(req,res){

    res.SendFile(__dirname + "/www/form.html");
}

app.post('/api/auth',function(req,res){

    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email
    customrer.upwd = req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid = true;
    } else {
        customer.valid = false;
    }
    res.send(customer);
})