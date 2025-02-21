const express = require('express');
const router = express.Router();
const linksController = require('../controllers/linkController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.verifyToken, linksController.getLinks);
router.post('/', authMiddleware.verifyToken, linksController.addLink);

module.exports = router;
