import { createContainer } from 'meteor/react-meteor-data';
import WelcomeUser from '../pages/WelcomeUser';

export default LoginContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  return {
    currentUser
  };
}, WelcomeUser);