const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let orderSchema = Schema ({
    username: {type: String},
    restaurantID: {type: Number},
    restaurantName: {type: String},
    subtotal: {type: Number},
    total: {type: Number},
    fee: {type: Number},
    tax: {type: Number},
    order: {
      type: {
        quantity: {type: Number},
        name: {type: String}
      }
    }
});

module.exports = mongoose.model("Order", orderSchema);
