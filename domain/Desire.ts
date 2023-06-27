import {Card} from "./Card";
import {DateHelper} from "./utils/Date.helper";

export interface IDesire {
	id: number
	title: string
	startDate: Date
	endDate: Date
	cards: Array<Card>
	multiplier: number
}

export class Desire implements IDesire {

	private diffDays: number;

	protected constructor(
		public id: number,
		public title: string,
		public startDate: Date,
		public endDate: Date,
		public readonly multiplier: number,
		public readonly Cards: Array<Card> = []
	) {
		// this.diffDays = this.calcDiffDays();
		this.diffDays = DateHelper.calcDiffDays(this.startDate, this.endDate)
	}

	get cards() {
		return this.Cards
	}

	public static factory = {
		createBlank: this.createBlank,
		create: this.create,
	}

	protected static createBlank(goal: Omit<IDesire, 'id'|'multiplier'|'cards'>) {
		return new Desire(
			null,
			goal.title,
			goal.startDate,
			goal.endDate,
			Desire.createMultiplier()
		);

	}

	protected static create(props: { desire: Desire }) {
		return new Desire(
			props.desire.id,
			props.desire.title,
			props.desire.startDate,
			props.desire.endDate,
			props.desire.multiplier,
			props.desire.cards
		);
	}

	private static createMultiplier() {
		const max = 10;
		const min = 5;
		return Math.round(Math.random() * (max - min) + min);
	}

	public addCard(card: Card) {
		// todo - logica dew qtde de cartas por ida a etc
		this.Cards.push(card)
	}

	//@ts-ignore
	// private calcDiffDays() {
	// 	// @ts-ignore
	// 	const millisecondsDiff = Math.abs(this.startDate - this.endDate)
	// 	return ((((millisecondsDiff/1000)/60)/60)/24)
	// }
}