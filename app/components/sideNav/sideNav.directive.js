import './sideNav.scss';
import 'materialize-css/bin/materialize.css';
import { SideNavController as controller } from './sideNav.controller';

export const sideNavDirective = () => {
	return {
		template: `<div>
			<side-nav-admin ng-if="adminPanel"></side-nav-admin>
			<side-nav-user ng-if="!adminPanel"></side-nav-user>
		</div>`,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {
			adminPanel: '='
		}
	};
};
