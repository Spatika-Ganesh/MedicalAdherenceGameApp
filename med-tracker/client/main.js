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


// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
