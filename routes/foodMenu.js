const multer = require('multer');
const express = require('express');
const asyncMiddleware = require('../middleware/async');

const router = express.Router();

const auth = require('../middleware/auth');
const isVendor = require('../middleware/isVendor');

const storage = require('../utilis/multer');

const upload = multer({ storage });

const createFoodMenu = require('../controller/foodMenu/createFood');
const updateFoodMenu = require('../controller/foodMenu/updateFood');
const getFoodMenuLocation = require('../controller/foodMenu/getFoodMenuLocation');
const getAllFoodMenu = require('../controller/foodMenu/getAllFoodMenu');

router.get('/', asyncMiddleware(getAllFoodMenu));

router.get('/location', asyncMiddleware(getFoodMenuLocation));

router.post(
  '/foodmenu',
  auth,
  isVendor,
  upload.single('image'),
  asyncMiddleware(createFoodMenu)
);

router.put(
  '/foodmenu/:id',
  auth,
  isVendor,
  upload.single('image'),
  asyncMiddleware(updateFoodMenu)
);

module.exports = router;