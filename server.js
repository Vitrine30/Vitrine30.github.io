const fs = require("fs");
const express = require("express");
const port = 5000;

const server = express(); // permet de lancer le server 

server.get('/', (req,res) => {
    res.sendFile(__dirname + '/Homepage.html');
})

server.use(express.static(__dirname + '/'))//lit l'intégralité des fichers présent dans le html
server.use(express.urlencoded({extended: true }));

server.listen(port, () => {
    console.log(`Listening on port ${port}`)// definie le port 
})  

    



























server.post('/sent', (req, res) => {
        // Récupère les données du formulaire sous forme d'objet
        const formulaire = req.body;
        // Convertit l'objet en chaîne de caractères au format JSON
        const json = JSON.stringify(formulaire);
        // Enregistre la chaîne de caractères dans le fichier "formulaire.json"
        fs.writeFile('formulaire.json', json, 'utf8', err => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                // Envoie une réponse de statut 200 et termine la réponse
                res.end();
            }
        });
    });