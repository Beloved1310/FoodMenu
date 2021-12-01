const Joi = require('joi');

module.exports = function validate(input) {
  const schema = Joi.object({
    foodmenus: Joi.array()
      .items(
        Joi.object({
            _id:Joi.string(),
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
        address: Joi.string().min(3).max(500).lowercase(),
        city: Joi.string().required().min(2).max(20).lowercase().trim(),
        postalCode: Joi.number().integer(),
        country: Joi.string().trim().lowercase(),
      })
      .and('address'),
  });
  return schema.validate(input);
};