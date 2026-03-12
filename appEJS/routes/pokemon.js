var express = require('express');
var router = express.Router();

/* GET pokemon wiki page. */
router.get('/', function(req, res, next) {
  const pokemons = [
    { name: 'Pikachu', type: 'Elétrico', description: 'Um Pokémon elétrico amarelo com orelhas pontudas.' },
    { name: 'Charizard', type: 'Fogo/Voador', description: 'Um dragão de fogo poderoso e lendário.' },
    { name: 'Bulbasaur', type: 'Grama/Veneno', description: 'Um Pokémon grama com uma planta nas costas.' },
    { name: 'Squirtle', type: 'Água', description: 'Um Pokémon tartaruga azul que evolui para um poderoso guerreiro.' },
    { name: 'Eevee', type: 'Normal', description: 'Um Pokémon fofo que pode evoluir para vários tipos.' }
  ];
  res.render('pokemon', { title: 'Pokémon Wiki', pokemons: pokemons });
});

module.exports = router;