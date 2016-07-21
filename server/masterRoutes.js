const userRoutes = require ('./User/userRoutes');
const boothRoutes = require('./Booth/boothRoutes');
const marketRoutes = require ('./Market/marketRoutes');
const paymentRoutes = require ('./Payment/paymentRoutes');
const reservationRoutes = require('./Reservation/reservationRoutes');


module.exports = app => {
  userRoutes(app);
  boothRoutes(app);
  marketRoutes(app);
  paymentRoutes(app);
  reservationRoutes(app);
}
