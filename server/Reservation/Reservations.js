const mongoose = require('mongoose');

const Reservations = mongoose.Schema(
  {
    dates: {type: Date}
  , user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: `Users`
    }
  , market: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Markets`
      }
  , payment: {
       type: mongoose.Schema.Types.ObjectId,
       ref: `Payments`
    }
}
)

module.exports= mongoose.model('Reservations', Reservations);
