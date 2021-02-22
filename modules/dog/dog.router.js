const express = require('express');

const Pets = require('../pets/pets.service');

const dogRouter = express.Router();

dogRouter.get('/', (req, res) => {
  const dog = Pets.getDog();
  return res.status(200).json(dog);
});

module.exports = dogRouter;