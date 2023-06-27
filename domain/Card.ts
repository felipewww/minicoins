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
}