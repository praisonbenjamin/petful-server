const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pets = Pets.get();
  return res.status(200).json(pets);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  const pets = Pets.get();
  return res.status(201).json(pets);
});

module.exports = router;
