var http = require('http')
var express = require('express')

app = express();

var porta = 21012
 
var path = require('path');


//const {  pageLanding, saveClasses } = require(__dirname + '/pages.js')


app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html'); //http://mh.kinghost.net/home
});

app.get("/study", function(req, res) {
    res.sendFile(__dirname + '/views/study.html'); //http://mh.kinghost.net/home/study
});

app.get("/give-classes", function(req, res) {
    res.sendFile(__dirname + '/views/give-classes.html'); //http://mh.kinghost.net/home/study
});
//app.get("/teste", pageLanding) 




//PASTA PUBLIC
//---------------------------------------------------------------------------------[
//ROTAS PARA ARQUIVOS STYLES , IMGS E SCRIPT. 

app.get("/public/scripts/:tagName", function(req, res) {
  res.download(path.join(__dirname, '../public/scripts', req.params.tagName))
});

//ROTA PARA ICONE DO SITE
app.get("/public/top-icon", function(req, res) {
  res.download(path.join(__dirname, '../public/images/icons', 'purple-heart.svg'))
});

//Rota para CSS MAIN
app.get("/public/styles/main.css", function(req, res) {
 res.sendFile(path.join(__dirname, '../public/styles', 'main.css'))
});


//Rota para CSS 
app.get("/public/styles/:tagName", function(req, res) {
  res.download(path.join(__dirname, '../public/styles/partials', req.params.tagName))
});

//Rota para arquivos imagens icons
app.get("/public/images/icons/:tagName", function(req, res) {
  res.download(path.join(__dirname, '../public/images/icons', req.params.tagName))
});

//Rota para arquivos imagens
app.get("/public/images/:tagName", function(req, res) {
  res.download(path.join(__dirname, '../public/images/', req.params.tagName))
});
//------------------------------------------------------------------------------]


var server = app.listen(21012);

console.log('Servidor rodando na porta: '+ porta)
console.log(__dirname + '/views/index.html')

