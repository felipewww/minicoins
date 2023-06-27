import {Card} from "./Card";
import {DateHelper, RandomNumber} from "./utils/Date.helper";
import {Entity} from "./entity";
import {ICardDistributed, IDesireDTO} from "./dtos";
import {cardsManagerSingleton} from "./mocks/cards";


interface ICardsIndexed {
	frequency: {
		[key: number]: {
			cards: Array<Card>,
			percent: number,
			percentPerCard?: number,
			rest?: number
		}
	},
	ttlPercent: number
}
/**
 * um desejo nunca será adiantado, ou seja, se foi definido 30 dias, será no MINIMO 30 dias. mas pode atrasar para 35 ou 40.
 *
 * Multiplier é usado para gerar um número randômico de cartas necessárias para atingir o desejo.
 * Ex: se o desejo leva 30 dias e tem 4 cartas atribuidas a ele.
 * suponde que o multiplier seja = 10.
 * então, 30x10 = 300. Serão 300 cards ao longo de 30 dias, sendo 10 cartas por dia.
 *
 * todo - criar um random de multiplierex: se o multiplier é 12, todo dia vai dar 12 cartas. o que não é "randomico" e pode perder a graçaentão criar uma variação de +4 ou -4 por dia, mas mantendo o calculo de total de cartas no final do periodo
 *
 * porém as cartas tem Frequency, a qtde será dada conforme frequency.
 */
export class Desire extends Entity {

	// private diffDays: number;

	private cardsDistributed: Array<ICardDistributed> = []

	protected constructor(
		private id: number,
		public title: string,
		public startDate: Date,
		public endDate: Date,
		public readonly multiplier: number,
		private totalCardsInPeriod: number,
		private diffDays?: number //only for existing desire
	) {
		super();
		this.diffDays = DateHelper.calcDiffDays(this.startDate, this.endDate)
	}

	public static create(dto: IDesireDTO) {
		const startDate = new Date(dto.startDate);
		const endDate = new Date(dto.endDate);
		let multiplier = dto.multiplier;

		if (!dto.id) {
			multiplier = RandomNumber(10, 20)
		}

		// validar desire correto
		// se tem id e:
		// se existe cardsDistributed && se a somatoria de cards distributed = totalCardsInPeriod
		// se tem multiplier
		// se tem startDate e endDate e se o diffDays bate com o calculo

		return new Desire(
			dto.id,
			dto.title,
			startDate,
			endDate,
			multiplier,
			dto.totalCardsInPeriod,
			dto.diffDays
		);
	}

	public assignCards() {
		if (this.id) {
			throw new Error("Existing Desire can't have Cards re-assigned")
		}

		this.totalCardsInPeriod = this.multiplier * this.diffDays

		const cardsIndexed = this.indexCards();

		this.distributeCards(cardsIndexed)

	}

	private distributeCards(cardsIndexed: ICardsIndexed) {
		let ttlCardsDistributed = 0;
		for (let fq of Object.keys(cardsIndexed.frequency)) {
			const frequency = cardsIndexed.frequency[fq]
			const percentPerCard = Math.floor(frequency.percent / frequency.cards.length)
			const rest = frequency.percent % frequency.cards.length

			frequency.percentPerCard = percentPerCard;
			frequency.rest = rest

			for (let card of frequency.cards) {
				let percent = frequency.percentPerCard/100;

				let ttlCards = Math.floor(this.totalCardsInPeriod * percent)
				ttlCardsDistributed += ttlCards
				this.cardsDistributed.push({
					card,
					count: ttlCards
				})
			}
		}

		const restCards = this.totalCardsInPeriod - ttlCardsDistributed
		if (restCards) {
			console.log(`add ${restCards} na primeiro carta ${this.cardsDistributed[0]}`)
			this.cardsDistributed[0].count += restCards
		}
	}

	private indexCards() {
		const minCards = (this.totalCardsInPeriod < 100) ? 1 : 2;
		const randomCards = cardsManagerSingleton.selectRandomCards(minCards);

		let cardsIndexed: ICardsIndexed = {
			frequency: {},
			ttlPercent: 0,
		}

		// Indexar cartas pela frequencia para não estourar porcentagem
		for (let card of randomCards) {
			if (!cardsIndexed.frequency[card.frequency]) {
				cardsIndexed.frequency[card.frequency] = { cards: [], percent: card.frequencyPercent }
				cardsIndexed.ttlPercent += card.frequencyPercent
			}

			cardsIndexed.frequency[card.frequency].cards.push(card)
		}


		const lowerLevelCard = Object.keys(cardsIndexed.frequency)[0]

		// Quase sempre a somatória do percentual não atingirá 100%
		const restPercent = 100 - cardsIndexed.ttlPercent

		// Caso sobre algum percentual a ser distribuido, será adicionado no nivel mais baixo de cartas.
		if (restPercent) {
			cardsIndexed.frequency[lowerLevelCard].percent += restPercent
			cardsIndexed.ttlPercent += restPercent
		}

		return cardsIndexed;
	}

	save() {
		if (this.id) {
			throw new Error('um desejo salvo não pode mais ser alterado')
		}


		// todo - id do isnert no banco
		this.id = 1;
	}
}