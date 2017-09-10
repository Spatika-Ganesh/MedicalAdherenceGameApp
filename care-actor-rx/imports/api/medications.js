import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Medications = new Mongo.Collection('medications');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish medications that are public or belong to the current user
  Meteor.publish('medications', function medicationsPublication() {
    return Medications.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'medications.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a medication
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Medications.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'medications.remove'(medicationId) {
    check(medicationId, String);

    const medication = Medications.findOne(medicationId);
    if (medication.private && medication.owner !== Meteor.userId()) {
      // If the medication is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Medications.remove(medicationId);
  },
  'medications.setChecked'(medicationId, setChecked) {
    check(medicationId, String);
    check(setChecked, Boolean);

    Medications.update(medicationId, { $set: { checked: setChecked } });
  },
  'medications.setPrivate'(medicationId, setToPrivate) {
    check(medicationId, String);
    check(setToPrivate, Boolean);

    const medication = Medications.findOne(medicationId);
        if (medication.private && medication.owner !== Meteor.userId()) {
          // If the medication is private, make sure only the owner can check it off
          throw new Meteor.Error('not-authorized');
        }

    Medications.update(medicationId, { $set: { private: setToPrivate } });
  },
});
