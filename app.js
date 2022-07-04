const express = require("express"); //importation du packager express
const http = require("http");

const https = require("https");

const EtudiantController = require("./controllers/EtudiantController")
require("dotenv").config()  //permet de lire les variables qui sont dans le fichier .env
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT;





 app.use(bodyParser.json())



 app.use("/etudiant", EtudiantController)
 
 http.createServer(app).listen(port, function name() {
    console.log('App started at localhost:'+port);
});

https.createServer(app).listen(4444, function result(){
    console.log("SErver started at https://localhost:4444")
})


















 //bodyParser.urlencoded() permet de recuperer les données envoyés de x-www-form-urlencoded
 //bodyParser.json() permet de récuperer les données de type json

// function response(req, res) {
//     res.status(200).send({nom: "uadb"});
// }
// app.get("/get", response);

// app.get("/", (req, res) => {
//     res.send( "bonjour");
// })


// //endpoint = enregistrer, et la fonction enregistrer sera executer si 
// app.post("/enregistrer", function enregistrer(req, res) {
//     //req.query =>pour recuperer des
//     const {nom, prenom} = req.body; 
//     console.log(req.body)
//     res.status(201).send(prenom) 
// })

// app.post("/enregistrer/:name/:id", function enregistrer(req, res) {
//     //req.query =>pour recuperer des
//     const {id, name} = req.params;
//     //res.status(201).send(req.params)
//     res.json(req.params)
// })

// app.post("/etudiant/livre", ()=>{
//     console.log(req.body);
//     res.json(req.query)
// })

 
// // app.listen(port, () => {
// //     console.log('App started at localhost:'+port)
// // })

// app.listen(port, function demarrage() {
//     console.log("App started at :localhost:"+port)
// });

