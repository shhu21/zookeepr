const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = router.use(require('./zookeeperRoutes'));

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;