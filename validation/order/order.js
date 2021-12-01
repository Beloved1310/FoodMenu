const Joi = require('joi');

module.exports = function validate(input) {
  const schema = Joi.object({
    foodmenus: Joi.array()
      .items(
        Joi.object({
          _id: Joi.string().required(),
          name: Joi.string().required(),
          price: Joi.number().positive().required(),
          quantity: Joi.number().positive().required(),
          location: Joi.string().required(),
          category: Joi.string().required(),
        })
      )
      .required(),
    delivery: Joi.object()
      .keys({
        address: Joi.string().min(3).max(500).lowercase().required(),
        city: Joi.string()
          .required()
          .min(2)
          .max(20)
          .lowercase()
          .trim()
          .required(),
        postalCode: Joi.number().integer().required(),
        country: Joi.string().trim().lowercase().required(),
      })
      .and('address'),
  });
  return schema.validate(input);
};
