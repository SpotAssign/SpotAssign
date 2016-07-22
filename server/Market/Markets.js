// There is a problem that we need to discuss about the Markets, is the market created and then the user is added as an admin?

import mongoose, { Schema } from 'mongoose';

const Markets = Schema(
	{
		name: { type: String },
		location: { type: Object },
		bio: { type: String },
		paymentInfo: { type: Object },
		admins: [ {
			type: Schema.Types.ObjectId,
			ref: `Admins`
		} ],
		users: [ {
			type: Schema.Types.ObjectId,
			ref: `Users`
		} ],
		booths: [ {
			type: Schema.Types.ObjectId,
			ref: `booths`
		} ]
	}
);

export default mongoose.model( 'Markets', Markets );
