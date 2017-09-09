import angular from 'angular';
import angularMeteor from 'angular-meteor';
import medicationsList from '../imports/components/medicationsList/medicationsList';
import landingPage from '../imports/components/landingPage/landingPage'
angular.module('med-tracker', [
  angularMeteor,
  medicationsList.name,
  landingPage.name
]);
