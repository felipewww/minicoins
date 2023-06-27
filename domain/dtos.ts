import {Card, ICard} from "./Card";

export interface ITaskDTO {
	id: number,
	title: string,
	isDone: boolean,
	points: number,
	startDate: string,
	lastExecutionDate: string,
	cycle: number
}

export interface IDesireModel {
	id: number
	title: string
	startDate: string
	endDate: string
}

export interface ICardDistributed {
	card: Card,
	count: number
}

// output
export interface IDesireDTO {
	id: number
	title: string
	startDate: string
	endDate: string
	diffDays: number, //diff between start and end date in days (number)
	cards: Array<ICard> //isto pertence apenas ao front
	multiplier: number
	totalCardsInPeriod: number
	cardsDistributed: Array<ICardDistributed>
}