import './<%= name %>.scss';
import { <%= upCaseName %>Controller as controller } from './<%= name %>.controller';
import template from './<%= name %>.html';

export const <%= name %>Directive = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
