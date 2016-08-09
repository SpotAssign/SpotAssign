import mongoose, { Schema } from 'mongoose';

const Map = Schema(
	{
		name: { type: String },
		availableDates: [ { type: Date } ],
		market: {
			type: Schema.Types.ObjectId,
			ref: `Markets`
		},
		reservations: [ {
			type: Schema.Types.ObjectId,
			ref: `Reservations`
		} ],
		location: { type: Object },
		mapType: String,
		mapImage: Object,
		spots: Array
	}
);

export default mongoose.model( 'Map', Map );
