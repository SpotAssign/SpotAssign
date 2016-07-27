import angular from 'angular';
import { navbarDirective } from './navbar.directive';
import { findEvent } from '../findEvent/findEvent';

export const navbar = angular.module( 'navbar', [ findEvent.name ] )
  .directive( 'navbar', navbarDirective );
