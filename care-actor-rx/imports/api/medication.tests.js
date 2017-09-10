/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Medications } from './medications.js';

if (Meteor.isServer) {
  describe('Medications', () => {
    describe('methods', () => {
      const userId = Random.id();
      let medicationId;

      beforeEach(() => {
        Medications.remove({});
        medicationId = Medications.insert({
          text: 'test medication',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can delete owned medication', () => {
        // Find the internal implementation of the medication method so we can
        // test it in isolation
        const deleteMedication = Meteor.server.method_handlers['medications.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteMedication.apply(invocation, [medicationId]);

        // Verify that the method does what we expected
        assert.equal(Medications.find().count(), 0);
      });
    });
  });
}
