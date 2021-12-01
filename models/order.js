const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
    },
    foodmenus: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    delivery: {
      address: String,
      city: String,
      postalCode: Number,
      country: String,
    },
    totalPrice: Number,
    orderNumber: String,
    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
