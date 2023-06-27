// todo - não existe update de card. Uma vez criada, se manterá na sua frequencia
import {Card} from "./Card";
import {DuplicatedCardNameError} from "./DomainError";
import {RandomNumber} from "./utils/Date.helper";
import {EFrequency} from "./frequency.enum";

export class CardsManager {
	private cardsNames: Array<string> = []
	private cards: Array<Card> = []

	private cards2: { [key: number]: Array<Card> } = {}

	constructor(
		predefinedCars?: Array<Card>
	) {

		for (let i in EFrequency) {
			this.cards2[parseInt(i)] = []
		}

		if (predefinedCars) {
			for (let c of predefinedCars) {
				this.addCard(c)
			}
		}
	}

	addCard(card: Card) {
		const cardNameLower = card.title.toLowerCase();

		if (this.cardsNames.indexOf(cardNameLower) >= 0) {
			throw new DuplicatedCardNameError();
		}

		this.cards.push(card)
		this.cardsNames.push(cardNameLower)

		this.cards2[card.frequency].push(card)
	}

	removeCard(card: Card) {
		// todo - recalcular todos os desires que usam este card
	}

	selectRandomCards(min: number = 1): Array<Card> {
		const maxCards = (this.cards.length > 4) ? 4 : this.cards.length
		const howMany = RandomNumber(min, maxCards)

		const selectedIds: Array<number>= [];
		const selectedCards: Array<Card>= [];

		let alreadySelectedLegendary = false;

		while (selectedIds.length < howMany) {
			const preSelect = this.cards[RandomNumber(0, this.cards.length-1)]

			// para deixar mais emocionante, apenas uma carta lendária será selecionada no random
			if (preSelect.frequency === EFrequency.LEGENDARY) {
				console.warn('selecting LEGENDARY card', preSelect.title)
				if (alreadySelectedLegendary) {
					console.warn('scape... already selected some legendary card', preSelect.title);
					continue
				}

				alreadySelectedLegendary = true;
			}

			if (selectedIds.indexOf(preSelect.id) < 0) {
				selectedIds.push(preSelect.id);
				selectedCards.push(preSelect);
			}
		}

		// return [this.cards[0], this.cards[1], this.cards[3]]
		return selectedCards;
	}

	save() {

	}
}