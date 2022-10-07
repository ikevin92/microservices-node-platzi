const express = require('express');

const response = require('../../../network/response');
const Controller = require('./');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const lista = await Controller.list();
    response.success(req, res, lista, 200);
  } catch (error) {
    response.error(req, res, error.message, 500, error);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500, error);
  }
});

module.exports = router;