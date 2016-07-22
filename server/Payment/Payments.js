import mongoose, { Schema } from 'mongoose';

const Payments = Schema(
	{
		name: { type: String },
		location: { type: Object },
		bio: { type: String },
		paymentInfo: { type: Object },
		user: {
			type: Schema.Types.ObjectId,
			ref: `Users`
		},
		market: {
			type: Schema.Types.ObjectId,
			ref: `Markets`
		},
		reservation: {
			type: Schema.Types.ObjectId,
			ref: `Reservations`
		}
	}
);

export default mongoose.model( 'Payments', Payments );
