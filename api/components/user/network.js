const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./');

const router = express.Router();

// Routes
router.get('/', list);
router.post('/follow/:id', secure('follow'), follow);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);

// Internal Functions
async function list(req, res) {
  try {
    const lista = await Controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    next;
  }
};

async function get(req, res, next) {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    // response.error(req, res, error.message, 500);
    next;
  }
};

async function upsert(req, res, next) {
  try {
    const user = await Controller.upsert(req.body);
    console.log(`🚀 ~ file: network.js ~ line 38 ~ upsert ~ user`, user);
    response.success(req, res, user, 201);
  } catch (error) {
    next;
  }
};

async function follow(req, res, next) {
  try {
    const data = await Controller.follow(req.user.id, req.params.id);
    response.success(req, res, data, 201);
  } catch (error) {
    next;
  }

}

module.exports = router;