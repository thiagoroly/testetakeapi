const express = require('express');
const router = express.Router();

const menuService = require('../services/menu.services');

router.get('/', menuService.getData);

module.exports = router;
