import mongoose, { Schema } from 'mongoose';

const Map = Schema(
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
		location: { type: Object },
		mapType: String,
		mapImage: Object,
		spots: Array
	}
);

export default mongoose.model( 'Map', Map );
