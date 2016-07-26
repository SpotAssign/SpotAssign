import angular from 'angular';
import { navbarDirective } from './navbar.directive';
import { event } from '../event/event';


export const navbar = angular.module( 'navbar', [ event.name ] )
  .directive( 'navbar', navbarDirective );
