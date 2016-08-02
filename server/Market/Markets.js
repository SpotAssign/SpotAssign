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
				day: { type: String }, // choose from "M", "T", "W", "Th", "F", "Sat" and "Sun"
				hours: { type: Array } // must be two numbers, open and close for the Day
			}
			]
		},
		endDate: { type: Date },
		admins: [{
			type: Schema.Types.ObjectId,
			ref: `Users`
		}],
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
