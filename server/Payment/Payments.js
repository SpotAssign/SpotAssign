const mongoose = require('mongoose');

const Payments = mongoose.Schema(
  {
    name: {type: String}
  , location: {type: Object}
  , bio: {type: String}
  , paymentInfo: {type: Object}
  , user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: `Users`
    }
  , market: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Markets`
      }
  , reservation: {
       type: mongoose.Schema.Types.ObjectId,
       ref: `Reservations`
    }
}
)

module.exports= mongoose.model('Payments', Payments);
