import User from './User';
import userHelpers from './userHelpers';

class UserApp {
  constructor(users) {
    userHelpers.validateArray(users);
    userHelpers.validateSpecificInstanceInArray(users, User);

    this.users = users;
  }

  changeUserPassword(userToModify, modifierUser, password) {
    userHelpers.validateSpecificInstance(userToModify, User);
    userHelpers.validateSpecificInstance(modifierUser, User);
    userHelpers.validateUserAccess(userToModify, modifierUser);
    userHelpers.validatePassword(password);
    this.users.forEach((currentUser) => {
      if (currentUser.id === userToModify.id) {
        currentUser.password = password;
        currentUser.modifiedBy = modifierUser.id;
      }
    });
  }

  changeUserEmail(userToModify, modifierUser, email) {
    userHelpers.validateSpecificInstance(userToModify, User);
    userHelpers.validateSpecificInstance(modifierUser, User);
    userHelpers.validateUserAccess(userToModify, modifierUser);
    userHelpers.validateEmail(email);
    this.users.forEach((currentUser) => {
      if (currentUser.id === userToModify.id) {
        currentUser.email = email;
        currentUser.modifiedBy = modifierUser.id;
      }
    });
  }
}

export default UserApp;

const user1 = new User(
  1,
  'Jan1',
  'Kowalski',
  new Date('09-01-2020'),
  'a#a3456B',
  'male',
  'jankowalski@gmail.com',
  'regular',
  null
);

const user2 = new User(
  2,
  'Jan',
  'Nowak',
  new Date('09-01-2020'),
  'a#a3456B',
  'male',
  'jannowak@gmail.com',
  'regular',
  null
);

const admin = new User(
  3,
  'Admin1',
  'Admin1',
  new Date('09-01-2020'),
  '1Dxa#a3456B',
  'female',
  'janadmin@gmail.com',
  'admin',
  null
);

const userApp = new UserApp([user1, user2, admin]);

// console.log(userApp);

// userApp.changeUserEmail(user1, admin, 'somechangedemail@gmail.com');
// userApp.changeUserEmail(user1, user1, 'somechangedemail@gmail.com');
// console.log(userApp);
