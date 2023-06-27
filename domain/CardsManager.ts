// todo - não existe update de card. Uma vez criada, se manterá na sua frequencia
import {Card} from "./Card";
import {DuplicatedCardNameError} from "./DomainError";

export class CardsManager {
	private cardsNames: Array<string> = []
	private cards: Array<Card> = []

	constructor() {

	}

	addCard(card: Card) {
		const cardNameLower = card.title.toLowerCase();

		if (this.cardsNames.indexOf(cardNameLower) >= 0) {
			throw new DuplicatedCardNameError();
		}

		this.cards.push(card)
		this.cardsNames.push(cardNameLower)
	}

	removeCard(card: Card) {
		// todo - recalcular todos os desires que usam este card
	}

	save() {

	}
}