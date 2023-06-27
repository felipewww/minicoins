import {Task} from "./Task";
import {Allowance} from "./Allowance";
import {IPrize, Prize} from "./Prize";

export interface IUser {
	id: number,
	name: string,
	isAdmin: boolean,
	balance: number
}

export class User {

	private tasks: Array<Task> = [];

	private prizes: Array<Prize> = []

	private allowance: Allowance;

	constructor(
		public id: number,
		public name: string,
		public isAdmin: boolean,
		public balance: number
	) {
	}

	addPrize(prize: Omit<IPrize, "user">) {
		this.prizes.push(
			Prize.create({...prize})
		)
	}

	setPrizes(prizes: Array<Prize>) {
		this.prizes = prizes
	}

	setTasks(tasks: Array<Task>) {
		this.tasks = tasks
	}
}

