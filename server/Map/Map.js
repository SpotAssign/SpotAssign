import mongoose, { Schema } from 'mongoose';

const Map = Schema(
	{
		name: { type: String },
		availableDates: [ { type: Date } ],
		event: {
			type: Schema.Types.ObjectId,
			ref: `Events`
		},
		reservations: [ {
			type: Schema.Types.ObjectId,
			ref: `Reservations`
		} ],
		size: { type: String },
		image: { type: String },
		spots: { type: Array }
	}
);

export default mongoose.model( 'Map', Map );
