const reservationCtrl = require('./reservationCtrl')

module.exports = app => {
  //GET REQUEST
    app.get('/api/reservation', reservationCtrl.getReservations);
    app.get('/api/reservation/:id', reservationCtrl.getThisReservation);


  //POST REQUEST
    app.post('/api/reservation', reservationCtrl.addReservation);

  //PUT REQUEST
    app.put('/api/reservation/:id', reservationCtrl.editReservation);


  //DELETE REQUEST
    app.delete('/api/reservation/:id', reservationCtrl.deleteReservation);
}
