import { <%= name %>Directive } from './<%= name %>.directive';
import angular from 'angular';

// DELETE ROUTER IF NOT NEEDED
export const <%= name %> = angular.module( '<%= name %>', [] )
.directive( '<%= name %>', <%= name %>Directive );
