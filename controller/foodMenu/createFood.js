/* eslint camelcase: "off" */
/* eslint no-underscore-dangle: "off" */
 

const FoodMenu = require('../../models/foodMenu');
const User = require('../../models/user')
const cloudinary = require('../../utilis/cloudinary');
const createFoodMenu = require('../../validation/foodMenu/createFoodMenu');

module.exports = async (req, res) => {
  const { value, error } = createFoodMenu(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const { name, price, quantity, location, category } = value;

  const { secure_url: image, public_id: cloudinary_id } =
    await cloudinary.uploader.upload(req.file.path);

    const postedBy =  await User.findOne({ _id: req.user._id },  [ 'fullname', 'email', 'business.name', 'business.phoneNumber' ])
  const savedFoodMenu = await FoodMenu.create({
    image,
    cloudinary_id,
    name,
    price,
    quantity,
    location,
    category,
    postedBy
         
  });

  const data = {
    image,
    cloudinary_id,
    name,
    price,
    quantity,
    location,
    category,
    ispublished: savedFoodMenu.ispublished
  };
  return res.send({ message: 'Created FoodMenu', data });
};
