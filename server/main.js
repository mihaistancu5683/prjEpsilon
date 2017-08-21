import { Meteor } from 'meteor/meteor';
import { Subjects } from '../imports/api/subjects.js';

Meteor.startup(() => {
  Meteor.publish('subjects', function() {
    return Subjects.find({});
  });
});
