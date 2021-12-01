const FoodMenu = require('../../models/foodMenu');

module.exports = async (req, res) => {
  const { location } = req.query;

  const condition = { ispublished: true };
  if (location) condition.location = location;

  const data = await FoodMenu.find(condition).populate(
    'vendor',
    'fullname email location business -_id'
  );
  return res.send({ message: 'Food menu', data });
};
