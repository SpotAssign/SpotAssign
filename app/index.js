// **********************************************************************************
//                                  IMPORTS
// **********************************************************************************
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './routing';

import './styles.scss';
// **********************************************************************************
//                                 DIRECTIVES
// **********************************************************************************
import test from './components/test/test';

angular.module( 'SpotAssign', [ uiRouter ] )
.config( routing )
	.directive( 'test', test );
