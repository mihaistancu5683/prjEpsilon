import { Mongo } from 'meteor/mongo';
/* eslint import/no-unresolved: 0 */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint import/prefer-default-export: 0 */
export const Subjects = new Mongo.Collection('subjects');

const SubjectSchema = new SimpleSchema({
  subjectId: { type: String, optional: false },
  subjectTitle: { type: String, optional: false },
  subjectDescription: { type: String, optional: false },
  subjectCategory: { type: String, optional: false },
  subjectStatus: { type: String, optional: false },
  subjectAuthor: { type: String, optional: false },
});
Subjects.attachSchema(SubjectSchema);
