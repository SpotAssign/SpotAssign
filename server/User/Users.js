import mongoose from 'mongoose';

const Users = mongoose.Schema(
	{
		name: { type: String },
		boothCompName: { type: String },
		email: { type: String },
		phoneNumber: { type: Number },
		paymentInfo: { type: Object },
		photo: { type: String },
		payments: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: `Payments`
		} ],
		reservations: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: `Reservations`
		} ],
		markets: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: `Markets`
		} ]
	}
);

export default mongoose.model( 'Users', Users );
