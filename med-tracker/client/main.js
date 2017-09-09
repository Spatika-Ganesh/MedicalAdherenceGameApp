import angular from 'angular';
import angularMeteor from 'angular-meteor';
import medicationsList from '../imports/components/medicationsList/medicationsList';

angular.module('med-tracker', [
  angularMeteor,
  medicationsList.name
]);
