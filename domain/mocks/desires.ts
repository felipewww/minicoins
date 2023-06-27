import {Desire} from "../Desire";

const g0 = Desire.create({
	id: null,
	title: 'R$30.00 Créditos jogo',
	startDate: "2023-06-22",
	endDate: "2023-09-23",
	cards: null,
	multiplier: null,
})

const g1 = Desire.create({
	id: null,
	title: 'caneta posca',
	startDate: "2023-07-01",
	endDate: "2023-08-01",
	cards: null,
	multiplier: null,
})

// 30 dias
const g2 = Desire.create({
	id: null,
	title: 'Bike $500.00',
	startDate: "2023-06-01",
	endDate: "2023-09-01",
	cards: null,
	multiplier: null,
})

export const desiresMock = [g0,g1,g2]