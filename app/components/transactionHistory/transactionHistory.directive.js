import './transactionHistory.scss';
import { TransactionHistoryController as controller } from './transactionHistory.controller';
import template from './transactionHistory.html';

export const transactionHistoryDirective = () => {
	return {
		controller,
		template,
		controllerAs: 'vm',
		scope: {},
		replace: true,
		restrict: 'E'
  	};
};
