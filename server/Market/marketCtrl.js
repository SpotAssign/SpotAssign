const Markets = require('./Markets')
const Users = require('../User/Users')

module.exports = {
//GET REQUEST
  getMarkets (req, res, next) {
    Markets.find( (req.query) )
      .populate('admins')
      .populate('users')
      .populate('booths')
      .exec( (err,markets) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(markets);
      })
    },
  getThisMarket (req, res, next) {
    Markets.findById(req.params.id)
      .populate('admins')
      .populate('users')
      .populate('booths')
      .exec( (err,market) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(market);
      })
  },
  //POST REQUEST// DO WE NEED THEM TO HAVE A USER ACCOUNT FIRST?
  addMarket (req, res, next) {
    new Markets(req.body).save( (err, market) => {
      if (err) {return res.send(err)};
      Users.findByIdAndUpdate(req.body.user, {$push: {markets: market._id}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(market);
    })
  },
  //PUT REQUEST
  editMarket (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Not in User")};
    Markets.findByIdAndUpdate(req.params.id, req.body, (err, market) => {
      if (err) { return res.send(err); }
      else {return res.json(market); }
    })
  },
  //DELETE REQUEST
  deleteMarket (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Find User To Delete")};
    Markets.findByIdAndRemove(req.params.id, req.body, (err, market) => {
      if (err) { return res.send(err); }
      Users.findByIdAndUpdate(response.user, {$pull: {markets: {$in: [req.params.id]}}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(market);
    })
  }
}