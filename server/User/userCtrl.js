const Users = require('./Users')
const Markets = require('../Market/Markets')

module.exports = {
//GET REQUEST
  getUsers (req, res, next) {
    Users.find( (req.query) )
      .populate('payment')
      .populate('reservations')
      .populat('market')
      .exec( (err,users) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(users);
      })
    },
  getThisUser (req, res, next) {
    Users.findById(req.params.id)
      .populate('payment')
      .populate('reservations')
      .populat('market')
      .exec( (err,user) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(user);
      })
  },
  //POST REQUEST
  addUser (req, res, next) {
    new Users(req.body).save( (err, user) => {
      if (err) {return res.send(err)};
      Users.findByIdAndUpdate(req.body.user, {$push: {users: user._id}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(user);
    })
  },
  //PUT REQUEST
  editUser (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Not in User")};
    Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) { return res.send(err); }
      else {return res.json(user); }
    })
  },
  //DELETE REQUEST
  deleteUser (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Find User To Delete")};
    Users.findByIdAndRemove(req.params.id, req.body, (err, user) => {
      if (err) { return res.send(err); }
      Users.findByIdAndUpdate(response.user, {$pull: {users: {$in: [req.params.id]}}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(user);
    })
  }
}
