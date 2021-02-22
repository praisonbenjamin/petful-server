const express = require('express');
const Pets = require('../pets/pets.service');

const catRouter = express.Router();

catRouter.get('/', (req, res) => {
  const cat = Pets.getCat();
  return res.status(200).json(cat);
});

module.exports = catRouter;