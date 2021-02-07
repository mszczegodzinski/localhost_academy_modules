import User from './User';
import userHelpers from './userHelpers';

class UserApp {
	constructor(private users: User[]) {
		this.users = users;
		// this.logs, history
	}

	changeUserPassword(userToModify: User, modifierUser: User, password: string) {
		userHelpers.validateUserAccess(userToModify, modifierUser);
		userHelpers.validatePassword(password);

		const selectedIndex = this.users.findIndex(
			(user) => user.id === userToModify.id
		);

		if (selectedIndex === -1) {
			throw new Error('No user found');
		}

		this.users[selectedIndex].password = password;

		this.users.forEach((currentUser) => {
			if (currentUser.id === userToModify.id) {
				currentUser.password = password;
			}
		});
	}

	changeUserEmail(userToModify: User, modifierUser: User, email: string) {
		userHelpers.validateUserAccess(userToModify, modifierUser);
		userHelpers.validateEmail(email);

		this.users.forEach((currentUser) => {
			if (currentUser.id === userToModify.id) {
				currentUser.email = email;
			}
		});
	}
}

export default UserApp;

const user1 = new User(
	1,
	'Jan1',
	'Kowalski',
	'09-01-2020',
	'a#a3456B',
	'male',
	'jankowalski@gmail.com',
	'regular'
);

const user2 = new User(
	2,
	'Jan',
	'Nowak',
	'09-01-2020',
	'a#a3456B',
	'male',
	'jannowak@gmail.com',
	'regular'
);

const admin = new User(
	3,
	'Admin1',
	'Admin1',
	'09-01-2020',
	'1Dxa#a3456B',
	'female',
	'janadmin@gmail.com',
	'admin'
);

const userApp = new UserApp([user1, user2, admin]);

// console.log(userApp);

// userApp.changeUserEmail(user1, admin, 'somechangedemail@gmail.com');
// userApp.changeUserEmail(user1, user1, 'somechangedemail@gmail.com');
// console.log(userApp);
