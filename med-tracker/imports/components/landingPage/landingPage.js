import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './landingPage.html';


class LandingPageCtrl {
    constructor($scope) {
      $scope.viewModel(this);

  }
}
export default angular.module('landingPage', [
  angularMeteor
]).component('landingPage', {
  templateUrl: 'imports/components/landingPage/landingPage.html',
  controller: ['$scope', LandingPageCtrl]
});
