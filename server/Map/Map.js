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
		size: String,
		image: Object,
		spots: Array
	}
);

export default mongoose.model( 'Map', Map );
