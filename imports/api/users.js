import {Mongo} from 'meteor/mongo';
export const Users = new Mongo.Collection('users');
const UserSchema = new SimpleSchema({
	userName: { type: String, optional: false},
	userPassword: { type: String, optional: false },
});
Users.attachSchema(UserSchema);