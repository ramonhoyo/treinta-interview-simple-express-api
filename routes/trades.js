const express = require('express');
const tradesController = require('../controllers/trades');
const router = express.Router();

router.post('/', async function(req, res, next) {
  try {
    const result = await tradesController.createTrade(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/', async function(req, res, next) {
  try {
    const result = await tradesController.findAll();
    res.send(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return res.sendStatus(404);
  }

  try {
    const result = await tradesController.findOne(id);
    if (!result) {
      return res.status(404).send('ID not found');
    }
    res.send(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.patch('/:id', function(req, res) {
  res.sendStatus(405);
});

router.delete('/:id', function(req, res) {
  res.sendStatus(405);
});

router.put('/:id', function(req, res) {
  res.sendStatus(405);
});

module.exports = router;
