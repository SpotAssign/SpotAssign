const mongoose = require('mongoose');

const Booths = mongoose.Schema(
  {
    nickname: {type: String}
  , availableDates:[ {type: Date} ]
  , market: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Market`
   }
   , reservations: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: `Reservations`
    }]
  , location: {type: Object}
}
)

module.exports= mongoose.model('Booths', Booths);
