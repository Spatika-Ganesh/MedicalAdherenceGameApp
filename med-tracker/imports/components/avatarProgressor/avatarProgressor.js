import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './avatarProgressor.html';

//$mdThemingProvider.setDefaultTheme('altTheme');

class AvatarProgressorCtrl {
    constructor($scope) {
        counter: number = 0;
      $scope.viewModel(this);
  }
  TakenMedsCliker() {
    // Insert a medication into the collection
    // Clear form
  }
}
export default angular.module('avatarProgressor', [
  angularMeteor
]).component('avatarProgressor', {
  templateUrl: 'imports/components/avatarProgressor/avatarProgressor.html',
  controller: ['$scope', AvatarProgressorCtrl]
});
