class UserFindEventController {
  constructor( eventService ) {
      this.eventService = eventService;
      this.events= [];
      this.getAllEvents();
  }
  getAllEvents(){
      this.eventService.getAll()
      .then( events => {
          this.events = events;
      } )
  }

}

UserFindEventController.$inject = [ 'eventService' ];

export { UserFindEventController };
