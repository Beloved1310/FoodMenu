const bcrypt = require('bcrypt');
const User = require('../../models/user');
const signUpValidate = require('../../validation/user/signUpValidate');

module.exports = async (req, res) => {
  const { value, error } = signUpValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const { fullname, email, password, isVendor, location, business } = value;
  const createdUser = new User({
    fullname,
    email,
    password,
    isVendor,
    location,
    business,
  });

  const user = await User.findOne({ email });
  if (user) return res.status(400).send({ error: 'User already registered' });
  const salt = await bcrypt.genSalt(10);
  createdUser.password = await bcrypt.hash(createdUser.password, salt);
  await createdUser.save();
  const data = { fullname, email, isVendor, location, business };
  return res.send({
    data,
  });
};
