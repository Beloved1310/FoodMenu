const FoodMenu = require('../../models/foodMenu');

module.exports = async (req, res) => {
  const data = await FoodMenu.find({ ispublished: 'true' });
  return res.send({ message: 'Food menu', data });
};
