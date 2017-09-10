import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './medication.html';

Template.medication.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.medication.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('medications.setChecked', this._id, !this.checked);

  },
  'click .delete'() {
    Meteor.call('medications.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('medications.setPrivate', this._id, !this.private);
  },
});
