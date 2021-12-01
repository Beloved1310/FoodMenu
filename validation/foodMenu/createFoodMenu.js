const Joi = require('joi');

module.exports = function validate(input) {
  const schema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().positive().required(),
    price: Joi.number().positive().required(),
    location:Joi.string().required(),
    category: Joi.string().valid('breakfast', 'lunch', 'bunch', 'dinner'),
    ispublished: Joi.boolean().invalid(false),
  });
  return schema.validate(input);
};