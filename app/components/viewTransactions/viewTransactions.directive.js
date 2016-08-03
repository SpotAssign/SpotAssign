import './viewTransactions.scss';
import { viewTransactionsController as controller } from './viewTransactions.controller';
import template from './viewTransactions.html';
import 'materialize-css/bin/materialize.css';

export const viewTransactionsDirective = () => {
	return {
		template,
		controller,
		controllerAs: 'vm',
		restrict: 'E',
		replace: true,
		scope: {}
	};
};
