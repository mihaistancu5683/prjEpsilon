import { Meteor } from 'meteor/meteor';
import Users from '../imports/api/users.js';

Meteor.startup(() => {
  Meteor.publish('users', function() {
    return Users.find({});
  });
});
