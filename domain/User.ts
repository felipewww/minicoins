import {Task} from "./Task";
import {Allowance} from "./Allowance";
import {IPrize, Prize} from "./Prize";

export class User {

	private tasks: Array<Task> = [];

	private prizes: Array<Prize> = []

	private allowance: Allowance;

	constructor(
		private id: number,
		private name: string,
		private isAdmin: boolean,
		private balance: number
	) {
	}

	addPrize(prize: Omit<IPrize, "user">) {
		this.prizes.push(
			Prize.create({...prize})
		)
	}
}

