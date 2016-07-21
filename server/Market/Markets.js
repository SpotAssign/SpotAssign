//There is a problem that we need to discuss about the Markets, is the market created and then the user is added as an admin?

const mongoose = require('mongoose');

const Markets = mongoose.Schema(
  {
    name: {type: String}
  , location: {type: Object}
  , bio: {type: String}
  , paymentInfo: {type: Object}
  , admins: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: `Admins`
    }]
  , users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: `Users`
      }]
  , booths: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: `booths`
    }]
}
)

module.exports= mongoose.model('Markets', Markets);
