import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/users.js';
import { Subjects } from '../imports/api/subjects.js';

Meteor.startup(() => {
  Meteor.publish('users', function() {
    return Users.find({});
  });
  Meteor.publish('subjects', function() {
    return Subjects.find({});
  });
});
