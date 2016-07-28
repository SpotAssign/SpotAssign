class CalendarController {
	constructor() {
		let currentTime = new Date();
		this.currentTime = currentTime;
		this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		this.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
		this.disable = [false];
		this.today = 'Today';
		this.clear = 'Clear';
		this.close = 'Close';
		let days = 1000;
		this.minDate = (new Date(this.currentTime.getTime() - (1000 * 60 * 60 * 24 * 0))).toISOString();
		this.maxDate = (new Date(this.currentTime.getTime() + (1000 * 60 * 60 * 24 * days))).toISOString();
		this.onStart = function() {};
		this.onRender = function() {};
		this.onOpen = function() {};
		this.onClose = function() {};
		this.onSet = function() {};
		this.onStop = function() {};
	}
}

CalendarController.$inject = [];

export {
	CalendarController
};
