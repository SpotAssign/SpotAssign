import angular from 'angular';
import { homeDirective } from './home.directive';
import { navbar } from '../navbar/navbar';
import angularMaterialize from 'angular-materialize'; // TODO Do I need this?!?
import { footer } from '../footer/footer';

export const home = angular.module(
	'home', [
		navbar.name,
		angularMaterialize,
		footer.name
	] )
	.directive( 'home', homeDirective );
