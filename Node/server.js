const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require("cors")




const port = process.env.PORT|| 300;

app.set('port',port);

//this is for debugging
app.use(logger('dev'));
//to parse the responses in JSON format
app.use(express.json());
//
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());
app.disable("x-powered-by");

server.listen(3000,"192.168.1.11" || "localhost", function(){

console.log("App de Nodejs "+ process.pid+ " iniciada en el puerto "+port)

});



//rutas

app.get('/',(req,res)=>{
    res.send('Root Path Backend')
});
app.get('/test',(req,res)=>{
    res.send('Test Path Backend')
});

//ERROR HANDLER
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack)

})