import { <%= name %>Directive } from './<%= name %>.directive';
import angular from 'angular';

export const <%= name %> = angular.module( '<%= name %>', [] )
.directive( '<%= name %>', <%= name %>Directive );
