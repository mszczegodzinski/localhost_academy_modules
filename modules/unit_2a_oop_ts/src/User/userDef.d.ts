import { Gender, UserType } from './userHelpers';

export interface WithID {
	readonly id: number;
}
export interface IUser extends WithID {
	name: string;
	surname: string;
	birthDate: string;
	password: string;
	gender: Gender;
	email: string;
	type: UserType;
	changeEmail: (email: string) => void;
	changePassword: (password: string) => void;
}

export interface IUserApp {
	users: IUser[];
	changeUserPassword: (
		userToModify: IUser,
		modifierUser: IUser,
		password: string
	) => void;
	changeUserEmail: (
		userToModify: IUser,
		modifierUser: IUser,
		email: string
	) => void;
}
