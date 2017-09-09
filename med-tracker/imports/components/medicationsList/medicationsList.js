import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Medications } from '../../api/medications.js';

import template from './medicationsList.html';

class MedicationsListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      medications() {
        // Show newest medications at the top
        return Medications.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    })
  }
  addMedication(newMedication) {
    // Insert a medication into the collection
    Medications.insert({
      text: newMedication,
      createdAt: new Date
    });

    // Clear form
    this.newMedication = '';
  }

  setChecked(medication) {
   // Set the checked property to the opposite of its current value
   Medications.update(medication._id, {
     $set: {
       checked: !medication.checked
     },
   });
 }

 removeMedication(medication) {
   Medications.remove(medication._id);
 }
}

export default angular.module('medicationsList', [
  angularMeteor
])
  .component('medicationsList', {
    templateUrl: 'imports/components/medicationsList/medicationsList.html',
    controller: ['$scope', MedicationsListCtrl]
  });