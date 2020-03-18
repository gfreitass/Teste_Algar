"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = 4000;

var fs = require('fs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view-engine', 'pug');
app.set('views', 'frontend');
app.get(['/', '/home'], function (req, res) {
  res.render('C:/Users/gustavohfds/Desktop/Teste_Algar/frontend/index.pug', {
    variavel: 'express'
  });
});
app.post('/home_post', function (req, res) {
  var regexp = /não gela|não esfria/ig;
  var OK = regexp.exec(req.body.duvida);
  if (!OK) res.status(404).send('Não conseguimos te auxiliar com esta dúvida, desculpe, estamos trabalhando para melhorar!');else res.status(200).send('Verifique se sua geladeira está conectada na tomada e se o termostato está na temperatura certa.');
});
app.get('/style.css', function (req, res) {
  res.sendFile("C:/Users/gustavohfds/Desktop/Teste_Algar/frontend/style.css");
});
app.use(function (req, res, next) {
  res.status(404).send('Não conseguimos encontrar esta rota.');
});
app.listen(port, function () {
  return console.log("Escutando a porta", port);
});