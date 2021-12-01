/* eslint no-underscore-dangle: "off" */

const User = require('../../models/user');
const Order = require('../../models/order');
const orderValidation = require('../../validation/order/order');

module.exports = async (req, res) => {
  const { value, error } = orderValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const { foodmenus, delivery } = value;

  const randomId = Math.random().toString(36).substring(2);
  const userDetail = await User.findOne({ _id: req.user._id }).select(
    'fullname email -_id'
  );

  const sumTotal = value.foodmenus.reduce(
    (cumm, e) => cumm + e.price * e.quantity,
    0
  );

  const order = new Order({
    user: userDetail,
    orderNumber: randomId,
    foodmenus,
    delivery,
    totalPrice: sumTotal,
  });
  const createdOrder = await order.save();

  const data = {
    orderNumber: createdOrder.orderNumber,
    user: userDetail,
    foodmenus: createdOrder.foodmenus,
    delivery: createdOrder.delivery,
    totalPrice: createdOrder.totalPrice,
    isDelivered: createdOrder.isDelivered,
    deliveryDate: createdOrder.deliveredAt,
  };
  return res.status(200).send({
    message: 'New Order',
    data,
  });
};
