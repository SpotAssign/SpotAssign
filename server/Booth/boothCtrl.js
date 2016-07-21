const Booths = require('./Booths')
const Users = require('../User/Users')

module.exports = {
//GET REQUEST
  getBooths (req, res, next) {
    Booths.find( (req.query) )
      .populate('market')
      .populate('reservations')
      .exec( (err,booths) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(booths);
      })
    },
  getThisBooth (req, res, next) {
    Booths.findById(req.params.id)
      .populate('market')
      .populate('reservations')
      .exec( (err,booth) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(booth);
      })
  },
  //POST REQUEST
  addBooth (req, res, next) {
    new Booths(req.body).save( (err, booth) => {
      if (err) {return res.send(err)};
      Users.findByIdAndUpdate(req.body.user, {$push: {booths: booth._id}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(booth);
    })
  },
  //PUT REQUEST
  editBooth (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Not in User")};
    Booths.findByIdAndUpdate(req.params.id, req.body, (err, booth) => {
      if (err) { return res.send(err); }
      else {return res.json(booth); }
    })
  },
  //DELETE REQUEST
  deleteBooth (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Find User To Delete")};
    Booths.findByIdAndRemove(req.params.id, req.body, (err, booth) => {
      if (err) { return res.send(err); }
      Users.findByIdAndUpdate(response.user, {$pull: {booths: {$in: [req.params.id]}}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(booth);
    })
  }
}
