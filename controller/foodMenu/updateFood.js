/* eslint-disable camelcase */

const FoodMenu = require('../../models/foodMenu');
const cloudinary = require('../../utilis/cloudinary');

const updateFoodMenu = require('../../validation/foodMenu/updateFoodMenu');

module.exports = async (req, res) => {
  const { value, error } = updateFoodMenu(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const foodMenu = await FoodMenu.findById(req.params.id);
  if (req.file) {
    await cloudinary.uploader.destroy(foodMenu.cloudinary_id);
    const { secure_url: image, public_id: cloudinary_id } =
      await cloudinary.uploader.upload(req.file.path);
    await FoodMenu.updateOne(
      { _id: req.params.id },
      {
        $set: {
          image,
          cloudinary_id,
        },
      }
    );
  }
  
  const { name, price, quantity,location, ispublished, category } = value;
  await FoodMenu.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name,
        price,
        quantity,
        location,
        ispublished,
        category
      },
    }
  );

  const data = await FoodMenu.find({ _id: req.params.id });
  return res.status(200).json({ message: 'foodMenu updated', data });
};