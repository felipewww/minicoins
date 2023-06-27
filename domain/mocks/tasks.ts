import {ETaskFrequency, Task} from "../Task";

const t1 = new Task(
	1,
	'Lavar a louça',
	false,
	100,
	new Date("2023-06-15"),
	null,
	7,
)

const t2 = new Task(
	2,
	'Estudar JS 1hr por dia',
	false,
	300,
	new Date("2023-06-15"),
	new Date("2023-06-16"), //executou um dia depois que foi criada e não mais..
	7,
)

// todo - pode ter um alarme para lembrar das tasks
const t3 = new Task(
	3,
	'Lembrar de escovar os dentes',
	false,
	300,
	new Date("2023-06-15"),
	new Date("2023-06-23"), // executou a ultima vez, 7 dias depois de ser criada.
	7,
)

export const tasksMock = [t1,t2,t3]