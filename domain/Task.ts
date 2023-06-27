import {DateHelper} from "./utils/Date.helper";
import {Entity} from "./entity";
import {ITaskDTO} from "./dtos";

export enum ETaskStatus {
	ON_TIME,
	LATE,
}

export class Task extends Entity {

	private status: ETaskStatus;

	private delayedDays: number

	protected constructor(
		public id: number,
		public title: string,
		public isDone: boolean,
		public points: number,
		public startDate: Date,
		public lastExecutionDate: Date,
		public cycle: number
	) {
		super()
		this.calcStatus();
		/**
		 * every day - startDate = now() and cycle = 1
		 * every weekday - startDate()
		 * every monday - startDate = monday and cycle = 7
		 * every month - startDate + 30 days
		 */
	}

	public static create(dto: ITaskDTO) {
		return new Task(
			dto.id,
			dto.title,
			dto.isDone,
			dto.points,
			new Date(dto.startDate),
			(dto.lastExecutionDate) ? new Date(dto.lastExecutionDate) : null,
			dto.cycle
		)
	}

	private calcStatus() {
		const dateStart = (this.lastExecutionDate) ? this.lastExecutionDate : this.startDate

		console.log(dateStart)
		this.delayedDays = Math.floor(
			DateHelper.calcDiffDays(dateStart, new Date())
		)

		this.status = (this.delayedDays > this.cycle) ? ETaskStatus.LATE : ETaskStatus.ON_TIME

		console.log('DELAYED DAYS | STATUS');
		console.log(this.delayedDays, this.status)
	}
}