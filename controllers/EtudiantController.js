const express = require("express");
const showEtu = require("../services/etudiantService");
//require("../services/etudiantService")

const routes = express.Router()

routes.get("/getEtudiant", showEtu.showEtudiant);

routes.post("/etudiant", showEtu.enregistrerEtudiant)

module.exports = routes;

