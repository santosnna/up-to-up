const express = require('express');

const router = express.Router();

module.exports = (params) => {

  const {
    appsService
  } = params;

  router.get('/', async (req, res) => {
    const appsList = await appsService.getList();
    res.render('layout', {
      template: 'index',
      appsList
    })
  })

  return router;
}