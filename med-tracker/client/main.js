import angular from 'angular';
import angularMeteor from 'angular-meteor';
import medicationsList from '../imports/components/medicationsList/medicationsList';
import landingPage from '../imports/components/landingPage/landingPage'
import avatarProgressor from '../imports/components/avatarProgressor/avatarProgressor';
import './main.html';


angular.module('med-tracker', [
  angularMeteor,
  medicationsList.name,
  landingPage.name,
  avatarProgressor.name
]);
