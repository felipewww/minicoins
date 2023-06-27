import {Desire} from "../Desire";

const g0 = Desire.factory.createBlank({
	title: 'R$30.00 Créditos jogo',
	startDate: new Date("2023-06-22"),
	endDate: new Date("2023-09-23")
})

const g1 = Desire.factory.createBlank({
	title: 'caneta posca',
	startDate: new Date("2023-07-01"),
	endDate: new Date("2023-08-01")
})

// 30 dias
const g2 = Desire.factory.createBlank({
	title: 'Bike $500.00',
	startDate: new Date("2023-06-01"),
	endDate: new Date("2023-09-01")
})

export const desiresMock = [g0,g1,g2]