const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);

// functions
async function list(req, res, next) {

  try {
    const data = await Controller.list();
    response.success(req, res, data, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;