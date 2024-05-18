const Trade = require('../models/trades');

function createTrade(body) {
  return Trade.create(body);
}

function findAll() {
  return Trade.findAll();
}

function findOne(id) {
  return Trade.findByPk(id);
}

module.exports = {
  createTrade,
  findAll,
  findOne,
};
