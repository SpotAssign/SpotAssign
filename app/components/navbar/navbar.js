import angular from 'angular';
import { navbarDirective } from './navbar.directive';

export const navbar = angular.module( 'navbar', [] )
  .directive( 'navbar', navbarDirective );
