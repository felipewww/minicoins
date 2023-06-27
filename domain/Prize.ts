// Premios podem ser comprados por mini-moedas.

import {User} from "./User";

export interface IPrize {
	id: number,
	title: string,
	coins: number,
	// user: User
}

export class Prize implements IPrize {
	// public user: User

	constructor(
		public id: number,
		public title: string,
		public coins: number,
	) {

	}

	public static create(props: IPrize) {
		return new Prize(
			props.id,
			props.title,
			props.coins,
			// props.user,
		)
	}

	setToUser(user: User) {
		user.addPrize(this)
	}
}