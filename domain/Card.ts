import {EFrequency} from "./frequency.enum";

export interface ICard {
	id: number,
	title: string, // tamucho, veninhu, carniça
	frequency: EFrequency,
}

export class Card implements ICard {
	constructor(
		public id: number,
		public title: string,
		public frequency: EFrequency,
	) {

	}

	get frequencyPercent() {
		const fqPercent = {
			0: 65,
			1: 20,
			2: 10,
			3: 5,
			// 0: 0.65,
			// 1: 0.20,
			// 2: 0.1,
			// 3: 0.05,
		}

		return fqPercent[this.frequency]
	}
}