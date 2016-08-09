import mongoose, { Schema } from 'mongoose';

const Markets = Schema(
	{
		name: { type: String },
		location: { type: Object },
		bio: { type: String },
		paymentInfo: { type: Object },
		photo: { type: String },
		startDate: { type: Date },
		recurrence: {
			// can be "year", "day", "week", "hour".. here we will use "week"
			frequency: { type: String, default: 'week' },
			interval: { type: Number, default: 1 },
			dayOfWeek: [ {
				name: { type: Object }, // choose from "M", "T", "W", "Th", "F", "Sat" and "Sun"
				close: { type: Object }, // must be two numbers, open and close for the Day
				open: { type: Object },
				value: { type: Boolean }
			}
			]
		},
		closedDates: { type: Array },
		endDate: { type: Date },
		admins: [ {
			type: Schema.Types.ObjectId,
			ref: `Users`
		} ],
		users: [ {
			type: Schema.Types.ObjectId,
			ref: `Users`
		} ],
		map: [ {
			type: Schema.Types.ObjectId,
			ref: `Map`
		} ]
	}
);

export default mongoose.model( 'Markets', Markets );
