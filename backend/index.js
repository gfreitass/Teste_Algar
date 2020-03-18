 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const port = 4000;
 const fs = require('fs');
 app.use(bodyParser.urlencoded({
     extended: true
 }));


 app.set('view-engine', 'pug');
 app.set('views', 'frontend');
 app.get(['/', '/home'], function (req, res) {
     res.render('C:/Users/gustavohfds/Desktop/Teste_Algar/frontend/index.pug', {
         variavel: 'express'
     })
 });


 app.post('/home_post', function (req, res) {

     let regexp = /não gela|não esfria/ig;
     let OK = regexp.exec(req.body.duvida);
     if (!OK)
         res.status(404).send('Não conseguimos te auxiliar com esta dúvida, desculpe, estamos trabalhando para melhorar!');
     else
         res.status(200).send('Verifique se sua geladeira está conectada na tomada e se o termostato está na temperatura certa.')

 });


 app.get('/style.css', function (req, res) {
     res.sendFile("C:/Users/gustavohfds/Desktop/Teste_Algar/frontend/style.css")
 });

 app.use((req, res, next) => {
     res.status(404).send('Não conseguimos encontrar esta rota.');

 })
 app.listen(port, () => console.log("Escutando a porta", port));