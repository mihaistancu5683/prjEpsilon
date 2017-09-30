import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import WelcomeUser from '../pages/WelcomeUser.jsx';

const LoginContainer = createContainer(() => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
}, WelcomeUser);

export default LoginContainer;
