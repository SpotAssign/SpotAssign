class RentalHistoryController {
	constructor() {
		this.data = [
			{ TDate: "January 3, 2016", Days: 1, Cost: "$25", Total: "$25", Receipt_Id: "345K23TDw52" },
			{ TDate: "January 14, 2016", Days: 2, Cost: "$50", Total: "$50", Receipt_Id: "345M23TDw68" },
			{ TDate: "January 27, 2016", Days: 1, Cost: "$25", Total: "$25", Receipt_Id: "3452T3TDw89" }
		];
	}
}

RentalHistoryController.$inject = [];
export { RentalHistoryController };
