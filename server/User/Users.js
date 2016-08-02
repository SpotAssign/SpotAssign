import mongoose from 'mongoose';

const Users = mongoose.Schema(
	{
		firstName: { type: String },
		lastName: { type: String },
		boothCompName: { type: String },
		email: { type: String },
		phoneNumber: { type: Number },
		paymentInfo: { type: Object },
		creationDate: { type: Date },
		photo: { type: String, default: 'http://www.clker.com/cliparts/m/3/I/C/c/2/grey-silhouette-of-man.svg' },
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
		} ],
		admin: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: `Markets`
		} ]
	}
);

export default mongoose.model( 'Users', Users );
