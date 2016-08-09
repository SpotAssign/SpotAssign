import eventCtrl from './eventCtrl';
import middleware from '../middleware/middleware';

export default function ( app ) {
	// GET REQUEST
	app.get( '/api/events', middleware, eventCtrl.getEvents );
	app.get( '/api/event/:id', middleware, eventCtrl.getThisEvent );

	// POST REQUEST
	app.post( '/api/event', middleware, eventCtrl.addEvent );

	// PUT REQUEST
	app.put( '/api/event/:id', middleware, eventCtrl.editEvent );

	// DELETE REQUEST
	app.delete( '/api/event/:id', middleware, eventCtrl.deleteEvent );
}
