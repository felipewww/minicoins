import {IUser} from "../../User";
import {IPrize} from "../../Prize";

// api/v1/user/{id}
export const User: IUser = {
	id: 1,
	name: 'Fake user',
	isAdmin: false,
	balance: 237.00
}

// api/v1/user/{id}/game
export interface IUserGameSettings {
	prizes: Array<IPrize>,
	// tasks: Array<ITask>
}
export const UserGameSettings = {
	// prizes
}