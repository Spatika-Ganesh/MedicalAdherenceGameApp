import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Medications } from '../api/medications.js';
import './medication.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('medications');

});
Template.body.helpers({
  medications() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter medications
      return Medications.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the medications
    return Medications.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
  return Medications.find({ checked: { $ne: true } }).count();
},

});
Template.body.events({
  'submit .new-medication'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;


    // Insert a medication into the collection
    Meteor.call('medications.insert', text);


    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
