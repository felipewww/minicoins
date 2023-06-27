
// todo - criar outros tipos como: a cada 15 dias, 1 vez por mês e etc.
import {User} from "./User";
import {DateHelper} from "./utils/Date.helper";

export enum ETaskFrequency {
	EVERY_DAY,
	EVERY_WEEK_DAY,
	ONCE_A_MONTH,
	ONCE_A_WEEK,
}

export enum ETaskStatus {
	ON_TIME,
	LATE,
}

export class Task {

	private status: ETaskStatus;

	private delayedDays: number

	constructor(
		private id: number,
		private title: string,
		private isDone: boolean,
		private points: number,
		private startDate: Date,
		private lastExecutionDate: Date,
		private cycle: number
	) {

		this.calcStatus();
		/**
		 * every day - startDate = now() and cycle = 1
		 * every weekday - startDate()
		 * every monday - startDate = monday and cycle = 7
		 * every month - startDate + 30 days
		 */
	}

	private calcStatus() {
		const dateStart = (this.lastExecutionDate) ? this.lastExecutionDate : this.startDate

		this.delayedDays = Math.floor(
			DateHelper.calcDiffDays(dateStart, new Date())
		)

		this.status = (this.delayedDays > this.cycle) ? ETaskStatus.LATE : ETaskStatus.ON_TIME

		console.log('diff is:');
		console.log(this.delayedDays, this.status)
	}
}