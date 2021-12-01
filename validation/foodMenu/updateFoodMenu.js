const Joi = require('joi');

module.exports = function validate(input) {
  const schema = Joi.object({
    name: Joi.string(),
    quantity: Joi.number().positive(),
    price: Joi.number().positive(),
    location:Joi.string(),
    category: Joi.string().valid('breakfast', 'lunch', 'bunch', 'dinner'),
    ispublished: Joi.boolean()
  });
  return schema.validate(input);
};