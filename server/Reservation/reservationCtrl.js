const Reservations = require('./Reservations')
const Payments = require('../Payment/Payments')

module.exports = {
//GET REQUEST
  getReservations (req, res, next) {
    Reservations.find( (req.query) )
      .populate('user')
      .populate('market')
      .populate('payment')
      .exec( (err,reservation) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(reservation);
      })
    },
  getThisReservation (req, res, next) {
    Reservations.findById(req.params.id)
    .populate('user')
    .populate('market')
    .populate('payment')
      .exec( (err,payment) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(payment);
      })
  },
  //POST REQUEST// DO WE NEED THEM TO HAVE A USER ACCOUNT FIRST?
  addReservation (req, res, next) {
    new Reservations(req.body).save( (err, reservation) => {
      if (err) {return res.send(err)};
      Payments.findByIdAndUpdate(req.body.user, {$push: {reservation: reservation._id}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(reservation);
    })
  },
  //PUT REQUEST
  editReservation (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Not in User")};
    Reservations.findByIdAndUpdate(req.params.id, req.body, (err, reservation) => {
      if (err) { return res.send(err); }
      else {return res.json(reserv); }
    })
  },
  //DELETE REQUEST
  deleteReservation (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Find User To Delete")};
    Reservations.findByIdAndRemove(req.params.id, req.body, (err, reservation) => {
      if (err) { return res.send(err); }
      Payments.findByIdAndUpdate(response.user, {$pull: {reservation: {$in: [req.params.id]}}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(reservation);
    })
  }
}
