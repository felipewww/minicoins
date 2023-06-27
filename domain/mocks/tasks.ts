import {Task} from "../Task";
import {ITaskDTO} from "../dtos";

const t1Dto: ITaskDTO = {
	id: 1,
	title: 'Lavar o prato',
	isDone: false,
	points: 5,
	startDate: "2023-06-15",
	lastExecutionDate: null,
	cycle: 1
}

const t2Dto: ITaskDTO = {
	id: 2,
	title: 'Estudar JS',
	isDone: false,
	points: 15,
	startDate: "2023-06-15",
	lastExecutionDate: "2023-06-15",
	cycle: 2
}

const t3Dto: ITaskDTO = {
	id: 3,
	title: 'Sair do jogo na hora',
	isDone: false,
	points: 3,
	startDate: "2023-06-15",
	lastExecutionDate: "2023-06-23",
	cycle: 1
}

const t1 = Task.create(t1Dto)
const t2 = Task.create(t2Dto)
const t3 = Task.create(t3Dto)

export const tasksMock = [t1,t2,t3]
// export const tasksMock = [t1]