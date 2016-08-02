import mongoose, { Schema } from 'mongoose';

const Reservations = Schema(
	{
		dates: { type: Date },
		user: {
			type: Schema.Types.ObjectId,
			ref: `Users`
		},
		market: {
			type: Schema.Types.ObjectId,
			ref: `Markets`
		},
		map: {
			type: Schema.Types.ObjectId,
			ref: `Map`
		},
		payment: {
			type: Schema.Types.ObjectId,
			ref: `Payments`
		}
	}
);

export default mongoose.model( 'Reservations', Reservations );
