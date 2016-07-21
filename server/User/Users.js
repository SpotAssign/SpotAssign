const mongoose = require('mongoose');

const Users = mongoose.Schema(
  {
    name: {type: String}
  , boothCompName: {type: String}
  , email: {type: String}
  , phoneNumber: {type: Number}
  , paymentInfo: {type: Object}
  , payments: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: `Payments`
    }]
  , reservations: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: `Reservations`
    }]
  , market: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: `Markets`
      }]
}
)

module.exports= mongoose.model('Users', Users);
