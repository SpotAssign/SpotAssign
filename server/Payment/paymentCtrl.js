//How do we want to get the payment details onto the reservations, what is created first?


const Payments = require('./Payments')
const Reservations = require('../Reservation/Reservations')

module.exports = {
//GET REQUEST
  getPayments (req, res, next) {
    Payments.find( (req.query) )
      .populate('user')
      .populate('market')
      .populate('reservation')
      .exec( (err,payments) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(payments);
      })
    },
  getThisPayment (req, res, next) {
    Payments.findById(req.params.id)
    .populate('user')
    .populate('market')
    .populate('reservation')
      .exec( (err,payment) => {
        if (err) {return res.status(500).json(err); }
        return res.status(200).json(payment);
      })
  },
  //POST REQUEST// DO WE NEED THEM TO HAVE A USER ACCOUNT FIRST?
  addPayment (req, res, next) {
    new Payments(req.body).save( (err, payment) => {
      if (err) {return res.send(err)};
      Reservations.findByIdAndUpdate(req.body.user, {$push: {payment: payment._id}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(payment);
    })
  },
  //PUT REQUEST
  editPayment (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Not in User")};
    Payments.findByIdAndUpdate(req.params.id, req.body, (err, payment) => {
      if (err) { return res.send(err); }
      else {return res.json(payment); }
    })
  },
  //DELETE REQUEST
  deletePayment (req, res, next) {
    if (!req.params.id) {return res.status(400).send("Find User To Delete")};
    Payments.findByIdAndRemove(req.params.id, req.body, (err, payment) => {
      if (err) { return res.send(err); }
      Reservations.findByIdAndUpdate(response.user, {$pull: {payment: {$in: [req.params.id]}}}, {safe: true, upsert:true, new:true}, (err, user) => {
        if (err) { return res.send(err); }
      })
      return res.json(payment);
    })
  }
}
