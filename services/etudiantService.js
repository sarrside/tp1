exports.showEtudiant = (req, res) => {

}

function showEtudiant(req, res){
    res.send({prenom: "Moussa", nom: "SARR"});
}

function enregistrerEtudiant(req, res){

    res.send(req.body);
}
module.exports = {showEtudiant, enregistrerEtudiant}




