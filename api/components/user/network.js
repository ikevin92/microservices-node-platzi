const express = require('express');

const response = require('../../../network/response');
const Controller = require('./');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

// Internal Functions
async function list(req, res) {
  try {
    const lista = await Controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

async function get(req, res) {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

async function upsert(req, res) {
  try {
    const user = await Controller.upsert(req.body);
    response.success(req, res, user, 201);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

module.exports = router;