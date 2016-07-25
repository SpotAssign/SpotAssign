import './navbar.scss';
import { navbarController as controller } from './navbar.controller';
import template from './navbar.html';
import 'materialize-css/bin/materialize.css';
import logo from '../../img/SpotAssignLogo.png';


export const navbarDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
