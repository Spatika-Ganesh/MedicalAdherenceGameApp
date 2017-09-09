import angular from 'angular';
import angularMeteor from 'angular-meteor';
import patient from '../imports/components/patient/patient';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);


function onReady() {
 angular.bootstrap(document, ['simple-todos']);
}

if (Meteor.isCordova) {
 angular.element(document).on('deviceready', onReady);
} else {
 angular.element(document).ready(onReady);
}
