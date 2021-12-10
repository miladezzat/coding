const express = require('express');
const { userService } = require('../services');

const router = new express.Router();

router.get('/', async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).send({ users });
});

module.exports = router;
