const FoodMenu = require('../../models/foodMenu');

module.exports = async (req, res) => {
    const foodLocation = req.query.location
  const data = await FoodMenu.find({location: foodLocation, ispublished:true });

  return res.send({ message: 'Food menu', data });
};