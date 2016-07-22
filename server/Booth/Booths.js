import mongoose, { Schema } from 'mongoose';

const Booths = Schema(
	{
		nickname: { type: String },
		availableDates: [ { type: Date } ],
		market: {
			type: Schema.Types.ObjectId,
			ref: `Market`
		},
		reservations: [ {
			type: Schema.Types.ObjectId,
			ref: `Reservations`
		} ],
		location: { type: Object }
	}
);

export default mongoose.model( 'Booths', Booths );
