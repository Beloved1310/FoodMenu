const mongoose = require('mongoose');

const FoodMenuSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    location: {
        type: String,
      },
    ispublished: {
        type: Boolean,
        default:false,
    },
    category: {
      type:String,
    },
     postedBy: {
       type:Object
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FoodMenu', FoodMenuSchema);