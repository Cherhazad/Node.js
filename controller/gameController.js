const Games = require('../model/game');
const controller = {};
const actions = ['pierre', 'feuille', 'ciseaux'];

controller.getAll = (req, res) => {
    Games.findAll().then((result) => res.json(result));
};

/* controller.store = (req, res) => {
    const game = {
        id: 1,
        win: 1,
        lose: 4,
        tie: 5
    } 
    // console.log(`j'ai joué ${action}, le serveur a joué ${action_serv}, j'ai fait ${result}`);

    Games.create(game).then((queryResult) => res.json(queryResult));
}; */

// code produit par chatGPT
controller.store = (req, res) => {
    // Générer une action aléatoire du serveur
    const action_serv = actions[Math.floor(Math.random() * actions.length)];
    
    // Supposons que l'action de l'utilisateur soit envoyée dans le corps de la requête sous la clé "action"
    const action = req.params.action;

    // Déterminer le résultat du jeu en fonction des actions de l'utilisateur et du serveur
    let result;
    if (action === action_serv) {
        result = 'tie'; // Égalité
    } else if (
        (action === 'pierre' && action_serv === 'ciseaux') ||
        (action === 'feuille' && action_serv === 'pierre') ||
        (action === 'ciseaux' && action_serv === 'feuille')
    ) {
        result = 'win'; // Victoire
    } else {
        result = 'lose'; // Défaite
    }

    // Mettre à jour les statistiques de jeu en fonction du résultat
    let game = {
        win: result === 'win' ? 1 : 0,
        lose: result === 'lose' ? 1 : 0,
        tie: result === 'tie' ? 1 : 0
    };

    // Insérer le jeu dans la base de données avec les statistiques mises à jour
    Games.create(game).then((queryResult) => res.json(queryResult));
};

// fin de code produit par chatGPT

controller.getScore = (req, res) => {
    const game = {};
    Games.getScore(game,  {where: { id: req.params.id } })
    .then((result) => res.json(result))
};

controller.update = (req, res) => {
    const game = {};
    Games.update(game, { where: { id: req.params.id } }).then((queryResult) =>
        res.json(queryResult)
    );
};

controller.destroy = (req, res) => {
    Games.destroy({ where: { id: req.params.id } }).then((queryResult) =>
        res.json(queryResult)
    );
};

module.exports = controller
