const express = require('express');
const router = express.Router();
const linksController = require('../controllers/linkController');

router.get('/', linksController.getLinks);
router.post('/', linksController.addLink);

module.exports = router;
