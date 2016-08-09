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
		event: {
			type: Schema.Types.ObjectId,
			ref: `Events`
		},
		reservation: {
			type: Schema.Types.ObjectId,
			ref: `Reservations`
		}
	}
);

export default mongoose.model( 'Payments', Payments );
